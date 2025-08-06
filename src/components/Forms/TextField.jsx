import styles from './TextField.module.css';

export const TextField = ({ name, label, error, value, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} name={name} {...props} />
      {value && error && <span className={styles.infoInput}>{error}</span>}
    </div>
  );
};
