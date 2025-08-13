
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './blogs.module.scss';
import BookCallModal from '../components/base/bookCallModela';
import { generateSlug } from '@/services/generateSlugService';
import { getSafeImageUrl } from '@/utils/imageUtils';

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
  
  const handleBookCall = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Parallax scroll effect for images
  useEffect(() => {
    const handleScroll = () => {
      const imageContainers = document.querySelectorAll(`.${styles.cardImage}`);
      
      imageContainers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollProgress > 0 && scrollProgress < 1) {
          // Calculate the Y offset for parallax effect
          const yOffset = (scrollProgress - 0.5) * 100; // Move image up/down by 50px
          (container as HTMLElement).style.setProperty('--scroll-offset', `${yOffset}px`);
          container.classList.add(styles.parallax);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  
  const skeletonCount = 3;

  return (
    <div className={styles.main}>
      {/* Page Title */}
      <div className={styles.pageTitle}>
        <span className={styles.category}>{/* Insights */}Insights</span>
        <h1>Discover our latest insights, case studies, and AI innovations</h1>
      </div>

      {/* Case Studies Section */}
      <section className={styles.caseSection} id="case-studies">
        <div className={styles.cardsContainer}>
          {loadingCaseStudies ? (
            Array.from({ length: skeletonCount }).map((_, index) => (
              <div className={styles.cardSkeleton} key={index}>
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonText}>
                    <div className={styles.skeletonTitle} />
                    <div className={styles.skeletonDescription} />
                  </div>
                  <div className={styles.skeletonImage} />
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
              .map((cs, index) => (
                <div key={generateSlug(cs.title)} className={styles.card}>
                  <Link href={`/case-study/${generateSlug(cs.title)}`}>
                    <div className={styles.cardContent}>
                      <div className={styles.cardText}>
                        <h3>{cs.title}</h3>
                        <p>Discover how we helped transform this project with innovative AI solutions and strategic insights.</p>
                        <span className={styles.viewProject}>View Project →</span>
                      </div>
                      <div className={styles.cardImage}>
                        <Image
                          className={styles.imgTag}
                          src={getSafeImageUrl(cs.coverImage)}
                          alt={cs.title}
                          layout="fill"
                          objectFit="cover"
                          priority
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/aboutus.png';
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))
          )}
        </div>
      </section>

      {/* Blogs Section */}
      <section className={styles.blogSection} id="blogs">
        <div className={styles.cardsContainer}>
          {loadingBlogs ? (
            Array.from({ length: skeletonCount }).map((_, index) => (
              <div className={styles.cardSkeleton} key={index}>
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonText}>
                    <div className={styles.skeletonTitle} />
                    <div className={styles.skeletonDescription} />
                  </div>
                  <div className={styles.skeletonImage} />
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
              .map((blog, index) => (
                <div key={generateSlug(blog.title)} className={styles.card}>
                  <Link href={`/blogpost/${generateSlug(blog.title)}`}>
                    <div className={styles.cardContent}>
                      <div className={styles.cardText}>
                        <h3>{blog.title}</h3>
                        <p>Explore insights, trends, and expert perspectives on the latest developments in AI and technology.</p>
                        <span className={styles.viewProject}>Read More →</span>
                      </div>
                      <div className={styles.cardImage}>
                        <Image
                          className={styles.imgTag}
                          src={getSafeImageUrl(blog.coverImage)}
                          alt={blog.title}
                          layout="fill"
                          objectFit="cover"
                          priority
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/aboutus.png';
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))
          )}
        </div>
      </section>

      {/* AI News Section */}
      <section className={styles.newsSection} id='ainews'>
        <div className={styles.cardsContainer}>
          {loadingNews ? (
            Array.from({ length: skeletonCount }).map((_, index) => (
              <div className={styles.cardSkeleton} key={index}>
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonText}>
                    <div className={styles.skeletonTitle} />
                    <div className={styles.skeletonDescription} />
                  </div>
                  <div className={styles.skeletonImage} />
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
              .map((n, index) => (
                <div key={generateSlug(n.title)} className={styles.card}>
                  <Link href={`/ainews/${generateSlug(n.title)}`}>
                    <div className={styles.cardContent}>
                      <div className={styles.cardText}>
                        <h3>{n.title}</h3>
                        <p>Stay updated with the latest breakthroughs, innovations, and trends in artificial intelligence.</p>
                        <span className={styles.viewProject}>Read News →</span>
                      </div>
                      <div className={styles.cardImage}>
                        <Image
                          className={styles.imgTag}
                          src={getSafeImageUrl(n.coverImage)}
                          alt={n.title}
                          layout="fill"
                          objectFit="cover"
                          priority
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/aboutus.png';
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))
          )}
        </div>
      </section>

      {/* Featured Section
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
        <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </motion.section> */}
    </div>
  );
}
