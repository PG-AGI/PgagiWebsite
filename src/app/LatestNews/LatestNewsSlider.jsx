"use-client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './LatestNewsSlider.module.scss';
const LatestNewsSlider = ({ latestPosts }) => {
  return (
    <div className={styles.main}>
      <div className={styles.sect}>
        {latestPosts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}
            className={styles.poster}
          >
            <div className={styles.poster} style={{ backgroundImage: `url(${post.thumbnail})` }}>
              <div className={styles.posterblur}></div>
              <div className={styles.postertitle}>
                <p className={styles.postername}>{post.title}</p>
                <p className={styles.posterdetails}>
                  By {post.author} • {post.publishDate}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsSlider;
