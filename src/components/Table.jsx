import RenderHeaders from './RenderHeaders.jsx';
import { RenderUsers } from './RenderUsers.jsx';
import { columns } from '../data/columns.jsx';
import { data as dataBase } from '../data/index';
import { useState } from 'react';

export default function Table() {
  const [data, setData] = useState(dataBase);

  return (
    <>
      <h1>Table</h1>
      <table>
        <thead>
          <RenderHeaders columns={columns} data={data} setData={setData} />
        </thead>
        <tbody>
          <RenderUsers columns={columns} data={data} />
        </tbody>
      </table>
    </>
  );
}
