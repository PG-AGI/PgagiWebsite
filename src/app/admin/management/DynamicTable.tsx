'use client';

import { useState, ChangeEvent } from 'react';
import styles from '@/styles/app/admin/management/DynamicTable.module.scss';
import adminDynamicTableText from '@/constants/uiText/adminDynamicTable.json';

type Row = string[]; 
type TableData = Row[];

interface DynamicTableProps {
  rows: TableData;
  setRows: React.Dispatch<React.SetStateAction<TableData>>;
  columns: number;
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  columnNames: string[];
  setColumnNames: React.Dispatch<React.SetStateAction<string[]>>;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  rows,
  setRows,
  columns,
  setColumns,
  columnNames,
  setColumnNames,
}) => {
  const addRow = () => {
    const newRows: TableData = [...rows, Array(columns).fill('')];
    setRows(newRows);
  };

  const addColumn = () => {
    const newRows: TableData = rows.map((row) => [...row, '']);
    setRows(newRows);
    setColumns(columns + 1);
    setColumnNames([...columnNames, '']);
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>, rowIndex: number, colIndex: number) => {
    const newRows: TableData = rows.map((row, rIndex) =>
      rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === colIndex ? e.target.value : cell)) : row
    );
    setRows(newRows);
  };

  const handleColumnNameChange = (e: ChangeEvent<HTMLInputElement>, colIndex: number) => {
    const newColumnNames = [...columnNames];
    newColumnNames[colIndex] = e.target.value;
    setColumnNames(newColumnNames);
  };

  const removeRow = (index: number) => {
    const newRows: TableData = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const removeColumn = (index: number) => {
    const newRows: TableData = rows.map((row) => row.filter((_, colIndex) => colIndex !== index));
    setRows(newRows);
    const newColumnNames = columnNames.filter((_, colIndex) => colIndex !== index);
    setColumnNames(newColumnNames);
    setColumns(columns - 1);
  };

  return (
    <div>
      <table className={styles.dynamicTable}>
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <th key={colIndex} className={styles.cell}>
                <div className={styles.flexWrapper}>
                  <input
                    type="text"
                    value={columnNames[colIndex] || ''}
                    onChange={(e) => handleColumnNameChange(e, colIndex)}
                    placeholder={`${adminDynamicTableText.columnPlaceholderPrefix} ${colIndex + 1}`}
                    className={styles.columnNameInput}
                  />
                  {columns > 1 && (
                    <button onClick={() => removeColumn(colIndex)} className={styles.removeBtn}>
                      -
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className={styles.cell}>
                  <textarea
                    value={cell}
                    onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                    className={styles.textareaCell}
                    rows={3}
                    placeholder={adminDynamicTableText.textPlaceholder}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => removeRow(rowIndex)} className={styles.removeBtn}>
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttons}>
        <div onClick={addRow} className={styles.button}>
          {adminDynamicTableText.addRowLabel}
        </div>
        <div onClick={addColumn} className={styles.button}>
          {adminDynamicTableText.addColumnLabel}
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
