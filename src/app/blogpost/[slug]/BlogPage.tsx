'use client';
import React, { useEffect, useState } from 'react';
import styles from './BlogPage.module.scss';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { AiOutlineCopy } from 'react-icons/ai';

import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useRouter } from 'next/navigation';

type dataType = {
  id?: string;
  slug: string;
  contentType: string;
  coverImage: string;
  title: string;
  description?: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  metaDescription?: string;
  metaKeywords?: string;
  metaAuthor?: string;
  metaTitle?: string;
  tldr: {
    heading: string;
    text: string;
  };
  sections: {
    title: string;
    content: ContentBlock[];
  }[];
  createdAt: string;
  updatedAt: string;
};

type ContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'quote'; content: string }
  | { type: 'highlight'; content: string }
  | { type: 'code'; content: string }
  | { type: 'image'; content: { src: string; alt: string; caption: string } }
  | { type: 'video'; content: { src: string; title: string; caption: string } }
  | { type: 'table'; content: { headers: string[]; rows: string[][] } }
  | { type: 'box'; content: { heading: string; text: string } };

interface BlogPageProps {
  data: dataType;
}

function BlogPage({ data }: BlogPageProps) {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 900);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Variables for scrolling logic
  const SCROLL_OFFSET = 50;
  let scrollingManually = false;
  let lastScrollY = window.scrollY;

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!data?.sections || scrollingManually) return;

      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      let foundActive: string | null = null;
      const scrollingDown = scrollPosition > lastScrollY;
      lastScrollY = scrollPosition;

      data.sections.forEach((section) => {
        const sectionElement = document.getElementById(
          section.title.toLowerCase().replace(/\s+/g, '-')
        );
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (
            scrollPosition >= offsetTop - SCROLL_OFFSET &&
            scrollPosition < offsetTop + offsetHeight - SCROLL_OFFSET
          ) {
            foundActive = sectionElement.id;
          }
        }
      });

      if (foundActive) {
        setActiveSection(foundActive);

        const activeNavItem = document.querySelector(`[data-section="${foundActive}"]`);
        if (activeNavItem) {
          const rect = (activeNavItem as HTMLElement).getBoundingClientRect();
          const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (!isPartiallyVisible) {
            (activeNavItem as HTMLElement).scrollIntoView({
              behavior: 'smooth',
              block: scrollingDown ? 'end' : 'nearest',
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data, isMobile]);
 

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      scrollingManually = true;
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
      setTimeout(() => (scrollingManually = false), 500);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert('Code copied successfully');
  };

  const shareUrls: Record<'linkedin' | 'twitter', string> = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      location.href
    )}&title=${encodeURIComponent(data?.title)}&summary=${encodeURIComponent(
      data?.description || ''
    )}&source=${encodeURIComponent(location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      location.href
    )}&text=${encodeURIComponent(location.href)}`,
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
  };

  return (
<div className={styles.blogpg_wrapper}>
  <div className={styles.blogpg_container}>
    {!isMobile && (
      <aside className={styles.blogpg_leftAside}>
        <div className={styles.blogpg_stickyDiv}>
          <div className={styles.blogpg_index}>
            <h1>INDEX</h1>
          </div>
          <ul className={styles.blogpg_navigation}>
            {/* Check if data.sections is available */}
            {data?.sections?.map((section) => {
              const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <li
                  key={section.title}
                  data-section={sectionId}
                  className={activeSection === sectionId ? styles.blogpg_active : ''}
                  onClick={() => scrollToSection(sectionId)}
                >
                  {section.title}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    )}

    <article className={styles.blogpg_articleContainer}>
      <h1 className={styles.blogpg_heading}>{data.title}</h1>
      <p className={styles.blogpg_shortDescription}>
        {data.metaDescription || ''}
      </p>

      <div className={styles.blogpg_metadata}>
        <p>
          Author <span>{data.author.name}</span>
        </p>
        <div>
          <p>
            Date <span>{data.publishDate}</span>
          </p>
          <p>
            Read-Time{' '}
            <span className={styles.blogpg_glowDot}></span>{' '}
            <span>{data.readTime}</span>
          </p>
        </div>
      </div>

      {isMobile && (
        <aside className={styles.blogpg_leftAside}>
          <div className={styles.blogpg_stickyDiv}>
            <div className={styles.blogpg_index}>
              <h1>INDEX</h1>
            </div>
            <ul className={styles.blogpg_navigation}>
              {/* Check if data.sections is available */}
              {data?.sections?.map((section) => {
                const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li
                    key={section.title}
                    data-section={sectionId}
                    className={activeSection === sectionId ? styles.blogpg_active : ''}
                    onClick={() => scrollToSection(sectionId)}
                  >
                    {section.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      )}

      {data.contentType === 'blog' && (
        <div className={styles.blogpg_tldr}>
          <h2>TL; DR (60-second blog summary)</h2>
          <p
          
            className="blogpg_paragraph_him text-black" 
            dangerouslySetInnerHTML={{
              __html: data.tldr.text,
            }}
          ></p>
        </div>
      )}

      {/* Check if data.sections is available */}
      {data?.sections?.map((section) => (
        <section
          key={section.title}
          id={section.title.toLowerCase().replace(/\s+/g, '-')}
          className={styles.blogpg_section}
        >
          <h2 className={styles.blogpg_sectionHeading}>{section.title}</h2>
          {section.content.map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <p
                    key={index}
                    className={styles.blogpg_paragraph}
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  ></p>
                );
              case 'quote':
                return (
                  <blockquote
                    key={index}
                    className={styles.blogpg_quote}
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  ></blockquote>
                );
              case 'highlight':
                return (
                  <div
                    key={index}
                    className={styles.blogpg_highlight}
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  ></div>
                );
              case 'code':
                return (
                  <pre key={index} className={styles.blogpg_codeBlock}>
                    <SyntaxHighlighter
                      language="javascript"
                      style={atomOneDark}
                      customStyle={{
                        padding: '2rem 1.5rem 1.5rem 1.5rem',
                        fontSize: '14px',
                        borderRadius: '1rem',
                      }}
                    >
                      {block.content}
                    </SyntaxHighlighter>
                    <div
                      className={styles.blogpg_copyCode}
                      onClick={() => handleCopyCode(block.content)}
                    >
                      copy
                    </div>
                  </pre>
                );
              case 'image':
                return (
                  <figure key={index} className={styles.blogpg_imageBlock}>
                    <Image
                      src={block.content.src}
                      alt={block.content.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                    {block.content.caption && (
                      <figcaption className={styles.blogpg_caption}>
                        {block.content.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              case 'video':
                return (
                  <div key={index} className={styles.blogpg_videoBlock}>
                    <iframe
                      src={block.content.src}
                      title={block.content.title || 'Video'}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.blogpg_video}
                    ></iframe>
                    {block.content.caption && (
                      <div className={styles.blogpg_caption}>
                        {block.content.caption}
                      </div>
                    )}
                  </div>
                );
              case 'table':
                return (
                  <table key={index} className={styles.blogpg_dynamicTable}>
                    <thead>
                      <tr>
                        {block.content.headers.map((heading, colIndex) => (
                          <th key={colIndex} className={styles.blogpg_heading}>
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.content.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, colIndex) => (
                            <td key={colIndex} className={styles.blogpg_cell}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              case 'box':
                return (
                  <div key={index} className={styles.blogpg_box}>
                    <h3 className={styles.blogpg_boxHeading}>
                      {block.content.heading}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: block.content.text,
                      }}
                    ></p>
                  </div>
                );
              default:
                return null;
            }
          })}
        </section>
      ))}
    </article>

    <aside className={styles.blogpg_rightAside}>
      <div className={styles.blogpg_stickyDiv}>
        <h1 className={styles.blogpg_heading}>Share Article</h1>
        <div className={styles.blogpg_shareElement} onClick={handleCopyLink}>
          <AiOutlineCopy size={'24px'} />
          <p>Copy link</p>
        </div>
        <div
          className={styles.blogpg_shareElement}
          onClick={() => handleShare('linkedin')}
        >
          <FaLinkedin size={'24px'} />
          <p>Post on Linkedin</p>
        </div>
        <div
          className={styles.blogpg_shareElement}
          onClick={() => handleShare('twitter')}
        >
          <FaSquareXTwitter size={'24px'} />
          <p>Post on X</p>
        </div>
        <div className={styles.blogpg_exploreToing}>
          <button onClick={() => (window.location.href = 'https://app.toingg.com/')}>
            Explore Toingg
          </button>
        </div>
      </div>
    </aside>
  </div>
</div>

  );
}

export default BlogPage;

