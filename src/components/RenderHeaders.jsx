<<<<<<< HEAD
export default function RenderHeaders({ data, setData, columns }) {
=======
export default function RenderHeaders({ handleSort, columns }) {
>>>>>>> DynamicTable123
  return (
    <tr>
      {Object.values(columns).map((column) => (
        <th
          key={column.name}
          onClick={
<<<<<<< HEAD
            column.sortOption ? (event) => column.sortOption(data, setData, event) : null
=======
            column.path
              ? ({ target }) => {
                  handleSort(target, column.path);
                }
              : null
>>>>>>> DynamicTable123
          }
        >
          {column.name}
        </th>
      ))}
    </tr>
  );
}
