import { useState } from 'react';
import AppLayout from './AppLayout';

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
  const [buttons, setButtons] = useState(new Array(9).fill(null));
  const [currentPlayer, setСurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  function handleClickButton(index) {
    if (buttons[index] || isGameEnded) {
      return;
    }

    let newButtons = buttons.slice();
    newButtons[index] = currentPlayer;
    setButtons(newButtons);

    if (checkWin(newButtons, currentPlayer)) {
      setIsGameEnded(true);
    } else if (newButtons.every((button) => button)) {
      setIsDraw(true);
    } else {
      setСurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
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
    setButtons(new Array(9).fill(null));
    setСurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
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
