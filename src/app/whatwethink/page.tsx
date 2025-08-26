// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import styles from './blogs.module.scss';
// import BookCallModal from '../components/base/bookCallModela';
// import { generateSlug } from '@/services/generateSlugService';
// import { getSafeImageUrl } from '@/utils/imageUtils';

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Marquee from 'react-fast-marquee';

// type CaseStudy = {
//   id: string;
//   title: string;
//   coverImage: string;
// };
// type Blog = {
//   id: string;
//   title: string;
//   coverImage: string;
//   readTime: string;
//   category: string
// };
// type News = {
//   id: string;
//   title: string;
//   coverImage: string;
//   readTime: string;
//   category: string
// };

// export default function BlogPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
//   const [loadingCaseStudies, setLoadingCaseStudies] = useState<boolean>(false);
//   const [errorCaseStudies, setErrorCaseStudies] = useState<string>('');
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loadingBlogs, setLoadingBlogs] = useState<boolean>(false);
//   const [errorBlogs, setErrorBlogs] = useState<string>('');
//   const [news, setNews] = useState<News[]>([]);
//   const [loadingNews, setLoadingNews] = useState<boolean>(false);
//   const [errorNews, setErrorNews] = useState<string>('');

//   const [visibleCount, setVisibleCount] = useState(4);

//   const handleBookCall = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
//     const result: T[][] = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
//   }

//   // Parallax scroll effect for images
//   useEffect(() => {
//     const handleScroll = () => {
//       const imageContainers = document.querySelectorAll(`.${styles.cardImage}`);

//       imageContainers.forEach((container) => {
//         const rect = container.getBoundingClientRect();
//         const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

//         if (scrollProgress > 0 && scrollProgress < 1) {
//           // Calculate the Y offset for parallax effect
//           const yOffset = (scrollProgress - 0.5) * 100; // Move image up/down by 50px
//           (container as HTMLElement).style.setProperty('--scroll-offset', `${yOffset}px`);
//           container.classList.add(styles.parallax);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial call

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Fetch case studies from the API
//   useEffect(() => {
//     const fetchCaseStudies = async () => {
//       setLoadingCaseStudies(true);
//       setErrorCaseStudies('');
//       try {
//         const response = await fetch('/api/case-studies');
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const data: CaseStudy[] = await response.json();
//         setCaseStudies(data);
//       } catch (error: any) {
//         setErrorCaseStudies(error.message || 'An unexpected error occurred.');
//       } finally {
//         setLoadingCaseStudies(false);
//       }
//     };

//     const fetchBlogs = async () => {
//       setLoadingBlogs(true);
//       setErrorBlogs('');
//       try {
//         const response = await fetch('/api/blogs');
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const data: Blog[] = await response.json();
//         setBlogs(data);
//       } catch (error: any) {
//         setErrorBlogs(error.message || 'An unexpected error occurred.');
//       } finally {
//         setLoadingBlogs(false);
//       }
//     }
//     const fetchNews = async () => {
//       setLoadingNews(true);
//       setErrorNews('');
//       try {
//         const response = await fetch('/api/ainews');
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const data: News[] = await response.json();
//         setNews(data);
//       } catch (error: any) {
//         setErrorNews(error.message || 'An unexpected error occurred.');
//       } finally {
//         setLoadingNews(false);
//       }
//     }

//     fetchBlogs();
//     fetchCaseStudies();
//     fetchNews();

//   }, []);

//   const skeletonCount = 3;

//   return (
//     <div className={styles.main}>
//       {/* Page Title */}
//       <div className={styles.pageTitle}>
//         <span className={styles.category}>{'// Insights'}</span>
//         <h1>Discover our latest insights, case studies, and AI innovations</h1>
//       </div>

//       {/* Case Studies Section */}
//       <section className={styles.caseSection} id="case-studies">
//         <div className={styles.cardsContainer}>
//           {loadingCaseStudies ? (
//             Array.from({ length: skeletonCount }).map((_, index) => (
//               <div className={styles.cardSkeleton} key={index}>
//                 <div className={styles.skeletonContent}>
//                   <div className={styles.skeletonText}>
//                     <div className={styles.skeletonTitle} />
//                     <div className={styles.skeletonDescription} />
//                   </div>
//                   <div className={styles.skeletonImage} />
//                 </div>
//               </div>
//             ))
//           ) : errorCaseStudies ? (
//             <p className={styles.error}>{errorCaseStudies}</p>
//           ) : caseStudies.length === 0 ? (
//             <p>No case studies found.</p>
//           ) : (
//             caseStudies
//               .slice(0)
//               .reverse()
//               .slice(0, visibleCount)
//               .map((cs, index) => (
//                 <div key={generateSlug(cs.title)} className={styles.card}>
//                   <Link href={`/case-study/${generateSlug(cs.title)}`}>
//                     <div className={styles.cardContent}>
//                       <div className={styles.cardText}>
//                         <h3>{cs.title}</h3>
//                         <p>Discover how we helped transform this project with innovative AI solutions and strategic insights.</p>
//                         <span className={styles.viewProject}>View Project →</span>
//                       </div>
//                       <div className={styles.cardImage}>
//                         <Image
//                           className={styles.imgTag}
//                           src={getSafeImageUrl(cs.coverImage)}
//                           alt={cs.title}
//                           layout="fill"
//                           objectFit="cover"
//                           priority
//                           onError={(e) => {
//                             // Fallback to placeholder if image fails to load
//                             const target = e.target as HTMLImageElement;
//                             target.src = '/images/aboutus.png';
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               ))
//           )}

