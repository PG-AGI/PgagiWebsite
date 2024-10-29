'use client'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from '../productDetails.module.scss' // Adjusted relative path
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { productDetailsData } from '../../../utils/constants' // Adjusted relative path
import Link from 'next/link'
import ProdPopup from '../prodPopup'

type Product = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  features: {
    title: string;
    description: string;
  }[];
}

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [showPopup, setShowPopup] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    if (params.id) {
      const selectedProduct = productDetailsData.find((item) => item.id === params.id) || null;
      setProduct(selectedProduct)
    }
  }, [params.id])
  const handleTryForFreeClick = () => {
    if (params.id === 'custom-scrapper') {
      setShowPopup(true);
    }
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  }


  if (!product) return <p>Loading...</p>

  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <Link href="/#products">
                <button className={styles.backButton}>{'<'}  Go back</button>
              </Link>
      </header>
      {showPopup && <ProdPopup onClose={handleClosePopup} />}

      <main className={styles.main}>
        <h1 className={styles.title}>{product.title}</h1>
        <h2 className={styles.subtitle}>{product.subtitle}</h2>

        <p className={styles.description}>{product.description}</p>
        <div className={styles.btnContainer}>
          <button className={`${styles.button} ${styles.typeC}` } onClick={handleTryForFreeClick}>
            <div className={styles.button__line}></div>
            <div className={styles.button__line}></div>
            <span className={styles.button__text}>Try for Free</span>
            <div className={styles.button__drow1}></div>
            <div className={styles.button__drow2}></div>
          </button>
        </div>

        <div className={styles.purpleSection}>
          <div className={styles.purpleShapeLeft}>
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                  {product.images.map((image, index) => (
                    <div key={index}>
                      <Image src={image} alt={`carousel-image-${index}`} width={400} height={300} />

                    </div>
                  ))}
                </Carousel>
              </div>
              <button className={styles.tryButton} onClick={handleTryForFreeClick}>Try for Free!</button>
            </div>
          </div>

          <div className={styles.trySection}>
            <h2 className={styles.tryTitle}>{"Let's give it a try!"}</h2>
            <p className={styles.tryDescription}>
              {product.description}
            </p>
          </div>

          <div className={styles.rightwrapper}>
            <div className={styles.purpleShapeRight}></div>
          </div>
        </div>

        <section className={styles.keyFeatures}>
          <h2 className={styles.featuresTitle}>Key Features</h2>
          <div className={styles.featuresList}>
            {product.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <Image src="/images/img1.png" alt={`Feature ${feature.title}`} width={100} height={100} />
                <p>
                  {feature.title}: {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
