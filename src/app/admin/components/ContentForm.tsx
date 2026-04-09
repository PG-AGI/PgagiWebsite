'use client';

import React, { useState } from 'react';
import { useForm, useFieldArray, Controller, FieldErrors } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/app/admin/management/Admin.module.scss';
import { FormValues, ContentBlock, ContentType, Section } from '@/utils/type';
import ContentPreview from './ContentPreview';
import ContentBlockItem from './ContentBlockItem';
import { createContent, updateContent } from '@/services/contentService';
import adminContentFormText from '@/constants/uiText/adminContentForm.json';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { generateSlug } from '@/services/generateSlugService';

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
  setActiveTabToView: () => void;
}

const ContentForm: React.FC<ContentFormProps> = ({
  isEditing,
  editingContentId,
  onAfterSubmit,
  initialValues,
  setActiveTabToView
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
      slug: '',
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormValues) => {
    // No need to override table blocks here because each table block is managed by its own Controller.
    setIsLoading(true);
    const sanitizedData: FormValues = {
      ...data,
      slug: generateSlug(data.title),
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
        await updateContent(data.contentType, editingContentId, sanitizedData);
        alert(updateMessageMap[data.contentType]);
        handleReset();
        setIsLoading(false);
        onAfterSubmit();
      } else {
        await createContent(data.contentType, sanitizedData);
        alert(createMessageMap[data.contentType]);
        handleReset();
        setIsLoading(false);
        onAfterSubmit();
      }
    } catch (error: unknown) {
      setIsLoading(false);
      console.error('Error submitting form:', error);
      alert(error instanceof Error ? error.message : 'An unexpected error occurred.');
    }
  };
  const handleReset = () => {
    const defaultValues: FormValues = {
      slug: '',
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
    };
  
    reset(defaultValues); // Always reset to default values
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
            placeholder={adminContentFormText.coverImagePlaceholder}
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
            placeholder={adminContentFormText.titlePlaceholder}
            required
          />
          {errors.title && <span className={styles.error}>{errors.title.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="publishDate">Publish Date:</label>
          <input
            type="date"
            id="publishDate"
            onFocus={(e) => e.target.showPicker && e.target.showPicker()}
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
            placeholder={adminContentFormText.readTimePlaceholder}
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
            placeholder={adminContentFormText.authorNamePlaceholder}
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
            placeholder={adminContentFormText.authorRolePlaceholder}
            required
          />
          {errors.authorRole && (
            <span className={styles.error}>{errors.authorRole.message}</span>
          )}
        </div>
        <label>Metadata for SEO</label>
        <div className={styles.section}>
          <div className={styles.formGroup}>
            <label htmlFor="metaTitle">Meta Title</label>
            <input
              type="text"
              id="metaTitle"
              {...register('metaTitle')}
              placeholder={adminContentFormText.metaTitlePlaceholder}
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
              {...register('metaDescription')}
              placeholder={adminContentFormText.metaDescriptionPlaceholder}
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
              {...register('metaKeywords')}
              placeholder={adminContentFormText.metaKeywordsPlaceholder}
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
              {...register('metaAuthor')}
              placeholder={adminContentFormText.metaAuthorPlaceholder}
            />
            {errors.metaAuthor && (
              <span className={styles.error}>{errors.metaAuthor.message}</span>
            )}
          </div>
        </div>
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
                  placeholder={adminContentFormText.tldrHeadingPlaceholder}
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
                  placeholder={adminContentFormText.sectionTitlePlaceholder}
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
                        onUpdateBlock={(updatedBlock) => {
                          const updatedBlocks = [...(field.value || [])];
                          updatedBlocks[blockIndex] = updatedBlock;
                          field.onChange(updatedBlocks);
                        }}
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
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Loading...' : isEditing ? 'Update Content' : 'Create Content'}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={()=>{
                reset();
                onAfterSubmit();
                setActiveTabToView();
                
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
