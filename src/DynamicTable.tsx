import React, { useState } from 'react';
import { TableData, Column, Row } from './types';
import TableHeader from './TableHeader.tsx';
import TableRow from './TableRow.tsx';
import AddColumn from './AddColumn.tsx';
import AddRow from './AddRow.tsx';
import FilterControls from './FilterControls.tsx';
import SortControls from './SortControls.tsx';

const DynamicTable: React.FC = () => {
  const [data, setData] = useState<TableData>({ columns: [], rows: [] });

  const addColumn = (column: Column) => {
    setData((prev) => ({ ...prev, columns: [...prev.columns, column] }));
  };

  const addRow = (row: Row) => {
    setData((prev) => ({ ...prev, rows: [...prev.rows, row] }));
  };

  const updateCell = (rowIndex: number, columnId: string, newValue: string[]) => {
    const updatedRows = [...data.rows];
    updatedRows[rowIndex][columnId] = newValue;
    setData((prev) => ({ ...prev, rows: updatedRows }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Table</h1>
      <div className="mb-4">
        <AddColumn addColumn={addColumn} />
        <AddRow addRow={addRow} columns={data.columns.map(col => col.id)} />
      </div>
      <FilterControls data={data} setData={setData} />
      <SortControls data={data} setData={setData} />
      <table className="min-w-full border border-gray-300 mt-4">
        <TableHeader columns={data.columns} />
        <tbody>
          {data.rows.map((row, index) => (
            <TableRow
              key={index}
              row={row}
              columns={data.columns}
              updateCell={updateCell}
              rowIndex={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
