'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CaseStudy.module.scss';
import { Link2 } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Navigation from '@/app/components/base/Navigation';
import Footer from '@/app/components/Footer';
import axios from 'axios';

type CaseStudy = {
  id: string;
  coverImage: string;
  title: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
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
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; src: string; title?: string; caption?: string };

const CaseStudy = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    if (!id) {
      setError('No case study ID provided.');
      return;
    }

    const fetchCaseStudy = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`/api/case-studies/${id}`);
        const data: CaseStudy = response.data;
        setCaseStudy(data);
      } catch (err: any) {
        setError(err.response?.data?.message || `Error: ${err.response?.status} ${err.response?.statusText}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id]);

  useEffect(() => {
    if (!caseStudy) return;

    sectionRefs.current = caseStudy.sections.map(
      (section) => document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))
    );

    const handleScroll = () => {
      const pageTop = window.pageYOffset;
      const sections = sectionRefs.current;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (pageTop >= sectionTop && pageTop < sectionBottom) {
            setActiveSection(caseStudy.sections[i].title.toLowerCase().replace(/\s+/g, '-'));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [caseStudy]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareUrls = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent(caseStudy?.title || '')}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(caseStudy?.title || '')}`,
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className={styles.container}>
          <main className={styles.main}>
            <header className={`${styles.header} ${styles.skeletonHeader}`}>
              <div className={`${styles.metadata} ${styles.skeleton}`}>
                <div className={styles.skeletonLine}></div>
                <div className={`${styles.glowDot} ${styles.skeletonDot}`}></div>
                <div className={styles.skeletonLineShort}></div>
              </div>
              <h1 className={`${styles.title} ${styles.skeletonTitle}`}></h1>
              <div className={`${styles.author} ${styles.skeleton}`}>
                <div className={styles.skeletonCircle}></div>
                <div className={styles.skeletonLine}></div>
                <div className={styles.separator}></div>
                <div className={styles.skeletonLineShort}></div>
              </div>
            </header>

            <div className={styles.content}>
              <aside className={`${styles.sidebar} ${styles.skeletonSidebar}`}>
                <nav>
                  <h3 className={styles.navigationHeading}></h3>
                  <ul className={styles.navigation}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <li key={index}>
                        <button className={`${styles.navButton} ${styles.skeletonButton}`}></button>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.social}>
                    <h3></h3>
                    <div className={styles.socialLinks}>
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className={`${styles.socialButton} ${styles.skeletonCircle}`}></div>
                      ))}
                    </div>
                  </div>
                </nav>
              </aside>

              <article className={`${styles.article} ${styles.skeletonArticle}`}>
                {Array.from({ length: 3 }).map((_, sectionIndex) => (
                  <section key={sectionIndex} className={styles.section}>
                    <h2 className={styles.skeletonLine}></h2>
                    {Array.from({ length: 3 }).map((_, paragraphIndex) => (
                      <p key={paragraphIndex} className={styles.skeletonLine}></p>
                    ))}
                  </section>
                ))}
              </article>
            </div>
          </main>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.error}>{error}</p>
        <button onClick={() => router.back()} className={styles.backButton}>
          Go Back
        </button>
      </div>
    );
  }

  if (!caseStudy) {
    return null;
  }

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          <header className={styles.header}>
            <div className={styles.metadata}>
              <span className={styles.publishDate}>{caseStudy.publishDate}</span>
              <span className={styles.glowDot}></span>
              <span className={styles.readTime}>{caseStudy.readTime}</span>
            </div>
            <h1 className={styles.title}>{caseStudy.title}</h1>
          </header>

          <div className={styles.content}>
            <aside className={styles.sidebar}>
              <nav>
                <h3 className={styles.navigationHeading}>Summary</h3>
                <ul className={styles.navigation}>
                  {caseStudy.sections.map((section) => (
                    <li key={section.title}>
                      <button
                        onClick={() =>
                          scrollToSection(section.title.toLowerCase().replace(/\s+/g, '-'))
                        }
                        className={`${styles.navButton} ${
                          activeSection === section.title.toLowerCase().replace(/\s+/g, '-')
                            ? styles.active
                            : ''
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className={styles.social}>
                  <h3>Share this case study</h3>
                  <div className={styles.socialLinks}>
                    <a
                      href={shareUrls.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className={styles.socialButton}
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={shareUrls.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                      className={styles.socialButton}
                    >
                      <FaSquareXTwitter />
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className={styles.copyButton}
                      aria-label="Copy Link"
                    >
                      <Link2 />
                    </button>
                  </div>
                </div>
              </nav>
            </aside>

            <article className={styles.article}>
              {caseStudy.sections.map((section) => (
                <section
                  key={section.title}
                  id={section.title.toLowerCase().replace(/\s+/g, '-')}
                  className={styles.section}
                >
                  <h2>{section.title}</h2>
                  {section.content.map((block, index) => {
                    switch (block.type) {
                      case 'paragraph':
                        return (
                          <p key={index} dangerouslySetInnerHTML={{ __html: block.content }}></p>
                        );
                      case 'quote':
                        return (
                          <blockquote key={index} className={styles.quote}>
                            {block.content}
                          </blockquote>
                        );
                      case 'highlight':
                        return (
                          <div key={index} className={styles.highlight}>
                            {block.content}
                          </div>
                        );
                      case 'code':
                        return (
                          <pre key={index} className={styles.codeBlock}>
                            <code>{block.content}</code>
                          </pre>
                        );
                      case 'image':
                        return (
                          <figure key={index} className={styles.imageBlock}>
                            <Image
                              src={block.src}
                              alt={block.alt}
                              className={styles.image}
                              width={800}
                              height={600}
                            />
                            {block.caption && (
                              <figcaption className={styles.caption}>{block.caption}</figcaption>
                            )}
                          </figure>
                        );
                      case 'video':
                        return (
                          <div key={index} className={styles.videoBlock}>
                            <iframe
                              src={block.src}
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
                      default:
                        return null;
                    }
                  })}
                </section>
              ))}
            </article>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudy;
