import React, { useState } from 'react';
import styles from './products.module.scss';
import { productData } from '@/utils/constants';
import Image from 'next/image';

const Products: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className={styles.products}>
      {productData.map((product, index) => (
        <div
          key={index}
          className={`${styles.card} ${hoverIndex === index ? styles.hovered : ''}`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
           <div className={styles.icon}>
            <Image src={product.icon} alt={product.title} width={100} height={100} /> {/* Use Next.js Image */}
            {hoverIndex === index ? <h3>{product.miniTitle}</h3> : <h2>{product.title}</h2>}
          </div>
          <p className={hoverIndex === index ? styles.show : styles.hide}>{product.description}</p>
          <button className={styles.viewButton}>View &raquo;</button>
          <div className={styles.circle}></div>
        </div>
      ))}
    </section>
  );
};

export default Products;
