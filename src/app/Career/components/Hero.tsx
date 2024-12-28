import styles from './Hero.module.scss';

export const Hero = ({
  onScrollToPositions,
  onScrollToBenefits, 
}: {
  onScrollToPositions: () => void;
  onScrollToBenefits: () => void;
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
      <p className={styles.subheading}>Be the Architect of AI Transformation</p>
       <h1 className={styles.heading}> Join our pioneering team at the forefront <br /> of AGI evolution. </h1>
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
      </div>
      <div className={styles.background} />
    </header>
  );
};
