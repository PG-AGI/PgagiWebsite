// NormalScrapedContent.tsx

import React from 'react';
//import { ChevronDown } from 'lucide-react';
import {FaChevronDown} from 'react-icons/fa';
import styles from './WebScrapingPage.module.scss';

interface NormalScrapedContentProps {
  content: { [key: string]: string };
}

const NormalScrapedContent: React.FC<NormalScrapedContentProps> = ({ content }) => {
  return (
    <>
      {Object.keys(content).map((url, index) => (
        <div key={index} className={styles.scrapedItem}>
          <details className={styles.details}>
            <summary className={styles.summary}>
              <span className={styles.url}>{url}</span>
              <FaChevronDown className={styles.chevronIcon} />
            </summary>
            <div className={styles.content}>
              <p>{content[url]}</p>
            </div>
          </details>
        </div>
      ))}
    </>
  );
};

export default NormalScrapedContent;
