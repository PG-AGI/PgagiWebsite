import React from 'react'
import styles from './popup.module.scss'

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
          <p>This plan offers you the best value to kickstart your journey.</p>
          <a href="/product-listing/product-list" className={styles.popupButton}>Try Now</a>
        </div>

        {/* Second Container */}
        <div className={styles.Prodcontainer}>
          <h3>Product FaQ Generator</h3>
          <p>Take your experience to the next level with this premium plan.</p>
          <a href="/product-listing/product-faq" className={styles.popupButton}>Try Now</a>
        </div>
      </div>

      <button onClick={onClose} className={styles.closeButton}>Close</button>
    </div>
  </div>
  )
}

export default ProdPopup
