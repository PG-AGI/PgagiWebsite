"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import styles from "./JobApplicationForm.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
  onSubmit: (formData: any) => void;
  applicationUrl: string;
  jobCategory: "technical" | "non technical"; 
}

interface FormData {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  portfolio: string;
  educational_institute: string;
  resumeLink: string; 
  coverLetter: string;
  projectDocUrl: string;
  demoVideoUrl: string;
  codeBaseUrl: string;
  hostedLink: string;
}

export const JobApplicationForm = ({
  jobTitle,
  jobId,
  onSubmit,
  applicationUrl,
  jobCategory,
}: JobApplicationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    jobId,
    jobId,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    educational_institute: "",
    resumeLink: "",
    coverLetter: "",
    projectDocUrl: "",
    demoVideoUrl: "",
    codeBaseUrl: "",
    hostedLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle changes for text/URL inputs
  // Handle changes for text/URL inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate LinkedIn URL if provided
    // Validate LinkedIn URL if provided
    const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
    if (formData.linkedIn && !linkedInRegex.test(formData.linkedIn)) {
      toast.error("Please enter a valid LinkedIn URL.");
      setIsSubmitting(false);
      return;
    }

    // Assignment submission validations based on job category:
    if (jobCategory === "non technical") {
      // For non-technical roles, only require the Project Document URL.
      if (!formData.projectDocUrl) {
        toast.error("Please provide the Project Document URL.");
        setIsSubmitting(false);
        return;
      }
    } else {
      // For technical roles, require all assignment fields.
      if (
        !formData.projectDocUrl ||
        !formData.demoVideoUrl ||
        !formData.codeBaseUrl
      ) {
        toast.error(
          "Please provide the Project Document, Demo Video, and Code Base URLs."
        );
        setIsSubmitting(false);
        return;
      }

    // Assignment submission validations based on job category:
    if (jobCategory === "non technical") {
      // For non-technical roles, only require the Project Document URL.
      if (!formData.projectDocUrl) {
        toast.error("Please provide the Project Document URL.");
        setIsSubmitting(false);
        return;
      }
    } else {
      // For technical roles, require all assignment fields.
      if (
        !formData.projectDocUrl ||
        !formData.demoVideoUrl ||
        !formData.codeBaseUrl
      ) {
        toast.error(
          "Please provide the Project Document, Demo Video, and Code Base URLs."
        );
        setIsSubmitting(false);
        return;
      }
    }

    // Prepare the form payload using FormData (all values are strings)
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("jobId", formData.jobId);
    formDataToSubmit.append("jobTitle", jobTitle);
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone || "");
    formDataToSubmit.append("linkedIn", formData.linkedIn || "");
    formDataToSubmit.append("portfolio", formData.portfolio || "");
    formDataToSubmit.append("educational_institute", formData.educational_institute || "");
    formDataToSubmit.append("coverLetter", formData.coverLetter || "");
    formDataToSubmit.append("projectDocUrl", formData.projectDocUrl || "");
    formDataToSubmit.append("demoVideoUrl", formData.demoVideoUrl || "");
    formDataToSubmit.append("codeBaseUrl", formData.codeBaseUrl || "");
    formDataToSubmit.append("hostedLink", formData.hostedLink || "");
    formDataToSubmit.append("resumeLink", formData.resumeLink || "");

    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formDataToSubmit,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application");
      }

      toast.success("Application submitted successfully!");
      onSubmit(formData);
      onSubmit(formData);
      setFormData({
        jobId,
        jobId,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedIn: "",
        portfolio: "",
        educational_institute: "",
        resumeLink: "",
        coverLetter: "",
        projectDocUrl: "",
        demoVideoUrl: "",
        codeBaseUrl: "",
        hostedLink: "",
      });
    } catch (err) {
      toast.error(
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
    <>
      <form onSubmit={handleSubmit} className={styles["form"]}>
        <div className={styles["header"]}>
          <h2 className={styles["form-title"]}>Apply for {jobTitle}</h2>
          <p className={`${styles["form-description"]} ${styles["form-note"]}`}>
            To apply, please complete the assignment first and then fill out the
            application form.
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
              pattern="[0-9]{10}"
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
          <div className={styles["input-group"]}>
            <label htmlFor="educational_institute">Educational Institute</label>
            <input
              type="text"
              id="educational_institute"
              name="educational_institute"
              value={formData.educational_institute}
              onChange={handleInputChange}
              className={styles["input"]}
              placeholder="Enter your educational institute"
            />
          </div>

          {/* Assignment Submission Section */}
          <div className={styles["assignment-section"]}>
            <h3 className={styles["section-subtitle"]}>
              Submitting Assignment *
            </h3>
            {jobCategory === "non technical" ? (
              <div className={styles["assignment-subsection"]}>
                <h4 className={styles["subsection-title"]}>
                  Project Document
                </h4>
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
                    required
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={styles["assignment-subsection"]}>
                  <h4 className={styles["subsection-title"]}>
                    Project Document
                  </h4>
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
                      required
                    />
                  </div>
                </div>
                <div className={styles["assignment-subsection"]}>
                  <h4 className={styles["subsection-title"]}>Demo Video</h4>
                  <div className={styles["input-group"]}>
                    <label htmlFor="demoVideoUrl">
                      Demo Video (Paste Link)
                    </label>
                    <input
                      type="url"
                      id="demoVideoUrl"
                      name="demoVideoUrl"
                      value={formData.demoVideoUrl}
                      onChange={handleInputChange}
                      className={styles["input"]}
                      placeholder="https://www.loom.com/share/..."
                      required
                    />
                  </div>
                </div>
                <div className={styles["assignment-subsection"]}>
                  <h4 className={styles["subsection-title"]}>Code Base</h4>
                  <div className={styles["input-group"]}>
                    <label htmlFor="codeBaseUrl">
                      Code Base (Paste GitHub Repo URL)
                    </label>
                    <input
                      type="url"
                      id="codeBaseUrl"
                      name="codeBaseUrl"
                      value={formData.codeBaseUrl}
                      onChange={handleInputChange}
                      className={styles["input"]}
                      placeholder="https://github.com/yourrepo"
                      required
                    />
                  </div>
                </div>
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
              </>
            )}
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="resume">Resume/CV (Paste Link) *</label>
            <input
              type="url"
              id="resumeLink"
              name="resumeLink"
              type="url"
              id="resumeLink"
              name="resumeLink"
              required
              value={formData.resumeLink}
              onChange={handleInputChange}
              value={formData.resumeLink}
              onChange={handleInputChange}
              className={styles["input"]}
              placeholder="https://yourresume.com/yourresume.pdf"
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
