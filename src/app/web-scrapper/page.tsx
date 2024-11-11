'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Download, Crown, Pencil, ChevronDown, ChevronRight } from 'lucide-react';
import styles from './WebScrapingPage.module.scss';
import Dropdown from './Dropdown';
import NormalScrapedContent from './NormalScrapedContent';
import GPTScrapedContent from './GPTScrapedContent';
import GlareBackground from '../components/base/GlareBackground';

import CustomLoader from '../components/CustomLoader'; // Import the CustomLoader component

interface NormalScrapedContentType {
  [key: string]: string;
}

interface SubTopic {
  subheading: string;
  content: string;
}

interface StructuredContent {
  heading: string;
  content: string;
  subtopics: SubTopic[];
}

interface GPTScrapedContentType {
  [key: string]: {
    title: string;
    url: string;
    summary: string;
    structured_content: StructuredContent[];
    key_concepts: string[];
    important_facts: string[];
  };
}

type ScrapedContent = NormalScrapedContentType | GPTScrapedContentType;

const WebScrapingPage: React.FC = () => {
  const [scrapedContent, setScrapedContent] = useState<ScrapedContent | null>(null);
  const [link, setLink] = useState<string>('');
  const [subpages, setSubpages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isScraping, setIsScraping] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // New States
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [userPurpose, setUserPurpose] = useState<string>('');

  const handleSubmit = async () => {
    if (!link) {
      console.log('Please enter a valid link');
      setError('Please enter a valid link');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSubpages([]);
    setScrapedContent(null);

    try {
      const response = await axios.get('https://webscrape-94302186616.us-central1.run.app/get_subpages', {
        params: { url: link },
        headers: { accept: 'application/json' },
      });

      if (response.data && Array.isArray(response.data)) {
        setSubpages(response.data);
        console.log('Subpages fetched:', response.data);
      } else {
        setError('Invalid response from server');
        console.error('Invalid response structure:', response.data);
      }
    } catch (err) {
      setError('Failed to fetch subpages. Please try again.');
      console.error('API call error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Combined Scrape Function
  const handleScrape = async () => {
    if (selectedItems.length === 0 && !link) {
      setError('Please enter a valid link or select subpages to scrape.');
      return;
    }

    setIsScraping(true);
    setError(null);
    setScrapedContent(null);

    try {
      let response;

      if (selectedItems.length > 0) {
        // Scrape Selected Pages
        const params = new URLSearchParams();
        selectedItems.forEach(url => params.append('urls', url));

        if (userPurpose.trim()) {
          // Use GPT Endpoint
          params.append('user_prompt', userPurpose.trim());
          response = await axios.post(
            `https://webscrape-94302186616.us-central1.run.app/scrape_selected_pages_with_gpt?${params.toString()}`,
            null,
            {
              headers: {
                'Accept': 'application/json',
              },
            }
          );
        } else {
          // Use Normal Scrape Endpoint
          response = await axios.post(
            `https://webscrape-94302186616.us-central1.run.app/scrape_selected_pages_without_gpt?${params.toString()}`,
            null,
            {
              headers: {
                'Accept': 'application/json',
              },
            }
          );
        }
      } else {

        const data = { url: link };
        const config = {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        };

        if (userPurpose.trim()) {
          // Use GPT Endpoint
          const params = new URLSearchParams();
          params.append('user_prompt', userPurpose.trim());
          response = await axios.post(
            `https://webscrape-94302186616.us-central1.run.app/scrape_all_with_gpt?${params.toString()}`,
            data,
            config
          );
        } else {
          // Use Normal Scrape Endpoint
          response = await axios.post(
            'https://webscrape-94302186616.us-central1.run.app/scrape_all_without_gpt',
            data,
            config
          );
        }
      }

      if (response.data) {
        setScrapedContent(response.data);
      } else {
        setError('No data received from server.');
      }
    } catch (err) {
      setError('Failed to scrape pages. Please try again.');
      console.error('API call error:', err);
    } finally {
      setIsScraping(false);
    }
  };

  const handleDownload = () => {
    if (!scrapedContent) return;

    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(scrapedContent, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = "scraped_content.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <>
      <GlareBackground/>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <span role="img" aria-label="search-icon">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path */}
              </svg>
            </span>{' '}
            Web Scraping
          </h1>
        </header>

        <div className={styles.inputRow}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter/Paste the website URL"
              className={styles.input}
            />
          </div>
          <button
            className={styles.arrowButton}
            onClick={handleSubmit}
            aria-label="Submit Link"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <CustomLoader /> // Use the custom loader here
            ) : (
              <>Submit</>
            )}
          </button>
        </div>

        <div className={styles.dropdownWrapper}>
          <Dropdown
            title="Select the pages to scrape"
            items={subpages}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            // Removed onScrape prop
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.mainContent}>
          <div className={styles.leftSection}>
            <div className={styles.scrapedContentContainer}>
              <h2 className={styles.scrapedContentTitle}>Scraped Content</h2>
              <div className={styles.scrapedContent}>
                {scrapedContent ? (
                  typeof Object.values(scrapedContent)[0] === 'string' ? (
                    <NormalScrapedContent content={scrapedContent as NormalScrapedContentType} />
                  ) : (
                    Object.keys(scrapedContent).map((url, index) => {
                      const content = (scrapedContent as GPTScrapedContentType)[url];
                      return <GPTScrapedContent key={index} content={content} />;
                    })
                  )
                ) : (
                  <p className={styles.placeholder}>
                    The scraped content will be displayed here.
                  </p>
                )}
              </div>
            </div>

            <div className={styles.downloadButtonWrapper}>
              <button className={styles.downloadButton} onClick={handleDownload} disabled={!scrapedContent}>
                <span>Download output</span>
                <Download className={styles.downloadIcon} />
              </button>
            </div>
          </div>

          <div className={styles.rightSection}>
            {/* <div className={styles.firstBox}>
              <Crown className={styles.crownIcon} /> 
              <h2 className={styles.premiumTitle}>
                Unlock a World of Premium Privileges
              </h2>
            </div> */}

            {/* <div className={styles.secondBox}>
              <p className={styles.premiumText}>
                Start Your 7-Day Free Trial Today!
              </p>
            </div> */}

            <div className={styles.thirdBox}>
              <h1> {'AI ......(Tagline/Heading)......'}</h1>
              <div className={styles.userPurposeWrapper}>
                <Pencil className={styles.purposeIcon} />
                <input
                  type="text"
                  value={userPurpose}
                  onChange={(e) => setUserPurpose(e.target.value)}
                  placeholder="User Purpose"
                  className={styles.userPurposeInput}
                />
                <Crown className={styles.crownIconSmall} />
              </div>

              <button 
                className={styles.scrapeButton} 
                onClick={handleScrape}
                disabled={isScraping || (selectedItems.length === 0 && !link.trim())}
              >
                {isScraping ? (
                  <CustomLoader /> // Use the custom loader here
                ) : (
                  <span className={styles.scrape}>Scrape</span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.downArrowWrapper}>
          <button className={styles.downArrowButton} aria-label="Scroll">
            <ChevronDown className={styles.downArrowIcon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default WebScrapingPage;
