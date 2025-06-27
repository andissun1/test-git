import FieldLayout from './FieldLayout';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Field({ buttons, handleClickButton }) {
  return <FieldLayout buttons={buttons} handleClickButton={handleClickButton} />;
}

Field.propTypes = {
  buttons: PropTypes.array,
  handleClickButton: PropTypes.func,
};
