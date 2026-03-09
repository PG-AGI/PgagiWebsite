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

interface FormFields {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  portfolio: string;
  educational_institute: string;
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
  const [formData, setFormData] = useState<FormFields>({
    jobId,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    educational_institute: "",
    coverLetter: "",
    projectDocUrl: "",
    demoVideoUrl: "",
    codeBaseUrl: "",
    hostedLink: "",
  });

  // Resume is now a file upload, handled separately from text fields
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // ── Client-side validation ────────────────────────────────────────────
    if (!resumeFile) {
      toast.error("Please upload your resume (PDF).");
      setIsSubmitting(false);
      return;
    }

    const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/.*$/;
    if (!linkedInRegex.test(formData.linkedIn)) {
      toast.error("Please enter a valid LinkedIn URL.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.portfolio) {
      toast.error("Please provide your Portfolio / GitHub link.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.projectDocUrl) {
      toast.error("Please provide your Assignment link.");
      setIsSubmitting(false);
      return;
    }

    // ── Build FormData payload ─────────────────────────────────────────────
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("jobId", formData.jobId);
    formDataToSubmit.append("jobTitle", jobTitle);
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone || "");
    formDataToSubmit.append("linkedIn", formData.linkedIn);
    formDataToSubmit.append("portfolio", formData.portfolio);
    formDataToSubmit.append(
      "educational_institute",
      formData.educational_institute || ""
    );
    formDataToSubmit.append("coverLetter", formData.coverLetter || "");
    formDataToSubmit.append("projectDocUrl", formData.projectDocUrl);
    formDataToSubmit.append("demoVideoUrl", formData.demoVideoUrl || "");
    formDataToSubmit.append("codeBaseUrl", formData.codeBaseUrl || "");
    formDataToSubmit.append("hostedLink", formData.hostedLink || "");
    // Attach the actual file — backend will upload to Frappe and get file_url
    formDataToSubmit.append("resumeFile", resumeFile, resumeFile.name);

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

      // Reset form
      setFormData({
        jobId,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedIn: "",
        portfolio: "",
        educational_institute: "",
        coverLetter: "",
        projectDocUrl: "",
        demoVideoUrl: "",
        codeBaseUrl: "",
        hostedLink: "",
      });
      setResumeFile(null);
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
    if (applicationUrl) {
      window.open(applicationUrl, "_blank");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles["form"]}>
        <div className={styles["header"]}>
          <h2 className={styles["form-title"]}>Apply for {jobTitle}</h2>
          {applicationUrl && (
            <p className={`${styles["form-description"]} ${styles["form-note"]}`}>
              To apply, please complete the assignment first and then fill out
              the application form.
            </p>
          )}
        </div>

        {applicationUrl && (
          <div className={styles["view-assignment-container"]}>
            <button
              type="button"
              onClick={handleViewAssignment}
              className={styles["view-assignment-button"]}
            >
              View Assignment
            </button>
          </div>
        )}

        <div className={styles["grid"]}>

          {/* ── Personal Details ─────────────────────────────────────── */}
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
              placeholder="Enter your 10-digit phone number"
              title="Phone number must be exactly 10 digits."
            />
          </div>

          {/* ── Professional Links (all mandatory) ───────────────────── */}
          <div className={styles["input-group"]}>
            <label htmlFor="linkedIn">LinkedIn Profile *</label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              required
              value={formData.linkedIn}
              onChange={handleInputChange}
              className={styles["input"]}
              placeholder="https://www.linkedin.com/in/yourprofile"
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="portfolio">Portfolio / GitHub *</label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              required
              value={formData.portfolio}
              onChange={handleInputChange}
              className={styles["input"]}
              placeholder="https://github.com/yourprofile"
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="educational_institute">
              Educational Institute *
            </label>
            <input
              type="text"
              id="educational_institute"
              name="educational_institute"
              required
              value={formData.educational_institute}
              onChange={handleInputChange}
              className={styles["input"]}
              placeholder="Enter your educational institute"
            />
          </div>

          {/* ── Resume Upload (mandatory — PDF uploaded to Frappe) ────── */}
          <div className={styles["input-group"]}>
            <label htmlFor="resumeFile">Resume / CV (PDF) *</label>
            <input
              type="file"
              id="resumeFile"
              name="resumeFile"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </div>

          {/* ── Assignment Submission (always shown, mandatory) ───────── */}
          <div className={styles["assignment-section"]}>
            <h3 className={styles["section-subtitle"]}>Assignment Submission *</h3>

            <div className={styles["input-group"]}>
              <label htmlFor="projectDocUrl">
                Assignment / Project Document Link *
              </label>
              <input
                type="url"
                id="projectDocUrl"
                name="projectDocUrl"
                required
                value={formData.projectDocUrl}
                onChange={handleInputChange}
                className={styles["input"]}
                placeholder="https://docs.google.com/document/yourdoc"
              />
            </div>

            {/* Extra technical fields — optional, shown only for technical roles with an assignment */}
            {jobCategory === "technical" && applicationUrl && (
              <>
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
                      placeholder="https://www.loom.com/share/..."
                    />
                  </div>
                </div>

                <div className={styles["assignment-subsection"]}>
                  <h4 className={styles["subsection-title"]}>Code Base</h4>
                  <div className={styles["input-group"]}>
                    <label htmlFor="codeBaseUrl">
                      Code Base (GitHub Repo URL)
                    </label>
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

          {/* ── Cover Letter ──────────────────────────────────────────── */}
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
