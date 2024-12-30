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

type CaseStudy = {
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

  // const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
  //   if (ref.current) {
  //     const scrollAmount = ref.current.clientWidth * 0.8;
  //     const newScrollPosition = direction === 'right' 
  //       ? ref.current.scrollLeft + scrollAmount
  //       : ref.current.scrollLeft - scrollAmount;
      
  //     ref.current.scrollTo({
  //       left: newScrollPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // };
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * (window.innerWidth < 768 ? 0.8 : 0.8); // Adjust scroll distance for mobile view
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

    fetchCaseStudies();
  }, []);

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
            {scrollStates.case.canScrollLeft && (
              <button
          className={`${styles.navigationButtons} ${styles.prev}`}
          onClick={() => scroll(caseRef, 'left')}
              >
          <FaChevronLeft size={24} color="white" />
              </button>
            )}
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
              <Link href={`/case-study/${cs.id}`} key={cs.id}>
                <div className={styles.caseItem}>
            <div className={styles.content}>
              <h3>{cs.title}</h3>
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
            {scrollStates.case.canScrollRight && (
              <button
          className={`${styles.navigationButtons} ${styles.next}`}
          onClick={() => scroll(caseRef, 'right')}
              >
          <FaChevronRight size={24} color="white" />
              </button>
            )}
          </div>
        </motion.section>

        <motion.section
          className={styles.blogSection}
          id="blogs"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Blogs</h2>
          {/* <button className={styles.learnMore} onClick={handleBlogsClick}>
            <span className={styles.circle}>
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>Blogs</span>
          </button> */}
          <div className={styles.listContainer}>
            {scrollStates.blog.canScrollLeft && (
              <button 
                className={`${styles.navigationButtons} ${styles.prev}`}
                onClick={() => scroll(blogRef, 'left')}
              >
                <FaChevronLeft size={24} color="white" />
              </button>
            )}
            <div className={styles.blogList} ref={blogRef} {...blogEvents}>
              {blogContent.map((item, i) => (
                <Link href={`/blogs/${item.slug}`} key={i}>
                  <div className={styles.blogItem}>
                    <div className={styles.content}>
                      <p>{item.description}</p>
                    </div>
                    <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
                  </div>
                </Link>
              ))}
            </div>
            {scrollStates.blog.canScrollRight && (
              <button 
                className={`${styles.navigationButtons} ${styles.next}`}
                onClick={() => scroll(blogRef, 'right')}
              >
                <FaChevronRight size={24} color="white" />
              </button>
            )}
          </div>
        </motion.section>

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
            {scrollStates.news.canScrollLeft && (
              <button 
                className={`${styles.navigationButtons} ${styles.prev}`}
                onClick={() => scroll(newsRef, 'left')}
              >
                <FaChevronLeft size={24} color="white" />
              </button>
            )}
            <div className={styles.newsList} ref={newsRef} {...newsEvents}>
              {newsContent.map((item, i) => (
                <div key={i} className={styles.newsItem}>
                  <div className={styles.content}>
                    <p>{item.description}</p>
                  </div>
                  <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>
            {scrollStates.news.canScrollRight && (
              <button 
                className={`${styles.navigationButtons} ${styles.next}`}
                onClick={() => scroll(newsRef, 'right')}
              >
                <FaChevronRight size={24} color="white" />
              </button>
            )}
          </div>
        </motion.section>

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