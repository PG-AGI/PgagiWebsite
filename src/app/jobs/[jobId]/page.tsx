// JobDetailsPage.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Job from "@/utils/job";
import { JobApplicationForm } from "../components/JobApplicationForm";
import styles from "./JobDetailsPage.module.scss";
import SkeletonLoader from "../components/SkeletonLoader";

const JobDetailsPage = ({ params }: { params: { jobId: string } }) => {
  const [showForm, setShowForm] = useState(false);
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null); // Reference to the form section
  const router = useRouter();
  const { jobId } = params; 

  useEffect(() => {
    async function fetchJobDetails() {
      try {
        const response = await fetch("/api/careers/postings");

        if (!response.ok) {
          throw new Error("Failed to fetch job postings");
        }

        const jobs: Job[] = await response.json();


        const foundJob = jobs.find((j) => j.id === jobId);
        console.log(foundJob);
        if (!foundJob) {
          throw new Error("Job not found");
        }

        setJob(foundJob);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setIsLoading(false);
      }
    }

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  const handleApplicationSubmit = (formData: any) => {
    console.log("Application submitted:", formData);
    alert("Application submitted successfully!");
    setShowForm(false);
  };

  const handleApplyNow = () => {
    setShowForm(true);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Removed handleViewAssignment since it's no longer needed

  if (isLoading) {
    return <SkeletonLoader />;
  }
  if (error || !job) {
    return (
      <div className={styles["not-found"]}>
        <p>Job not found</p>
        <button
          onClick={() => router.push("/Career")}
          className={styles["back-button"]}
        >
          Go back to Career Page
        </button>
      </div>
    );
  }
  return (
    <div className={styles["job-details-container"]}>
      <div className={styles["content-container"]}>
        <button
          onClick={() => router.push("/Career")}
          className={styles["back-button"]}
        >
          <ArrowLeft className={styles["icon"]} />
          Back to all positions
        </button>

        <div className={styles["job-details-card"]}>
          <div className={styles["header"]}>
            <div>
              <h1 className={styles["job-title"]}>{job.title}</h1>
              <div className={styles["tags"]}>
                <span className={styles["tag-department"]}>
                  {job.department}
                </span>
                <span className={styles["tag-location"]}>{job.location}</span>
                <span className={styles["tag-type"]}>{job.type}</span>
                <span className={`${styles.tag} ${styles["tag-openings"]}`}>
                  {job.numberOfOpenings} {job.numberOfOpenings > 1 ? "Openings" : "Opening"}
                </span>
              </div>
            </div>
          </div>

          <p
            className={styles["description"]}
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></p>

          <div className={styles["sections"]}>
            <div>
              <h2 className={styles["section-title"]}>
                Key Responsibilities
              </h2>
              <ul className={styles["list"]}>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={styles["section-title"]}>Requirements</h2>
              <ul className={styles["list"]}>
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {job.applicationUrl && (
              <div className={styles["assignment-section"]}>
                <div className={styles["buttons-container"]}>
                  <button
                    onClick={handleApplyNow}
                    className={styles["apply-button"]}
                  >
                    Apply Now
                  </button>
                  {/* Removed the View Assignment button from here */}
                </div>
              </div>
            )}
          </div>
        </div>

        <div ref={formRef}>
          {showForm && (
            <JobApplicationForm
              jobTitle={job.title}
              jobId={job.id}
              onSubmit={handleApplicationSubmit}
              applicationUrl={job.applicationUrl}
              jobCategory={job.category}

            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
