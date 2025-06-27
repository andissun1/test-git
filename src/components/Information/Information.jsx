import InformationLayout from './InformationLayout.jsx';
import PropTypes from 'prop-types';

export default function Information({ gameInfo }) {
  return <InformationLayout gameInfo={gameInfo} />;
}

Information.propTypes = {
  gameInfo: PropTypes.object,
};
