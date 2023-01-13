import { TableData, TableHero } from './';

const TableLayout = () => {
  return (
    <div className="border-2 border-gray px-10 py-6 rounded-lg shadow-lg">
      <TableHero />
      <hr />
      <TableData />
    </div>
  );
};

export default TableLayout;
