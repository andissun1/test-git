import styles from './components.module.css';

export function RenderQualities({ qualities }) {
  return (
    <>
      {qualities.map((quality) => (
        <span key={quality._id} className={`${styles.quality} ${styles[quality.color]}`}>
          {quality.name}
        </span>
      ))}
    </>
  );
}
