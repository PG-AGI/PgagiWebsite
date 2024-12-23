'use client';

import { useState, useEffect } from 'react';
import { useForm, useFieldArray, Controller, FieldErrors } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { v4 as uuidv4 } from 'uuid';
import styles from './Admin.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

type ContentBlock = {
  id: string;
  type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video';
  content?: string; 
  src?: string;
  alt?: string;
  caption?: string;
  title?: string;
};

type Section = {
  id: string;
  title: string;
  content: ContentBlock[];
};

type FormValues = {
  coverImage: string;
  title: string;
  publishDate: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  sections: Section[];
};

type CaseStudySummary = {
  id: string;
  title: string;
  coverImage: string;
};

type CaseStudy = {
  id: string;
  coverImage: string;
  title: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  sections: {
    title: string;
    content: {
      type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video';
      content?: string;
      src?: string;
      alt?: string;
      caption?: string;
      title?: string;
    }[];
  }[];
  createdAt: string;
  updatedAt: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const CreateCaseStudy = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/auth/signin');
  }, [session, status, router]);

  const [activeTab, setActiveTab] = useState<'create' | 'view'>('create');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingCaseStudyId, setEditingCaseStudyId] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      coverImage: '',
      title: '',
      publishDate: '',
      readTime: '',
      authorName: '',
      authorRole: '',
      sections: [
        {
          id: uuidv4(),
          title: '',
          content: [
            {
              id: uuidv4(),
              type: 'paragraph',
              content: '', 
            },
          ],
        },
      ],
    },
  });

  const {
    fields: sectionFields,
    append: appendSection,
    remove: removeSection,
  } = useFieldArray({
    control,
    name: 'sections',
  });

  const [showPreview, setShowPreview] = useState(false);
  const watchAllFields = watch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudySummary | null>(null);
  const [caseStudyDetails, setCaseStudyDetails] = useState<CaseStudy | null>(null);
  const [detailsLoading, setDetailsLoading] = useState<boolean>(false);
  const [detailsError, setDetailsError] = useState<string>('');

  const onSubmit = async (data: FormValues) => {
    const sanitizedData: FormValues = {
      ...data,
      sections: data.sections
        .filter(section => section.title.trim() !== '' || section.content.length > 0)
        .map(section => ({
          ...section,
          content: section.content.map(block => ({
            ...block,
            content: block.content ? block.content.trim() : '', 
            src: block.src ? block.src.trim() : '',
            alt: block.alt ? block.alt.trim() : '',
            caption: block.caption ? block.caption.trim() : '',
            title: block.title ? block.title.trim() : '',
          })).filter(block => {
            if (!block.type) return false;
            switch (block.type) {
              case 'paragraph':
              case 'quote':
              case 'highlight':
              case 'code':
                return block.content !== '';
              case 'image':
                return block.src && block.alt && /^https?:\/\/.*\.(jpeg|jpg|gif|png)$/.test(block.src);
              case 'video':
                return block.src && /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(block.src);
              default:
                return false;
            }
          }),
        }))
        .filter(section => section.content.length > 0),
    };

    try {
      if (isEditing && editingCaseStudyId) {
        const response = await axios.put(`/api/case-studies/${editingCaseStudyId}`, sanitizedData);
        if (response.status === 200) {
          alert('Case Study updated successfully!');
          reset();
          setIsEditing(false);
          setEditingCaseStudyId(null);
          if (activeTab === 'view') fetchCaseStudies();
        } else {
          alert(`Error: ${response.data.message}`);
        }
      } else {
        const response = await axios.post('/api/case-studies', sanitizedData);
        if (response.status === 201 || response.status === 200) {
          alert('Case Study created successfully!');
          console.log('New Case Study ID:', response.data.id);
          reset();
          if (activeTab === 'view') fetchCaseStudies();
        } else {
          alert(`Error: ${response.data.message}`);
        }
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      alert(error.response?.data?.message || 'An unexpected error occurred.');
    }
  };

  const [caseStudies, setCaseStudies] = useState<CaseStudySummary[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchCaseStudies = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/case-studies');
      setCaseStudies(response.data);
    } catch (err: any) {
      console.error('Error fetching case studies:', err);
      setError(err.response?.data?.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'view') {
      fetchCaseStudies();
    }
  }, [activeTab]);

  useEffect(() => {
    const fetchCaseStudyDetails = async (id: string) => {
      setDetailsLoading(true);
      setDetailsError('');
      try {
        const response = await axios.get(`/api/case-studies/${id}`);
        setCaseStudyDetails(response.data);
      } catch (err: any) {
        console.error('Error fetching case study details:', err);
        setDetailsError(err.response?.data?.message || 'Failed to fetch case study details.');
      } finally {
        setDetailsLoading(false);
      }
    };

    if (selectedCaseStudy) {
      fetchCaseStudyDetails(selectedCaseStudy.id);
    }
  }, [selectedCaseStudy]);

  const handleViewDetails = (caseStudy: CaseStudySummary) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
    setCaseStudyDetails(null);
    setDetailsError('');
  };

  const handleEdit = async (caseStudy: CaseStudySummary) => {
    try {
      const response = await axios.get(`/api/case-studies/${caseStudy.id}`);
      const data: CaseStudy = response.data;
      const formData: FormValues = {
        coverImage: data.coverImage || '',
        title: data.title || '',
        publishDate: data.publishDate || '',
        readTime: data.readTime || '',
        authorName: data.author.name || '',
        authorRole: data.author.role || '',
        sections: data.sections.map((section) => ({
          id: uuidv4(),
          title: section.title || '',
          content: section.content.map((block) => ({
            id: uuidv4(),
            type: block.type || 'paragraph',
            content: block.content || '',
            src: block.src || '',
            alt: block.alt || '',
            caption: block.caption || '',
            title: block.title || '',
          })),
        })),
      };
      reset(formData);
      setIsEditing(true);
      setEditingCaseStudyId(caseStudy.id);
      setActiveTab('create');
    } catch (error: any) {
      console.error('Error fetching case study details:', error);
      alert(error.response?.data?.message || 'An unexpected error occurred while fetching case study details.');
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this case study?');
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`/api/case-studies/${id}`);
      if (response.status === 200 || response.status === 204) {
        alert('Case Study deleted successfully!');
        fetchCaseStudies();
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error: any) {
      console.error('Error deleting case study:', error);
      alert(error.response?.data?.message || 'An unexpected error occurred while deleting the case study.');
    }
  };
    const getNestedError = (errors: FieldErrors<FormValues>, sectionIndex: number, blockIndex: number, field: keyof ContentBlock) => {
      const fieldError = errors.sections?.[sectionIndex]?.content?.[blockIndex]?.[field];
      return typeof fieldError === 'object' && fieldError !== null ? fieldError.message : undefined;
    };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{isEditing ? 'Edit Case Study' : 'Admin Panel'}</h1>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'create' ? styles.active : ''}`}
          onClick={() => setActiveTab('create')}
        >
          {isEditing ? 'Edit Case Study' : 'Create Case Study'}
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'view' ? styles.active : ''}`}
          onClick={() => setActiveTab('view')}
        >
          View Case Studies
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'create' && (
          <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="coverImage">Cover Image URL:</label>
                <input
                  type="url"
                  id="coverImage"
                  {...register('coverImage', { required: 'Cover Image URL is required' })}
                  placeholder="Paste image link from PostImage (https://postimages.org/)"
                  required
                />
                {errors.coverImage && <span className={styles.error}>{errors.coverImage.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  {...register('title', { required: 'Title is required' })}
                  placeholder="Enter case study title"
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
                {errors.publishDate && <span className={styles.error}>{errors.publishDate.message}</span>}
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
                {errors.readTime && <span className={styles.error}>{errors.readTime.message}</span>}
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
                {errors.authorName && <span className={styles.error}>{errors.authorName.message}</span>}
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
                {errors.authorRole && <span className={styles.error}>{errors.authorRole.message}</span>}
              </div>

              <div className={styles.formGroup}>
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
                        {...register(`sections.${sectionIndex}.title` as const, { required: 'Section Title is required' })}
                        placeholder="Enter section title"
                        required
                      />
                      {errors.sections?.[sectionIndex]?.title && (
                        <span className={styles.error}>{errors.sections?.[sectionIndex]?.title?.message}</span>
                      )}
                    </div>

                    <Controller
                      control={control}
                      name={`sections.${sectionIndex}.content` as const}
                      render={({ field }) => (
                        <div className={styles.contentBlocks}>
                          {field.value?.map((block: ContentBlock, blockIndex: number) => (
                            <div key={block.id} className={styles.contentBlock}>
                              <h4>Content Block {blockIndex + 1}</h4>
                              <button
                                type="button"
                                onClick={() => {
                                  const updatedContent = [...(field.value || [])];
                                  updatedContent.splice(blockIndex, 1);
                                  field.onChange(updatedContent);
                                }}
                                className={styles.removeButton}
                              >
                                Remove Block
                              </button>

                              <div className={styles.formGroup}>
                                <label>Type:</label>
                                <select
                                  {...register(`sections.${sectionIndex}.content.${blockIndex}.type` as const, {
                                    required: 'Content Block Type is required',
                                  })}
                                  className={styles.select}
                                  defaultValue={block.type || 'paragraph'}
                                  required
                                >
                                  <option value="paragraph">Paragraph</option>
                                  <option value="quote">Quote</option>
                                  <option value="highlight">Highlight</option>
                                  <option value="code">Code</option>
                                  <option value="image">Image</option>
                                  <option value="video">Video</option>
                                </select>
                                {getNestedError(errors, sectionIndex, blockIndex, 'type') && (
                                  <span className={styles.error}>
                                    {getNestedError(errors, sectionIndex, blockIndex, 'type')}
                                  </span>
                                )}
                              </div>

                              {/* Conditional Rendering Based on Type */}
                              {['paragraph', 'quote', 'highlight', 'code'].includes(block.type || '') ? (
                                <div className={styles.formGroup}>
                                  <label>Content:</label>
                                  <Controller
  control={control}
  name={`sections.${sectionIndex}.content.${blockIndex}.content`}
  rules={{
    required: 'Content is required',
  }}
  render={({ field }) => (
    <ReactQuill
      theme="snow"
      value={typeof field.value === 'string' ? field.value : ''}
      onChange={field.onChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['clean'],
        ],
      }}
      formats={['header', 'bold', 'italic', 'underline', 'list', 'bullet']}
    />
  )}
/>

                                  {getNestedError(errors, sectionIndex, blockIndex, 'content') && (
                                    <span className={styles.error}>
                                      {getNestedError(errors, sectionIndex, blockIndex, 'content')}
                                    </span>
                                  )}
                                </div>
                              ) : block.type === 'image' ? (
                                <>
                                  <div className={styles.formGroup}>
                                    <label>Image URL:</label>
                                    <input
                                      type="url"
                                      {...register(`sections.${sectionIndex}.content.${blockIndex}.src` as const, {
                                        required: 'Image URL is required',
                                        pattern: {
                                          value: /^https?:\/\/.*\.(jpeg|jpg|gif|png)$/,
                                          message: 'Enter a valid image URL',
                                        },
                                      })}
                                      placeholder="Paste image link from PostImage (https://postimages.org/)"
                                      required
                                    />
                                    {getNestedError(errors, sectionIndex, blockIndex, 'src') && (
                                      <span className={styles.error}>
                                        {getNestedError(errors, sectionIndex, blockIndex, 'src')}
                                      </span>
                                    )}
                                  </div>

                                  <div className={styles.formGroup}>
                                    <label>Image Alt Text:</label>
                                    <input
                                      type="text"
                                      {...register(`sections.${sectionIndex}.content.${blockIndex}.alt` as const, { required: 'Alt Text is required' })}
                                      placeholder="Enter image alt text"
                                      required
                                    />
                                    {getNestedError(errors, sectionIndex, blockIndex, 'alt') && (
                                      <span className={styles.error}>
                                        {getNestedError(errors, sectionIndex, blockIndex, 'alt')}
                                      </span>
                                    )}
                                  </div>

                                  <div className={styles.formGroup}>
                                    <label>Image Caption (Optional):</label>
                                    <input
                                      type="text"
                                      {...register(`sections.${sectionIndex}.content.${blockIndex}.caption` as const)}
                                      placeholder="Enter image caption"
                                    />
                                  </div>
                                </>
                              ) : block.type === 'video' ? (
                                <>
                                  <div className={styles.formGroup}>
                                    <label>Video URL (YouTube Embed Link):</label>
                                    <input
                                      type="url"
                                      {...register(`sections.${sectionIndex}.content.${blockIndex}.src` as const, {
                                        required: 'Video URL is required',
                                        pattern: {
                                          value: /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+$/,
                                          message: 'Enter a valid YouTube URL',
                                        },
                                      })}
                                      placeholder="Paste YouTube embed link (https://www.youtube.com/embed/...)"
                                      required
                                    />
                                    {getNestedError(errors, sectionIndex, blockIndex, 'src') && (
                                      <span className={styles.error}>
                                        {getNestedError(errors, sectionIndex, blockIndex, 'src')}
                                      </span>
                                    )}
                                  </div>

                                  <div className={styles.formGroup}>
                                    <label>Video Title (Optional):</label>
                                    <input
                                      type="text"
                                      {...register(`sections.${sectionIndex}.content.${blockIndex}.title` as const)}
                                      placeholder="Enter video title"
                                    />
                                  </div>

                                  <div className={styles.formGroup}>
                                    <label>Video Caption (Optional):</label>
                                    <input
                                      type="text"
                                      {...register(`sections.${sectionIndex}.content.${blockIndex}.caption` as const)}
                                      placeholder="Enter video caption"
                                    />
                                  </div>
                                </>
                              ) : null}
                            </div>
                          ))}

                          <button
                            type="button"
                            onClick={() => {
                              field.onChange([
                                ...(field.value || []),
                                {
                                  id: uuidv4(),
                                  type: 'paragraph', // Default type to 'paragraph'
                                  content: '', // Initialize as empty string
                                },
                              ]);
                            }}
                            className={styles.addButton}
                          >
                            Add Content Block
                          </button>
                        </div>
                      )}
                    />

                    <button
                      type="button"
                      onClick={() => appendSection({ id: uuidv4(), title: '', content: [] })}
                      className={styles.addButton}
                    >
                      Add Section
                    </button>
                  </div>
                ))}
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
                  {isEditing ? 'Update Case Study' : 'Create Case Study'}
                </button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setIsEditing(false);
                      setEditingCaseStudyId(null);
                    }}
                    className={styles.cancelButton}
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>

            {showPreview && (
              <div className={styles.preview}>
                <h1>{watchAllFields.title || 'Sample Title'}</h1>
                <div className={styles.metadata}>
                  <span>{watchAllFields.publishDate || 'Publish Date'}</span>
                  <span className={styles.glowDot}></span>
                  <span>{watchAllFields.readTime || 'Read Time'}</span>
                </div>
                <div className={styles.author}>
                  <span>By</span>
                  <span className={styles.authorName}>{watchAllFields.authorName || 'Author Name'}</span>
                  <span className={styles.authorRole}>{watchAllFields.authorRole ? `(${watchAllFields.authorRole})` : '(Author Role)'}</span>
                </div>
                {watchAllFields.sections?.map((section, sectionIndex) => (
                  <div key={section.id} className={styles.section}>
                    <h2>{section.title || `Section ${sectionIndex + 1}`}</h2>
                    {section.content?.map((block, blockIndex) => {
                      switch (block.type) {
                        case 'paragraph':
                          return (
                            <p
                              key={block.id}
                              dangerouslySetInnerHTML={{ __html: block.content || 'Sample paragraph content.' }}
                            ></p>
                          );
                        case 'quote':
                          return (
                            <blockquote key={block.id} className={styles.quote}>
                              {block.content || 'Sample quote content.'}
                            </blockquote>
                          );
                        case 'highlight':
                          return (
                            <div key={block.id} className={styles.highlight}>
                              {block.content || 'Sample highlight content.'}
                            </div>
                          );
                        case 'code':
                          return (
                            <pre key={block.id} className={styles.codeBlock}>
                              <code>{block.content || '// Sample code snippet'}</code>
                            </pre>
                          );
                        case 'image':
                          return (
                            <figure key={block.id} className={styles.imageBlock}>
                              <img src={block.src || 'https://via.placeholder.com/600x400'} alt={block.alt || 'Image'} className={styles.image} />
                              {block.caption && <figcaption className={styles.caption}>{block.caption}</figcaption>}
                            </figure>
                          );
                        case 'video':
                          return (
                            <div key={block.id} className={styles.videoBlock}>
                              <iframe
                                src={block.src || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
                                title={block.title || 'Video'}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={styles.video}
                              ></iframe>
                              {block.caption && <div className={styles.caption}>{block.caption}</div>}
                            </div>
                          );
                        default:
                          return null;
                      }
                    })}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'view' && (
          <div className={styles.viewContainer}>
            <h2>Existing Case Studies</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className={styles.error}>{error}</p>
            ) : caseStudies.length === 0 ? (
              <p>No case studies found.</p>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Cover Image</th>
                    <th>Title</th>
                    <th>ID</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudies.map((cs) => (
                    <tr key={cs.id}>
                      <td>
                        <img src={cs.coverImage} alt={cs.title} className={styles.coverImage} />
                      </td>
                      <td>{cs.title}</td>
                      <td>{cs.id}</td>
                      <td>
                        <button
                          onClick={() => handleViewDetails(cs)}
                          className={styles.viewButton}
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleEdit(cs)}
                          className={styles.editButton}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(cs.id)}
                          className={styles.deleteButton}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {detailsLoading ? (
          <p>Loading...</p>
        ) : detailsError ? (
          <p className={styles.error}>{detailsError}</p>
        ) : caseStudyDetails ? (
          <div className={styles.modalContentInner}>
            <h2>{caseStudyDetails.title}</h2>
            <img src={caseStudyDetails.coverImage} alt={caseStudyDetails.title} className={styles.coverImage} />
            <div className={styles.metadata}>
              <span>Publish Date: {caseStudyDetails.publishDate}</span>
              <span>•</span>
              <span>Read Time: {caseStudyDetails.readTime}</span>
            </div>
            <div className={styles.author}>
              <span>By</span>
              <span className={styles.authorName}>{caseStudyDetails.author.name}</span>
              <span className={styles.authorRole}>({caseStudyDetails.author.role})</span>
            </div>
            {caseStudyDetails.sections?.map((section, sectionIndex) => (
              <div key={sectionIndex} className={styles.section}>
                <h3>{section.title}</h3>
                {section.content?.map((block, blockIndex) => {
                  switch (block.type) {
                    case 'paragraph':
                      return (
                        <p
                          key={blockIndex}
                          dangerouslySetInnerHTML={{ __html: block.content || 'Sample paragraph content.' }}
                        ></p>
                      );
                    case 'quote':
                      return (
                        <blockquote key={blockIndex} className={styles.quote}>
                          {block.content || 'Sample quote content.'}
                        </blockquote>
                      );
                    case 'highlight':
                      return (
                        <div key={blockIndex} className={styles.highlight}>
                          {block.content || 'Sample highlight content.'}
                        </div>
                      );
                    case 'code':
                      return (
                        <pre key={blockIndex} className={styles.codeBlock}>
                          <code>{block.content || '// Sample code snippet'}</code>
                        </pre>
                      );
                    case 'image':
                      return (
                        <figure key={blockIndex} className={styles.imageBlock}>
                          <img src={block.src || 'https://via.placeholder.com/600x400'} alt={block.alt || 'Image'} className={styles.image} />
                          {block.caption && <figcaption className={styles.caption}>{block.caption}</figcaption>}
                        </figure>
                      );
                    case 'video':
                      return (
                        <div key={blockIndex} className={styles.videoBlock}>
                          <iframe
                            src={block.src || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
                            title={block.title || 'Video'}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.video}
                          ></iframe>
                          {block.caption && <div className={styles.caption}>{block.caption}</div>}
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            ))}
          </div>
        ) : (
          <p>No details available.</p>
        )}
      </Modal>
    </div>
  );
};

export default CreateCaseStudy;
