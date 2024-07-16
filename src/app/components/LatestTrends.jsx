'use-client'
import React from 'react';
import LatestNews from '../LatestNews/LatestNews';
import styles from './LatestTrends.module.scss';
export default function LatestTrends() {
  return (
    <div className={styles.main}>
      <h6>Latest Trends & News</h6>
      <div>
        {LatestNews.map((latest, index) => (
          <div key={index} className={styles.newsitems}
            style={{ borderRadius: '30px' }} >
            <a
              href={latest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black block"
              style={{
                fontWeight: '400',
                textDecoration: 'none',
              }}
            >
              {latest.title}
              <p className="text-gray-500 mt-2">by {latest.author}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
