import React from 'react';
import { Column, Row } from './types';
import TableCell from './TableCell.tsx';

interface TableRowProps {
  row: Row;
  columns: Column[];
  updateCell: (rowIndex: number, columnId: string, newValue: string[]) => void;
  rowIndex: number;
}

const TableRow: React.FC<TableRowProps> = ({ row, columns, updateCell, rowIndex }) => {
  return (
    <tr>
      {columns.map((col) => (
        <TableCell
          key={col.id}
          columnId={col.id}
          value={row[col.id]}
          updateCell={(newValue) => updateCell(rowIndex, col.id, newValue)}
        />
      ))}
    </tr>
  );
};

export default TableRow;

