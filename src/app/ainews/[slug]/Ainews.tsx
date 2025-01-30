'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from './Ainews.module.scss';
import { ArrowUp, Link2 } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Navigation from '@/app/components/base/Navigation';
import Footer from '@/app/components/Footer';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type AinewsType = {
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

type News = {
  slug: string;
  title: string;
  coverImage: string;
};

const Ainews = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;
  const [aiNews, setAiNews] = useState<AinewsType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [news, setNews] = useState<News[]>([]);
  const [loadingNews, setLoadingNews] = useState<boolean>(false);
  const [errorNews, setErrorNews] = useState<string>('');
  const sliderRef = useRef<Slider | null>(null);


  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    draggable: true,
    touchMove: true,
    nextArrow: <div className="customNextArrow"><FontAwesomeIcon icon={faChevronLeft} size='2x' /></div>,  // Custom next arrow
    prevArrow: <div className="customPrevArrow"><FontAwesomeIcon icon={faChevronRight} size='2x' /></div>,
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoadingNews(true);
      setErrorNews('');
      try {
        const response = await fetch('/api/ainews');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: News[] = await response.json();
        const restData = data.filter(item => item.slug != slug)
        setNews(restData);
      } catch (error: any) {
        setErrorNews(error.message || 'An unexpected error occurred.');
      } finally {
        setLoadingNews(false);
      }
    }
    fetchNews();
  }, [])

  useEffect(() => {
    if (!slug) {
      setError('No blog post ID provided.');
      return;
    }
    const fetchAinews = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`/api/ainews/${slug}`);
        const data: AinewsType = response.data;
        setAiNews(data);
        console.log('ainews post data is here', data);
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
          `Error: ${err.response?.status} ${err.response?.statusText}`
        );
      } finally {
        setLoading(false);
      }
    };
    fetchAinews();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (!aiNews?.sections) return;

      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      let foundActive = null;

      aiNews.sections.forEach((section) => {
        const sectionElement = document.getElementById(
          section.title.toLowerCase().replace(/\s+/g, '-')
        );

        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (
            scrollPosition >= offsetTop - 50 && // Adjust offset if needed
            scrollPosition < offsetTop + offsetHeight - 50
          ) {
            foundActive = sectionElement.id;
          }
        }
      });

      if (foundActive) {
        setActiveSection(foundActive);
        console.log('active section is here', foundActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [aiNews]);



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
  const generateAinewsUrl = () => {
    if (!aiNews) return currentUrl;
    const formattedTitle = aiNews.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    const formattedAuthorName = aiNews.author.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    return `${currentUrl}/ainews/${aiNews.slug}/${formattedAuthorName}/${formattedTitle}`;
  };

  const ainewsUrl = generateAinewsUrl();

  const shareUrls = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      ainewsUrl
    )}&title=${encodeURIComponent(aiNews?.title || '')}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      ainewsUrl
    )}&text=${encodeURIComponent(aiNews?.title || '')}`,
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

  if (!aiNews) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{aiNews.title} - {aiNews.author.name}</title>
        <meta
          name="description"
          content={`Read about ${aiNews.title} by ${aiNews.author.name}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${aiNews.title} by ${aiNews.author.name}`}
        />
        <meta
          property="og:description"
          content={`An insightful AI news update by ${aiNews.author.name}.`}
        />
        <meta property="og:url" content={ainewsUrl} />
        <meta
          property="og:image"
          content={aiNews.coverImage || `${currentUrl}/fallback-image.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${aiNews.title} by ${aiNews.author.name}`}
        />
        <meta
          name="twitter:description"
          content={`An insightful AI news update by ${aiNews.author.name}.`}
        />
        <meta
          name="twitter:image"
          content={aiNews.coverImage || `${currentUrl}/fallback-image.jpg`}
        />
      </Head>
      <Navigation />
      <div className={styles.container}>
        <aside className={styles.leftAside}>
          <div className={styles.stickyDiv}>
            <div className={styles.allArticles}>
              &larr;
              <Link href={'/whatwethink'}>
              <h1>Articles</h1></Link>
            </div>
            <div className={styles.index}>
              <h1>INDEX</h1>
            </div>
            <ul className={styles.navigation}>
              {aiNews.sections.map((section) => {
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
        <article className={styles.articleContainer}>
          <h1 className={styles.heading}>{aiNews.title}</h1>
          <p className={styles.shortDescription}>{aiNews.description && aiNews.description}</p>
          <div className={styles.metadata}>
            <p>Author <span>{aiNews.author.name}</span></p>
            <div>
              <p>Date <span>{aiNews.publishDate}</span></p>
              <p>Read-Time <span className={styles.glowDot}></span> <span>{aiNews.readTime}</span></p>
            </div>
          </div>
          {aiNews.sections.map((section) => (
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
            <div className={styles.shareElement}>
              <FaLinkedin size={'24px'} />
              <p>Post on Linkedin</p>
            </div>
            <div className={styles.shareElement}>
              <FaSquareXTwitter size={'24px'} />
              <p>Post on X</p>
            </div>
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
        {
          loadingNews ? <p>Loading...</p> :
            <Slider {...settings}>
              {
                news.map(data => {
                  return (
                    <div className={styles.card} key={data.slug}>
                      <Link href={`/ainews/${data.slug}`}  legacyBehavior>
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
                      </Link>
                      <h2 className={styles.cardTitle}>{data.title}</h2>
                    </div>
                  )
                })
              }
            </Slider>
        }
      </div>
      <Footer />
    </>
  );
};

export default Ainews;
