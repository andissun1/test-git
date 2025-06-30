function renderColumn(user, column, columns) {
  const component = columns[column].component;
  if (component && typeof component === 'function') {
    return component(user);
  } else {
    return user[column];
  }
}

export default function RenderUsers({ columns, sortUsers }) {
  return (
    <>
      {sortUsers.map((user) => (
        <tr key={user._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderColumn(user, column, columns)}</td>
          ))}
        </tr>
      ))}
    </>
  );
}
