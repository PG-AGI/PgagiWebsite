"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { jobs } from "../../Career/data/jobs"; // Adjust path to jobs data
import { JobApplicationForm } from "../components/JobApplicationForm";
import styles from "./JobDetailsPage.module.scss";

const JobDetailsPage = ({ params }: { params: { jobId: string } }) => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null); // Reference to the form section
  const router = useRouter();
  const { jobId } = params; // Get the jobId from params

  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
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

  const handleApplicationSubmit = (formData: any) => {
    console.log("Application submitted:", formData);
    alert("Application submitted successfully!");
    setShowForm(false);
  };

  const handleScrollToForm = () => {
    setShowForm(true);
    formRef.current?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the form
  };

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
              </div>
            </div>
            <button
              onClick={handleScrollToForm}
              className={styles["apply-button"]}
            >
              Apply Now
            </button>
          </div>

          <p className={styles["description"]}>{job.description}</p>

          <div className={styles["sections"]}>
            <div>
              <h2 className={styles["section-title"]}>Key Responsibilities</h2>
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
          </div>
        </div>

        <div
          ref={formRef} // Attach the ref to the form container
          className={styles["form-container"]}
        >
          {showForm && (
            <JobApplicationForm
              jobTitle={job.title}
              onSubmit={handleApplicationSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
