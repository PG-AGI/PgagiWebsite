'use client';

import Head from 'next/head';
import { useEffect, useRef, useState, WheelEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { Link2, ArrowUp } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

import Navigation from '@/app/components/base/Navigation';
import Footer from '@/app/components/Footer';

import styles from './CaseStudy.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import '../../globals.css';
import DarkModeToggle from '@/app/components/ThemeToggle';
import '../../globals.css';


type caseStudy = {
  slug: string;
  title: string;
  coverImage: string;
};

type CaseStudy = {
  slug: string;
  coverImage: string;
  title: string;
  description: string;
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

const CaseStudy = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;

  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loadingCaseStudies, setLoadingCaseStudies] = useState<boolean>(false);
  const [errorCaseStudies, setErrorCaseStudies] = useState<string>('');
  const sliderRef = useRef<Slider | null>(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(()=>{
		localStorage.setItem('theme', 'light');
		document.documentElement.setAttribute("data-theme", "light");
	  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const fetchCaseStudies = async () => {
      setLoadingCaseStudies(true);
      setErrorCaseStudies('');
      try {
        const response = await fetch('/api/case-studies');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: CaseStudy[] = await response.json();
        const restData = data.filter(item => item.slug != slug)
        setCaseStudies(restData);
      } catch (error: any) {
        setErrorCaseStudies(error.message || 'An unexpected error occurred.');
      } finally {
        setLoadingCaseStudies(false);
      }
    };
    fetchCaseStudies()
  }, [])

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
    if (isMobile) return;
    if (isMobile) return;
    const handleScroll = () => {
      if (!caseStudy?.sections) return;

      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      let foundActive = null;

      caseStudy.sections.forEach((section) => {
        const sectionElement = document.getElementById(
          section.title.toLowerCase().replace(/\s+/g, '-')
        );

        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight - 50
          ) {
            foundActive = sectionElement.id;
          }
        }
      });

      if (foundActive) {
        setActiveSection(foundActive);

        // Ensure the corresponding <li> scrolls into view
        const activeNavItem = document.querySelector(`[data-section="${foundActive}"]`);
        if (activeNavItem) {
          activeNavItem.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [caseStudy, isMobile]);



  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId); // Immediately set active
    }
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


  const shareUrls: Record<'linkedin' | 'twitter', string> = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${location.href}&title=${caseStudy?.title || ''}&summary=${caseStudy?.description || ''}&source=${window.location.origin}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(caseStudyUrl)}&text=${encodeURIComponent(caseStudy?.title || '')}`,
  };
  
  
  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
  };
  
  

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    draggable: true,
    touchMove: true,
    nextArrow: <div className="customNextArrow"><FontAwesomeIcon icon={faChevronLeft} size='2x' /></div>,  // Custom next arrow
    prevArrow: <div className="customPrevArrow"><FontAwesomeIcon icon={faChevronRight} size='2x' /></div>,
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className={styles.skeletonPage}>
          {/* Left Sidebar (Indexes) */}
          <div className={styles.skeletonLeft}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonText}></div>
          </div>

          {/* Main Content (Articles) */}
          <div className={styles.skeletonMain}>
            <div className={styles.skeletonArticleTitle}></div>
            <div className={styles.skeletonArticleText}></div>
            <div className={styles.skeletonArticleText}></div>
            <div className={styles.skeletonArticleText}></div>
            <div className={styles.skeletonImage}></div>
          </div>

          {/* Right Sidebar (Share Buttons) */}
          <div className={styles.skeletonRight}>
            <div className={styles.skeletonButton}></div>
            <div className={styles.skeletonButton}></div>
            <div className={styles.skeletonButton}></div>
          </div>
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
      <div className={styles.container}>
        {
          !isMobile &&
          <aside className={styles.leftAside}>
            <div className={styles.stickyDiv}>
              <div className={styles.allArticles} >
                &larr;
                <Link href={'/whatwethink'}>
                  <h1>Articles</h1>
                </Link>

              </div>
              <div className={styles.index}>
                <h1>INDEX</h1>
              </div>
              <ul className={styles.navigation}>
                {caseStudy.sections.map((section) => {
                  const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <li
                      key={section.title}
                      data-section={sectionId}
                      className={`${styles.navItem} ${activeSection === sectionId ? styles.active : ''
                        }`}
                      onClick={() => scrollToSection(sectionId)}
                    >
                      {section.title}
                    </li>
                  );
                })}
              </ul>


            </div>
          </aside>
        }
        <article className={styles.articleContainer}>
          <h1 className={styles.heading}>{caseStudy.title}</h1>
          <p className={styles.shortDescription}>{caseStudy.description && caseStudy.description}</p>
          <div className={styles.metadata}>
            {/* <p>Author <span>{caseStudy.author.name}</span></p> */}
            <p>Date <span>{caseStudy.publishDate}</span></p>
            <p>Read-Time <span className={styles.glowDot}></span> <span>{caseStudy.readTime}</span></p>
            {
              isMobile &&
              <div className={styles.toggleButton}>
                <DarkModeToggle />
              </div>
            }
            {
              isMobile &&
              <div className={styles.toggleButton}>
                <DarkModeToggle />
              </div>
            }
          </div>
          {
            isMobile &&
            <aside className={styles.leftAside}>
              <div className={styles.stickyDiv}>
              <div className={styles.allArticles} >
                &larr;
                <Link href={'/whatwethink'}>
                  <h1>Articles</h1>
                </Link>
              </div>
              <div className={styles.allArticles} >
                &larr;
                <Link href={'/whatwethink'}>
                  <h1>Articles</h1>
                </Link>
              </div>
                <div className={styles.index}>
                  <h1>INDEX</h1>
                </div>
                <ul className={styles.navigation}>
                  {caseStudy.sections.map((section) => {
                    const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <li
                        key={section.title}
                        data-section={sectionId}
                        className={`${styles.navItem} ${activeSection === sectionId ? styles.active : ''
                          }`}
                        onClick={() => scrollToSection(sectionId)}
                      >
                        {section.title}
                      </li>
                    );
                  })}
                </ul>


              </div>
            </aside>
          }
          {caseStudy.sections.map((section) => (
            <section
              key={section.title}
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className={styles.section}
            >
              <h2 className={styles.sectionHeading}>{section.title}</h2>
              {section.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: block.content }}
                        className={styles.paragraph}
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
        <aside className={styles.rightAside}>
          <div className={styles.stickyDiv}>
            <h1 className={styles.heading}>Share Article</h1>
            <div className={styles.shareElement} onClick={handleCopyLink}>
              <Link2 size={'24px'} />
              <p>Copy link</p>
            </div>
            <div className={styles.shareElement} onClick={() => handleShare('linkedin')}>
              <FaLinkedin size={'24px'} />
              <p>Post on Linkedin</p>
            </div>
            <div className={styles.shareElement} onClick={() => handleShare('twitter')}>
              <FaSquareXTwitter size={'24px'} />
              <p>Post on X</p>
            </div>
            {
              !isMobile &&
              <div className={styles.toggleButton}>
                <DarkModeToggle />
              </div>
            }
            {
              !isMobile &&
              <div className={styles.toggleButton}>
                <DarkModeToggle />
              </div>
            }
          </div>
        </aside>
      </div>
      <div className={styles.moreItemsContanier}>
        <div className={styles.arrows}>
          <h1>More Articles</h1>
          <div>
            <div onClick={() => sliderRef.current?.slickPrev()}>
              <FontAwesomeIcon icon={faChevronLeft} size='2x' />
            </div>
            <div onClick={() => sliderRef.current?.slickNext()}>
              <FontAwesomeIcon icon={faChevronRight} size='2x' />
            </div>
          </div>

        </div>
        {loadingCaseStudies ? <p>Loading...</p> : (
          <div className={styles.scrollContainer} >
            <Slider {...settings} ref={sliderRef}>
              {caseStudies.map(data => (
                <div className={styles.card} key={data.slug} onClick={() => { router.push(`/case-study/${data.slug}`) }}>
                  <div className={styles.cardImageContainer}>
                    <Image
                      height={500}
                      width={1000}
                      src={data.coverImage}
                      alt="Card"
                      className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay}>Read more &rarr;</div>
                  </div>
                  <h2 className={styles.cardTitle}>{data.title.length > 60 ? `${data.title.substring(0, 60)}...` : data.title}</h2>
                  <h2 className={styles.cardTitle}>{data.title.length > 60 ? `${data.title.substring(0, 60)}...` : data.title}</h2>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CaseStudy;