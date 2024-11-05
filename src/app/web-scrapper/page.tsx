// WebScrapingPage.tsx

'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Download, Crown, Pencil, ChevronDown, ChevronRight, Loader2 } from 'lucide-react';
import styles from './WebScrapingPage.module.scss';
import Dropdown from './Dropdown';
import NormalScrapedContent from './NormalScrapedContent';
import GPTScrapedContent from './GPTScrapedContent';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  // Existing Scrape Function for Normal Scraping
  const handleScrape = async () => {
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
        setScrapedContent(response.data);
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

  // New Scrape Function for Premium Scraping with GPT
  const handleScrapeWithGPT = async () => {
    if (selectedItems.length === 0) {
      setError('Please select at least one subpage to scrape.');
      return;
    }

    if (!userPurpose.trim()) {
      setError('Please enter a purpose for scraping.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setScrapedContent(null);

    try {
      const params = new URLSearchParams();
      selectedItems.forEach(url => params.append('urls', url));
      params.append('user_prompt', userPurpose.trim());

      const response = await axios.post(
        `https://webscrape-94302186616.us-central1.run.app/scrape_selected_pages_with_gpt?${params.toString()}`,
        null,
        {
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      if (response.data) {
        setScrapedContent(response.data);
      } else {
        setError('No data received from server.');
      }
    } catch (err) {
      setError('Failed to scrape selected pages with GPT. Please try again.');
      console.error('API call error:', err);
    } finally {
      setIsLoading(false);
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
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
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
                value={userPurpose}
                onChange={(e) => setUserPurpose(e.target.value)}
                placeholder="User Purpose"
                className={styles.userPurposeInput}
              />
              <Crown className={styles.crownIconSmall} />
            </div>

            <button 
              className={styles.scrapeButton} 
              onClick={handleScrapeWithGPT}
              disabled={isLoading || selectedItems.length === 0 || !userPurpose.trim()}
            >
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
