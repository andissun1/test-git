import { useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import { store } from './store';
import { actions as userActions } from './store';
import { useSelector, useDispatch } from 'react-redux';

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

const { setCurrentPlayer, setIsGameEnded, setIsDraw, setButtons, resetGame } =
  userActions;

export default function App() {
  // const { buttons, currentPlayer, isGameEnded, isDraw } = useSelector((state) => state); // Предупреждения приходят о возможных ненужных ререндерах
  const { buttons, currentPlayer, isGameEnded, isDraw } = store.getState();
  const [render, setRender] = useState(true);
  const dispatch = useDispatch();

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
    dispatch(setButtons(newButtons));

    if (checkWin(newButtons, currentPlayer)) {
      dispatch(setIsGameEnded(true));
    } else if (newButtons.every((button) => button)) {
      dispatch(setIsDraw(true));
    } else {
      dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
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

  function restart() {
    dispatch(resetGame());
  }

  return (
    <AppLayout
      buttons={buttons}
      handleClickButton={handleClickButton}
      gameInfo={gameInfo}
      resetGame={restart}
    />
  );
}
