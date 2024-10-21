import React from 'react';
import Link from 'next/link';
import styles from './productsList.module.scss';
import { productDetailsData } from '@/utils/constants';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product List</h1>
      <div className={styles.productList}>
        {productDetailsData.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.description}>{product.description}</p>
            {/* <Link href={`/products/${product.id}`}> */}
            <a href={`/products/${product.id}`} className={styles.link}>
            <div className={styles.btnContainer}>
              Try Now
            {/* </Link> */}
          </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
