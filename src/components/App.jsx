import { Component } from 'react';
import AppLayout from './AppLayout';
import { actions as userActions } from './store';
import { connect } from 'react-redux';

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

// Основной компонент
class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleClickButton = (index) => {
    const { buttons, currentPlayer, isGameEnded } = this.props;

    if (buttons[index] || isGameEnded) {
      return;
    }

    let newButtons = buttons.slice();
    newButtons[index] = currentPlayer;

    this.props.dispatch(setButtons(newButtons));

    if (this.checkWin(newButtons, currentPlayer)) {
      this.props.dispatch(setIsGameEnded(true));
    } else if (newButtons.every((button) => button)) {
      this.props.dispatch(setIsDraw(true));
    } else {
      this.props.dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
    }
  };

  checkWin = (newButtons, currentPlayer) => {
    return WIN_PATTERNS.some((pattern) =>
      pattern.every((index) => newButtons[index] === currentPlayer)
    );
  };

  gameInfo = () => ({
    currentPlayer: this.props.currentPlayer,
    isDraw: this.props.isDraw,
    isGameEnded: this.props.isGameEnded,
  });

  restart = () => {
    this.props.dispatch(resetGame());
  };

  render() {
    return (
      <AppLayout
        buttons={this.props.buttons}
        handleClickButton={this.handleClickButton}
        gameInfo={this.gameInfo()}
        resetGame={this.restart}
      />
    );
  }
}

// Подключение Redux и передача нужных полей
const mapToProps = (state) => ({
  buttons: state.buttons,
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
});

export const App = connect(mapToProps)(AppContainer);
