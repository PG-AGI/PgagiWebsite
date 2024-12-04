"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import styles from "./JobApplicationForm.module.scss";

interface JobApplicationFormProps {
  jobTitle: string;
  onSubmit: (formData: FormData) => void;
}
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  portfolio: string;
  resume: File | null;
  coverLetter: string;
}
export const JobApplicationForm = ({
  jobTitle,
  onSubmit,
}: JobApplicationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    resume: null,
    coverLetter: "",
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
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
    if (formData.linkedIn && !linkedInRegex.test(formData.linkedIn)) {
      setError('Please enter a valid LinkedIn URL.');
      setIsSubmitting(false);
      return;
    }
    // Create FormData for file upload
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('jobTitle', jobTitle);
    formDataToSubmit.append('firstName', formData.firstName);
    formDataToSubmit.append('lastName', formData.lastName);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone || '');
    formDataToSubmit.append('linkedIn', formData.linkedIn || '');
    formDataToSubmit.append('portfolio', formData.portfolio || '');
    formDataToSubmit.append('coverLetter', formData.coverLetter || '');

    // Append resume file
    if (formData.resume) {
      formDataToSubmit.append('resume', formData.resume);
    }

    try {
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formDataToSubmit,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit application');
      }

      // Optional: Show success message or redirect
      alert('Application submitted successfully!');
      // router.push('/careers'); // Redirect after successful submission
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form"]}>
      <div className={styles["header"]}>
        <h2 className={styles["form-title"]}>Apply for {jobTitle}</h2>
        <p className={styles["form-description"]}>
          Please fill out the form below to apply for this position.
        </p>
      </div>

      <div className={styles["grid"]}>
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
          />
        </div>

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
      <span className={styles["error"]}>{error}</span>

      <div className={styles["button-container"]}>

        <button type="submit" className={styles["submit-button"]} disabled={isSubmitting}>
          <Send className={styles["icon"]} />
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
};
