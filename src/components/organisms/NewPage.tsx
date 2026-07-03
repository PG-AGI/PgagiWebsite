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
import newPageText from '@/constants/uiText/newPage.json';
import EXTERNAL_LINKS from '@/constants/externalLinks';

type TabKey = 'founders' | 'enterprises';

const NewPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('founders');
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

  // The revenue section lives inside a lazy-loaded block far below this one, so
  // at click time it usually isn't in the DOM yet, and the sections between here
  // and there render (and shift layout) as we travel down. Scroll toward the
  // always-present lazy placeholder anchor, then keep correcting until the real
  // section has mounted and the layout has settled.
  const scrollToRevenue = () => {
    const start = performance.now();
    let settledTicks = 0;

    const tick = () => {
      const real = document.getElementById('revenue-section');
      const target = real ?? document.getElementById('revenue-section-anchor');
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Once the real section exists, re-issue the scroll a few more times to
      // absorb the layout shift from intervening lazy sections mounting.
      if (real) settledTicks += 1;

      if (settledTicks < 4 && performance.now() - start < 3000) {
        window.setTimeout(tick, 200);
      }
    };

    tick();
  };

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
            onClick={() => { setActiveTab('enterprises'); scrollToRevenue(); }}
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
