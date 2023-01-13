import { useTable } from 'react-table';
import { Badge, Button } from '../shared';
import { PlusIcon, DownloadIcon, ArrowIcon } from '../../utils/icons';
import { data, columns } from '../../utils/data/table-data';

const Table = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //@ts-ignore
  } = useTable({ columns, data });

  return (
    <div className="border-2 border-gray px-10 py-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <h3 className="pr-2 text-xl">Users</h3>
            <div>
              <Badge type="primary">
                <span>48 Users</span>
              </Badge>
            </div>
          </div>
          <p className="text-gray-400 pt-2">
            Manage your team members and their account permissions here.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="px-2">
            <Button type="secondary">
              <div className="flex justify-center items-center">
                <span className="px-1 text-xl">
                  <DownloadIcon />
                </span>
                <span className="px-1">Download CSV</span>
              </div>
            </Button>
          </div>
          <div className="px-2">
            <Button type="primary">
              <div className="flex items-center justify-center">
                <span className="px-1">
                  <PlusIcon />
                </span>
                <span className="px-1">Add User</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <hr />

      {/* Table starts here */}
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
    </div>
  );
};

export default Table;
