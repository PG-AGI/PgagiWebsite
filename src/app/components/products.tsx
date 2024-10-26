import React, { useState } from 'react';
import styles from './products.module.scss';
import { productData } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

const Products: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className={styles.main} id="products">
      <h1>Our Products</h1>
      <div className={styles.products}>
      {productData.map((product, index) => (
        <div
          key={index}
          className={`${styles.card} ${hoverIndex === index ? styles.hovered : ''}`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
           <div className={styles.icon}>
            <Image src={product.icon} alt={product.title} width={150} height={150} /> {/* Use Next.js Image */}
            {hoverIndex === index ? <h3>{product.miniTitle}</h3> : (
              <div>
                <h2>{product.title}</h2>
                <h4>{product.subtitle}</h4>
              </div>
              )}
          </div>
          <p className={hoverIndex === index ? styles.show : styles.hide}>{product.description}</p>
          <a className={styles.productLink} href={product.link}>
      <button
        className={styles.viewButton}
        disabled={product.title === 'Web Scrapper'} // Disable for "Web Scrapper"
      >
        {product.title === 'Web Scrapper' ? 'Coming Soon' : 'View »'} {/* Conditionally render text */}
      </button>
    </a>
          <div className={styles.circle}></div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Products;
