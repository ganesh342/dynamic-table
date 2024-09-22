export type ColumnType = 'string' | 'number';

export interface Column {
  id: string;
  type: ColumnType;
}

export interface Row {
  [key: string]: string[] | number; // Support for multiple values in string columns
}

export interface TableData {
  columns: Column[];
  rows: Row[];
}
