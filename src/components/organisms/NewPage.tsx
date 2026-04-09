import styles from '@/styles/components/organisms/NewPage.module.scss';
import { ArrowRight, Lightbulb, PenTool, Rocket, TrendingUp, Settings, Database, Activity, Target } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';
import {
  FRAMER_EASE,
  GSAP_EASE,
  MOBILE_BREAKPOINT,
  MOTION_DURATION,
} from '@/lib/motion';
import newPageText from '@/constants/uiText/newPage.json';
// Plugins registered in useEffect — NOT at module scope to avoid SSR/import-time side-effects

const Badge = ({ icon, text, theme, index }: { icon: React.ReactNode, text: string, theme: string, index: number }) => (
  <div className={`${styles.badgeStack} ${styles[`badgeIndex${index}`] ?? ""}`}>
    <div className={`${styles.badgeItem} ${styles[theme]}`}>
      <span className={styles.badgeIcon}>{icon}</span>
      <span className={styles.badgeLabel}>{text}</span>
    </div>
  </div>
);

const NewPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollTo } = useSmoothScrollTo();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const leftBadges = [
    { icon: <Lightbulb size={18} />, text: newPageText.leftBadgeTexts[0], theme: 'themeRed' },
    { icon: <PenTool size={18} />, text: newPageText.leftBadgeTexts[1], theme: 'themeCyan' },
    { icon: <Rocket size={18} />, text: newPageText.leftBadgeTexts[2], theme: 'themeLime' },
    { icon: <TrendingUp size={18} />, text: newPageText.leftBadgeTexts[3], theme: 'themeGreen' },
  ];

  const rightBadges = [
    { icon: <Target size={18} />, text: newPageText.rightBadgeTexts[0], theme: 'themeRed' },
    { icon: <Database size={18} />, text: newPageText.rightBadgeTexts[1], theme: 'themeCyan' },
    { icon: <Settings size={18} />, text: newPageText.rightBadgeTexts[2], theme: 'themeLime' },
    { icon: <Activity size={18} />, text: newPageText.rightBadgeTexts[3], theme: 'themeGreen' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMounted || isMobile) return;

    // Register plugins inside useEffect — never at module scope
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const ctx = gsap.context(() => {
      // Use class queries scoped strictly to this component instance to avoid HMR crash
      const paths = ['.leftPath', '.rightPath'];
      const dots = ['.leftDot', '.rightDot'];
      const cards = [leftCardRef.current, rightCardRef.current];

      paths.forEach((selector, i) => {
        const path = containerRef.current?.querySelector(selector) as SVGPathElement;
        const dot = containerRef.current?.querySelector(dots[i]) as HTMLDivElement;
        if (!path || !dot) return;

        gsap.set(dot, { opacity: 0 }); // Start hidden

        // Timeline: Automatic Loop (Plays when in view)
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 1.5, // Brief pause before the next animation cycle
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%', // Triggers early as they scroll down
            toggleActions: 'play pause resume pause', // Auto plays without scrub
          }
        });

        tl.set(dot, { opacity: 1, scale: 0 }) 
          .to(dot, { scale: 1, duration: 0.2, ease: 'back.out(1.7)' })
          .to(dot, {
            duration: MOTION_DURATION.cinematic + MOTION_DURATION.fast,
            ease: GSAP_EASE.smoothInOut,
            motionPath: {
              path: path,
              align: path,
              alignOrigin: [0.5, 0.5],
            }
          })
          .to(dot, { opacity: 0, scale: 0.5, duration: 0.2 }) // Fade dot when it reaches the end
          .to(cards[i], {
            borderColor: 'rgba(211, 69, 81, 0.8)', // Premium border highlight
            duration: MOTION_DURATION.fast,
          }, '<') // Run precisely when dot enters box
          .to(cards[i], {
            borderColor: 'rgba(255, 255, 255, 0.5)', // Fade cleanly back to default
            duration: MOTION_DURATION.cinematic,
            delay: 0.2, 
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile, isMounted]);

  return (
    <section className={styles.section} id="what-we-build" ref={containerRef}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <motion.h1
              className={styles.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: MOTION_DURATION.slow, ease: FRAMER_EASE.premiumOut }
              }
            >
              {newPageText.titlePrefix} <span className={styles.highlight}>{newPageText.titleHighlight}</span>
            </motion.h1>
          </div>
        </div>

        {/* World-Class Scroll-Animated Connecting Lines */}
        {(isMounted && !isMobile) && (
          <div className={styles.linesContainer}>
            <svg width="100%" height="220" viewBox="0 0 1000 220" fill="none" className={styles.svgLines} preserveAspectRatio="none">
              {/* Left Path - Stretching perfectly to card center */}
              <path 
                className={`leftPath ${styles.scrollPath}`}
                d="M500 -20V80H2V220" 
                stroke="#9F0000" 
                strokeWidth="3" 
                vectorEffect="non-scaling-stroke"
              />
              
              {/* Right Path - Stretching perfectly to card center */}
              <path 
                className={`rightPath ${styles.scrollPath}`}
                d="M500 -20V80H998V220" 
                stroke="#9F0000" 
                strokeWidth="3" 
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            
            {/* Perfectly circular glowing dots animated via GSAP MotionPath */}
            <div className={`leftDot ${styles.glowingDot}`}></div>
            <div className={`rightDot ${styles.glowingDot}`}></div>
          </div>
        )}

        {/* Content Grid */}
        <div className={styles.cardsGrid}>
          {/* Left Card: Foundations */}
          <motion.div 
            className={`${styles.card} ${styles.cardFounders}`} 
            ref={leftCardRef}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 36, scale: 0.97 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: MOTION_DURATION.cinematic, ease: FRAMER_EASE.premiumOut, delay: 0.1 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollTo('#vision-system', { offset: 80, duration: 1.5 });
            }}
          >
            <div className={styles.cardHeaderWrapper}>
              <div className={styles.cardVisualLeft}>
                <div className={styles.cardGhostTitle}>{newPageText.leftGhostTitle}</div>
                <div className={styles.checkRows}>
                  <div className={styles.checkRow}>
                    <div className={styles.checkIconBox}>✓</div>
                    <span>{newPageText.leftChecklist[0]}</span>
                  </div>
                  <div className={styles.checkRow}>
                    <div className={styles.checkIconBox}>✓</div>
                    <span>{newPageText.leftChecklist[1]}</span>
                  </div>
                </div>
                <div className={styles.formulaArea}>
                  <p className={styles.formulaLabel}>{newPageText.formulaLabel}</p>
                  <div className={styles.formulaBox}>
                    <code className={styles.formulaText}>
                      <span className={styles.highlightGreen}>{"{{"}AI Idea{"}}"}</span><span className={styles.ampersand}>&</span><span className={styles.highlightOrangeRed}>{"{{"}MVP{"}}"}</span>?
                    </code>
                  </div>
                </div>
              </div>
              <div className={styles.badgesContainer}>
                {leftBadges.map((badge, idx) => (
                  <Badge key={idx} {...badge} index={idx} />
                ))}
              </div>
            </div>

            <div className={styles.cardTextContent}>
              <p className={styles.labelOverline}>{newPageText.leftLabelOverline}</p>
              <h2 className={styles.mainTitle}>
                {newPageText.leftMainTitlePrefix} <span className={styles.titleBreak}>{newPageText.leftMainTitleHighlight}</span>
              </h2>
              <p className={styles.descriptionText}>
                {newPageText.leftDescription}
              </p>
              <div className={styles.ctaWrapper}>
                <button
                  className={styles.pillButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://calendly.com/vivek_01/30min', '_blank');
                  }}
                >
                  {newPageText.ctaLabel}
                  <div className={styles.redArrowCircle}>
                    <ArrowRight size={22} />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Enterprises */}
          <motion.div 
            className={`${styles.card} ${styles.cardEnterprises}`} 
            ref={rightCardRef}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 36, scale: 0.97 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: MOTION_DURATION.cinematic, ease: FRAMER_EASE.premiumOut, delay: 0.2 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollTo('#revenue-system', { offset: 80, duration: 1.5 });
            }}
          >
            <div className={`${styles.cardHeaderWrapper} ${styles.rightHeaderGradient}`}>
              <div className={styles.cardVisualRight}>
                <div className={styles.cardGhostTitleWhite}>{newPageText.rightGhostTitle}</div>
                <div className={styles.checkRows}>
                  <div className={styles.checkRow}>
                    <div className={styles.checkIconWhite}>✓</div>
                    <span>{newPageText.rightChecklist[0]}</span>
                  </div>
                  <div className={styles.checkRow}>
                    <div className={styles.checkIconWhite}>✓</div>
                    <span>{newPageText.rightChecklist[1]}</span>
                  </div>
                </div>
                <div className={styles.formulaArea}>
                  <p className={styles.formulaLabel}>{newPageText.formulaLabel}</p>
                  <div className={styles.formulaBox}>
                    <code className={styles.formulaText}>
                      <span className={styles.highlightOrange}>{"{{"}Processes{"}}"}</span><span className={styles.ampersandWhite}>&</span><span className={styles.highlightCyanNeon}>{"{{"}AI Tools{"}}"}</span>?
                    </code>
                  </div>
                </div>
              </div>
              <div className={styles.badgesContainer}>
                {rightBadges.map((badge, idx) => (
                  <Badge key={idx} {...badge} index={idx} />
                ))}
              </div>
            </div>

            <div className={styles.cardTextContent}>
              <p className={styles.labelOverline}>{newPageText.rightLabelOverline}</p>
              <h2 className={styles.mainTitle}>{newPageText.rightMainTitle}</h2>
              <p className={styles.descriptionText}>
                {newPageText.rightDescription}
              </p>
              <div className={styles.ctaWrapper}>
                <button
                  className={styles.pillButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://calendly.com/vivek_01/30min', '_blank');
                  }}
                >
                  {newPageText.ctaLabel}
                  <div className={styles.redArrowCircle}>
                    <ArrowRight size={22} />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewPage;
