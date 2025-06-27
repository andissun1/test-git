import PropTypes from 'prop-types';

export default function InformationLayout({ gameInfo }) {
  let { isGameEnded, isDraw, currentPlayer } = gameInfo;

  if (isGameEnded) {
    return <h1>{`Победа: ${currentPlayer}`}</h1>;
  } else if (isDraw) {
    return <h1> Ничья</h1>;
  } else {
    return <h1>{`Ходит: ${currentPlayer}`}</h1>;
  }
}

InformationLayout.propTypes = {
  gameInfo: PropTypes.object,
};
