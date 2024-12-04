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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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
            value={formData.phone}
            onChange={handleInputChange}
            className={styles["input"]}
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

      <div className={styles["button-container"]}>
        <button type="submit" className={styles["submit-button"]}>
          <Send className={styles["icon"]} />
          Submit Application
        </button>
      </div>
    </form>
  );
};
