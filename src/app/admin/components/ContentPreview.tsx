'use client';
import React from 'react';
import styles from '../management/Admin.module.scss';
import { FormValues, ContentBlock } from '@/utils/type';

interface ContentPreviewProps {
  data: FormValues;
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ data }) => {
  return (
    <div className={styles.preview}>
      <h1>{data.title || 'Sample Title'}</h1>
      <div className={styles.metadata}>
        <span>{data.publishDate || 'Publish Date'}</span>
        <span className={styles.glowDot}></span>
        <span>{data.readTime || 'Read Time'}</span>
      </div>
      <div className={styles.author}>
        <span>By</span>
        <span className={styles.authorName}>
          {data.authorName || 'Author Name'}
        </span>
        <span className={styles.authorRole}>
          {data.authorRole ? `(${data.authorRole})` : '(Author Role)'}
        </span>
      </div>
      <div className={styles.header}>
        <h1>Metadata for SEO</h1>
        <h3 className={styles.boxHeading}>Meta Title</h3>
        <p>{data.metaTitle}</p>
        <h3 className={styles.boxHeading}>Meta Description</h3>
        <p>{data.metaDescription}</p>
        <h3 className={styles.boxHeading}>Meta Keywords</h3>
        <p>{data.metaKeywords}</p>
        <h3 className={styles.boxHeading}>Meta Author</h3>
        <p>{data.metaAuthor}</p>
      </div>
      {data.tldr && <div className={styles.header}>
        <div >
          <h3 className={styles.boxHeading}>{data.tldr?.heading}</h3>
          <p>{data.tldr?.text}</p>
        </div>
      </div>}
      {data.sections?.map((section, sIndex) => (
        <div key={section.id} className={styles.section}>
          <h2>{section.title || `Section ${sIndex + 1}`}</h2>
          {section.content?.map((block: ContentBlock) => {
            // Debugging: log table block content
            if (block.type === 'table') {
              console.log("Preview table block:", block.content);
            }
            switch (block.type) {
              case 'paragraph':
                return (
                  <p
                    key={block.id}
                    dangerouslySetInnerHTML={{
                      __html:
                        typeof block.content === 'string'
                          ? block.content
                          : 'Sample paragraph content.',
                    }}
                  />
                );
              case 'quote':
                return (
                  <blockquote key={block.id} className={styles.quote}>
                    {typeof block.content === 'string'
                      ? block.content
                      : 'Sample quote content.'}
                  </blockquote>
                );
              case 'highlight':
                return (
                  <div key={block.id} className={styles.highlight}>
                    {typeof block.content === 'string'
                      ? block.content
                      : 'Sample highlight content.'}
                  </div>
                );
              case 'code':
                return (
                  <pre key={block.id} className={styles.codeBlock}>
                    <code>
                      {typeof block.content === 'string'
                        ? block.content
                        : '// Sample code snippet'}
                    </code>
                  </pre>
                );
              case 'image':
                return (
                  <figure key={block.id} className={styles.imageBlock}>
                    <img
                      src={block.src || 'https://via.placeholder.com/600x400'}
                      alt={block.alt || 'Image'}
                      className={styles.image}
                    />
                    {block.caption && (
                      <figcaption className={styles.caption}>
                        {block.caption}
                      </figcaption>
                    )}
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
                    />
                    {block.caption && (
                      <div className={styles.caption}>{block.caption}</div>
                    )}
                  </div>
                );
              case 'table': {
                if (
                  block.content &&
                  typeof block.content !== 'string' &&
                  'headers' in block.content &&
                  'rows' in block.content
                ) {
                  const tbl = block.content as { headers: string[]; rows: string[][] };
                  return (
                    <table className={styles.dynamicTable} key={block.id}>
                      <thead>
                        <tr>
                          {tbl.headers && tbl.headers.length > 0 ? (
                            tbl.headers.map((heading, i) => (
                              <th key={i} className={styles.heading}>
                                {heading}
                              </th>
                            ))
                          ) : (
                            <th>No Headers</th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {tbl.rows && tbl.rows.length > 0 ? (
                          tbl.rows.map((row, r) => (
                            <tr key={r}>
                              {row.map((cell, c) => (
                                <td key={c} className={styles.cell}>
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
                  );
                } else {
                  return null;
                }
              }
              case 'box': {
                if (
                  block.content &&
                  typeof block.content !== 'string' &&
                  'heading' in block.content &&
                  'text' in block.content
                ) {
                  const values = block.content as { heading: string; text: string };

                  return (
                    <div className={styles.box}>
                      <h3 className={styles.boxHeading}>{values.heading}</h3>
                      <p>{values.text}</p>
                    </div>
                  );
                } else {
                  return null;
                }
              }
              default:
                return null;
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default ContentPreview;
