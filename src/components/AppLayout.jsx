import Field from './Field/Field';
import Information from './Information/Information';
import PropTypes from 'prop-types';
import styles from './AppLayout.module.css';

export default function AppLayout({ buttons, handleClickButton, gameInfo, resetGame }) {
  return (
    <>
      <Information gameInfo={gameInfo} />
      <Field buttons={buttons} handleClickButton={handleClickButton} />
      {(gameInfo.isGameEnded || gameInfo.isDraw) && (
        <button onClick={resetGame} className={styles.button}>
          Начать заново
        </button>
      )}
    </>
  );
}

AppLayout.propTypes = {
  buttons: PropTypes.array,
  handleClickButton: PropTypes.func,
  gameInfo: PropTypes.object,
  resetGame: PropTypes.func,
};
