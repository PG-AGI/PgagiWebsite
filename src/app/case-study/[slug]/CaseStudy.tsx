'use client';

import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { Link2, ArrowUp } from 'lucide-react'; 
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

import Navigation from '@/app/components/base/Navigation';
import Footer from '@/app/components/Footer';
import Recommendation from '@/app/components/Recommendation';
import { AiOutlineCopy } from 'react-icons/ai';
import styles from './CaseStudy.module.scss';

type CaseStudy = {
  slug: string;
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
  | { type: 'video'; src: string; title?: string; caption?: string }
  | { type: 'table'; content: { headers: string[]; rows: string[][] } }
  | { type: 'box'; content: { heading: string; text: string } };

// Add type for params
type Params = {
  slug: string;
}

const CaseStudy = () => {
  const router = useRouter();
  const params = useParams() as Params; // Type assertion to ensure params.slug is string
  const slug = params.slug;

  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (!slug) {
      setError('No case study slug provided.');
      return;
    }

    const fetchCaseStudy = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`/api/case-studies/${slug}`);
        const data: CaseStudy = response.data;
        setCaseStudy(data);
        console.log('case study data is here', data);
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
          `Error: ${err.response?.status} ${err.response?.statusText}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);
  useEffect(() => {
    if (!caseStudy) return;
  
    sectionRefs.current = caseStudy.sections.map((section) =>
      document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))
    );
  
    const handleScroll = () => {
      // Use scrollY instead of pageYOffset
      const pageTop = window.scrollY; 
      const sections = sectionRefs.current;
  
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
  
          if (pageTop >= sectionTop && pageTop < sectionBottom) {
            const activeSectionId = caseStudy.sections[i].title.toLowerCase().replace(/\s+/g, '-');
            setActiveSection(activeSectionId);
  
            // Scroll the corresponding `li` into view
            const activeListItem = document.querySelector(`li[data-section="${activeSectionId}"]`) as HTMLElement;
            if (activeListItem) {
              const sidebar = activeListItem.closest('.sidebar') as HTMLElement; // Ensure sidebar is scrollable
              if (sidebar && sidebar.scrollHeight > sidebar.clientHeight) {
                const listItemTop = activeListItem.offsetTop;
                const listItemBottom = listItemTop + activeListItem.offsetHeight;
  
                // Scroll `li` into view if it is outside the visible range
                if (
                  listItemTop < sidebar.scrollTop || // Above visible area
                  listItemBottom > sidebar.scrollTop + sidebar.clientHeight // Below visible area
                ) {
                  sidebar.scrollTo({
                    top: listItemTop - sidebar.clientHeight / 2, // Scroll to bring `li` to the center
                    behavior: 'smooth',
                  });
                }
              }
            }
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
  
      // Ensure the corresponding `li` is also brought into view
      const activeListItem = document.querySelector(`li[data-section="${sectionId}"]`) as HTMLElement;
      if (activeListItem) {
        const sidebar = activeListItem.closest('.sidebar') as HTMLElement;
        if (sidebar) {
          // Directly use `scrollIntoView` for the `li` item
          activeListItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center', // Centers the `li` in the sidebar
          });
        }
      }
    }
  };
  
  
  
  
  // Scroll-to-top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const currentUrl =
    typeof window !== 'undefined' ? window.location.origin : '';

  // Optional: build a more "friendly" share URL (with slug)
  const generateCaseStudyUrl = () => {
    if (!caseStudy) return currentUrl;
    const formattedTitle = caseStudy.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    // e.g., https://yoursite.com/case-studies/:id/title-here
    return `${currentUrl}/case-studies/${caseStudy.slug}/${formattedTitle}`;
  };

  const caseStudyUrl = generateCaseStudyUrl();

  const shareUrls = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      caseStudyUrl
    )}&title=${encodeURIComponent(caseStudy?.title || '')}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      caseStudyUrl
    )}&text=${encodeURIComponent(caseStudy?.title || '')}`,
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
  };
  // const handleScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className={styles.container}>
          <main className={styles.main}>
            {/* Loading Skeleton */}
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
                        <button
                          className={`${styles.navButton} ${styles.skeletonButton}`}
                        ></button>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.social}>
                    <h3></h3>
                    <div className={styles.socialLinks}>
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div
                          key={index}
                          className={`${styles.socialButton} ${styles.skeletonCircle}`}
                        ></div>
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
      <Head>

        <title>{caseStudy.title}</title>
        <meta name="description" content={`Read about ${caseStudy.title}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={caseStudy.title} />
        <meta
          property="og:description"
          content={`Insightful case study on "${caseStudy.title}".`}
        />
        <meta
          property="og:url"
          content={caseStudyUrl}
        />
        <meta
          property="og:image"
          content={caseStudy.coverImage || `${currentUrl}/fallback-image.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={caseStudy.title} />
        <meta
          name="twitter:description"
          content={`Discover how we tackled "${caseStudy.title}".`}
        />
        <meta
          name="twitter:image"
          content={caseStudy.coverImage || `${currentUrl}/fallback-image.jpg`}
        />
      </Head>

      <Navigation />
      {/* <div className={styles.container}>
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
              <div className={styles.sidebarHeader}>
                <h3 className={styles.navigationHeading}>Summary</h3>
              </div>
              <div className={styles.navScroll}>
                <ul className={styles.navigation}>
                  {caseStudy.sections.map((section) => (
                    <li key={section.title}>
                      <button
                        onClick={() =>
                          scrollToSection(
                            section.title.toLowerCase().replace(/\s+/g, '-')
                          )
                        }
                        className={`${styles.navButton} ${
                          activeSection ===
                          section.title.toLowerCase().replace(/\s+/g, '-')
                            ? styles.active
                            : ''
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

      
              <div className={styles.sidebarFooter}>
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
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          ></p>
                        );
                      case 'quote':
                        return (
                          <blockquote
                            key={index}
                            className={styles.quote}
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          ></blockquote>
                        );
                      case 'highlight':
                        return (
                          <div
                            key={index}
                            className={styles.highlight}
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          ></div>
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
                              <figcaption className={styles.caption}>
                                {block.caption}
                              </figcaption>
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
                              <div className={styles.caption}>
                                {block.caption}
                              </div>
                            )}
                          </div>
                        );
                      case 'table':
                        return (
                          <table
                            key={index}
                            className={styles.dynamicTable}
                          >
                            <thead>
                              <tr>
                                {block.content.headers.map((heading, colIndex) => (
                                  <th key={colIndex} className={styles.heading}>
                                    {heading}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.content.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((cell, colIndex) => (
                                    <td key={colIndex} className={styles.cell}>
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
                          <div key={index} className={styles.box}>
                            <h3 className={styles.boxHeading}>
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
          </div>
        </main>

        <button
          className={styles.scrollToTopButton}
          onClick={handleScrollToTop}
          aria-label="Scroll to Top"
        >
          <ArrowUp />
        </button>
      </div>
      <Recommendation currentSlug={params.slug} contentType="caseStudy" />
      <Footer />
    </>
  );
}; */}
<div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.flexrow}>
          <div className={styles.content}>
      
            <aside className={styles.blogpg_leftAside}>
            <div className={styles.blogpg_stickyDiv}>
              <div className={styles.blogpg_index}>
                <h1>INDEX</h1>
              </div>
              <ul className={styles.blogpg_navigation}>
                {caseStudy.sections.map((section) => {
                  const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <li
                      key={section.title}
                      data-section={sectionId}
                      className={
                        activeSection === sectionId ? styles.blogpg_active : ''
                      }
                      onClick={() => scrollToSection(sectionId)}
                    >
                      {section.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
            <article className={styles.article}>
            <div className={styles.metadata}>
              <span className={styles.publishDate}>{caseStudy.publishDate}</span>
              <span className={styles.glowDot}></span>
              <span className={styles.readTime}>{caseStudy.readTime}</span>
            </div>
            <h1 className={styles.title}>{caseStudy.title}</h1>
            <div className={styles.flexWrapper}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{caseStudy.author.name}</span>
                <span className={styles.separator}>|</span>
                <span className={styles.authorDesignation}>
                  {caseStudy.author.role}
                </span>
              </div>
            </div>

          {/* {caseStudy.tldr && (
            <div className={styles.header}>
              <div className={styles.flexWrapper}>

                <h2>TL; DR (60-second blog summary)</h2>
                
                <div className={styles.metadata}>

                  <span className={styles.glowDot}></span>
                  <span className={styles.readTime}>60 seconds</span>
                </div>
              </div>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogPost.tldr?.text,
                  }}
                ></p>
              </div>
            </div>
          )} */}
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
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          ></p>
                        );
                      case 'quote':
                        return (
                          <blockquote
                            key={index}
                            className={styles.quote}
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          ></blockquote>
                        );
                      case 'highlight':
                        return (
                          <div
                            key={index}
                            className={styles.highlight}
                            dangerouslySetInnerHTML={{ __html: block.content }}
                          ></div>
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
                              <figcaption className={styles.caption}>
                                {block.caption}
                              </figcaption>
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
                              <div className={styles.caption}>
                                {block.caption}
                              </div>
                            )}
                          </div>
                        );
                      case 'table':
                        return (
                          <table key={index} className={styles.dynamicTable}>
                            <thead>
                              <tr>
                                {block.content.headers.map((heading, colIndex) => (
                                  <th key={colIndex} className={styles.heading}>
                                    {heading}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.content.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((cell, colIndex) => (
                                    <td key={colIndex} className={styles.cell}>
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
                          <div key={index} className={styles.box}>
                            <h3 className={styles.boxHeading}>
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

            
          </div>
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
        </main> 
        <button
          className={styles.scrollToTopButton}
          onClick={handleScrollToTop}
          aria-label="Scroll to Top"
        >
          <ArrowUp />
        </button>
        </div>
      <Recommendation currentSlug={params.slug} contentType="caseStudy" />
      <Footer />
    </>
  );
};

export default CaseStudy;
