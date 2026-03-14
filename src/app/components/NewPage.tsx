import React, { useEffect, useState } from 'react';
import styles from './NewPage.module.scss';
import { ArrowRight, Lightbulb, PenTool, Rocket, TrendingUp, Settings, Database, Activity, Target } from 'lucide-react';

const Badge = ({ icon, text, theme, index }: { icon: React.ReactNode, text: string, theme: string, index: number }) => (
  <div className={styles.badgeStack} style={{ '--index': index } as React.CSSProperties}>
    <div className={`${styles.badgeItem} ${styles[theme]}`}>
      <span className={styles.badgeIcon}>{icon}</span>
      <span className={styles.badgeLabel}>{text}</span>
    </div>
  </div>
);

const NewPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const leftBadges = [
    { icon: <Lightbulb size={18} />, text: 'Idea & Discovery', theme: 'themePink' },
    { icon: <PenTool size={18} />, text: 'Prototype & Develop', theme: 'themeCyan' },
    { icon: <Rocket size={18} />, text: 'Deploy & Optimize', theme: 'themeYellow' },
    { icon: <TrendingUp size={18} />, text: 'Scale & Innovate', theme: 'themeGreen' },
  ];

  const rightBadges = [
    { icon: <Target size={18} />, text: 'Strategy & Planning', theme: 'themeRed' },
    { icon: <Database size={18} />, text: 'Data Integration', theme: 'themeCyan' },
    { icon: <Settings size={18} />, text: 'AI Solution Deployment', theme: 'themeYellow' },
    { icon: <Activity size={18} />, text: 'Performance & Optimization', theme: 'themeGreen' },
  ];

  return (
    <section className={styles.section} id="what-we-build">
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              What are we <span className={styles.accentText}>building?</span>
            </h1>
            <div className={styles.titleAvatars}>
              <div className={styles.avatarS}>S</div>
              <div className={styles.avatarA}>A</div>
            </div>
          </div>
        </div>

        {/* Dynamic Connecting Lines (Desktop Only) */}
        {!isMobile && (
          <div className={styles.linesContainer}>
            <svg className={styles.svgLines} viewBox="0 0 1000 280" preserveAspectRatio="none">
              <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                  <feOffset dx="0" dy="10" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#shadow)">
                {/* 1. BLACK PIPE BASE (Thickest) */}
                {/* Trunk */}
                <path d="M500,0 L500,80" className={styles.lineLayerBlack} fill="none" />
                {/* Left Branch */}
                <path d="M500,80 Q500,120 460,120 L250,120 Q210,120 210,160 L210,280" className={styles.lineLayerBlack} fill="none" />
                {/* Right Branch */}
                <path d="M500,80 Q500,120 540,120 L750,120 Q790,120 790,160 L790,280" className={styles.lineLayerBlack} fill="none" />

                {/* 2. RED LINE (Right/Top) */}
                {/* Trunk */}
                <path d="M504,0 L504,80" className={styles.lineLayerRed} fill="none" />
                {/* Left Branch Turn (Red is Inner) */}
                <path d="M504,80 Q504,116 464,116 L250,116 Q214,116 214,156 L214,280" className={styles.lineLayerRed} fill="none" />
                {/* Right Branch Turn (Red is Outer) */}
                <path d="M504,80 Q504,124 544,124 L750,124 Q794,124 794,164 L794,280" className={styles.lineLayerRed} fill="none" />

                {/* 3. BLUE LINE (Left/Bottom) */}
                {/* Trunk */}
                <path d="M496,0 L496,80" className={styles.lineLayerBlue} fill="none" />
                {/* Left Branch Turn (Blue is Outer) */}
                <path d="M496,80 Q496,124 456,124 L250,124 Q206,124 206,164 L206,280" className={styles.lineLayerBlue} fill="none" />
                {/* Right Branch Turn (Blue is Inner) */}
                <path d="M496,80 Q496,116 536,116 L750,116 Q786,116 786,156 L786,280" className={styles.lineLayerBlue} fill="none" />
              </g>
            </svg>
          </div>
        )}

        {/* Content Grid */}
        <div className={styles.cardsGrid}>
          {/* Left Card: Foundations */}
          <div className={styles.card}>
            <div className={styles.cardHeaderWrapper}>
              <div className={styles.cardVisualLeft}>
                <div className={styles.cardGhostTitle}>Build a Custom AI Product —</div>
                <div className={styles.checkRows}>
                  <div className={styles.checkRow}>
                    <div className={styles.checkIconBox}>✓</div>
                    <span>Start with a clear AI product vision</span>
                  </div>
                  <div className={styles.checkRow}>
                    <div className={styles.checkIconBox}>✓</div>
                    <span>Build, test, and refine...</span>
                  </div>
                </div>
                <div className={styles.formulaBox}>
                  <p className={styles.formulaLabel}>AI-generated formula</p>
                  <code className={styles.formulaText}>
                    <span className={styles.highlightCyan}>{"{{"}AI Idea{"}}"}</span>&<span className={styles.highlightOrange}>{"{{"}MVP{"}}"}</span>?
                  </code>
                </div>
              </div>
              <div className={styles.badgesContainer}>
                {leftBadges.map((badge, idx) => (
                  <Badge key={idx} {...badge} index={idx} />
                ))}
              </div>
            </div>

            <div className={styles.cardTextContent}>
              <p className={styles.labelOverline}>FOR FOUNDERS / AI PRODUCT BUILDERS</p>
              <h2 className={styles.mainTitle}>Build a custom AI product — from idea to scale</h2>
              <p className={styles.descriptionText}>
                Design, develop, and launch production-ready AI products with a user-first approach and scalable architecture.
              </p>
              <div className={styles.ctaWrapper}>
                <button className={styles.pillButton}>
                  Let's build together
                  <div className={styles.redArrowCircle}>
                    <ArrowRight size={22} />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Card: Enterprises */}
          <div className={styles.card}>
            <div className={`${styles.cardHeaderWrapper} ${styles.rightHeaderGradient}`}>
              <div className={styles.cardVisualRight}>
                <div className={styles.cardGhostTitleWhite}>Implement AI Into Your Business</div>
                <div className={styles.checkRows}>
                  <div className={styles.checkRow}>
                    <div className={styles.checkIconWhite}>✓</div>
                    <span>Identify business processes</span>
                  </div>
                  <div className={styles.checkRow}>
                    <div className={styles.checkIconWhite}>✓</div>
                    <span>Integrate AI tools with...</span>
                  </div>
                </div>
                <div className={styles.formulaBox}>
                  <p className={styles.formulaLabel}>AI-generated formula</p>
                  <code className={styles.formulaText}>
                    <span className={styles.highlightOrange}>{"{{"}Processes{"}}"}</span>&<span className={styles.highlightCyan}>{"{{"}AI Tools{"}}"}</span>?
                  </code>
                </div>
              </div>
              <div className={styles.badgesContainer}>
                {rightBadges.map((badge, idx) => (
                  <Badge key={idx} {...badge} index={idx} />
                ))}
              </div>
            </div>

            <div className={styles.cardTextContent}>
              <p className={styles.labelOverline}>FOR BUSINESSES & ENTERPRISES</p>
              <h2 className={styles.mainTitle}>Implement AI into your business operations</h2>
              <p className={styles.descriptionText}>
                Automate workflows, reduce costs, and improve decision-making by integrating AI into your existing systems — without disrupting operations.
              </p>
              <div className={styles.ctaWrapper}>
                <div className={styles.ctaAvatars}>
                  <div className={styles.avatarS}>S</div>
                  <div className={styles.avatarA}>A</div>
                </div>
                <button className={styles.pillButton}>
                  Let's build together
                  <div className={styles.redArrowCircle}>
                    <ArrowRight size={22} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPage;
