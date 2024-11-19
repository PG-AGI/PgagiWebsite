'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDraggable } from "react-use-draggable-scroll";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GlareBackground from '../components/base/GlareBackground';
import Navigation from '../components/base/Navigation';
import Footer from '../components/Footer';
import styles from './blogs.module.scss';
import { caseStudyContent, topContent, blogContent, newsContent } from '@/utils/constants';
import bg from '../assets/background.png';
import BookCallModal from '../components/base/bookCallModela';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const handleBookCall = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleBlogsClick = () => router.push('/posts');

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
                <ChevronLeft size={24} color="white" />
              </button>
            )}
            <div className={styles.caseStudyList} ref={caseRef} {...caseEvents}>
              {caseStudyContent.map((item, i) => (
                <Link href={`/case-studies/${item.slug}`} key={i}>
                  <div className={styles.caseItem}>
                    <div className={styles.content}>
                      <p>{item.description}</p>
                    </div>
                    <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
                  </div>
                </Link>
              ))}
            </div>
            {scrollStates.case.canScrollRight && (
              <button 
                className={`${styles.navigationButtons} ${styles.next}`}
                onClick={() => scroll(caseRef, 'right')}
              >
                <ChevronRight size={24} color="white" />
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
                <ChevronLeft size={24} color="white" />
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
                <ChevronRight size={24} color="white" />
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
                <ChevronLeft size={24} color="white" />
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
                <ChevronRight size={24} color="white" />
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