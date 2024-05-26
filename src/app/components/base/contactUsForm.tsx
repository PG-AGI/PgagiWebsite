import React from "react";
import styles from "./contactUs.module.scss";

interface ContactUsFormProps {
  onClose: () => void;
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({ onClose }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.top}>We Will Get In</h2>
        <h2 className={styles.bottom}>Touch Soon!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"/>
          <input type="text" id="name" name="name" placeholder="First Name*" required />
          <label htmlFor="email"/>
          <input type="email" id="email" name="email" placeholder="Email*" required />
          <label htmlFor="message"/>
          <textarea id="message" name="message" placeholder="Message*" minLength={7} required></textarea>
          <button type="submit">Get in Touch</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
