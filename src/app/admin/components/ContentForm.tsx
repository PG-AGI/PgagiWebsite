'use client';

import React from 'react';
import { useForm, useFieldArray, Controller, FieldErrors } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import styles from '../management/Admin.module.scss';
import { FormValues, ContentBlock, ContentType, Section } from '@/utils/type';
import ContentPreview from './ContentPreview';
import ContentBlockItem from './ContentBlockItem';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const defaultSection: Section = {
  id: uuidv4(),
  title: '',
  content: [
    {
      id: uuidv4(),
      type: 'paragraph',
      content: '',
    },
  ],
};

interface ContentFormProps {
  isEditing: boolean;
  editingContentId: string | null;
  onAfterSubmit: () => void;
  initialValues?: FormValues;
}

const ContentForm: React.FC<ContentFormProps> = ({
  isEditing,
  editingContentId,
  onAfterSubmit,
  initialValues,
}) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: initialValues || {
      contentType: 'caseStudy',
      coverImage: '',
      title: '',
      publishDate: '',
      readTime: '',
      authorName: '',
      authorRole: '',
      metaDescription: '',
      metaKeywords: '',
      metaAuthor: '',
      metaTitle: '',
      tldr: { heading: '', text: '' },
      sections: [
        {
          id: uuidv4(),
          title: '',
          content: [{ id: uuidv4(), type: 'paragraph', content: '' }],
        },
      ],
    },
  });

  const { fields: sectionFields, append: appendSection, remove: removeSection, insert: insertSection } = useFieldArray({
    control,
    name: 'sections',
  });

  const [showPreview, setShowPreview] = React.useState(false);
  const watchAllFields = watch();

  const onSubmit = async (data: FormValues) => {
    // No need to override table blocks here because each table block is managed by its own Controller.
    const sanitizedData: FormValues = {
      ...data,
      sections: data.sections
        .filter((section) => section.title.trim() !== '' || section.content.length > 0)
        .map((section) => ({
          ...section,
          content: section.content
            .map((block) => {
              let updatedContent = block.content ?? '';
              if (block.type === 'paragraph' || block.type === 'quote' || block.type === 'highlight' || block.type === 'code') {
                updatedContent = typeof block.content === 'string' ? block.content.trim() : '';
              }
              return {
                ...block,
                content: updatedContent,
                src: block.src ? block.src.trim() : '',
                alt: block.alt ? block.alt.trim() : '',
                caption: block.caption ? block.caption.trim() : '',
                title: block.title ? block.title.trim() : '',
              };
            })
            .filter((block) => {
              if (!block.type) return false;
              switch (block.type) {
                case 'paragraph':
                case 'quote':
                case 'highlight':
                case 'code':
                  return block.content !== '';
                case 'image':
                  return (
                    block.src &&
                    block.alt &&
                    /^https?:\/\/.*\.(jpeg|jpg|gif|png)$/.test(block.src)
                  );
                case 'video':
                  return (
                    block.src &&
                    /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(block.src)
                  );
                case 'table':
                  return true;
                case 'box':
                  return true;
                default:
                  return false;
              }
            }),
        }))
        .filter((section) => section.content.length > 0),
    };
    console.log('form data is here', sanitizedData);
    const endpointMap: Record<ContentType, string> = {
      caseStudy: '/api/case-studies',
      blog: '/api/blogs',
      ainews: '/api/ainews',
    };
    const endpoint = endpointMap[data.contentType];
    const updateMessageMap: Record<ContentType, string> = {
      caseStudy: 'Case Study updated successfully!',
      blog: 'Blog updated successfully!',
      ainews: 'AINEWS updated successfully!',
    };
    const createMessageMap: Record<ContentType, string> = {
      caseStudy: 'Case Study created successfully!',
      blog: 'Blog created successfully!',
      ainews: 'AINEWS created successfully!',
    };

    try {
      if (isEditing && editingContentId) {
        const response = await axios.put(`${endpoint}/${editingContentId}`, sanitizedData);
        if (response.status === 200) {
          alert(updateMessageMap[data.contentType]);
          reset();
          onAfterSubmit();
        } else {
          alert(`Error: ${response.data.message}`);
        }
      } else {
        const response = await axios.post(endpoint, sanitizedData);
        if (response.status === 201 || response.status === 200) {
          alert(createMessageMap[data.contentType]);
          reset();
          onAfterSubmit();
        } else {
          alert(`Error: ${response.data.message}`);
        }
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(error.response?.data?.message || 'An unexpected error occurred.');
    }
  };
  return (
    <div className={styles.contentForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="contentType">Content Type:</label>
          <select
            id="contentType"
            {...register('contentType', { required: 'Content Type is required' })}
            required
          >
            {!isEditing && <option value="">Select Content Type</option>}
            <option value="caseStudy">Case Study</option>
            <option value="blog">Blog</option>
            <option value="ainews">AINEWS</option>
          </select>
          {errors.contentType && (
            <span className={styles.error}>{errors.contentType.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="coverImage">Cover Image URL:</label>
          <input
            type="url"
            id="coverImage"
            {...register('coverImage', { required: 'Cover Image URL is required' })}
            placeholder="Paste image link from PostImage (https://postimages.org/)"
            required
          />
          {errors.coverImage && (
            <span className={styles.error}>{errors.coverImage.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            placeholder="Enter title"
            required
          />
          {errors.title && <span className={styles.error}>{errors.title.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="publishDate">Publish Date:</label>
          <input
            type="date"
            id="publishDate"
            {...register('publishDate', { required: 'Publish Date is required' })}
            required
          />
          {errors.publishDate && (
            <span className={styles.error}>{errors.publishDate.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="readTime">Read Time:</label>
          <input
            type="text"
            id="readTime"
            {...register('readTime', { required: 'Read Time is required' })}
            placeholder="e.g., 8 min read"
            required
          />
          {errors.readTime && (
            <span className={styles.error}>{errors.readTime.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="authorName">Author Name:</label>
          <input
            type="text"
            id="authorName"
            {...register('authorName', { required: 'Author Name is required' })}
            placeholder="Enter author's name"
            required
          />
          {errors.authorName && (
            <span className={styles.error}>{errors.authorName.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="authorRole">Author Role:</label>
          <input
            type="text"
            id="authorRole"
            {...register('authorRole', { required: 'Author Role is required' })}
            placeholder="Enter author's role"
            required
          />
          {errors.authorRole && (
            <span className={styles.error}>{errors.authorRole.message}</span>
          )}
        </div>
        <>
          {!isEditing && <>
            <label>Metadata for SEO</label>
            <div className={styles.section}>
              <div className={styles.formGroup}>
                <label htmlFor="metaTitle">Meta Title</label>
                <input
                  type="text"
                  id="metaTitle"
                  {...register('metaTitle', { required: 'Meta Title is required' })}
                  placeholder="Enter meta title"
                  required
                />
                {errors.metaTitle && (
                  <span className={styles.error}>{errors.metaTitle.message}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="metaDescription">Meta Description</label>
                <input
                  type="text"
                  id="metaDescription"
                  {...register('metaDescription', { required: 'Metadescritpion is required' })}
                  placeholder="Enter Meta Description..."
                  required
                />
                {errors.metaDescription && (
                  <span className={styles.error}>{errors.metaDescription.message}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="metaKeywords">Meta Keywords</label>
                <input
                  type="text"
                  id="metaKeywords"
                  {...register('metaKeywords', { required: 'Metakeywords is required' })}
                  placeholder="Enter comma(, ) separated values, Example: keyword1, keyword2, keyword3, keyword4, ... "
                  required
                />
                {errors.metaKeywords && (
                  <span className={styles.error}>{errors.metaKeywords.message}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="metaAuthor">Meta Author</label>
                <input
                  type="text"
                  id="metaAuthor"
                  {...register('metaAuthor', { required: 'Meta Author is required' })}
                  placeholder="Enter meta author"
                  required
                />
                {errors.metaAuthor && (
                  <span className={styles.error}>{errors.metaAuthor.message}</span>
                )}
              </div>
            </div>
          </>}
        </>
        {watch('contentType') === 'blog' ? (
          <>
            <label>TL; DR (60-second blog summary)</label>
            <div className={styles.section}>
              <div className={styles.formGroup}>
                <label>TLDR Heading:</label>
                <input
                  type="text"
                  {...register(`tldr.heading`, {
                    required: 'TLDR heading is required',
                  })}
                  placeholder="Enter tldr heading"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>TLDR Text:</label>
                <Controller
                  control={control}
                  name={`tldr.text`}
                  rules={{ required: 'TLDR text is required' }}
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
            </div>
          </>
        ) : null}
        <div className={styles.sections}>
          <label>Sections:</label>
          {sectionFields.map((section, sectionIndex) => (
            <div key={section.id} className={styles.section}>
              <h3>Section {sectionIndex + 1}</h3>
              <button
                type="button"
                onClick={() => removeSection(sectionIndex)}
                className={styles.removeButton}
              >
                Remove Section
              </button>
              <div className={styles.formGroup}>
                <label>Section Title:</label>
                <input
                  type="text"
                  {...register(`sections.${sectionIndex}.title`, {
                    required: 'Section Title is required',
                  })}
                  placeholder="Enter section title"
                  required
                />
              </div>
              <Controller
                control={control}
                name={`sections.${sectionIndex}.content`}
                render={({ field }) => (
                  <div className={styles.contentBlocks}>
                    {field.value?.map((block: ContentBlock, blockIndex: number) => (
                      <ContentBlockItem
                        key={block.id}
                        control={control}
                        register={register}
                        errors={errors}
                        sectionIndex={sectionIndex}
                        block={block}
                        blockIndex={blockIndex}
                        removeBlock={() => {
                          const updated = [...(field.value || [])];
                          updated.splice(blockIndex, 1);
                          field.onChange(updated);
                        }}
                      />
                    ))}
                    <div className={styles.buttonGroup}>
                      <button
                        type="button"
                        onClick={() => {
                          field.onChange([
                            ...(field.value || []),
                            { id: uuidv4(), type: 'paragraph', content: '' },
                          ]);
                        }}
                        className={styles.addButton}
                      >
                        Add Content Block
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSection(sectionIndex + 1, defaultSection)}
                        className={styles.insertButton}
                      >
                        Insert Section Here
                      </button>
                    </div>
                  </div>
                )}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendSection({
                id: uuidv4(),
                title: '',
                content: [],
              })
            }
            className={styles.addButton}
          >
            Add Section
          </button>
        </div>

        <div className={styles.formGroup}>
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className={styles.previewButton}
          >
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton}>
            {isEditing ? 'Update Content' : 'Create Content'}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                reset();
              }}
              className={styles.cancelButton}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
      {showPreview && <ContentPreview data={watchAllFields} />}
    </div>
  );
};

export default ContentForm;
