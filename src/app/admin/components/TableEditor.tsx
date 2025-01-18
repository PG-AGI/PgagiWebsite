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

const defaultTableData: TableData = { headers: [''], rows: [['']] };

const TableEditor: React.FC<TableEditorProps> = ({ value, onChange }) => {
  // Validate provided value
  const initialData =
    value &&
    typeof value === 'object' &&
    Array.isArray(value.headers) &&
    Array.isArray(value.rows)
      ? value
      : defaultTableData;

  const [headers, setHeaders] = useState<string[]>(initialData.headers.length ? initialData.headers : ['']);
  const [rows, setRows] = useState<string[][]>(initialData.rows.length ? initialData.rows : [['']]);
  const [columns, setColumns] = useState<number>(initialData.headers.length ? initialData.headers.length : 1);

  // Update parent on change
  useEffect(() => {
    onChange({ headers, rows });
  }, [headers, rows, onChange]);

  const addRow = () => {
    setRows(prev => [...prev, new Array(columns).fill('')]);
  };

  const addColumn = () => {
    setColumns(prev => prev + 1);
    setHeaders(prev => [...prev, '']);
    setRows(prev => prev.map(row => [...row, '']));
  };

  const handleHeaderChange = (index: number, newValue: string) => {
    setHeaders(prev => prev.map((h, i) => (i === index ? newValue : h)));
  };

  const handleCellChange = (rowIndex: number, colIndex: number, newValue: string) => {
    setRows(prev =>
      prev.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((cell, cIndex) => (cIndex === colIndex ? newValue : cell))
          : row
      )
    );
  };

  // Delete a column given its index (only if more than one column)
  const deleteColumn = (colIndex: number) => {
    if (columns <= 1) return; // Prevent deleting last column
    setHeaders(prev => prev.filter((_, i) => i !== colIndex));
    setRows(prev => prev.map(row => row.filter((_, i) => i !== colIndex)));
    setColumns(prev => prev - 1);
  };

  // Delete a row given its index (only if more than one row)
  const deleteRow = (rowIndex: number) => {
    if (rows.length <= 1) return; // Prevent deleting last row
    setRows(prev => prev.filter((_, i) => i !== rowIndex));
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
            {/* Render a blank header cell for the row delete button column */}
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
              {/* Delete row button column */}
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
