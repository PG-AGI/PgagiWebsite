'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { Download, Crown, Pencil, ChevronDown, ChevronRight, Loader2 } from 'lucide-react';
import styles from './WebScrapingPage.module.scss';
import Dropdown from './Dropdown';

const WebScrapingPage: React.FC = () => {
  const [scrapedContent, setScrapedContent] = useState<string | null>(null);
  const [link, setLink] = useState<string>('');
  const [subpages, setSubpages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!link) {
      console.log('Please enter a valid link');
      setError('Please enter a valid link');
      return;
    }

    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  const handleScrape = async (selectedItems: string[]) => {
    if (selectedItems.length === 0) {
      setError('Please select at least one subpage to scrape.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setScrapedContent(null);

    try {
      const params = new URLSearchParams();
      selectedItems.forEach(url => params.append('urls', url));

      const response = await axios.post(
        `https://webscrape-94302186616.us-central1.run.app/scrape_selected_pages_without_gpt?${params.toString()}`,
        null,
        {
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      if (response.data) {
        setScrapedContent(JSON.stringify(response.data, null, 2));
      } else {
        setError('No data received from server.');
      }
    } catch (err) {
      setError('Failed to scrape selected pages. Please try again.');
      console.error('API call error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span role="img" aria-label="search-icon">
            🔍
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
          <button
            className={styles.arrowButton}
            onClick={handleSubmit}
            aria-label="Submit Link"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <Loader2 className={styles.loaderIcon} />
            ) : (
              <ChevronRight className={styles.arrowIcon} />
            )}
          </button>
        </div>

        <div className={styles.dropdownWrapper}>
          <Dropdown
            title="Select the pages to scrape"
            items={subpages}
            onScrape={handleScrape}
          />
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles.scrapedContentContainer}>
            <h2 className={styles.scrapedContentTitle}>Scraped Content</h2>
            <div className={styles.scrapedContent}>
              {scrapedContent ? (
                <pre>{scrapedContent}</pre>
              ) : (
                <p className={styles.placeholder}>
                  The scraped content will be displayed here.
                </p>
              )}
            </div>
          </div>

          <div className={styles.downloadButtonWrapper}>
            <button className={styles.downloadButton}>
              <span>Download output</span>
              <Download className={styles.downloadIcon} />
            </button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.firstBox}>
            <Crown className={styles.crownIcon} /> 
            <h2 className={styles.premiumTitle}>
              Unlock a World of Premium Privileges
            </h2>
          </div>

          <div className={styles.secondBox}>
            <p className={styles.premiumText}>
              Start Your 7-Day Free Trial Today!
            </p>
          </div>

          <div className={styles.thirdBox}>
            <div className={styles.userPurposeWrapper}>
              <Pencil className={styles.purposeIcon} />
              <input
                type="text"
                placeholder="User Purpose"
                className={styles.userPurposeInput}
              />
              <Crown className={styles.crownIconSmall} />
            </div>

            <button className={styles.scrapeButton} onClick={() => handleScrape([])}>
              <span className={styles.scrape}>Scrape</span>
              <Crown className={styles.scrapeIcon} />
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
  );
};

export default WebScrapingPage;
