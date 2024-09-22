import React, { useState } from 'react';
import { TableData } from './types';

interface SortControlsProps {
  data: TableData;
  setData: React.Dispatch<React.SetStateAction<TableData>>;
}

const SortControls: React.FC<SortControlsProps> = ({ data, setData }) => {
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = () => {
    if (!sortColumn) return;

    const sortedRows = [...data.rows].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (Array.isArray(aValue) && Array.isArray(bValue)) {
        return sortOrder === 'asc' 
          ? aValue.join(', ').localeCompare(bValue.join(', ')) 
          : bValue.join(', ').localeCompare(aValue.join(', '));
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' 
          ? aValue - bValue 
          : bValue - aValue;
      }

      return 0;
    });

    setData((prev) => ({ ...prev, rows: sortedRows }));
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <select 
        className="border border-gray-300 p-2 rounded"
        onChange={(e) => setSortColumn(e.target.value)} 
        value={sortColumn}
      >
        <option value="">Select column</option>
        {data.columns.map((col) => (
          <option key={col.id} value={col.id}>{col.id}</option>
        ))}
      </select>
      <select 
        className="border border-gray-300 p-2 rounded"
        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')} 
        value={sortOrder}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleSort}
      >
        Sort
      </button>
    </div>
  );
};

export default SortControls;
