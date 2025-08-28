import Field from './Field/Field';
import Information from './Information/Information';
import { Component } from 'react';

export default class AppLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttons, handleClickButton, gameInfo, resetGame } = this.props;
    return (
      <>
        <Information gameInfo={gameInfo} />
        <Field buttons={buttons} handleClickButton={handleClickButton} />
        {(gameInfo.isGameEnded || gameInfo.isDraw) && (
          <button
            onClick={resetGame}
            className="cursor-pointer px-5 bg-neutral-200 font-bold text-[1rem] rounded-xl "
          >
            Начать заново
          </button>
        )}
      </>
    );
  }
}
