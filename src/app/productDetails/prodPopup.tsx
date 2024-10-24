import React from 'react';
import styles from './popup.module.scss';

interface PopupProps {
  onClose: () => void;
}

const ProdPopup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h2 className={styles.popupTitle}>Choose a Product</h2>

        <div className={styles.containerRow}>
          {/* First Container */}
          <div className={styles.Prodcontainer}>
            <h3>Product Listing Generator</h3>
            <p>Effortlessly create compelling, SEO-optimized product listings to enhance visibility and boost sales. Get started now with the best value!</p>
            <a href="/products/seoList/product-list" className={styles.popupButton}>Try Now</a>
          </div>

          {/* Second Container */}
          <div className={styles.Prodcontainer}>
            <h3>Product FAQ Generator</h3>
            <p>Enhance customer support with intelligently generated FAQs tailored to your products. Take your product experience to the next level with automation.</p>
            <a href="/products/seoList/product-faq" className={styles.popupButton}>Try Now</a>
          </div>
        </div>

        <button onClick={onClose} className={styles.closeButton}>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.881 22.881L8.11914 8.11914M22.881 8.11914L8.11914 22.881" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>

        {/* Decorative Circles */}
        {/* <div className={`${styles.circleElement} ${styles.circleSmall}`}></div>
        <div className={`${styles.circleElement} ${styles.circleLarge}`}></div> */}
      </div>
    </div>
  );
};

export default ProdPopup;
