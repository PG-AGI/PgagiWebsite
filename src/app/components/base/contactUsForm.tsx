// ContactUsForm.tsx
"use client";

import React, { useState } from "react";
import axios from "axios";
import styles from "./contactUs.module.scss";
import '../../globals.css';

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
      const response = await axios.post("http://localhost:5000/user_details", {
        first_name: name,
        email: email,
        message: message,
      });
      if (response.data.message === "Stored to database") {
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
          aria-label="Close Contact Form"
        >
          &times;
        </button>
        <h2 className={styles.top}>We Will Get In</h2>
        <h2 className={styles.bottom}>Touch Soon!</h2>
        <p className={error? styles.error: styles.hideError}>{error ? error : 'no error'}</p>
        {success && <p className={styles.success}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength={7}
            required
          ></textarea>
          <button type="submit">Get in Touch</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
