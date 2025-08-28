import { Component } from 'react';
import InformationLayout from './InformationLayout.jsx';

export default class Information extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gameInfo } = this.props;
    return <InformationLayout gameInfo={gameInfo} />;
  }
}
