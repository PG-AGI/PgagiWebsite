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
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              What are we <span className={styles.highlight}>building?</span>
            </h1>
          </div>
        </div>

        {/* Dynamic Connecting Lines (Desktop Only) */}
        {!isMobile && (
          <div className={styles.linesContainer}>
            <svg width="100%" height="100%" viewBox="0 0 562 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgLines} preserveAspectRatio="none">
              <g filter="url(#filter0_577_7628)">
                <path d="M277.425 2.11426V76.6756L278.619 90.8739C279.496 101.299 288.213 109.314 298.675 109.314H517.119C528.235 109.314 537.246 118.325 537.246 129.441V213.905" stroke="#4B6F95" strokeWidth="10.9784" />
              </g>
              <g filter="url(#filter1_577_7628)">
                <path d="M277.884 0.742188V70.2718V79.5815C277.884 92.2131 288.123 102.453 300.755 102.453H519.865C532.496 102.453 542.736 112.693 542.736 125.325V207.044" stroke="#2C2C2C" strokeWidth="10.9784" />
              </g>
              <g filter="url(#filter2_577_7628)">
                <path d="M277.426 -11.1514V64.8846V73.1771C277.426 85.3035 287.256 95.1338 299.382 95.1338H528.098C540.224 95.1338 550.055 104.964 550.055 117.091V199.725" stroke="#9F0000" strokeWidth="10.9784" />
              </g>
              <g filter="url(#filter3_577_7628)">
                <path d="M280.427 -33.5654V40.9959L279.233 55.1942C278.356 65.6194 269.638 73.6346 259.176 73.6346H40.7324C29.6166 73.6346 20.6055 82.6458 20.6055 93.7616V186.459" stroke="#4B6F95" strokeWidth="10.9784" />
              </g>
              <g filter="url(#filter4_577_7628)">
                <path d="M279.968 -34.9375V34.5921V44.8167C279.968 56.943 270.138 66.7734 258.011 66.7734H37.0719C24.9456 66.7734 15.1152 76.6037 15.1152 88.7301V188.746" stroke="#9F0000" strokeWidth="10.9784" />
              </g>
              <g filter="url(#filter5_577_7628)">
                <path d="M280.426 -46.8311V29.2049V32.9231C280.426 47.5758 268.548 59.4541 253.895 59.4541H34.3279C19.6752 59.4541 7.79688 71.3325 7.79688 85.9852V195.608" stroke="#2C2C2C" strokeWidth="10.9784" />
              </g>
              <defs>
                <filter id="filter0_577_7628" x="268.276" y="0.284532" width="278.118" height="219.11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1.82973" />
                  <feGaussianBlur stdDeviation="1.82973" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_577_7628" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_577_7628" result="shape" />
                </filter>
                <filter id="filter1_577_7628" x="268.735" y="-1.08754" width="283.149" height="213.621" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1.82973" />
                  <feGaussianBlur stdDeviation="1.82973" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_577_7628" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_577_7628" result="shape" />
                </filter>
                <filter id="filter2_577_7628" x="268.276" y="-12.9811" width="290.926" height="218.195" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1.82973" />
                  <feGaussianBlur stdDeviation="1.82973" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_577_7628" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_577_7628" result="shape" />
                </filter>
                <filter id="filter3_577_7628" x="11.4577" y="-34.4803" width="278.118" height="227.343" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="2.74459" />
                  <feGaussianBlur stdDeviation="1.82973" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_577_7628" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_577_7628" result="shape" />
                </filter>
                <filter id="filter4_577_7628" x="5.9675" y="-35.8524" width="283.149" height="231.002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="2.74459" />
                  <feGaussianBlur stdDeviation="1.82973" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_577_7628" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_577_7628" result="shape" />
                </filter>
                <filter id="filter5_577_7628" x="-1.35086" y="-47.7459" width="290.926" height="249.757" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="2.74459" />
                  <feGaussianBlur stdDeviation="1.82973" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_577_7628" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_577_7628" result="shape" />
                </filter>
                <clipPath id="clip0_577_7628">
                  <rect width="562" height="171" fill="white" />
                </clipPath>
                <clipPath id="clip1_577_7628">
                  <rect width="289" height="163" fill="white" transform="translate(270 51)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}

        {/* Content Grid */}
        <div className={styles.cardsGrid}>
          {/* Left Card: Foundations */}
          <div className={`${styles.card} ${styles.cardFounders}`}>
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
                <div className={styles.formulaArea}>
                  <p className={styles.formulaLabel}>AI-generated formula</p>
                  <div className={styles.formulaBox}>
                    <code className={styles.formulaText}>
                      <span className={styles.highlightCyan}>{"{{"}AI Idea{"}}"}</span>&<span className={styles.highlightOrange}>{"{{"}MVP{"}}"}</span>?
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
          <div className={`${styles.card} ${styles.cardEnterprises}`}>
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
                <div className={styles.formulaArea}>
                  <p className={styles.formulaLabel}>AI-generated formula</p>
                  <div className={styles.formulaBox}>
                    <code className={styles.formulaText}>
                      <span className={styles.highlightOrange}>{"{{"}Processes{"}}"}</span>&<span className={styles.highlightCyan}>{"{{"}AI Tools{"}}"}</span>?
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
              <p className={styles.labelOverline}>FOR BUSINESSES & ENTERPRISES</p>
              <h2 className={styles.mainTitle}>Implement AI into your business operations</h2>
              <p className={styles.descriptionText}>
                Automate workflows, reduce costs, and improve decision-making by integrating AI into your existing systems — without disrupting operations.
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
        </div>
      </div>
    </section>
  );
};

export default NewPage;
