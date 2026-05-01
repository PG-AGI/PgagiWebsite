
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/organisms/projects.module.scss';
import whatWeThinkStyles from '@/styles/app/whatwethink/blogs.module.scss';
import { getSafeImageUrl } from '@/utils/imageUtils';
import { trendingListOld } from '@/utils/constants';
import { useRouter } from 'next/navigation';
import { fetchAllCaseStudies } from '@/services/caseStudyService';
import ROUTES from '@/constants/routes';
import { getErrorMessage } from '@/utils/errorUtils';
import EXTERNAL_LINKS from '@/constants/externalLinks';

type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
  description?: string;
};

export default function Projects() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loadingCaseStudies, setLoadingCaseStudies] = useState<boolean>(false);
  const [errorCaseStudies, setErrorCaseStudies] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState(4);

  // Memoize the trending list to prevent unnecessary re-renders
  const memoizedTrendingList = useMemo(() => trendingListOld, []);

  // Optimized hover handler - single function instead of multiple
  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  // Memoized expand handler
  const handleExpand = useCallback((title: string) => {
    switch (title) {
      case "Case Studies":
        window.open(ROUTES.WHAT_WE_THINK_CASE_STUDIES, "_blank");
        break;
      case "Blogs":
        window.open(ROUTES.WHAT_WE_THINK_BLOGS, "_blank");
        break;
      case "AI News":
        window.open(ROUTES.WHAT_WE_THINK_AINEWS, "_blank");
        break;
      default:
        console.error("URL is not defined");
    }
  }, []);

  // Optimized click handler
  const handleCardClick = useCallback((index: number, title: string) => {
    switch (index) {
      case 0:
        window.open(EXTERNAL_LINKS.CRACKED_AI, "_blank");
        break;
      case 1:
        // window.open("https://fomo.fund/", "_blank");
        break;
      case 2:
        window.open(EXTERNAL_LINKS.AIONE, "_blank");
        break;
      case 3:
        window.open(EXTERNAL_LINKS.AIM_CUBE, "_blank");
        break;
      case 4:
        window.open(EXTERNAL_LINKS.ONCHAIN_TOOLKIT, "_blank");
        break;

      default:
        handleExpand(title);
    }
  }, [handleExpand]);

  useEffect(() => {
    const fetchCaseStudiesData = async () => {
      setLoadingCaseStudies(true);
      setErrorCaseStudies('');
      try {
        const data = (await fetchAllCaseStudies()) as unknown as CaseStudy[];
        const filteredData = data.filter(
          (cs) => cs.slug !== 'ai-asr-doctor-clinical-documentation-platform'
        );
        setCaseStudies(filteredData);
      } catch (error: unknown) {
        setErrorCaseStudies(getErrorMessage(error));
      } finally {
        setLoadingCaseStudies(false);
      }
    };

    fetchCaseStudiesData();
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
                    i === 3 ? "Onchain Toolkit" :
                      i === 4 ? "AIMI" :
                        item.title}
            </h3>
            {i <= 4 ? (
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

            ) : i === 3 ? (
              <video
                className={styles.imgTag}
                src="/Landing Projects/OnchainToolkit.webm"
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
            ) : i === 4 ? (
              <video
                className={styles.imgTag}
                src="/Landing Projects/AIMI.mp4"
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
      onClick={() => window.open(EXTERNAL_LINKS.TOINGG, "_blank")}
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
            src="/Landing Projects/Toingg.mp4"
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


  //added onchaintoolit card
  const onchainProjectCard = useMemo(() => (
    <div
      className={styles.card}
      onClick={() => window.open(EXTERNAL_LINKS.ONCHAIN_TOOLKIT, "_blank")}
      onMouseEnter={() => handleMouseEnter(4)}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <h3>Onchain Toolkit</h3>
          {hoveredIndex === 4 && (
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
          {/* <video
          className={styles.imgTag}
          src="/Landing Projects/OnchainToolkit.webm"
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
        /> */}


          <Image
            className={styles.imgTag}
            src="/Landing Projects/Onchain_Toolkit.gif"
            alt="FOMO"
            fill
            style={{
              objectFit: "cover",
              animationPlayState: hoveredIndex === 4 ? "running" : "paused"
            }}
          />

        </div>
      </div>
    </div>
  ), [hoveredIndex, handleMouseEnter, handleMouseLeave]);

  const aimiProjectCard = useMemo(() => (
    <div
      className={styles.card}
      onClick={() => window.open(EXTERNAL_LINKS.AIM_CUBE, "_blank")}
      onMouseEnter={() => handleMouseEnter(4)}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <h3>AIMI</h3>
          {hoveredIndex === 4 && (
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
            src="/Landing Projects/AIMI.mp4"
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
      <div className={`${styles.pageTitle} top-section-slide-in`}>
        <span className={styles.category}>{'Projects'}</span>
        <h1>Discover our latest projects and innovations</h1>
      </div>

      {/* Projects Section */}
      <section className={styles.caseSection} id="projects">
        <div className={styles.cardsContainer}>
          {projectCards}
          {additionalProjectCard}
          {onchainProjectCard}
          {aimiProjectCard}
        </div>

        {/* Case Studies Section - Always Visible */}
        <section className={styles.caseStudiesSection}>
          <div className={styles.caseStudiesHeader}>
            <h2>Case Studies</h2>
          </div>
          {loadingCaseStudies ? (
            <div className={whatWeThinkStyles.cardsContainer}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={whatWeThinkStyles.cardSkeleton}>
                  <div className={whatWeThinkStyles.skeletonContent}>
                    <div className={whatWeThinkStyles.skeletonText}>
                      <div className={whatWeThinkStyles.skeletonTitle} />
                      <div className={whatWeThinkStyles.skeletonDescription} />
                    </div>
                    <div className={whatWeThinkStyles.skeletonImage} />
                  </div>
                </div>
              ))}
            </div>
          ) : errorCaseStudies ? (
            <p className={styles.error}>{errorCaseStudies}</p>
          ) : caseStudies.length > 0 ? (
            <div className={whatWeThinkStyles.cardsContainer}>
              {caseStudies
                .slice(0)
                .reverse()
                .slice(0, visibleCount)
                .map((caseStudy) => (
                  <div
                    key={caseStudy.slug}
                    className={`${whatWeThinkStyles.card} ${styles.projectCaseCard}`}
                  >
                    <Link href={ROUTES.CASE_STUDY_SLUG(caseStudy.slug)}>
                      <div
                        className={`${whatWeThinkStyles.cardContent} ${styles.projectCaseCardContent}`}
                      >
                        <div className={`${whatWeThinkStyles.cardText} ${styles.projectCaseCardText}`}>
                          <h3>{caseStudy.title}</h3>
                          <p>
                            {caseStudy.description ||
                              'Advancing industry standards with bespoke AI integrations and high-performance system architectures.'}
                          </p>
                          <span className={whatWeThinkStyles.viewProject}>View Project →</span>
                        </div>
                        <div
                          className={`${whatWeThinkStyles.cardImage} ${styles.projectCaseCardImage}`}
                        >
                          <Image
                            className={`${whatWeThinkStyles.imgTag} ${styles.projectCaseCardImgTag}`}
                            src={getSafeImageUrl(caseStudy.coverImage)}
                            alt={caseStudy.title}
                            fill
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/aboutus.png';
                            }}
                          />
                          <div className={whatWeThinkStyles.logoOverlay}>
                            <Image
                              src="/landing/PGAGI-logo.png"
                              alt="PG-AGI Logo"
                              width={40}
                              height={40}
                              className={whatWeThinkStyles.overlayLogo}
                            />
                          </div>
                          <div className={whatWeThinkStyles.premiumGradient} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              {visibleCount < caseStudies.length && (
                <div className={whatWeThinkStyles.loadMoreWrapper}>
                  <button
                    className={whatWeThinkStyles.loadMoreBtn}
                    onClick={() => setVisibleCount(caseStudies.length)}
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p>No case studies found.</p>
          )}
        </section>
      </section>

      {/*  */}
    </div>
  );
}
