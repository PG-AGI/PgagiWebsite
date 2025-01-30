
'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDraggable } from "react-use-draggable-scroll";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import GlareBackground from '../components/base/GlareBackground';
import Navigation from '../components/base/Navigation';
import Footer from '../components/Footer';
import styles from './blogs.module.scss';
import { topContent, blogContent, newsContent } from '@/utils/constants';
import bg from '../assets/background.png';
import BookCallModal from '../components/base/bookCallModela';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';
import { generateSlug } from '@/services/generateSlugService';

type CaseStudy = {
  id: string;
  title: string;
  coverImage: string;
};
type Blog = {
  id: string;
  title: string;
  coverImage: string;
};
type News = {
  id: string;
  title: string;
  coverImage: string;
};

export default function BlogPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const caseRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

  // Setup draggable scroll hooks
  const { events: caseEvents } = useDraggable(caseRef as React.MutableRefObject<HTMLElement>);
  const { events: blogEvents } = useDraggable(blogRef as React.MutableRefObject<HTMLElement>);
  const { events: newsEvents } = useDraggable(newsRef as React.MutableRefObject<HTMLElement>);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollStates, setScrollStates] = useState({
    case: { canScrollLeft: false, canScrollRight: true },
    blog: { canScrollLeft: false, canScrollRight: true },
    news: { canScrollLeft: false, canScrollRight: true }
  });

  const handleScroll = () => {
    if (topRef.current) {
      const index = Math.round(topRef.current.scrollLeft / topRef.current.offsetWidth);
      setCurrentIndex(index);
    }
  };

  const checkScroll = (ref: React.RefObject<HTMLDivElement>, section: 'case' | 'blog' | 'news') => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      setScrollStates(prev => ({
        ...prev,
        [section]: {
          canScrollLeft: scrollLeft > 0,
          canScrollRight: scrollLeft < scrollWidth - clientWidth - 5
        }
      }));
    }
  };

  useEffect(() => {
    const topList = topRef.current;
    if (topList) {
      topList.addEventListener('scroll', handleScroll);
      return () => topList.removeEventListener('scroll', handleScroll);
    }
  }, []);
  

  useEffect(() => {
    // Initial scroll check
    checkScroll(caseRef, 'case');
    checkScroll(blogRef, 'blog');
    checkScroll(newsRef, 'news');

    // Add scroll event listeners
    const caseList = caseRef.current;
    const blogList = blogRef.current;
    const newsList = newsRef.current;

    if (caseList) caseList.addEventListener('scroll', () => checkScroll(caseRef, 'case'));
    if (blogList) blogList.addEventListener('scroll', () => checkScroll(blogRef, 'blog'));
    if (newsList) newsList.addEventListener('scroll', () => checkScroll(newsRef, 'news'));

    return () => {
      if (caseList) caseList.removeEventListener('scroll', () => checkScroll(caseRef, 'case'));
      if (blogList) blogList.removeEventListener('scroll', () => checkScroll(blogRef, 'blog'));
      if (newsList) newsList.removeEventListener('scroll', () => checkScroll(newsRef, 'news'));
    };
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8; // Adjust scroll distance as needed
      const newScrollPosition = direction === 'right'
        ? ref.current.scrollLeft + scrollAmount
        : ref.current.scrollLeft - scrollAmount;

      ref.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loadingCaseStudies, setLoadingCaseStudies] = useState<boolean>(false);
  const [errorCaseStudies, setErrorCaseStudies] = useState<string>('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(false);
  const [errorBlogs, setErrorBlogs] = useState<string>('');
  const [news, setNews] = useState<News[]>([]);
  const [loadingNews, setLoadingNews] = useState<boolean>(false);
  const [errorNews, setErrorNews] = useState<string>('');
  const router = useRouter();

  const handleBookCall = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleBlogsClick = () => router.push('/posts');

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Fetch case studies from the API
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
        setCaseStudies(data);
      } catch (error: any) {
        setErrorCaseStudies(error.message || 'An unexpected error occurred.');
      } finally {
        setLoadingCaseStudies(false);
      }
    };
    const fetchBlogs = async () => {
      setLoadingBlogs(true);
      setErrorBlogs('');
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (error: any) {
        setErrorBlogs(error.message || 'An unexpected error occurred.');
      } finally {
        setLoadingBlogs(false);
      }
    }
    const fetchNews = async () => {
      setLoadingNews(true);
      setErrorNews('');
      try {
        const response = await fetch('/api/ainews');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: News[] = await response.json();
        setNews(data);
      } catch (error: any) {
        setErrorNews(error.message || 'An unexpected error occurred.');
      } finally {
        setLoadingNews(false);
      }
    }


    fetchBlogs();
    fetchCaseStudies();
    fetchNews(); 

  }, []);
  
  useEffect(() => {

    const checkInitialScrollState = () => {
      checkScroll(caseRef, 'case');
      checkScroll(blogRef, 'blog');
      checkScroll(newsRef, 'news');
    };
  
    // Trigger scroll check after content is rendered and data is fetched
    if (caseStudies.length > 0) {
      // For case studies, ensure the content is fully rendered
      setTimeout(() => {
        checkInitialScrollState();
      }, 500);  // A slight delay to ensure content is loaded
    } else {
      // For skeletons or empty data
      checkInitialScrollState();
    }
  }, [caseStudies]);  // Only re-run when `caseStudies` is updated (i.e., after fetching)
  

  const skeletonCount = 4;

  return (
    <div className={styles.main}>
      <Link href="/" />
      <GlareBackground />
      <Navigation />
      <div className={styles.topSection}>
        <motion.div
          className={styles.topList}
          ref={topRef}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          {topContent.map((item, i) => (
            <motion.div key={i} className={styles.topItem} variants={sectionVariants}>
              <div className={styles.content}>
                <h3>{item.title}</h3>
              </div>
              <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
            </motion.div>
          ))}
        </motion.div>
        <div className={styles.dots}>
          {topContent.map((_, i) => (
            <div key={i} className={`${styles.dot} ${currentIndex === i ? styles.active : ''}`} />
          ))}
        </div>

        {/* Case Studies Section */}
        <motion.section
          className={styles.caseSection}
          id="case-studies"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Case Studies</h2>
          <div className={styles.listContainer}>
            <div className={styles.caseStudyList} ref={caseRef} {...caseEvents}>
              {loadingCaseStudies ? (
                Array.from({ length: skeletonCount }).map((_, index) => (
                  <div className={styles.caseItem} key={index}>
                    <div className={styles.skeletonImage} />
                    <div className={styles.skeletonText}>
                      <div className={styles.skeletonLine} />
                      <div className={styles.skeletonLineShort} />
                    </div>
                  </div>
                ))
              ) : errorCaseStudies ? (
                <p className={styles.error}>{errorCaseStudies}</p>
              ) : caseStudies.length === 0 ? (
                <p>No case studies found.</p>
              ) : (
                caseStudies
                  .slice(0)
                  .reverse()
                  .map(cs => (
                    <Link href={`/case-study/${generateSlug(cs.title)}`} key={generateSlug(cs.title)}>
                      <div className={styles.caseItem}>
                        <div className={styles.content}>
                          <p>{cs.title}</p>
                        </div>
                        <div className={styles.imageWrapper}>
                          <Image
                            className={styles.imgTag}
                            src={cs.coverImage}
                            alt={cs.title}
                            layout="fill"
                            objectFit="cover"
                            priority
                          />
                        </div>
                      </div>
                    </Link>
                  ))
              )}
            </div>
          </div>
          {/* Navigation Arrows Below the List */}
          <div className={styles.navigationArrows}>
            <button
              className={styles.navButton}
              onClick={() => scroll(caseRef, 'left')}
              disabled={!scrollStates.case.canScrollLeft}
              aria-label="Scroll Left"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              className={styles.navButton}
              onClick={() => scroll(caseRef, 'right')}
              disabled={!scrollStates.case.canScrollRight}
              aria-label="Scroll Right"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </motion.section>

        {/* Blogs Section */}
        <motion.section
          className={styles.blogSection}
          id="blogs"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Blogs</h2>
          <div className={styles.listContainer}>
            <div className={styles.blogList} ref={blogRef} {...blogEvents}>
              {loadingBlogs ? (
                Array.from({ length: skeletonCount }).map((_, index) => (
                  <div className={styles.blogItem} key={index}>
                    <div className={styles.skeletonImage} />
                    <div className={styles.skeletonText}>
                      <div className={styles.skeletonLine} />
                      <div className={styles.skeletonLineShort} />
                    </div>
                  </div>
                ))
              ) : errorBlogs ? (
                <p className={styles.error}>{errorBlogs}</p>
              ) : blogs.length === 0 ? (
                <p>No blogs found.</p>
              ) : (
                blogs
                  .slice(0)
                  .reverse()
                  .map(blog => (
                    <Link href={`/blogpost/${generateSlug(blog.title)}`} key={generateSlug(blog.title)}>
                      <div className={styles.blogItem}>
                        <div className={styles.content}>
                          <p>{blog.title}</p>
                        </div>
                        <div className={styles.imageWrapper}>
                          <Image
                            className={styles.imgTag}
                            src={blog.coverImage}
                            alt={blog.title}
                            layout="fill"
                            objectFit="cover"
                            priority
                          />
                        </div>
                      </div>
                    </Link>
                  ))
              )}

            </div>
          </div>
          {/* Navigation Arrows Below the List */}
          <div className={styles.navigationArrows}>
            <button
              className={styles.navButton}
              onClick={() => scroll(blogRef, 'left')}
              disabled={!scrollStates.blog.canScrollLeft}
              aria-label="Scroll Left"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              className={styles.navButton}
              onClick={() => scroll(blogRef, 'right')}
              disabled={!scrollStates.blog.canScrollRight}
              aria-label="Scroll Right"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </motion.section>

        {/* AI News Section */}
        <motion.section
          className={styles.newsSection}
          id='ainews'
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>AI News</h2>
          <div className={styles.listContainer}>
            <div className={styles.newsList} ref={newsRef} {...newsEvents}>
              {loadingNews ? (
                Array.from({ length: skeletonCount }).map((_, index) => (
                  <div className={styles.newsItem} key={index}>
                    <div className={styles.skeletonImage} />
                    <div className={styles.skeletonText}>
                      <div className={styles.skeletonLine} />
                      <div className={styles.skeletonLineShort} />
                    </div>
                  </div>
                ))
              ) : errorNews ? (
                <p className={styles.error}>{errorNews}</p>
              ) : news.length === 0 ? (
                <p>No news found.</p>
              ) : (
                news
                  .slice(0)
                  .reverse()
                  .map(n => (
                    <Link href={`/ainews/${generateSlug(n.title)}`} key={generateSlug(n.title)}>
                      <div className={styles.newsItem}>
                        <div className={styles.content}>
                          <p>{n.title}</p>
                        </div>
                        <div className={styles.imageWrapper}>
                          <Image
                            className={styles.imgTag}
                            src={n.coverImage}
                            alt={n.title}
                            layout="fill"
                            objectFit="cover"
                            priority
                          />
                        </div>
                      </div>
                    </Link>
                  ))
              )}
            </div>
          </div>
          <div className={styles.navigationArrows}>
            <button
              className={styles.navButton}
              onClick={() => scroll(newsRef, 'left')}
              disabled={!scrollStates.news.canScrollLeft}
              aria-label="Scroll Left"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              className={styles.navButton}
              onClick={() => scroll(newsRef, 'right')}
              disabled={!scrollStates.news.canScrollRight}
              aria-label="Scroll Right"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </motion.section>

        {/* Featured Section */}
        <motion.section
          className={styles.featured}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.content}>
            <p>Harness the Power of AI</p>
            <p>for Unmatched Business Performance</p>
            <button className={styles.call} onClick={handleBookCall}>Let&apos;s Connect</button>
          </div>
          <Image className={styles.imgTag} src={bg} alt="" layout="fill" objectFit="cover" />
          <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
