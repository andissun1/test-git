export default function RenderHeaders({ handleSort, columns }) {
  return (
    <tr>
      {Object.values(columns).map((column) => (
        <th
          key={column.name}
          onClick={
            column.path
              ? ({ target }) => {
                  handleSort(target, column.path);
                }
              : null
          }
        >
          {column.name}
        </th>
      ))}
    </tr>
  );
}
