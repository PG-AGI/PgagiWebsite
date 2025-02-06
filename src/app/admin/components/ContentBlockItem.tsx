'use client';

import React, { useEffect } from 'react';
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
  onUpdateBlock: (updatedBlock: ContentBlock) => void;
  removeBlock: () => void;
}

const ContentBlockItem: React.FC<ContentBlockItemProps> = ({
  control,
  register,
  errors,
  sectionIndex,
  block,
  blockIndex,
  onUpdateBlock,
  removeBlock,
}) => {
  const blockType = useWatch({
    control,
    name: `sections.${sectionIndex}.content.${blockIndex}.type`,
    defaultValue: block.type || 'paragraph',
  });

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as ContentBlock['type'];
    const updatedBlock: ContentBlock = {
      ...block,
      type: newType,
      content:
        newType === 'table'
          ? { headers: ['Header 1'], rows: [['Cell 1']] }
          : newType === 'box'
            ? { heading: '', text: '' }
            : newType === 'image' ? { src: '', alt: '', caption: '' }
              : newType === 'video' ? { src: '', title: '', caption: '' } : '',
    };
    onUpdateBlock(updatedBlock);
  };

  const handleTableChange = (updatedTable: TableData) => {
    onUpdateBlock({
      ...block,
      content: updatedTable,
    });
  };

  const handleBoxFieldChange = (field: 'heading' | 'text', value: string) => {
    onUpdateBlock({
      ...block,
      content: {
        ...(block.content as { heading: string; text: string }),
        [field]: value,
      },
    });
  };

  const handleImageFieldChange = (field: 'src' | 'alt' | 'caption', value: string) => {
    onUpdateBlock({
      ...block,
      content: {
        ...(block.content as { src: string; alt: string; caption: string }),
        [field]: value,
      },
    });
  };


  const handleVideoFieldChange = (field: 'src' | 'title' | 'caption', value: string) => {
    onUpdateBlock({
      ...block,
      content: {
        ...(block.content as { src: string; title: string; caption: string }),
        [field]: value,
      },
    });
  };


  useEffect(() => {
    if (blockType === 'table') {
      onUpdateBlock({ ...block, content: { headers: ['Header 1'], rows: [['Cell 1']] } });
    } else if (blockType === 'box') {
      onUpdateBlock({ ...block, content: { heading: '', text: '' } });
    } else if (blockType === 'image') {
      onUpdateBlock({ ...block, content: { src: '', alt: '', caption: '' } });
    }
  }, [blockType]);


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
            <select
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                handleTypeChange(e);
              }}
              required
            >
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
              className={styles.quill}
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
      ) : blockType === 'table' ? (
        <div className={styles.formGroup}>
          <label>Table Data:</label>
          <TableEditor
            value={block.content as TableData}
            onChange={handleTableChange}
          />
        </div>
      ) : blockType === 'box' ? (
        <>
          <div className={styles.formGroup}>
            <label>Box Heading:</label>
            <input
              type="text"
              value={
                typeof block.content === 'object' &&
                  'heading' in block.content
                  ? block.content.heading
                  : ''
              }
              onChange={(e) => handleBoxFieldChange('heading', e.target.value)}
              placeholder="Enter box heading"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Box Text:</label>
            <ReactQuill
            className={styles.quill}
              theme="snow"
              value={
                typeof block.content === 'object' &&
                  'text' in block.content
                  ? block.content.text
                  : ''
              }
              onChange={(value) => handleBoxFieldChange('text', value)}
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
          </div>
        </>
      ) : blockType === 'image' ? (
        <>
          <div className={styles.formGroup}>
            <label>Image Source:</label>
            <input
              type="text"
              value={
                typeof block.content === 'object' &&
                  'src' in block.content
                  ? block.content.src
                  : ''
              }
              onChange={(e) => handleImageFieldChange('src', e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Alt Text:</label>
            <input
              type="text"
              value={
                typeof block.content === 'object' &&
                  'alt' in block.content
                  ? block.content.alt
                  : ''
              }
              onChange={(e) => handleImageFieldChange('alt', e.target.value)}
              placeholder="Enter alt text"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Caption:</label>
            <input
              type="text"
              value={
                typeof block.content === 'object' &&
                  'caption' in block.content
                  ? block.content.caption
                  : ''
              }
              onChange={(e) => handleImageFieldChange('caption', e.target.value)}
              placeholder="Enter caption"
              required
            />
          </div>
        </>
      ) : blockType === 'video' ? (
        <>
          <div className={styles.formGroup}>
            <label>Video Source:</label>
            <input
              type="text"
              value={
                typeof block.content === 'object' &&
                  'src' in block.content
                  ? block.content.src
                  : ''
              }
              onChange={(e) => handleVideoFieldChange('src', e.target.value)}
              placeholder="Enter video URL"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Video Title:</label>
            <input
              type="text"
              value={
                typeof block.content === 'object' &&
                  'title' in block.content
                  ? block.content.title
                  : ''
              }
              onChange={(e) => handleVideoFieldChange('title', e.target.value)}
              placeholder="Enter video title"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Caption:</label>
            <input
              type="text"
              value={
                typeof block.content === 'object' &&
                  'caption' in block.content
                  ? block.content.caption
                  : ''
              }
              onChange={(e) => handleVideoFieldChange('caption', e.target.value)}
              placeholder="Enter caption"
              required
            />
          </div>
        </>
      ) : null}

    </div>
  );
};

export default ContentBlockItem;
