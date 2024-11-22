'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Download, Crown, Pencil } from 'lucide-react';
import styles from './WebScrapingPage.module.scss';
import Dropdown from './Dropdown';
import NormalScrapedContent from './NormalScrapedContent';
import GPTScrapedContent from './GPTScrapedContent';
import GlareBackground from '../components/base/GlareBackground';
import CustomLoader from '../components/CustomLoader';

import { useAuth } from '@/contexts/AuthContext';
import GoogleSignInButton from '../components/googleSignInButton';

// Import react-toastify components and styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // New States
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [userPurpose, setUserPurpose] = useState<string>('');

  // Authentication States
  const [showSignIn, setShowSignIn] = useState(false);
  const { user } = useAuth();

  // Reference for the scraped content container
  const scrapedContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      setShowSignIn(false); // Hide sign-in popup when user is authenticated
      toast.success('Successfully signed in!');
    }
  }, [user]);

  // Scroll to scraped content when it changes
  useEffect(() => {
    if (scrapedContent && scrapedContentRef.current) {
      scrapedContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrapedContent]);

  const handleSubmit = async () => {
    if (!link.trim()) {
      toast.error('Please enter a valid link.');
      return;
    }

    setIsSubmitting(true);
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
        toast.success('Subpages fetched successfully!');
      } else {
        toast.error('Invalid response from server.');
        console.error('Invalid response structure:', response.data);
      }
    } catch (err) {
      toast.error('Failed to fetch subpages. Please try again.');
      console.error('API call error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScrape = async () => {
    if (userPurpose.trim() && !user) {
      toast.warn('You need to sign in to use this feature.');
      setShowSignIn(true);
      return;
    }

    if (selectedItems.length === 0 && !link.trim()) {
      toast.error('Please enter a valid link or select subpages to scrape.');
      return;
    }

    setIsScraping(true);
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
        toast.success('Scraping completed successfully!');
      } else {
        toast.error('No data received from server.');
      }
    } catch (err) {
      toast.error('Failed to scrape pages. Please try again.');
      console.error('API call error:', err);
    } finally {
      setIsScraping(false);
    }
  };

  const handleDownload = () => {
    if (!scrapedContent) {
      toast.error('No content to download.');
      return;
    }

    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(scrapedContent, null, 2)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = "scraped_content.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    toast.success('Download started!');
  };

  const onClose = () => {
    setShowSignIn(false);
  };

  return (
    <>
      {/* Toast Container for react-toastify */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <GlareBackground />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <span role="img" aria-label="search-icon">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path */}
              </svg>
            </span>{' '}
            Web Scraper
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
              <CustomLoader />
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
          />
        </div>

        <div className={styles.mainContent}>
          <div className={styles.rightSection}>
            <div className={styles.thirdBox}>
              <h1>{'Scraped Data, Elevated by AI Magic'}</h1>
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
            </div>
            <button
              className={styles.scrapeButton}
              onClick={handleScrape}
              disabled={isScraping || (selectedItems.length === 0 && !link.trim())}
            >
              {isScraping ? (
                <CustomLoader />
              ) : (
                <span className={styles.scrape}>Scrape</span>
              )}
            </button>
          </div>

          {/* Conditionally render the scraped content section */}
          {scrapedContent && (
            <div className={styles.leftSection} ref={scrapedContentRef}>
              <div className={styles.scrapedContentContainer}>
                <h2 className={styles.scrapedContentTitle}>Scraped Content</h2>
                <div className={styles.scrapedContent}>
                  {typeof Object.values(scrapedContent)[0] === 'string' ? (
                    <NormalScrapedContent content={scrapedContent as NormalScrapedContentType} />
                  ) : (
                    Object.keys(scrapedContent).map((url, index) => {
                      const content = (scrapedContent as GPTScrapedContentType)[url];
                      return <GPTScrapedContent key={index} content={content} />;
                    })
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
          )}
        </div>
      </div>

      {/* Sign-In Popup */}
      {showSignIn && (
        <>
          <div className={styles.blurBackground}></div>
          <div className={styles.signInContainer}>
            <button onClick={onClose} className={styles.closeButton}>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.881 22.881L8.11914 8.11914M22.881 8.11914L8.11914 22.881" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <h2 className={styles.signInHeading}>Sign In to Use the Product</h2>
            <p className={styles.signInDescription}>Please sign in to continue and access exclusive features</p>

            {/* Google Sign-In Button */}
            <div className={styles.googleButtonContainer}>
              <GoogleSignInButton />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WebScrapingPage;
