import RenderHeaders from './RenderHeaders.jsx';
import RenderUsers from './RenderUsers.jsx';
import { columns } from '../../data/columns.jsx';
import { data } from '../../data/index.js';
import { useEffect, useState } from 'react';
import { getSortedUsers } from './sortUsers.js';
import { setArrowOnSort } from './sortUsers.js';

export default function Table() {
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'desc' });

  function handleSort(target, item) {
    setSortBy({ path: item, order: sortBy.order === 'asc' ? 'desc' : 'asc' });
    setArrowOnSort(target, sortBy);
  }

  let sortUsers = getSortedUsers(data, sortBy);

  function getUsers() {
    fetch('http://94.228.114.203:3004/api/users')
      .then((data) => data.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    getUsers(); // Можно загружать с сервера
  }, []);

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <RenderHeaders columns={columns} handleSort={handleSort} />
        </thead>
        <tbody>
          <RenderUsers columns={columns} sortUsers={sortUsers} />
        </tbody>
      </table>
    </>
  );
}
