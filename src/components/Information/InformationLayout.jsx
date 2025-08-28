import { Component } from 'react';

export default class InformationLayout extends Component {
  constructor(props) {
    super(props);
  }

  title = (text, player) => (
    <h1 className="text-3xl font-bold">{`${text}${player ? ': ' + player : null}`}</h1>
  );

  render() {
    const { isGameEnded, isDraw, currentPlayer } = this.props.gameInfo;
    if (isGameEnded) {
      return this.title('Победа', currentPlayer);
    } else if (isDraw) {
      return this.title('Ничья');
    } else {
      return this.title('Ходит', currentPlayer);
    }
  }
}
