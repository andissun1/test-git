import React from 'react';
import styles from './App.module.css';

export const TextField = ({ name, label, error, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className={`${styles.input} ${error ? styles.red : null}`}
        name={name}
        {...props}
      />
      {error && <span className={styles.infoInput}>{error}</span>}
    </div>
  );
};
