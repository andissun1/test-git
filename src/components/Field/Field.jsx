import FieldLayout from './FieldLayout';
import { Component, useState } from 'react';

export default class Field extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttons, handleClickButton } = this.props;
    return <FieldLayout buttons={buttons} handleClickButton={handleClickButton} />;
  }
}
