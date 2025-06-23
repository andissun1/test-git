export default function RenderHeaders({ data, setData, columns }) {
  return (
    <tr>
      {Object.values(columns).map((column) => (
        <th
          key={column.name}
          onClick={
            column.sortOption ? (event) => column.sortOption(data, setData, event) : null
          }
        >
          {column.name}
        </th>
      ))}
    </tr>
  );
}
