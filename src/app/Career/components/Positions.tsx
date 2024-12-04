import { useRouter } from 'next/navigation';
import styles from './Positions.module.scss';
import { jobs } from '../data/jobs';

export const Positions = () => {
  const router = useRouter();

  return (
    <section className={styles['positions-section']}>
      <div className={styles['positions-container']}>
        <h2 className={styles['positions-heading']}>Open Positions</h2>
        <div className={styles['positions-grid']}>
          {jobs.map((job, index) => (
            <div key={index} className={styles['positions-card']}>
              <div className={styles['card-content']}>
                <div className={styles['card-details']}>
                  <h3 className={styles['card-title']}>{job.title}</h3>
                  <p className={styles['card-description']}>{job.description}</p>
                  <div className={styles['card-tags']}>
                    <span className={`${styles.tag} ${styles['tag-department']}`}>
                      {job.department}
                    </span>
                    <span className={`${styles.tag} ${styles['tag-location']}`}>
                      {job.location}
                    </span>
                    <span className={`${styles.tag} ${styles['tag-type']}`}>
                      {job.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => router.push(`/jobs/${job.id}`)}
                  className={styles['apply-button']}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
