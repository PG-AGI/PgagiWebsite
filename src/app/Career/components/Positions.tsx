import { useRouter } from 'next/navigation';
import styles from './Positions.module.scss';
import Job from '@/utils/job';
import {useEffect,useState} from "react";

export const Positions = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('/api/careers/postings');
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        
        const data: Job[] = await response.json();
        setJobs(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setIsLoading(false);
      }
    }

    fetchJobs();
    console.log(jobs)
  }, [jobs]);
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
