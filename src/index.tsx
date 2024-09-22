import React from 'react';
import ReactDOM from 'react-dom/client';
import DynamicTable from './DynamicTable.tsx'; // Ensure this import path is correct
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <DynamicTable />
  </React.StrictMode>
);
