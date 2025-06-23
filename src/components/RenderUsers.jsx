import styles from '../components/components.module.css';

export function RenderUsers({ columns, data }) {
  return (
    <>
      {data.users.map((user) => (
        <tr key={user._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderColumn(user, column, columns)}</td>
          ))}
        </tr>
      ))}
    </>
  );
}

function renderColumn(user, column, columns) {
  const component = columns[column].component;
  if (component && typeof component === 'function') {
    return component(user);
  } else {
    return user[column];
  }
}

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
