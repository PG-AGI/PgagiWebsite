'use client';

import React, { useState, useEffect } from 'react';
import styles from '../management/Admin.module.scss';

export interface TableData {
  headers: string[];
  rows: string[][];
}

interface TableEditorProps {
  value: TableData;
  onChange: (data: TableData) => void;
}

const defaultTableData: TableData = { headers: ['Header 1'], rows: [['Cell 1']] };

const TableEditor: React.FC<TableEditorProps> = ({ value, onChange }) => {
  const initialData =
    value &&
    typeof value === 'object' &&
    Array.isArray(value.headers) &&
    Array.isArray(value.rows)
      ? value
      : defaultTableData;

  const [headers, setHeaders] = useState<string[]>(initialData.headers);
  const [rows, setRows] = useState<string[][]>(initialData.rows);
  const [columns, setColumns] = useState<number>(initialData.headers.length);
  useEffect(() => {
    setHeaders(initialData.headers);
    setRows(initialData.rows);
    setColumns(initialData.headers.length);
  }, [initialData.headers, initialData.rows]);

  const addRow = () => {
    const newRows = [...rows, new Array(columns).fill('')];
    setRows(newRows);
    onChange({ headers, rows: newRows });
  };

  const addColumn = () => {
    const newColumns = columns + 1;
    const newHeaders = [...headers, `Header ${newColumns}`];
    const newRows = rows.map((row) => [...row, '']);
    setColumns(newColumns);
    setHeaders(newHeaders);
    setRows(newRows);
    onChange({ headers: newHeaders, rows: newRows });
  };

  const handleHeaderChange = (index: number, newValue: string) => {
    const newHeaders = headers.map((h, i) => (i === index ? newValue : h));
    setHeaders(newHeaders);
    onChange({ headers: newHeaders, rows });
  };

  const handleCellChange = (rowIndex: number, colIndex: number, newValue: string) => {
    const newRows = rows.map((row, rIndex) =>
      rIndex === rowIndex
        ? row.map((cell, cIndex) => (cIndex === colIndex ? newValue : cell))
        : row
    );
    setRows(newRows);
    onChange({ headers, rows: newRows });
  };

  const deleteColumn = (colIndex: number) => {
    if (columns <= 1) return;
    const newHeaders = headers.filter((_, i) => i !== colIndex);
    const newRows = rows.map((row) => row.filter((_, i) => i !== colIndex));
    const newColumns = columns - 1;
    setHeaders(newHeaders);
    setRows(newRows);
    setColumns(newColumns);
    onChange({ headers: newHeaders, rows: newRows });
  };

  const deleteRow = (rowIndex: number) => {
    if (rows.length <= 1) return;
    const newRows = rows.filter((_, i) => i !== rowIndex);
    setRows(newRows);
    onChange({ headers, rows: newRows });
  };

  return (
    <div className={styles.tableEditorContainer}>
      <h4 className={styles.tableEditorTitle}>Table Editor</h4>
      <div className={styles.tableEditorButtons}>
        <button type="button" onClick={addColumn} className={styles.tableEditorButton}>
          Add Column
        </button>
        <button type="button" onClick={addRow} className={styles.tableEditorButton}>
          Add Row
        </button>
      </div>
      <table className={styles.tableEditorTable}>
        <thead>
          <tr>
            <th className={styles.tableEditorTh}></th>
            {headers.map((header, index) => (
              <th key={index} className={styles.tableEditorTh}>
                <div className={styles.headerWrapper}>
                  <input
                    type="text"
                    value={header}
                    onChange={(e) => handleHeaderChange(index, e.target.value)}
                    placeholder={`Header ${index + 1}`}
                    className={styles.tableEditorInput}
                  />
                  {columns > 1 && (
                    <button
                      type="button"
                      onClick={() => deleteColumn(index)}
                      className={styles.deleteColumnButton}
                      title="Delete Column"
                    >
                      ×
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIndex) => (
            <tr key={rIndex}>
              <td className={styles.tableEditorTd}>
                {rows.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteRow(rIndex)}
                    className={styles.deleteRowButton}
                    title="Delete Row"
                  >
                    ×
                  </button>
                )}
              </td>
              {row.map((cell, cIndex) => (
                <td key={cIndex} className={styles.tableEditorTd}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rIndex, cIndex, e.target.value)}
                    placeholder={`Row ${rIndex + 1}, Col ${cIndex + 1}`}
                    className={styles.tableEditorInput}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableEditor;
