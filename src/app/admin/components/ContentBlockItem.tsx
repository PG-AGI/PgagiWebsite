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
import styles from '@/styles/app/admin/management/Admin.module.scss';
import { ContentBlock, FormValues } from '@/utils/type';
import TableEditor from './TableEditor';
import { TableData } from '@/utils/type';
import adminContentBlockItemText from '@/constants/uiText/adminContentBlockItem.json';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface ContentBlockItemProps {
  control: Control<FormValues>;
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
    let updatedBlock: ContentBlock;

    switch (newType) {
      case 'table':
        updatedBlock = { ...block, type: newType, content: { headers: ['Header 1'], rows: [['Cell 1']] } };
        break;
      case 'box':
        updatedBlock = { ...block, type: newType, content: { heading: '', text: '' } };
        break;
      case 'image':
        updatedBlock = { ...block, type: newType, src: '', alt: '', caption: '' };
        break;
      case 'video':
        updatedBlock = { ...block, type: newType, src: '', title: '', caption: '' };
        break;
      default:
        updatedBlock = { ...block, type: newType, content: '' };
        break;
    }
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

  // useEffect(() => {
  //   if (blockType === 'table') {
  //     onUpdateBlock({ ...block, content: { headers: ['Header 1'], rows: [['Cell 1']] } });
  //   } else if (blockType === 'box') {
  //     onUpdateBlock({ ...block, content: { heading: '', text: '' } });
  //   }
  // }, [blockType, block, onUpdateBlock]);


useEffect(() => {
    if (blockType === 'table') {
      const content = block.content as TableData | undefined;
      const hasValidTable =
        content && Array.isArray(content.headers) && Array.isArray(content.rows);
      if (!hasValidTable) {
        onUpdateBlock({ ...block, content: { headers: ['Header 1'], rows: [['Cell 1']] } });
      }
    } else if (blockType === 'box') {
      const content = block.content as { heading: string; text: string } | undefined;
      const hasValidBox =
        content && typeof content.heading === 'string' && typeof content.text === 'string';
      if (!hasValidBox) {
        onUpdateBlock({ ...block, content: { heading: '', text: '' } });
      }
    }
    // only run when the type changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              value={block.src || ''}
              onChange={(e) => onUpdateBlock({ ...block, src: e.target.value })}
              placeholder={adminContentBlockItemText.imageUrlPlaceholder}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Alt Text:</label>
            <input
              type="text"
              value={block.alt || ''}
              onChange={(e) => onUpdateBlock({ ...block, alt: e.target.value })}
              placeholder={adminContentBlockItemText.altTextPlaceholder}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Caption (optional):</label>
            <input
              type="text"
              value={block.caption || ''}
              onChange={(e) => onUpdateBlock({ ...block, caption: e.target.value })}
              placeholder={adminContentBlockItemText.captionPlaceholder}
            />
          </div>
        </>
      ) : blockType === 'video' ? (
        <>
          <div className={styles.formGroup}>
            <label>Video URL (YouTube embed):</label>
            <input
              type="url"
              value={block.src || ''}
              onChange={(e) => onUpdateBlock({ ...block, src: e.target.value })}
              placeholder={adminContentBlockItemText.youtubeEmbedPlaceholder}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Video Title (optional):</label>
            <input
              type="text"
              value={block.title || ''}
              onChange={(e) => onUpdateBlock({ ...block, title: e.target.value })}
              placeholder={adminContentBlockItemText.videoTitlePlaceholder}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Caption (optional):</label>
            <input
              type="text"
              value={block.caption || ''}
              onChange={(e) => onUpdateBlock({ ...block, caption: e.target.value })}
              placeholder={adminContentBlockItemText.captionPlaceholder}
            />
          </div>
        </>
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
              placeholder={adminContentBlockItemText.boxHeadingPlaceholder}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Box Text:</label>
            <ReactQuill
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
      ) : null}
    </div>
  );
};

export default ContentBlockItem;