//           {/* Show Load More button only if there are more cards */}
//           {visibleCount < caseStudies.length && (
//             <div className={styles.loadMoreWrapper}>
//               <button
//                 className={styles.loadMoreBtn}
//                 onClick={() => setVisibleCount(caseStudies.length)}
//               >
//                 Load More
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Combined Blogs & News Section */}
//       <section className={styles.combinedSection} id="blogs-news">
//         <h1 className={styles.subheading}>News & Blogs</h1>
//         <div className={styles.combinedGrid}>
//           {loadingBlogs || loadingNews ? (
//             Array.from({ length: skeletonCount }).map((_, i) => (
//               <div className={styles.tileSkeleton} key={i}>
//                 <div className={styles.imgSkeleton} />
//                 <div className={styles.contentSkeleton}>
//                   <div className={styles.categorySkeleton} />
//                   <div className={styles.titleSkeleton} />
//                   <div className={styles.metaSkeleton} />
//                 </div>
//               </div>
//             ))
//           ) : errorBlogs ? (
//             <p className={styles.error}>{errorBlogs}</p>
//           ) : errorNews ? (
//             <p className={styles.error}>{errorNews}</p>
//           ) : blogs.length === 0 && news.length === 0 ? (
//             <p>No blogs or news found.</p>
//           ) : (
//             <>
//               <Marquee
//                 gradient={false}
//                 speed={55}
//                 className={styles.marqueeWrapper}
//               >
//                 {[...blogs, ...news].reverse().map((item) => {
//                   const isBlog = blogs.some((b) => b.title === item.title);
//                   return (
//                     <Link
//                       key={generateSlug(item.title)}
//                       href={
//                         isBlog
//                           ? `/blogpost/${generateSlug(item.title)}`
//                           : `/ainews/${generateSlug(item.title)}`
//                       }
//                       className={styles.tile}
//                     >
//                       <div className={styles.imageWrap}>
//                         <Image
//                           src={getSafeImageUrl(item.coverImage)}
//                           alt={item.title}
//                           fill
//                           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                           className={styles.image}
//                           onError={(e) => {
//                             const target = e.target as HTMLImageElement;
//                             target.src = "/images/aboutus.png";
//                           }}
//                         />
//                       </div>
//                       <div className={styles.content}>
//                         <div>
//                           <div className={styles.category}>
//                             {isBlog ? 'Blog' : 'News'}
//                           </div>
//                           <h3 className={styles.title}>{item.title}</h3>
//                         </div>
//                         <div className={styles.readTime}>
//                           {item.readTime || '5 min read'}
//                         </div>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </Marquee>

//             </>
//           )}
//         </div>
//       </section>

//       {/* Featured Section
//       <motion.section
//         className={styles.featured}
//         initial="hidden"
//         whileInView="visible"
//         variants={sectionVariants}
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className={styles.content}>
//           <p>Harness the Power of AI</p>
//           <p>for Unmatched Business Performance</p>
//           <button className={styles.call} onClick={handleBookCall}>Let&apos;s Connect</button>
//         </div>
//         <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
//       </motion.section> */}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./blogs.module.scss";
import BookCallModal from "../components/base/bookCallModela";
import { generateSlug } from "@/services/generateSlugService";
import { getSafeImageUrl } from "@/utils/imageUtils";

import Marquee from "react-fast-marquee";

