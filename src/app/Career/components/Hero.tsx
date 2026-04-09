import styles from '@/styles/app/Career/components/Hero.module.scss';

export const Hero = ({
  onScrollToPositions,
  onScrollToBenefits, 
}: {
  onScrollToPositions: () => void;
  onScrollToBenefits: () => void;
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.background}>
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        {/* <div className={styles.badge}>
          <span>🚀</span>
          <span>Join the Future</span>
        </div> */}
        <p className={styles.subheading}>Be the Architect of AI Transformation</p>
        <h1 className={styles.heading}>
          Join our pioneering team at the forefront <br />
          <span className={styles.highlight}>of AGI evolution</span>
        </h1>
        <p className={styles.description}>
          We are shaping a future where AI is a fundamental and positive force for businesses, societies, and the planet.
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.primaryButton}
            onClick={onScrollToPositions} 
          >
            View Positions
          </button>
          <button
            className={styles.secondaryButton}
            onClick={onScrollToBenefits} 
          >
            Learn More
          </button>
        </div>
        {/* <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Open Positions</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Countries</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Remote Ready</span>
          </div>
        </div> */}
      </div>
    </header>
  );
};
