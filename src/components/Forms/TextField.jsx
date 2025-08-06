import styles from './TextField.module.css';

export const TextField = ({ name, label, error, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} name={name} {...props} />
      {error && <span className={styles.infoInput}>{error}</span>}
    </div>
  );
};
