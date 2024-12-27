"use client";

import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { useRouter } from "next/navigation";
import styles from "./Positions.module.scss";
import Job from "@/utils/job";

export const Positions = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchJobs = async () => {
      try {
        const response = await axios.get<Job[]>("/api/careers/postings");
        setJobs(response.data);
        setIsLoading(false);
      } catch (err) {
        // Axios throws an error object with a response property
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Failed to fetch jobs");
        } else {
          setError("An unknown error occurred");
        }
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []); // Empty dependency array ensures this runs once on mount

  // Optional: Handle navigation more gracefully
  const handleApply = (jobId: string) => {
    router.push(`/jobs/${jobId}`);
  };

  if (isLoading) {
    return (
      <section className={styles["positions-section"]}>
        <div className={styles["positions-container"]}>
          <h2 className={styles["positions-heading"]}>Open Positions</h2>
          <p>Loading jobs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles["positions-section"]}>
        <div className={styles["positions-container"]}>
          <h2 className={styles["positions-heading"]}>Open Positions</h2>
          <p className={styles["error-message"]}>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles["positions-section"]}>
      <div className={styles["positions-container"]}>
        <h2 className={styles["positions-heading"]}>Open Positions</h2>
        <div className={styles["positions-grid"]}>
          {jobs.map((job) => (
            <div key={job.id} className={styles["positions-card"]}>
              <div className={styles["card-content"]}>
                <div className={styles["card-details"]}>
                  <h3 className={styles["card-title"]}>{job.title}</h3>
                  <p
                    className={styles["card-description"]}
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  ></p>
                  <div className={styles["card-tags"]}>
                    <span
                      className={`${styles.tag} ${styles["tag-department"]}`}
                    >
                      {job.department}
                    </span>
                    <span
                      className={`${styles.tag} ${styles["tag-location"]}`}
                    >
                      {job.location}
                    </span>
                    <span className={`${styles.tag} ${styles["tag-type"]}`}>
                      {job.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleApply(job.id)}
                  className={styles["apply-button"]}
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
