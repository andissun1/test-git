import { useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import { store } from './store';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function App() {
  const { buttons, currentPlayer, isGameEnded, isDraw } = store.getState();
  const [render, setRender] = useState(true);

  useEffect(() => {
    return store.subscribe(() => {
      setRender(!render);
    });
  });

  function handleClickButton(index) {
    if (buttons[index] || isGameEnded) {
      return;
    }

    let newButtons = buttons.slice();
    newButtons[index] = currentPlayer;
    store.dispatch({ type: 'SET_BUTTONS', payload: newButtons });

    if (checkWin(newButtons, currentPlayer)) {
      store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
    } else if (newButtons.every((button) => button)) {
      store.dispatch({ type: 'SET_IS_DRAW', payload: true });
    } else {
      store.dispatch({
        type: 'SET_CURRENT_PLAYER',
        payload: currentPlayer === 'X' ? 'O' : 'X',
      });
    }
  }

  function checkWin(newButtons, currentPlayer) {
    return WIN_PATTERNS.some((pattern) =>
      pattern.every((index) => newButtons[index] === currentPlayer)
    );
  }

  let gameInfo = {
    currentPlayer: currentPlayer,
    isDraw: isDraw,
    isGameEnded: isGameEnded,
  };

  function resetGame() {
    store.dispatch({ type: 'RESET_GAME' });
  }

  return (
    <AppLayout
      buttons={buttons}
      handleClickButton={handleClickButton}
      gameInfo={gameInfo}
      resetGame={resetGame}
    />
  );
}
