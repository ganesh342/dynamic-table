import React, { useState } from 'react';
import { TableData, Row } from './types';

interface FilterControlsProps {
  data: TableData;
  setData: React.Dispatch<React.SetStateAction<TableData>>;
}

const FilterControls: React.FC<FilterControlsProps> = ({ data, setData }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilter = () => {
    const filteredRows = data.rows.filter((row: Row) =>
      Object.keys(row).some((columnId) => {
        const value = row[columnId];
        if (Array.isArray(value)) {
          return value.some((v) => v.includes(filterValue));
        }
        return String(value).includes(filterValue);
      })
    );

    setData((prev) => ({ ...prev, rows: filteredRows }));
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        placeholder="Filter value"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      <button 
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        onClick={handleFilter}
      >
        Filter
      </button>
    </div>
  );
};

export default FilterControls;
