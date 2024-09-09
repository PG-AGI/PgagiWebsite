
// 'use client';

// import { useRef, useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import GlareBackground from '../components/base/GlareBackground';
// import Navigation from '../components/base/Navigation';
// import Footer from '../components/Footer';
// import styles from './blogs.module.scss';
// import { caseStudyContent, topContent, blogContent, newsContent } from '@/utils/constants';
// import bg from '../assets/background.png';
// import BookCallModal from '../components/base/bookCallModela';
// import { useRouter } from 'next/navigation';

// export default function BlogPage() {
//   const topRef = useRef<HTMLDivElement>(null);
//   const caseRef = useRef<HTMLDivElement>(null);
//   const blogRef = useRef<HTMLDivElement>(null);
//   const newsRef = useRef<HTMLDivElement>(null);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleScroll = () => {
//     if (topRef.current) {
//       const index = Math.round(topRef.current.scrollLeft / topRef.current.offsetWidth);
//       setCurrentIndex(index);
//     }
//   };

//   useEffect(() => {
//     const topList = topRef.current;
//     if (topList) {
//       topList.addEventListener('scroll', handleScroll);
//       return () => {
//         topList.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, []);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleBookCall = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const router = useRouter();

//   const handleBlogsClick = () => {
//     router.push('/posts');
//   };

//   return (
//     <div className={styles.main}>
//       <Link href="/" />
//       <GlareBackground />
//       <Navigation />
//       <div className={styles.topSection}>
//         <div className={styles.topList} ref={topRef}>
//           {topContent.map((item, i) => (
//             <div key={i} className={styles.topItem}>
//               <div className={styles.content}>
//                 <h3>{item.title}</h3>
//               </div>
//               <Image
//                 className={styles.imgTag}
//                 src={item.image.src}
//                 alt={item.title}
//                 fill
//                 style={{ objectFit: 'cover' }} // Use `fill` and `objectFit` instead of deprecated props
//               />
//             </div>
//           ))}
//         </div>
//         <div className={styles.dots}>
//           {topContent.map((_, i) => (
//             <div key={i} className={`${styles.dot} ${currentIndex === i ? styles.active : ''}`} />
//           ))}
//         </div>

//         <section className={styles.caseSection}>
//           <h2>Case Studies</h2>
//           <div className={styles.caseStudyList} ref={caseRef}>
//             {caseStudyContent.map((item, i) => (
//               <Link href={`/case-studies/${item.slug}`} key={i}>
//                 <div className={styles.caseItem}>
//                   <div className={styles.content}>
//                     <p>{item.description}</p>
//                   </div>
//                   <Image
//                     className={styles.imgTag}
//                     src={item.image.src}
//                     alt={item.title}
//                     fill
//                     style={{ objectFit: 'cover' }} // Use `fill` and `objectFit` instead of deprecated props
//                   />
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>

//         <section className={styles.blogSection}>
//           <h2>Blogs</h2>
//           <div className={styles.blogList} ref={blogRef}>
//             {blogContent.map((item, i) => (
//               <Link href={`/blogs/${item.slug}`} key={i}>
//                 <div className={styles.blogItem}>
//                   <div className={styles.content}>
//                     <p>{item.description}</p>
//                   </div>
//                   <Image
//                     className={styles.imgTag}
//                     src={item.image.src}
//                     alt={item.title}
//                     fill
//                     style={{ objectFit: 'cover' }} // Use `fill` and `objectFit` instead of deprecated props
//                   />
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>

//         <section className={styles.newsSection}>
//           <h2>AI News</h2>
//           <div className={styles.newsList} ref={newsRef}>
//             {newsContent.map((item, i) => (
//               <div key={i} className={styles.newsItem}>
//                 <div className={styles.content}>
//                   <p>{item.description}</p>
//                 </div>
//                 <Image
//                   className={styles.imgTag}
//                   src={item.image.src}
//                   alt={item.title}
//                   fill
//                   style={{ objectFit: 'cover' }} // Use `fill` and `objectFit` instead of deprecated props
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className={styles.featured}>
//           <div className={styles.content}>
//             <p>Harness the Power of AI</p>
//             <p>for Unmatched Business Performance</p>
//             <button className={styles.call} onClick={handleBookCall}>Let&apos;s Connect</button>
//           </div>
//           <Image
//             className={styles.imgTag}
//             src={bg}
//             alt=""
//             fill
//             style={{ objectFit: 'cover' }} // Use `fill` and `objectFit` instead of deprecated props
//           />
//           <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// }



//exp

'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import GlareBackground from '../components/base/GlareBackground';
import Navigation from '../components/base/Navigation';
import Footer from '../components/Footer';
import styles from './blogs.module.scss';
import { caseStudyContent, topContent, blogContent, newsContent } from '@/utils/constants';
import bg from '../assets/background.png';
import BookCallModal from '../components/base/bookCallModela';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function BlogPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const caseRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

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

  const router = useRouter(); // Initialize useRouter

  const handleBlogsClick = () => {
    router.push('/posts'); // Navigate to /posts when the button is clicked
  };

  // Framer Motion variants for animation
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
            <motion.div
              key={i}
              className={styles.topItem}
              variants={sectionVariants}
            >
              <div className={styles.content}>
                <h3>{item.title}</h3>
              </div>
              <Image
                className={styles.imgTag}
                src={item.image.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
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
          ref={caseRef}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Case Studies</h2>
          <div className={styles.caseStudyList}>
            {caseStudyContent.map((item, i) => (
              <Link href={`/case-studies/${item.slug}`} key={i}>
                <div className={styles.caseItem}>
                  <div className={styles.content}>
                    <p>{item.description}</p>
                  </div>
                  <Image
                    className={styles.imgTag}
                    src={item.image.src}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.blogSection}
          id="blogs"
          ref={blogRef}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <button className={styles.learnMore} onClick={handleBlogsClick}>
            <span className={styles.circle}>
              <span className={`${styles.icon} ${styles.arrow}`}></span>
            </span>
            <span className={styles.buttonText}>Blogs</span>
          </button>
          <div className={styles.blogList}>
            {blogContent.map((item, i) => (
              <Link href={`/blogs/${item.slug}`} key={i}>
                <div className={styles.blogItem}>
                  <div className={styles.content}>
                    <p>{item.description}</p>
                  </div>
                  <Image
                    className={styles.imgTag}
                    src={item.image.src}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.newsSection}
          id='ainews'
          ref={newsRef}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>AI News</h2>
          <div className={styles.newsList}>
            {newsContent.map((item, i) => (
              <div key={i} className={styles.newsItem}>
                <div className={styles.content}>
                  <p>{item.description}</p>
                </div>
                <Image
                  className={styles.imgTag}
                  src={item.image.src}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
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
          <Image
            className={styles.imgTag}
            src={bg}
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
