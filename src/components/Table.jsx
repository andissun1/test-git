import RenderHeaders from './RenderHeaders.jsx';
<<<<<<< HEAD
import { RenderUsers } from './RenderUsers.jsx';
import { columns } from '../data/columns.jsx';
import { data as dataBase } from '../data/index';
import { useState } from 'react';

export default function Table() {
  const [data, setData] = useState(dataBase);
=======
import RenderUsers from './RenderUsers.jsx';
import { columns } from '../data/columns.jsx';
import { data } from '../data/index';
import { useState } from 'react';
import { getSortedUsers } from './sortUsers.js';
import { setArrowOnSort } from './sortUsers.js';

export default function Table() {
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'desc' });

  function handleSort(target, item) {
    setSortBy({ path: item, order: sortBy.order === 'asc' ? 'desc' : 'asc' });
    setArrowOnSort(target, sortBy);
  }

  let sortUsers = getSortedUsers(data, sortBy);
>>>>>>> DynamicTable123

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
<<<<<<< HEAD
          <RenderHeaders columns={columns} data={data} setData={setData} />
        </thead>
        <tbody>
          <RenderUsers columns={columns} data={data} />
=======
          <RenderHeaders columns={columns} handleSort={handleSort} />
        </thead>
        <tbody>
          <RenderUsers columns={columns} sortUsers={sortUsers} />
>>>>>>> DynamicTable123
        </tbody>
      </table>
    </>
  );
}
