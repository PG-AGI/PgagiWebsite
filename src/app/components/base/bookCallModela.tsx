import React from 'react';
import BookCalendly from './bookACall';
import styles from './bookCalendy.module.scss'

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.base}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <BookCalendly onClose={onClose} />
      </div>
    </div>
  );
};

export default BookCallModal;
