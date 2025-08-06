import styles from './components.module.css';

export function RenderQualities(user) {
  return (
    <>
      {user.qualities.map((quality) => (
        <span key={quality._id} className={`${styles.quality} ${styles[quality.color]}`}>
          {quality.name}
        </span>
      ))}
    </>
  );
}
