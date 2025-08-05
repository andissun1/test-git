import RenderHeaders from './RenderHeaders.jsx';
import RenderUsers from './RenderUsers.jsx';
import { columns } from '../data/columns.jsx';
import { data } from '../data/index';
import { useState } from 'react';
import { getSortedUsers } from './sortUsers.js';
import { setArrowOnSort } from './sortUsers.js';
import { Forms } from './Forms/Forms.jsx';

export default function Table() {
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'desc' });

  function handleSort(target, item) {
    setSortBy({ path: item, order: sortBy.order === 'asc' ? 'desc' : 'asc' });
    setArrowOnSort(target, sortBy);
  }

  let sortUsers = getSortedUsers(data, sortBy);

  return (
    <>
      <h1>Table</h1>
      <Forms />
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
