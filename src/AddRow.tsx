import React, { useState } from 'react';
import { Row } from './types';

interface AddRowProps {
  addRow: (row: Row) => void;
  columns: string[];
}

const AddRow: React.FC<AddRowProps> = ({ addRow, columns }) => {
  const [rowValues, setRowValues] = useState<{ [key: string]: string[] }>({});

  const handleAddRow = () => {
    addRow(rowValues);
    setRowValues({});
  };

  const handleChange = (columnId: string, value: string) => {
    setRowValues((prev) => ({
      ...prev,
      [columnId]: value.split(',').map(v => v.trim()),
    }));
  };

  return (
    <div className="mb-4">
      {columns.map((col) => (
        <div key={col} className="flex items-center space-x-2 mb-2">
          <input
            type="text"
            placeholder={`Enter values for ${col}`}
            onChange={(e) => handleChange(col, e.target.value)}
            className="border border-gray-300 p-2 rounded flex-grow"
          />
        </div>
      ))}
      <button 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleAddRow}
      >
        Add Row
      </button>
    </div>
  );
};

export default AddRow;
