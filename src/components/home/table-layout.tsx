import { useTable } from 'react-table';
import { ArrowIcon } from '../../utils/icons';
import { data, columns } from '../../utils/data/table-data';
import { TableHero } from './';

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
      <TableHero />
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