type CaseStudy = {
  id: string;
  title: string;
  coverImage: string;
};
type Blog = {
  id: string;
  title: string;
  coverImage: string;
  readTime: string;
  category: string;
};
type News = {
  id: string;
  title: string;
  coverImage: string;
  readTime: string;
  category: string;
};

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loadingCaseStudies, setLoadingCaseStudies] = useState<boolean>(false);
  const [errorCaseStudies, setErrorCaseStudies] = useState<string>("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(false);
  const [errorBlogs, setErrorBlogs] = useState<string>("");
  const [news, setNews] = useState<News[]>([]);
  const [loadingNews, setLoadingNews] = useState<boolean>(false);
  const [errorNews, setErrorNews] = useState<string>("");

  const [visibleCount, setVisibleCount] = useState(4);

  const handleBookCall = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      setLoadingCaseStudies(true);
      setErrorCaseStudies("");
      try {
        const response = await fetch("/api/case-studies");
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data: CaseStudy[] = await response.json();
        setCaseStudies(data);
      } catch (error: any) {
        setErrorCaseStudies(error.message || "An unexpected error occurred.");
      } finally {
        setLoadingCaseStudies(false);
      }
    };

    const fetchBlogs = async () => {
      setLoadingBlogs(true);
      setErrorBlogs("");
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data: Blog[] = await response.json();
        setBlogs(data);
      } catch (error: any) {
        setErrorBlogs(error.message || "An unexpected error occurred.");
      } finally {
        setLoadingBlogs(false);
      }
    };

    const fetchNews = async () => {
      setLoadingNews(true);
      setErrorNews("");
      try {
        const response = await fetch("/api/ainews");
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data: News[] = await response.json();
        setNews(data);
      } catch (error: any) {
        setErrorNews(error.message || "An unexpected error occurred.");
      } finally {
        setLoadingNews(false);
      }
    };

    fetchBlogs();
    fetchCaseStudies();
    fetchNews();
  }, []);

  const skeletonCount = 3;

  return (
    <div className={styles.main}>
      {/* Page Title */}
      <div className={styles.pageTitle}>
        <motion.span
          className={styles.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {"// Insights"}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Discover our latest insights, case studies, and AI innovations
        </motion.h1>
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
              .slice(0, visibleCount)
              .map((cs, index) => (
                <motion.div
                  key={generateSlug(cs.title)}
                  className={styles.card}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Link href={`/case-study/${generateSlug(cs.title)}`}>
                    <div className={styles.cardContent}>
                      <div className={styles.cardText}>
                        <h3>{cs.title}</h3>
                        <p>
                          Discover how we helped transform this project with
                          innovative AI solutions and strategic insights.
                        </p>
                        <span className={styles.viewProject}>
                          View Project →
                        </span>
                      </div>
                      <div className={styles.cardImage}>
                        <Image
                          className={styles.imgTag}
                          src={getSafeImageUrl(cs.coverImage)}
                          alt={cs.title}
                          fill
                          style={{ objectFit: "cover" }}
                          priority
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/images/aboutus.png";
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
          )}

          {visibleCount < caseStudies.length && (
            <div className={styles.loadMoreWrapper}>
              <button
                className={styles.loadMoreBtn}
                onClick={() => setVisibleCount(caseStudies.length)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Combined Blogs & News Section */}
      <section className={styles.combinedSection} id="blogs-news">
        <motion.h1
          className={styles.subheading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          News & Blogs
        </motion.h1>

        <div className={styles.combinedGrid}>
          {loadingBlogs || loadingNews ? (
            Array.from({ length: skeletonCount }).map((_, i) => (
              <div className={styles.tileSkeleton} key={i}>
                <div className={styles.imgSkeleton} />
                <div className={styles.contentSkeleton}>
                  <div className={styles.categorySkeleton} />
                  <div className={styles.titleSkeleton} />
                  <div className={styles.metaSkeleton} />
                </div>
              </div>
            ))
          ) : errorBlogs ? (
            <p className={styles.error}>{errorBlogs}</p>
          ) : errorNews ? (
            <p className={styles.error}>{errorNews}</p>
          ) : blogs.length === 0 && news.length === 0 ? (
            <p>No blogs or news found.</p>
          ) : (
            <Marquee
              gradient={false}
              speed={55}
              className={styles.marqueeWrapper}
            >
              {[...blogs, ...news].reverse().map((item, index) => {
                const isBlog = blogs.some((b) => b.title === item.title);
                return (
                  <motion.div
                    key={generateSlug(item.title)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Link
                      href={
                        isBlog
                          ? `/blogpost/${generateSlug(item.title)}`
                          : `/ainews/${generateSlug(item.title)}`
                      }
                      className={styles.tile}
                    >
                      <div className={styles.imageWrap}>
                        <Image
                          src={getSafeImageUrl(item.coverImage)}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={styles.image}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/images/aboutus.png";
                          }}
                        />
                      </div>
                      <div className={styles.content}>
                        <div>
                          <div className={styles.category}>
                            {isBlog ? "Blog" : "News"}
                          </div>
                          <h3 className={styles.title}>{item.title}</h3>
                        </div>
                        <div className={styles.readTime}>
                          {item.readTime || "5 min read"}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </Marquee>
          )}
        </div>
      </section>

      {/* Featured CTA (kept commented)
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
          <button className={styles.call} onClick={handleBookCall}>
            Let&apos;s Connect
          </button>
        </div>
        <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </motion.section> */}
    </div>
  );
}
