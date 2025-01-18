'use client';

import React from 'react';
import {
  useWatch,
  Controller,
  UseFormRegister,
  Control,
  FieldErrors,
} from 'react-hook-form';
import dynamic from 'next/dynamic';
import styles from '../management/Admin.module.scss';
import { ContentBlock, FormValues } from '@/utils/type';
import TableEditor from './TableEditor';
import { TableData } from '@/utils/type';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface ContentBlockItemProps {
  control: Control<FormValues, any>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  sectionIndex: number;
  block: ContentBlock;
  blockIndex: number;
  removeBlock: () => void;
  rows: any;
  setRows: React.Dispatch<React.SetStateAction<any>>;
  columns: number;
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  columnNames: string[];
  setColumnNames: React.Dispatch<React.SetStateAction<string[]>>;
}

const ContentBlockItem: React.FC<ContentBlockItemProps> = ({
  control,
  register,
  errors,
  sectionIndex,
  block,
  blockIndex,
  removeBlock,
  // The following props may be removed if no longer used for table state.
  rows,
  setRows,
  columns,
  setColumns,
  columnNames,
  setColumnNames,
}) => {
  // Watch the type of the content block.
  const blockType = useWatch({
    control,
    name: `sections.${sectionIndex}.content.${blockIndex}.type`,
    defaultValue: block.type || 'paragraph',
  });

  // A helper function to ensure we pass a valid TableData value
  const getTableValue = (value: any): TableData => {
    if (
      value &&
      typeof value === 'object' &&
      'headers' in value &&
      'rows' in value &&
      Array.isArray(value.headers) &&
      Array.isArray(value.rows)
    ) {
      return value as TableData;
    }
    return { headers: [''], rows: [['']] };
  };

  return (
    <div className={styles.contentBlock}>
      <h4>Content Block {blockIndex + 1}</h4>
      <button type="button" onClick={removeBlock} className={styles.removeButton}>
        Remove Block
      </button>
      <div className={styles.formGroup}>
        <label>Type:</label>
        <Controller
          control={control}
          name={`sections.${sectionIndex}.content.${blockIndex}.type`}
          defaultValue={block.type || 'paragraph'}
          rules={{ required: 'Content Block Type is required' }}
          render={({ field: { onChange, value } }) => (
            <select value={value} onChange={(e) => onChange(e.target.value)} required>
              <option value="paragraph">Paragraph</option>
              <option value="quote">Quote</option>
              <option value="highlight">Highlight</option>
              <option value="code">Code</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="table">Table</option>
              <option value="box">Box</option>
            </select>
          )}
        />
      </div>

      {['paragraph', 'quote', 'highlight', 'code'].includes(blockType) ? (
        <div className={styles.formGroup}>
          <label>Content:</label>
          <Controller
            control={control}
            name={`sections.${sectionIndex}.content.${blockIndex}.content`}
            rules={{ required: 'Content is required' }}
            render={({ field }) => (
              <ReactQuill
                theme="snow"
                value={typeof field.value === 'string' ? field.value : ''}
                onChange={field.onChange}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'link'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['clean'],
                  ],
                }}
                formats={[
                  'header',
                  'bold',
                  'italic',
                  'underline',
                  'list',
                  'bullet',
                  'link',
                  'clean',
                  'code-block',
                ]}
              />
            )}
          />
        </div>
      ) : blockType === 'image' ? (
        <>
          <div className={styles.formGroup}>
            <label>Image URL:</label>
            <input
              type="url"
              {...register(`sections.${sectionIndex}.content.${blockIndex}.src`, {
                required: 'Image URL is required',
                pattern: {
                  value: /^https?:\/\/.*\.(jpeg|jpg|gif|png)$/,
                  message: 'Enter a valid image URL',
                },
              })}
              placeholder="Paste image link (https://postimages.org/)"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Image Alt Text:</label>
            <input
              type="text"
              {...register(`sections.${sectionIndex}.content.${blockIndex}.alt`, {
                required: 'Alt Text is required',
              })}
              placeholder="Enter image alt text"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Image Caption (Optional):</label>
            <input
              type="text"
              {...register(`sections.${sectionIndex}.content.${blockIndex}.caption`)}
              placeholder="Enter image caption"
            />
          </div>
        </>
      ) : blockType === 'video' ? (
        <>
          <div className={styles.formGroup}>
            <label>Video URL (YouTube Embed Link):</label>
            <input
              type="url"
              {...register(`sections.${sectionIndex}.content.${blockIndex}.src`, {
                required: 'Video URL is required',
                pattern: {
                  value: /^https?:\/\/(www\.)?(youtube\.com\/embed\/|youtu\.be\/).+$/,
                  message: 'Enter a valid YouTube URL',
                },
              })}
              placeholder="Paste YouTube embed link"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Video Title (Optional):</label>
            <input
              type="text"
              {...register(`sections.${sectionIndex}.content.${blockIndex}.title`)}
              placeholder="Enter video title"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Video Caption (Optional):</label>
            <input
              type="text"
              {...register(`sections.${sectionIndex}.content.${blockIndex}.caption`)}
              placeholder="Enter video caption"
            />
          </div>
        </>
      ) : blockType === 'table' ? (
        <div className={styles.formGroup}>
          <label>Table Data:</label>
          <Controller
            control={control}
            name={`sections.${sectionIndex}.content.${blockIndex}.content`}
            defaultValue={{ headers: [''], rows: [['']] }}
            render={({ field: { onChange, value } }) => (
              <TableEditor value={getTableValue(value)} onChange={onChange} />
            )}
          />
        </div>
      ) : blockType === 'box' ? (
        <>
          <div className={styles.formGroup}>
            <label>Box Heading:</label>
            <input
              type="text"
              {...register(`sections.${sectionIndex}.content.${blockIndex}.content.heading`, {
                required: 'Box heading is required',
              })}
              placeholder="Enter box heading"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Box Text:</label>
            <Controller
              control={control}
              name={`sections.${sectionIndex}.content.${blockIndex}.content.text`}
              rules={{ required: 'Box text is required' }}
              render={({ field }) => (
                <ReactQuill
                  theme="snow"
                  value={typeof field.value === 'string' ? field.value : ''}
                  onChange={field.onChange}
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'link'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['clean'],
                    ],
                  }}
                  formats={[
                    'header',
                    'bold',
                    'italic',
                    'underline',
                    'list',
                    'bullet',
                    'link',
                    'clean',
                    'code-block',
                  ]}
                />
              )}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ContentBlockItem;
