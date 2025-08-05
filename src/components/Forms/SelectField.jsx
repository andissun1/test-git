import React from 'react';
import style from './SelectField.module.css';

export const SelectField = ({ name, label, error, onChange, value, options }) => {
  return (
    <div className={style.FieldContainer}>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={style.Select}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
};
