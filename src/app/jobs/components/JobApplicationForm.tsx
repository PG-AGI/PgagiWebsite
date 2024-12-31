// JobApplicationForm.tsx

"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import styles from "./JobApplicationForm.module.scss";

interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
  onSubmit: (formData: any) => void;
  applicationUrl: string; 
}

interface FormData {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  portfolio: string;
  resume: File | null;
  coverLetter: string;
  projectDocUrl: string;
  projectDocFile: File | null;
  demoVideoUrl: string;
  demoVideoFile: File | null;
  codeBaseUrl: string;
  codeBaseFile: File | null;
  hostedLink: string;
}

export const JobApplicationForm = ({
  jobTitle,
  jobId,
  onSubmit,
  applicationUrl, 
}: JobApplicationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    jobId, 
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    resume: null,
    coverLetter: "",
    projectDocUrl: "",
    projectDocFile: null,
    demoVideoUrl: "",
    demoVideoFile: null,
    codeBaseUrl: "",
    codeBaseFile: null,
    hostedLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
    if (formData.linkedIn && !linkedInRegex.test(formData.linkedIn)) {
      setError("Please enter a valid LinkedIn URL.");
      setIsSubmitting(false);
      return;
    }

    if (
      (!formData.projectDocUrl && !formData.projectDocFile) ||
      (!formData.demoVideoUrl && !formData.demoVideoFile) ||
      (!formData.codeBaseUrl && !formData.codeBaseFile)
    ) {
      setError(
        "Please provide at least one option for Project Document, Demo Video, and Code Base."
      );
      setIsSubmitting(false);
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("jobId", formData.jobId); 
    formDataToSubmit.append("jobTitle", jobTitle);
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone || "");
    formDataToSubmit.append("linkedIn", formData.linkedIn || "");
    formDataToSubmit.append("portfolio", formData.portfolio || "");
    formDataToSubmit.append("coverLetter", formData.coverLetter || "");
    formDataToSubmit.append("projectDocUrl", formData.projectDocUrl || "");
    if (formData.projectDocFile) {
      formDataToSubmit.append("projectDocFile", formData.projectDocFile);
    }
    formDataToSubmit.append("demoVideoUrl", formData.demoVideoUrl || "");
    if (formData.demoVideoFile) {
      formDataToSubmit.append("demoVideoFile", formData.demoVideoFile);
    }
    formDataToSubmit.append("codeBaseUrl", formData.codeBaseUrl || "");
    if (formData.codeBaseFile) {
      formDataToSubmit.append("codeBaseFile", formData.codeBaseFile);
    }
    formDataToSubmit.append("hostedLink", formData.hostedLink || "");

  
    if (formData.resume) {
      formDataToSubmit.append("resume", formData.resume);
    }

    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formDataToSubmit,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application");
      }
      alert("Application submitted successfully!");
      onSubmit(formData); 
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unknown error occurred while submitting the application."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewAssignment = () => {
    window.open(applicationUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form"]}>
      <div className={styles["header"]}>
        <h2 className={styles["form-title"]}>Apply for {jobTitle}</h2>
        <p className={`${styles["form-description"]} ${styles["form-note"]}`}>
          To apply, please complete the assignment first and then fill out the application form.
        </p>
      </div>
      <div className={styles["view-assignment-container"]}>
        <button
          type="button"
          onClick={handleViewAssignment}
          className={styles["view-assignment-button"]}
        >
          View Assignment
        </button>
      </div>

      <div className={styles["grid"]}>
        {/* Personal Information Fields */}
        <div className={styles["input-group"]}>
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className={styles["input"]}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className={styles["input"]}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className={styles["input"]}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}" /* Accepts exactly 10 numeric digits */
            value={formData.phone}
            onChange={handleInputChange}
            className={styles["input"]}
            placeholder="Enter your phone number"
            title="Phone number must be exactly 10 digits."
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="linkedIn">LinkedIn Profile</label>
          <input
            type="url"
            id="linkedIn"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleInputChange}
            className={styles["input"]}
            placeholder="https://www.linkedin.com/in/yourprofile"
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="portfolio">Portfolio/GitHub</label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            className={styles["input"]}
            placeholder="https://yourportfolio.com or https://github.com/yourrepo"
          />
        </div>

        {/* Submitting Assignment Section */}
        <div className={styles["assignment-section"]}>
          <h3 className={styles["section-subtitle"]}>Submitting Assignment *</h3>

          {/* Project Document Subsection */}
          <div className={`${styles["assignment-subsection"]} ${styles["project-document"]}`}>
            <h4 className={styles["subsection-title"]}>Project Document</h4>
            <div className={styles["input-group"]}>
              <label htmlFor="projectDocUrl">
                Doc Explaining the Project (Paste URL)
              </label>
              <input
                type="url"
                id="projectDocUrl"
                name="projectDocUrl"
                value={formData.projectDocUrl}
                onChange={handleInputChange}
                className={styles["input"]}
                placeholder="https://docs.google.com/document/yourdoc"
              />
            </div>

            <div className={styles["input-group"]}>
              <label htmlFor="projectDocFile">Or Upload Doc</label>
              <input
                type="file"
                id="projectDocFile"
                name="projectDocFile"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className={styles["input"]}
              />
            </div>
          </div>

          {/* Demo Video Subsection */}
          <div className={styles["assignment-subsection"]}>
            <h4 className={styles["subsection-title"]}>Demo Video</h4>
            <div className={styles["input-group"]}>
              <label htmlFor="demoVideoUrl">Demo Video (Paste Link)</label>
              <input
                type="url"
                id="demoVideoUrl"
                name="demoVideoUrl"
                value={formData.demoVideoUrl}
                onChange={handleInputChange}
                className={styles["input"]}
                placeholder="https://www.loom.com/share/1234567890abcdef1234567890abcdef"
                placeholder="https://www.loom.com/share/1234567890abcdef1234567890abcdef"
              />
            </div>

            <div className={styles["input-group"]}>
              <label htmlFor="demoVideoFile">Or Upload Demo Video</label>
              <input
                type="file"
                id="demoVideoFile"
                name="demoVideoFile"
                accept="video/*"
                onChange={handleFileChange}
                className={styles["input"]}
              />
            </div>
          </div>

          {/* Code Base Subsection */}
          <div className={styles["assignment-subsection"]}>
            <h4 className={styles["subsection-title"]}>Code Base</h4>
            <div className={styles["input-group"]}>
              <label htmlFor="codeBaseUrl">Code Base (Paste GitHub Repo)</label>
              <input
                type="url"
                id="codeBaseUrl"
                name="codeBaseUrl"
                value={formData.codeBaseUrl}
                onChange={handleInputChange}
                className={styles["input"]}
                placeholder="https://github.com/yourrepo"
              />
            </div>

            <div className={styles["input-group"]}>
              <label htmlFor="codeBaseFile">Or Upload Code Base (Zip)</label>
              <input
                type="file"
                id="codeBaseFile"
                name="codeBaseFile"
                accept=".zip"
                onChange={handleFileChange}
                className={styles["input"]}
              />
            </div>
          </div>

          {/* Hosted Link (Optional) */}
          <div className={styles["input-group"]}>
            <label htmlFor="hostedLink">Hosted Link (Optional)</label>
            <input
              type="url"
              id="hostedLink"
              name="hostedLink"
              value={formData.hostedLink}
              onChange={handleInputChange}
              className={styles["input"]}
              placeholder="https://yourproject.com"
            />
          </div>
        </div>

        {/* Resume and Cover Letter Fields */}
        <div className={styles["input-group"]}>
          <label htmlFor="resume">Resume/CV *</label>
          <input
            type="file"
            id="resume"
            name="resume"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className={styles["input"]}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={4}
            value={formData.coverLetter}
            onChange={handleInputChange}
            placeholder="Tell us why you're interested in this position..."
            className={styles["textarea"]}
          />
        </div>
      </div>

      {error && <span className={styles["error"]}>{error}</span>}

      <div className={styles["button-container"]}>
        <button
          type="submit"
          className={styles["submit-button"]}
          disabled={isSubmitting}
        >
          <Send className={styles["icon"]} />
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};
