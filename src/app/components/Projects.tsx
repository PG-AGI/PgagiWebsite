
'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './projects.module.scss';
import BookCallModal from '../components/base/bookCallModela';
import { generateSlug } from '@/services/generateSlugService';
import { getSafeImageUrl } from '@/utils/imageUtils';
import { trendingListOld } from '@/utils/constants';
import { useRouter } from 'next/navigation';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Marquee from 'react-fast-marquee';

type CaseStudy = {
  id: string;
  title: string;
  coverImage: string;
  description?: string;
};

export default function Projects() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstItemHovered, setIsFirstItemHovered] = useState(false);
  const [isSecondItemHovered, setIsSecondItemHovered] = useState(false);
  const [isThirdItemHovered, setIsThirdItemHovered] = useState(false);
  const [isFourthItemHovered, setIsFourthItemHovered] = useState(false);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loadingCaseStudies, setLoadingCaseStudies] = useState(false);
  const [errorCaseStudies, setErrorCaseStudies] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Memoize handlers to prevent unnecessary re-renders
  const handleBookCall = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  // Memoize the trending list to prevent unnecessary re-renders
  const memoizedTrendingList = useMemo(() => trendingListOld, []);

  // Optimized hover handlers
  const handleMouseEnter = useCallback((index: number) => {
    switch (index) {
      case 0:
        setIsFirstItemHovered(true);
        break;
      case 1:
        setIsSecondItemHovered(true);
        break;
      case 2:
        setIsThirdItemHovered(true);
        break;
      case 3:
        setIsFourthItemHovered(true);
        break;
    }
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    switch (index) {
      case 0:
        setIsFirstItemHovered(false);
        break;
      case 1:
        setIsSecondItemHovered(false);
        break;
      case 2:
        setIsThirdItemHovered(false);
        break;
      case 3:
        setIsFourthItemHovered(false);
        break;
    }
  }, []);

  // Optimized click handler
  const handleCardClick = useCallback((index: number, title: string) => {
    switch (index) {
      case 0:
        window.open("https://cracked.ai/", "_blank");
        break;
      case 1:
        window.open("https://fomo.fund/", "_blank");
        break;
      case 2:
        window.open("https://aione.klinik-x.de/", "_blank");
        break;
      default:
        handleExpand(title);
    }
  }, []);

  // Memoized expand handler
  const handleExpand = useCallback((title: string) => {
    switch (title) {
      case "Case Studies":
        window.open("/whatwethink#case-studies", "_blank");
        break;
      case "Blogs":
        window.open("/whatwethink#blogs", "_blank");
        break;
      case "AI News":
        window.open("/whatwethink#ainews", "_blank");
        break;
      default:
        console.error("URL is not defined");
    }
  }, []);

  // Optimized case studies fetching with better error handling and reduced frequency
  useEffect(() => {
    const fetchCaseStudies = async (isInitialFetch = false) => {
      if (isInitialFetch) {
        setLoadingCaseStudies(true);
      } else {
        setIsRefreshing(true);
      }
      
      try {
        const response = await fetch('/api/case-studies');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: CaseStudy[] = await response.json();
        
        // Only update if data has actually changed to prevent unnecessary re-renders
        setCaseStudies(prevData => {
          if (JSON.stringify(prevData) !== JSON.stringify(data)) {
            return data;
          }
          return prevData;
        });
        
        setErrorCaseStudies('');
      } catch (error: any) {
        console.error('Error fetching case studies:', error);
        setErrorCaseStudies(error.message || 'An unexpected error occurred.');
      } finally {
        setLoadingCaseStudies(false);
        setIsRefreshing(false);
      }
    };

    // Initial fetch
    fetchCaseStudies(true);

    // Reduced polling frequency from 30s to 60s to improve performance
    const intervalId = setInterval(() => fetchCaseStudies(false), 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Optimized scroll handling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }, [router]);

  // Memoize case studies for marquee to prevent unnecessary re-renders
  const memoizedCaseStudies = useMemo(() => {
    if (caseStudies.length === 0) return [];
    // Simple duplication for smooth loop - just 2 copies is enough
    return [...caseStudies, ...caseStudies];
  }, [caseStudies]);

  // Memoize the marquee component to prevent unnecessary re-renders
  const caseStudiesMarquee = useMemo(() => {
    if (caseStudies.length === 0) return null;
    
    return (
      <Marquee
        speed={30}
        gradient={true}
        gradientColor="#ffffff"
        gradientWidth={100}
        className={styles.caseStudiesMarquee}
        pauseOnHover={false}
        play={true}
        loop={0}
      >
        {memoizedCaseStudies.map((caseStudy, index) => (
          <div key={`${caseStudy.id}-${index}`} className={styles.caseStudyCard}>
            <Link href={`/case-study/${generateSlug(caseStudy.title)}`}>
              <div className={styles.caseStudyCardContent}>
                <div className={styles.caseStudyCardImage}>
                  <Image
                    src={getSafeImageUrl(caseStudy.coverImage)}
                    alt={caseStudy.title}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/aboutus.png';
                    }}
                  />
                  <div className={styles.caseStudyCardOverlay}>
                    <span className={styles.viewProject}>View Project</span>
                  </div>
                </div>
                <div className={styles.caseStudyCardText}>
                  <h3>{caseStudy.title}</h3>
                  <p>Discover how we helped transform this project with innovative AI solutions and strategic insights.</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Marquee>
    );
  }, [memoizedCaseStudies]);

  return (
    <div className={styles.main}>
      {/* Page Title */}
      <div className={styles.pageTitle}>
        <span className={styles.category}>{'// Projects'}</span>
        <h1>Discover our latest projects and innovations</h1>
      </div>

      {/* Projects Section */}
      <section className={styles.caseSection} id="projects">
        <div className={styles.cardsContainer}>
          {memoizedTrendingList.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              onClick={() => handleCardClick(i, item.title)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardText}>
                  <h3>
                    {i === 0 ? "Cracked.AI" : 
                     i === 1 ? "FOMO" : 
                     i === 2 ? "LinkedAI" :
                     item.title}
                  </h3>
                  {i === 0 ? (
                    <p style={{ 
                      opacity: isFirstItemHovered ? 1 : 0, 
                      transition: 'opacity 0.3s ease',
                      textAlign: 'center',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      Click to View
                    </p>
                  ) : i === 1 ? (
                    <p style={{ 
                      opacity: isSecondItemHovered ? 1 : 0, 
                      transition: 'opacity 0.3s ease',
                      textAlign: 'center',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      Click to View
                    </p>
                  ) : i === 2 ? (
                    <p style={{ 
                      opacity: isThirdItemHovered ? 1 : 0, 
                      transition: 'opacity 0.3s ease',
                      textAlign: 'center',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}>
                      Click to View
                    </p>
                  ) : (
                    <>
                      <p>{item.description}</p>
                      <p className={styles.brief}>{item.brief}</p>
                    </>
                  )}
                </div>
                <div className={styles.cardImage}>
                  {i === 0 ? (
                    // First item with CrackedAI.webm functionality
                    <video
                      className={styles.imgTag}
                      src="/Landing Projects/CrackedAI.webm"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  ) : i === 1 ? (
                    // Second item with FOMO.gif functionality
                    <Image
                      className={styles.imgTag}
                      src="/Landing Projects/FOMO.gif"
                      alt="FOMO"
                      fill
                      style={{
                        objectFit: "cover",
                        animationPlayState: isSecondItemHovered ? "running" : "paused"
                      }}
                    />
                  ) : i === 2 ? (
                    // Third item with LinkedAI.gif functionality
                    <Image
                      className={styles.imgTag}
                      src="/Landing Projects/LinkedAI.gif"
                      alt="LinkedAI"
                      fill
                      style={{
                        objectFit: "cover",
                        animationPlayState: isThirdItemHovered ? "running" : "paused"
                      }}
                    />
                  ) : (
                    // Other items with original images
                    <Image
                      className={styles.imgTag}
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Additional Toingg project */}
          <div
            className={styles.card}
            onClick={() => window.open("https://www.toingg.com/", "_blank")}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <h3>Toingg</h3>
                {isFourthItemHovered ? (
                  <p style={{ 
                    opacity: isFourthItemHovered ? 1 : 0, 
                    transition: 'opacity 0.3s ease',
                    textAlign: 'center',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    Click to View
                  </p>
                ) : (
                  <>
                  </>
                )}
              </div>
              <div className={styles.cardImage}>
                <Image
                  className={styles.imgTag}
                  src="/Landing Projects/Toingg.gif"
                  alt="Toingg"
                  fill
                  style={{
                    objectFit: "cover",
                    animationPlayState: isFourthItemHovered ? "running" : "paused"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section - Always Visible */}
        <section className={styles.caseStudiesSection}>
          <div className={styles.caseStudiesHeader}>
            <h2>Case Studies</h2>
            {isRefreshing && (
              <div className={styles.refreshIndicator}>
                <span>🔄</span>
              </div>
            )}
          </div>
          {loadingCaseStudies ? (
            <div className={styles.caseStudiesSkeleton}>
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className={styles.caseStudyCardSkeleton}>
                  <div className={styles.skeletonImage} />
                  <div className={styles.skeletonContent}>
                    <div className={styles.skeletonTitle} />
                    <div className={styles.skeletonDescription} />
                  </div>
                </div>
              ))}
            </div>
          ) : errorCaseStudies ? (
            <p className={styles.error}>{errorCaseStudies}</p>
          ) : caseStudies.length > 0 ? (
            <div className={styles.marqueeContainer}>
              {caseStudiesMarquee}
            </div>
          ) : (
            <p>No case studies found.</p>
          )}
        </section>
      </section>

      <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
