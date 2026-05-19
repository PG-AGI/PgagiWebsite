"use client";
import styles from '@/styles/components/organisms/NewPage.module.scss';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/motion-lite';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { MOBILE_BREAKPOINT } from '@/lib/motion';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';
import newPageText from '@/constants/uiText/newPage.json';
import EXTERNAL_LINKS from '@/constants/externalLinks';

type TabKey = 'founders' | 'enterprises';

const NewPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('founders');
  const { scrollTo } = useSmoothScrollTo();
  const shouldReduceMotion = useReducedMotion();
  void shouldReduceMotion;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const ctx = gsap.context(() => {
      // GSAP scaffolding retained for future motion work on this section.
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile, isMounted]);

  const tabContent = activeTab === 'founders'
    ? {
        overline: newPageText.leftLabelOverline,
        title: `${newPageText.leftMainTitlePrefix} ${newPageText.leftMainTitleHighlight}`,
        description: newPageText.leftDescription,
      }
    : {
        overline: newPageText.rightLabelOverline,
        title: newPageText.rightMainTitle,
        description: newPageText.rightDescription,
      };

  return (
    <section className={styles.section} id="what-we-build" ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.tabSwitcher} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'founders'}
            className={`${styles.tab} ${activeTab === 'founders' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('founders')}
          >
            {newPageText.foundersTabLabel}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'enterprises'}
            className={`${styles.tab} ${activeTab === 'enterprises' ? styles.tabActive : ''}`}
            onClick={() => scrollTo('#revenue-system', { offset: 80, duration: 1.5 })}
          >
            {newPageText.enterprisesTabLabel}
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.labelOverline}>{tabContent.overline}</p>
            <h2 className={styles.mainTitle}>{tabContent.title}</h2>
            <p className={styles.descriptionText}>{tabContent.description}</p>
            <div className={styles.ctaWrapper}>
              <button
                type="button"
                className={styles.pillButton}
                onClick={() => window.open(EXTERNAL_LINKS.CALENDLY_BOOKING, '_blank')}
              >
                {newPageText.ctaLabel}
                <div className={styles.redArrowCircle}>
                  <ArrowRight size={22} />
                </div>
              </button>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <Image
              src="/landing/dashboard-founders.png"
              alt="AI product dashboard mockup"
              width={1200}
              height={900}
              priority
              className={styles.dashboardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPage;
