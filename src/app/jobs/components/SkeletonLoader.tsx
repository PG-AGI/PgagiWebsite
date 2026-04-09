// SkeletonLoader.tsx
import React from 'react';
import styles from '@/styles/app/jobs/components/SkeletonLoader.module.scss';

const SkeletonLoader = () => {
  return (
    <div className={styles['skeleton-container']}>
      <div className={styles['content-container']}>
        {/* Back button skeleton */}
        <div className={styles['back-button-skeleton']} />

        <div className={styles['skeleton-card']}>
          {/* Header section */}
          <div className={styles['header-skeleton']}>
            <div className={styles['title-skeleton']} />
            <div className={styles['tags-skeleton']}>
              <div className={`${styles.tag} ${styles.department}`} />
              <div className={`${styles.tag} ${styles.location}`} />
              <div className={`${styles.tag} ${styles.type}`} />
            </div>
          </div>

          {/* Description section */}
          <div className={styles['description-skeleton']}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>

          {/* Responsibilities section */}
          <div className={styles['section-skeleton']}>
            <div className={styles['section-title-skeleton']} />
            <div className={styles['list-skeleton']}>
              <div className={styles['list-item']} />
              <div className={styles['list-item']} />
              <div className={styles['list-item']} />
            </div>
          </div>

          {/* Requirements section */}
          <div className={styles['section-skeleton']}>
            <div className={styles['section-title-skeleton']} />
            <div className={styles['list-skeleton']}>
              <div className={styles['list-item']} />
              <div className={styles['list-item']} />
              <div className={styles['list-item']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;