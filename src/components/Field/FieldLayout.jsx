import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export default function FieldLayout({ buttons, handleClickButton }) {
  return (
    <div className={styles.field}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${styles.buttons} ${button === 'X' ? styles.red : styles.blue}`}
          onClick={handleClickButton.bind(null, index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

FieldLayout.propTypes = {
  buttons: PropTypes.array,
  handleClickButton: PropTypes.func,
};
