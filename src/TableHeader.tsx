import React from 'react';
import { Column } from './types';

interface TableHeaderProps {
  columns: Column[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.id}>{col.id}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

