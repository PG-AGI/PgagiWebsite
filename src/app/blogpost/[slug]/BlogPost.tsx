'use client'
import React, { useState, useEffect } from 'react';
import BlogPage from '@/app/blogpost/[slug]/BlogPage';
import styles from '@/app/blogpost/[slug]/BlogPage.module.scss';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
  const apiUrl = `${baseUrl}/api/blogs/${slug}`;

  useEffect(() => {
    // Async fetch inside useEffect
    const fetchBlogData = async () => {
      try {
        const res = await fetch(apiUrl, { cache: 'no-store' });

        if (!res.ok) {
          console.error('Failed to fetch blog data, status:', res.status);
          throw new Error('Failed to fetch blog data');
        }
        const blogData = await res.json();
        setBlogData(blogData);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchBlogData();
  }, []);

  if (loading) {
    return (
      <>
        <div className={styles.blogpg_skeletonPage}>
          <div className={styles.blogpg_skeletonLeft}>
            <div className={styles.blogpg_skeletonTitle}></div>
            <div className={styles.blogpg_skeletonText}></div>
            <div className={styles.blogpg_skeletonText}></div>
            <div className={styles.blogpg_skeletonText}></div>
          </div>
          <div className={styles.blogpg_skeletonMain}>
            <div className={styles.blogpg_skeletonArticleTitle}></div>
            <div className={styles.blogpg_skeletonArticleText}></div>
            <div className={styles.blogpg_skeletonArticleText}></div>
            <div className={styles.blogpg_skeletonArticleText}></div>
            <div className={styles.blogpg_skeletonImage}></div>
          </div>
          <div className={styles.blogpg_skeletonRight}>
            <div className={styles.blogpg_skeletonButton}></div>
            <div className={styles.blogpg_skeletonButton}></div>
            <div className={styles.blogpg_skeletonButton}></div>
          </div>
        </div>
      </>
    );
  }

  return <BlogPage data={blogData} />;
}