'use client';

import React, { useState } from 'react';
import styles from './Admin.module.scss';
import ContentForm from '../components/ContentForm';
import ContentList from '../components/ContentList';
import Modal from '../components/Modal';
import JobPostingsManagement from '../components/JobPostingsManagement';
import { ContentSummary, ContentDetails, FormValues, ContentType } from '@/utils/type';
import axios from 'axios';
import Image from 'next/image';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'view' | 'jobs'>('create');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingContentId, setEditingContentId] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState<FormValues | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedContent, setSelectedContent] = useState<ContentSummary | null>(null);
  const [contentDetails, setContentDetails] = useState<ContentDetails | null>(null);
  const [detailsLoading, setDetailsLoading] = useState<boolean>(false);
  const [detailsError, setDetailsError] = useState<string>('');

  const fetchContentDetails = async (slug: string, contentType: ContentType) => {
    setDetailsLoading(true);
    setDetailsError('');
    try {
      const endpointMap: Record<ContentType, string> = {
        caseStudy: '/api/case-studies',
        blog: '/api/blogs',
        ainews: '/api/ainews',
      };
      const endpoint = endpointMap[contentType];
      const res = await axios.get(`${endpoint}/${slug}`);
      setContentDetails(res.data);
    } catch (error: any) {
      console.error('Error fetching content details:', error);
      setDetailsError(error.response?.data?.message || 'Failed to fetch details.');
    } finally {
      setDetailsLoading(false);
    }
  };

  const handleView = (content: ContentSummary) => {
    setSelectedContent(content);
    setModalOpen(true);
    fetchContentDetails(content.slug, content.contentType);
  };

  const handleEdit = async (content: ContentSummary) => {
    const endpointMap: Record<ContentType, string> = {
      caseStudy: '/api/case-studies',
      blog: '/api/blogs',
      ainews: '/api/ainews',
    };
    const endpoint = endpointMap[content.contentType];
    try {
      console.log('onLicking edit button', content)
      const res = await axios.get(`${endpoint}/${content.slug}`);
      const data: ContentDetails = res.data;
      const formData: FormValues = {
        slug: data.slug || '',
        contentType: data.contentType,
        coverImage: data.coverImage || '',
        title: data.title || '',
        publishDate: data.publishDate || '',
        readTime: data.readTime || '',
        authorName: data.author.name || '',
        authorRole: data.author.role || '',
        metaDescription: data.metaDescription || '',
        metaKeywords: data.metaKeywords || '',
        metaAuthor: data.metaAuthor || '',
        metaTitle: data.metaTitle || '',
        tldr: data.tldr,
        sections: data.sections.map((section) => ({
          id: section.title + Math.random().toString(), // Generate new id
          title: section.title || '',
          content: section.content.map((block) => ({
            id: block.title + Math.random().toString(),
            type: block.type || 'paragraph',
            content: block.type === 'table' ? block.content : block.content || '',
            src: block.src || '',
            alt: block.alt || '',
            caption: block.caption || '',
            title: block.title || '',
          })),
        })),
      };
      setInitialValues(formData);
      setIsEditing(true);
      setEditingContentId(content.slug);
      setActiveTab('create');
    } catch (error: any) {
      console.error('Error fetching content for edit:', error);
      alert(error.response?.data?.message || 'Error fetching content details.');
    }
  };

  const handleDelete = async (content: ContentSummary) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this ${content.contentType === 'caseStudy'
        ? 'Case Study'
        : content.contentType === 'blog'
          ? 'Blog'
          : 'AINEWS'
      }?`
    );
    if (!confirmDelete) return;

    const endpointMap: Record<ContentType, string> = {
      caseStudy: '/api/case-studies',
      blog: '/api/blogs',
      ainews: '/api/ainews',
    };
    const endpoint = endpointMap[content.contentType];
    try {
      const res = await axios.delete(`${endpoint}/${content.slug}`);
      if (res.status === 200 || res.status === 204) {
        alert(
          `${content.contentType === 'caseStudy'
            ? 'Case Study'
            : content.contentType === 'blog'
              ? 'Blog'
              : 'AINEWS'
          } deleted successfully!`
        );
      } else {
        alert(`Error: ${res.data.message}`);
      }
    } catch (error: any) {
      console.error('Error deleting content:', error);
      alert(error.response?.data?.message || 'Error deleting content.');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedContent(null);
    setContentDetails(null);
    setDetailsError('');
  };

  const handleAfterSubmit = () => {

    setIsEditing(false);
    setEditingContentId(null);
    setInitialValues(undefined);
  };

  return (
    <div className={styles.adminPanel}>
      <h1>{isEditing ? 'Edit Content' : 'Admin Panel'}</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'create' ? styles.active : ''}`}
          onClick={() => setActiveTab('create')}
        >
          {isEditing ? 'Edit Content' : 'Create Content'}
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'view' ? styles.active : ''}`}
          onClick={() => setActiveTab('view')}
        >
          View Content
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'jobs' ? styles.active : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          Manage Jobs
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'create' && (
          <ContentForm
            isEditing={isEditing}
            editingContentId={editingContentId}
            initialValues={initialValues}
            onAfterSubmit={handleAfterSubmit}
            setActiveTabToView={()=> { setActiveTab('view')}}
          />
        )}
        {activeTab === 'view' && (
          <ContentList onEdit={handleEdit} onView={handleView} onDelete={handleDelete} />
        )}
        {activeTab === 'jobs' && <JobPostingsManagement />}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        {detailsLoading ? (
          <p>Loading...</p>
        ) : detailsError ? (
          <p className={styles.error}>{detailsError}</p>
        ) : contentDetails ? (
          <div className={styles.modalContentInner}>
            <h2>{contentDetails.title}</h2>
            {/* <img
              src={contentDetails.coverImage}
              alt={contentDetails.title}
              className={styles.coverImage}
            /> */}
            <Image
              src={contentDetails.coverImage}
              alt={contentDetails.title}
              width={100}
              height={50}
              className={styles.coverImage} />
            <div className={styles.metadata}>
              <span>Publish Date: {contentDetails.publishDate}</span>
              <span>•</span>
              <span>Read Time: {contentDetails.readTime}</span>
            </div>
            <div className={styles.author}>
              <span>By</span>
              <span className={styles.authorName}>{contentDetails.author.name}</span>
              <span className={styles.authorRole}>({contentDetails.author.role})</span>
            </div>
            {contentDetails.sections?.map((section, sectionIndex) => (
              <div key={sectionIndex} className={styles.section}>
                <h3>{section.title}</h3>
                {section.content?.map((block, blockIndex) => {
                  switch (block.type) {
                    case 'paragraph':
                      return (
                        <p
                          key={blockIndex}
                          dangerouslySetInnerHTML={{
                            __html: typeof block.content === 'string' ? block.content : 'Sample paragraph content.',
                          }}
                        ></p>
                      );
                    case 'quote':
                      return (
                        <blockquote key={blockIndex} className={styles.quote}>
                          {typeof block.content === 'string' ? block.content : 'Sample quote content.'}
                        </blockquote>
                      );
                    case 'highlight':
                      return (
                        <div key={blockIndex} className={styles.highlight}>
                          {typeof block.content === 'string' ? block.content : 'Sample highlight content.'}
                        </div>
                      );
                    case 'code':
                      return (
                        <pre key={blockIndex} className={styles.codeBlock}>
                          <code>{typeof block.content === 'string' ? block.content : '// Sample code snippet'}</code>
                        </pre>
                      );
                    case 'image':
                      return (
                        <figure key={blockIndex} className={styles.imageBlock}>
                          {/* <img
                            src={block.src || 'https://via.placeholder.com/600x400'}
                            alt={block.alt || 'Image'}
                            className={styles.image}
                          /> */}
                          <Image
                            src={block.src || 'https://via.placeholder.com/600x400'}
                            alt={block.alt || 'Image'}
                            className={styles.image}
                            width={100}
                            height={50}
                            />
                          {block.caption && (
                            <figcaption className={styles.caption}>{block.caption}</figcaption>
                          )}
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
                          {block.caption && (
                            <div className={styles.caption}>{block.caption}</div>
                          )}
                        </div>
                      );
                    case 'table':
                      return (
                        <table className={styles.dynamicTable} key={blockIndex}>
                          <thead>
                            <tr>
                              {/* Render column headers */}
                              {block.content && typeof block.content !== 'string' && 'headers' in block.content ? (
                                block.content.headers.map((heading, colIndex) => (
                                  <th key={colIndex} className={styles.heading}>
                                    {heading}
                                  </th>
                                ))
                              ) : (
                                <th>No Headers</th>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {/* Render rows and cells */}
                            {block.content && typeof block.content !== 'string' && 'rows' in block.content ? (
                              block.content.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((cell, colIndex) => (
                                    <td key={colIndex} className={styles.cell}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td>No Rows</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      )
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

export default AdminPanel;
