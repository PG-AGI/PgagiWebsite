// /components/AdminPanel/ContentList.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../management/Admin.module.scss';
import { ContentSummary, ContentType } from '@/utils/type';
import Image from 'next/image';

interface ContentListProps {
  onEdit: (content: ContentSummary) => void;
  onView: (content: ContentSummary) => void;
  onDelete: (content: ContentSummary) => void;
}

const ContentList: React.FC<ContentListProps> = ({ onEdit, onView, onDelete }) => {
  const [contents, setContents] = useState<ContentSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [filterType, setFilterType] = useState<'all' | ContentType>('all');

  const fetchContents = async () => {
    setLoading(true);
    setError('');
    try {
      const [csRes, blogsRes, ainewsRes] = await Promise.all([
        axios.get('/api/case-studies'),
        axios.get('/api/blogs'),
        axios.get('/api/ainews'),
      ]);
      const caseStudies: ContentSummary[] = csRes.data.map((cs: any) => ({
        slug: cs.slug,
        title: cs.title,
        coverImage: cs.coverImage,
        contentType: 'caseStudy',
      }));
      const blogs: ContentSummary[] = blogsRes.data.map((blog: any) => ({
        slug: blog.slug,
        title: blog.title,
        coverImage: blog.coverImage,
        contentType: 'blog',
      }));
      const ainews: ContentSummary[] = ainewsRes.data.map((news: any) => ({
        slug: news.slug,
        title: news.title,
        coverImage: news.coverImage,
        contentType: 'ainews',
      }));

      setContents([...caseStudies, ...blogs, ...ainews]);
    } catch (err: any) {
      console.error('Error fetching contents:', err);
      setError(err.response?.data?.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const filteredContents = contents.filter((cs) => {
    if (filterType === 'all') return true;
    return cs.contentType === filterType;
  });

  return (
    <div className={styles.contentList}>
      <h2>Existing Contents</h2>
      <div className={styles.filterContainer}>
        <label htmlFor="filterType">Filter by Type:</label>
        <select
          id="filterType"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as 'all' | ContentType)}
          className={styles.filterSelect}
        >
          <option value="all">All</option>
          <option value="caseStudy">Case Studies</option>
          <option value="blog">Blogs</option>
          <option value="ainews">AINEWS</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : filteredContents.length === 0 ? (
        <p>No contents found.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cover Image</th>
              <th>Title</th>
              <th>ID</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContents.map((cs) => (
              <tr key={cs.slug}>
                <td>
                  {/* <img src={cs.coverImage} alt={cs.title} className={styles.coverImage} /> */}
                  <Image
                    src={cs.coverImage}
                    alt={cs.title}
                    width={100}
                    height={50}
                    className={styles.coverImage} />
                </td>
                <td>{cs.title}</td>
                <td>{cs.slug}</td>
                <td>
                  {cs.contentType === 'caseStudy'
                    ? 'Case Study'
                    : cs.contentType === 'blog'
                      ? 'Blog'
                      : 'AINEWS'}
                </td>
                <td>
                  <button onClick={() => onView(cs)} className={styles.viewButton}>
                    View Details
                  </button>
                  <button onClick={() => onEdit(cs)} className={styles.editButton}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(cs)} className={styles.deleteButton}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContentList;
