
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

type CaseStudy = {
  id: string;
  title: string;
  coverImage: string;
  description?: string;
};

export default function Projects() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loadingCaseStudies, setLoadingCaseStudies] = useState<boolean>(false);
  const [errorCaseStudies, setErrorCaseStudies] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [carouselPosition, setCarouselPosition] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isPausedRef = useRef<boolean>(false);

  // Memoize handlers to prevent unnecessary re-renders
  const handleBookCall = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  // Memoize the trending list to prevent unnecessary re-renders
  const memoizedTrendingList = useMemo(() => trendingListOld, []);

  // Optimized hover handler - single function instead of multiple
  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
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

    // Reduced polling frequency from 60s to 120s to improve performance
    const intervalId = setInterval(() => fetchCaseStudies(false), 120000);

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

  // Enhanced infinite carousel animation with ultra-smooth infinite loop
  useEffect(() => {
    if (caseStudies.length === 0) return;

    const cardWidth = 280; // Width of each card
    const cardGap = 30; // Gap between cards
    const totalCardWidth = cardWidth + cardGap;
    const singleLoopWidth = caseStudies.length * totalCardWidth;
    
    let animationSpeed = 1.0; // Optimized speed for ultra-smooth movement
    let currentPosition = 0;
    let lastTime = performance.now();

    const animateCarousel = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      // Use delta time for consistent animation regardless of frame rate
      const frameSpeed = animationSpeed * (deltaTime / 16.67); // Normalize to 60fps

      if (!isPausedRef.current) {
        currentPosition -= frameSpeed;
        
        // Ultra-smooth modulo-based infinite loop
        // This creates seamless infinite scrolling without any jumps
        if (currentPosition <= -singleLoopWidth) {
          currentPosition += singleLoopWidth; // Smoothly add back one loop width
        }
        
        // Use direct style manipulation for better performance
        if (carouselRef.current) {
          const track = carouselRef.current.querySelector(`.${styles.carouselTrack}`) as HTMLElement;
          if (track) {
            track.style.transform = `translateX(${currentPosition}px)`;
          }
        }
      }

      animationRef.current = requestAnimationFrame(animateCarousel);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animateCarousel);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [caseStudies.length]);

  // Pause carousel on hover with smooth transition
  const handleCarouselMouseEnter = useCallback(() => {
    isPausedRef.current = true;
    // Add a subtle visual indicator that carousel is paused
    if (carouselRef.current) {
      carouselRef.current.style.opacity = '0.95';
      carouselRef.current.setAttribute('data-paused', 'true');
    }
  }, []);

  const handleCarouselMouseLeave = useCallback(() => {
    isPausedRef.current = false;
    // Restore full opacity
    if (carouselRef.current) {
      carouselRef.current.style.opacity = '1';
      carouselRef.current.removeAttribute('data-paused');
    }
  }, []);

  // Memoize case studies for carousel to prevent unnecessary re-renders
  const memoizedCaseStudies = useMemo(() => {
    if (caseStudies.length === 0) return [];
    // Create smooth infinite loop structure with sufficient buffer
    // We need at least 3 full sets to ensure ultra-smooth transitions
    // [A, B, C, A, B, C, A, B, C] - provides buffer for seamless looping
    const repeatedArray = [];
    for (let i = 0; i < 3; i++) { // 3 sets for ultra-smooth infinite loop
      repeatedArray.push(...caseStudies);
    }
    return repeatedArray;
  }, [caseStudies]);

  // Memoize the infinite carousel component
  const caseStudiesCarousel = useMemo(() => {
    if (caseStudies.length === 0) return null;
    
    return (
      <div 
        className={styles.infiniteCarousel} 
        ref={carouselRef}
        onMouseEnter={handleCarouselMouseEnter}
        onMouseLeave={handleCarouselMouseLeave}
      >
        <div 
          className={styles.carouselTrack}
          style={{
            transition: 'none', // Remove transition for smoother animation
            willChange: 'transform', // Optimize for transform changes
            transformStyle: 'preserve-3d' // Force GPU compositing
          }}
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
        </div>
      </div>
    );
  }, [memoizedCaseStudies, caseStudies.length, handleCarouselMouseEnter, handleCarouselMouseLeave]);

  // Memoize project cards to prevent unnecessary re-renders
  const projectCards = useMemo(() => {
    return memoizedTrendingList.map((item, i) => (
      <div
        key={i}
        className={styles.card}
        onClick={() => handleCardClick(i, item.title)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
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
            {i <= 2 ? (
              <p style={{ 
                opacity: hoveredIndex === i ? 1 : 0, 
                transition: 'opacity 0.2s ease',
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
              <Image
                className={styles.imgTag}
                src="/Landing Projects/FOMO.gif"
                alt="FOMO"
                fill
                style={{
                  objectFit: "cover",
                  animationPlayState: hoveredIndex === i ? "running" : "paused"
                }}
              />
            ) : i === 2 ? (
              <Image
                className={styles.imgTag}
                src="/Landing Projects/LinkedAI.gif"
                alt="LinkedAI"
                fill
                style={{
                  objectFit: "cover",
                  animationPlayState: hoveredIndex === i ? "running" : "paused"
                }}
              />
            ) : (
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
    ));
  }, [memoizedTrendingList, hoveredIndex, handleCardClick, handleMouseEnter, handleMouseLeave]);

  // Memoize additional project card
  const additionalProjectCard = useMemo(() => (
    <div
      className={styles.card}
      onClick={() => window.open("https://www.toingg.com/", "_blank")}
      onMouseEnter={() => handleMouseEnter(3)}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <h3>Toingg</h3>
          {hoveredIndex === 3 && (
            <p style={{ 
              opacity: 1, 
              transition: 'opacity 0.2s ease',
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Click to View
            </p>
          )}
        </div>
        <div className={styles.cardImage}>
          <video
            className={styles.imgTag}
            src="/Landing Projects/Toingg.webm"
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
        </div>
      </div>
    </div>
  ), [hoveredIndex, handleMouseEnter, handleMouseLeave]);

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
          {projectCards}
          {additionalProjectCard}
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
            <div className={styles.carouselContainer}>
              {caseStudiesCarousel}
            </div>
          ) : (
            <p>No case studies found.</p>
          )}
        </section>
      </section>

      {/* <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
}
