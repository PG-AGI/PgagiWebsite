// GPTScrapedContent.tsx

import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './WebScrapingPage.module.scss';

interface SubTopic {
  subheading: string;
  content: string;
}

interface StructuredContent {
  heading: string;
  content: string;
  subtopics: SubTopic[];
}

interface GPTScrapedContentProps {
  content: {
    title: string;
    url: string;
    summary: string;
    structured_content: StructuredContent[];
    key_concepts: string[];
    important_facts: string[];
  };
}

const GPTScrapedContent: React.FC<GPTScrapedContentProps> = ({ content }) => {
  return (
    <div className={styles.scrapedItem}>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <span className={styles.url}>{content.title || content.url}</span>
          <ChevronDown className={styles.chevronIcon} />
        </summary>
        <div className={styles.content}>
          <h3>Summary</h3>
          <p>{content.summary}</p>

          <h3>Structured Content</h3>
          {content.structured_content.map((section, secIndex) => (
            <div key={secIndex} className={styles.section}>
              <h4>{section.heading}</h4>
              <p>{section.content}</p>
              {section.subtopics && section.subtopics.length > 0 && (
                <ul>
                  {section.subtopics.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <strong>{sub.subheading}:</strong> {sub.content}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <h3>Key Concepts</h3>
          <ul>
            {content.key_concepts.map((concept, concIndex) => (
              <li key={concIndex}>{concept}</li>
            ))}
          </ul>

          <h3>Important Facts</h3>
          <ul>
            {content.important_facts.map((fact, factIndex) => (
              <li key={factIndex}>{fact}</li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};

export default GPTScrapedContent;
