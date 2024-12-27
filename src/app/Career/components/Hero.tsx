import styles from './Hero.module.scss';

export const Hero = ({ onScrollToPositions }: { onScrollToPositions: () => void }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <p className={styles.subheading}>Join Our Team</p>
        <h1 className={styles.heading}>Shape the Future of AI Innovation</h1>
        <p className={styles.description}>
          {"Be part of a team that's pushing the boundaries of AI technology and transforming businesses through advanced near AGI solutions."}
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.primaryButton}
            onClick={onScrollToPositions} // Trigger the scroll action
          >
            View Positions
          </button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </div>
      <div className={styles.background} />
    </header>
  );
};
