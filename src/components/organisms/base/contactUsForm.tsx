// ContactUsForm.tsx
"use client";

import React, { useState } from "react";
import styles from "@/styles/components/organisms/base/contactUs.module.scss";
import contactUsFormText from "@/constants/uiText/contactUsForm.json";
import { submitContactForm } from "@/services/contactService";

interface ContactUsFormProps {
  onClose: () => void;
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await submitContactForm({
        first_name: name,
        email,
        message,
      });
      if (response.message === "Stored to database") {
        setSuccess("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (error) {
      setError("There was an error sending your message. Please try again.");
    }
  };

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose} >
      <div className={styles.modal} onClick={handleModalClick}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label={contactUsFormText.closeAriaLabel}
        >
          &times;
        </button>
        <h2 className={styles.top}>{contactUsFormText.titleTop}</h2>
        <h2 className={styles.bottom}>{contactUsFormText.titleBottom}</h2>
        <p className={error? styles.error: styles.hideError}>{error ? error : 'no error'}</p>
        {success && <p className={styles.success}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={contactUsFormText.firstNamePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder={contactUsFormText.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder={contactUsFormText.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength={7}
            required
          ></textarea>
          <button type="submit">{contactUsFormText.submitLabel}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
