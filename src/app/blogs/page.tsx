'use client';

import Footer from '../components/Footer';
import { useRef, useState, useEffect } from "react";
import GlareBackground from '../components/base/GlareBackground';
import Navigation from '../components/base/Navigation';
import styles from './blogs.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { blogContent, caseStudyContent, topContent, newsContent, storyContent } from '@/utils/constants';
import bg from '../assets/background.png';
import BookCallModal from '../components/base/bookCallModela';


export default function BlogPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const caseRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (topRef.current) {
      const index = Math.round(topRef.current.scrollLeft / topRef.current.offsetWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const topList = topRef.current;
    if (topList) {
      topList.addEventListener('scroll', handleScroll);
      return () => {
        topList.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookCall = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
  
  return (
    <div className={styles.main}>
    <Link href="/"/>
    <GlareBackground/>
      <Navigation />
      <div className={styles.topSection}>
      <div className={styles.topList} ref={topRef}>
        {topContent.map((item, i) => (
          <div key={i} className={styles.topItem}>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>              
            </div>
            <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
          {topContent.map((_, i) => (
            <div key={i} className={`${styles.dot} ${currentIndex === i ? styles.active : ''}`} />
          ))}
        </div>

        <section className={styles.caseSection}>
          <h2>Case Studies</h2>
          <div className={styles.caseStudyList} ref={caseRef}>
          {caseStudyContent.map((item, i) => (
          <div key={i} className={styles.caseItem}>
            <div className={styles.content}>
              {/* <h3>{item.title}</h3> */}
              <p>{item.description}</p>
            </div>
            <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
          </div>
        ))}
          </div>
        </section>

         <section className={styles.blogSection}>
          <h2>Blogs</h2>
          <div className={styles.blogList} ref={blogRef}>
          {blogContent.map((item, i) => (
          <div key={i} className={styles.blogItem}>
            <div className={styles.content}>
              {/* <h3>{item.title}</h3> */}
              <p>{item.description}</p>
            </div>
            <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
          </div>
        ))}
          </div>
        </section>


        <section className={styles.newsSection}>
          <h2>AI News</h2>
          <div className={styles.newsList} ref={newsRef}>
          {newsContent.map((item, i) => (
          <div key={i} className={styles.newsItem}>
            <div className={styles.content}>
              {/* <h3>{item.title}</h3> */}
              <p>{item.description}</p>
            </div>
            <Image className={styles.imgTag} src={item.image.src} alt={item.title} layout="fill" objectFit="cover" />
          </div>
        ))}
          </div>
        </section>

        {/* <section className={styles.storySection}>
          <h2>Stories</h2>
          <div className={styles.storyList} ref={storyRef}>
          {storyContent.map((item, i) => (
          <div key={i} className={styles.storyItem}>
            <div className={styles.content}>
              <h3>{item.title}</h3>
            </div>
            <Image className={styles.imgTag} src={item.image} alt={item.title} layout="fill" objectFit='none' />
          </div>
        ))}
          </div>
        </section> */}

        <section className={styles.featured}>
          <div className={styles.content}>
          <p>Harness the Power of AI</p>
          <p>for Unmatched Business Performance</p>
          <button className={styles.call} onClick={handleBookCall}>Let's Connect</button>
          </div>
          <Image  className={styles.imgTag} src={bg} alt="" layout="fill" objectFit='cover'/>
          <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
      </div>
      <Footer />
    </div>
  );
}
