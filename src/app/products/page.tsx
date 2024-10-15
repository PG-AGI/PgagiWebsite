'use client'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from './productDetails.module.scss'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function ProductDetails() {
  const [carouselImages] = useState([
    '/images/frame3.png', // Replace with web scraper relevant images
    '/images/frame6.png',
    '/images/frame5.png'
  ])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton}>
          <ArrowLeft size={24} />
          Go back
        </button>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Explore Your Web Scraping Assistant<br />ScrapeIt</h1>
        <h2 className={styles.subtitle}>Effortless Data Collection, Powerful Solutions</h2>

        <p className={styles.description}>
          Unlock the full potential of web scraping with ScrapeIt's customizable scraping agents.
          Our platform empowers developers and businesses to automate data extraction from any website.
          Build complex, tailored scraping solutions using Python, JavaScript, and our upcoming scraping SDK.
          Easily integrate endpoints and actions to scrape and transform web data into actionable insights.
          Start today with a free trial—no upfront costs, just instant access to advanced scraping tools.
        </p>
        <div className={styles.btnContainer}>
          <a href="#" className={`${styles.button} ${styles.typeC}`}>
            <div className={styles.button__line}></div>
            <div className={styles.button__line}></div>
            <span className={styles.button__text}>Try for Free</span>
            <div className={styles.button__drow1}></div>
            <div className={styles.button__drow2}></div>
          </a>
        </div>

        <div className={styles.purpleSection}>
          <div className={styles.purpleShapeLeft}>
            <div className={styles.carouselContainer}>
              <div className={styles.carouselWrapper}>
                <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                  {carouselImages.map((image, index) => (
                    <div key={index}>
                      <Image src={image} alt={`carousel-image-${index}`} objectFit='contain' width={400} height={300}  />
                    </div>
                  ))}
                </Carousel>
              </div>
              <button className={styles.tryButton}>Try for Free!</button>
            </div>
          </div>


          <div className={styles.trySection}>
            <h2 className={styles.tryTitle}>Let's give it a try!</h2>
            <p className={styles.tryDescription}>
              Try our intuitive web scraping tools with no upfront costs. Automate the extraction of valuable data from websites and convert them into insights with ease.
              Customize scraping workflows using your preferred programming language.
            </p>
          </div>

          <div className={styles.rightwrapper}>
            <div className={styles.purpleShapeRight}></div>
          </div>
        </div>

        <section className={styles.keyFeatures}>
          <h2 className={styles.featuresTitle}>Key Features</h2>
          <div className={styles.featuresList}>
            {[
              { title: 'Easy Setup', description: 'Get started with minimal setup, using intuitive interfaces.' },
              { title: 'Data Transformation', description: 'Transform scraped data into structured formats like CSV or JSON.' },
              { title: 'Customizable Workflows', description: 'Build complex workflows using our SDK to automate repetitive tasks.' }
            ].map((feature, index) => (
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
