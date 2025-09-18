import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeStatus,
  moveSnake,
  saveKey,
  setDirection,
  checkApple,
  checkGameOver,
} from './store/gameSlice';
import { Board } from './components/Board';
import { useRef } from 'react';

function App() {
  const status = useSelector((store) => store.game.status);
  const dispatch = useDispatch();

  let timer = useRef(null);
  const update = () => {
    dispatch(moveSnake());
    dispatch(setDirection());
    dispatch(checkApple());
    dispatch(checkGameOver());
  };
  const startTimer = () => {
    timer.current = setInterval(update, 200);
  };
  const stopTimer = () => {
    clearInterval(timer.current);
  };

  const handleClick = () => {
    if (status === 'Restart') {
      window.location.reload();
      return;
    }
    if (status !== 'Pause') startTimer();
    else stopTimer();

    dispatch(changeStatus());
  };

  const handleKeyDown = (event) => {
    dispatch(saveKey(event.key));
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <Board />
      <button className="startButton" onClick={handleClick}>
        {status}
      </button>
    </div>
  );
}

export default App;
