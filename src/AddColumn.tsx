import React, { useState } from 'react';
import { Column } from './types';

interface AddColumnProps {
  addColumn: (column: Column) => void;
}

const AddColumn: React.FC<AddColumnProps> = ({ addColumn }) => {
  const [columnName, setColumnName] = useState('');
  const [columnType, setColumnType] = useState<'string' | 'number'>('string');

  const handleAddColumn = () => {
    addColumn({ id: columnName, type: columnType });
    setColumnName('');
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Column Name"
        value={columnName}
        onChange={(e) => setColumnName(e.target.value)}
        className="border border-gray-300 p-2 rounded flex-grow"
      />
      <select
        onChange={(e) => setColumnType(e.target.value as 'string' | 'number')}
        className="border border-gray-300 p-2 rounded"
      >
        <option value="string">String</option>
        <option value="number">Number</option>
      </select>
      <button
        onClick={handleAddColumn}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Column
      </button>
    </div>
  );
};

export default AddColumn;
