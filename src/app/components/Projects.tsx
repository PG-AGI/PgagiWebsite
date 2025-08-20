
'use client';

import { useState, useEffect, useRef } from 'react';
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

  const handleBookCall = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch case studies when component mounts and set up continuous updates
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
        console.log('Fetched case studies:', data); // Debug log
        
        // Only update if data has changed to prevent unnecessary re-renders
        setCaseStudies(prevData => {
          const prevIds = new Set(prevData.map(item => item.id));
          const newIds = new Set(data.map(item => item.id));
          
          // Check if data has actually changed
          if (prevData.length !== data.length || 
              !data.every(item => prevIds.has(item.id)) ||
              !prevData.every(item => newIds.has(item.id))) {
            console.log('New case studies detected, updating...');
            return data;
          }
          return prevData;
        });
        
        setErrorCaseStudies('');
      } catch (error: any) {
        console.error('Error fetching case studies:', error); // Debug log
        setErrorCaseStudies(error.message || 'An unexpected error occurred.');
      } finally {
        setLoadingCaseStudies(false);
        setIsRefreshing(false);
      }
    };

    // Initial fetch
    fetchCaseStudies(true);

    // Set up polling for new case studies (every 30 seconds)
    const intervalId = setInterval(() => fetchCaseStudies(false), 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleExpand = (title: string) => {
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
  };

  // This will handle scrolling after the route change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router]);

  return (
    <div className={styles.main}>
      {/* Page Title */}
      <div className={styles.pageTitle}>
        <span className={styles.category}>// Projects</span>
        <h1>Discover our latest projects and innovations</h1>
      </div>

      {/* Projects Section */}
      <section className={styles.caseSection} id="projects">
        <div className={styles.cardsContainer}>
          {trendingListOld.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              onClick={() => {
                if (i === 0) {
                  window.open("https://cracked.ai/", "_blank");
                } else if (i === 1) {
                  window.open("https://fomo.fund/", "_blank");
                } else if (i === 2) {
                  window.open("https://aione.klinik-x.de/", "_blank");
                } else {
                  handleExpand(item.title);
                }
              }}
              onMouseEnter={() => {
                if (i === 0) setIsFirstItemHovered(true);
                else if (i === 1) setIsSecondItemHovered(true);
                else if (i === 2) setIsThirdItemHovered(true);
              }}
              onMouseLeave={() => {
                if (i === 0) setIsFirstItemHovered(false);
                else if (i === 1) setIsSecondItemHovered(false);
                else if (i === 2) setIsThirdItemHovered(false);
              }}
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
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  ) : i === 1 ? (
                    // Second item with FOMO.gif functionality
                    <img
                      className={styles.imgTag}
                      src="/Landing Projects/FOMO.gif"
                      alt="FOMO"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        animationPlayState: isSecondItemHovered ? "running" : "paused"
                      }}
                    />
                  ) : i === 2 ? (
                    // Third item with LinkedAI.gif functionality
                    <img
                      className={styles.imgTag}
                      src="/Landing Projects/LinkedAI.gif"
                      alt="LinkedAI"
                      style={{
                        width: "100%",
                        height: "100%",
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
            onMouseEnter={() => setIsFourthItemHovered(true)}
            onMouseLeave={() => setIsFourthItemHovered(false)}
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
                <img
                  className={styles.imgTag}
                  src="/Landing Projects/Toingg.gif"
                  alt="Toingg"
                  style={{
                    width: "100%",
                    height: "100%",
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
              <Marquee
                speed={40}
                gradient={true}
                gradientColor="#ffffff"
                gradientWidth={100}
                className={styles.caseStudiesMarquee}
                pauseOnHover={false}
                play={true}
              >
                {[...caseStudies, ...caseStudies].map((caseStudy, index) => (
                  <div key={`${caseStudy.id}-${index}`} className={styles.caseStudyCard}>
                    <Link href={`/case-study/${generateSlug(caseStudy.title)}`}>
                      <div className={styles.caseStudyCardContent}>
                        <div className={styles.caseStudyCardImage}>
                          <Image
                            src={getSafeImageUrl(caseStudy.coverImage)}
                            alt={caseStudy.title}
                            layout="fill"
                            objectFit="cover"

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
