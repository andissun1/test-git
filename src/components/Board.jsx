import { Square } from './Square';

export const Board = (props) => {
  const squares = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      squares.push({ x, y });
    }
  }

  return (
    <div className="Board">
      {squares.map((square, index) => {
        return <Square square={square} key={index} />;
      })}
    </div>
  );
};
