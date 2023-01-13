import { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { ArrowIcon } from '../../utils/icons';
import { columns } from '../../utils/data/table-data';
import axios from 'axios';

const TableData = () => {
  const [data, setData] = useState<[]>([]);

  const url = 'http://localhost:3001/users';
  useEffect(() => {
    axios(url, {
      method: 'GET',
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //@ts-ignore
  } = useTable({ columns, data });

  return (
    <div className="bg-white p-4">
      <table {...getTableProps()} className="table-auto w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 items-start text-gray-400">
                  <div className="flex">
                    <span>{column.render('Header')}</span>
                    <span className="text-xl font-bold pl-1">
                      <ArrowIcon />
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="px-4 py-2">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
