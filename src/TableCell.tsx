import React, { useState } from 'react';

interface TableCellProps {
  columnId: string;
  value: string[] | number | undefined; // Allow undefined for safety
  updateCell: (newValue: string[]) => void;
}

const TableCell: React.FC<TableCellProps> = ({ columnId, value, updateCell }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState<string[]>(Array.isArray(value) ? value : value !== undefined ? [value.toString()] : []);

  const handleSave = () => {
    updateCell(inputValue);
    setIsEditing(false);
  };

  return (
    <td className="border p-2">
      {isEditing ? (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue.join(', ')}
            onChange={(e) => setInputValue(e.target.value.split(',').map(v => v.trim()))}
            className="border border-gray-300 p-2 rounded flex-grow"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className="cursor-pointer text-gray-800 hover:text-blue-600"
        >
          {value ? value.join(', ') : 'No data'}
        </div>
      )}
    </td>
  );
};

export default TableCell;
