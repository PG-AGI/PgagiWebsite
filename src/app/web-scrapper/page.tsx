// WebScrapingPage.tsx

'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { Download, Crown, Pencil, ChevronDown, ChevronRight, Loader2 } from 'lucide-react';
import styles from './WebScrapingPage.module.scss';
import Dropdown from './Dropdown';
import NormalScrapedContent from './NormalScrapedContent';
import GPTScrapedContent from './GPTScrapedContent';
import GlareBackground from '../components/base/GlareBackground';

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
    <>
    <GlareBackground/>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span role="img" aria-label="search-icon">
          <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.4167 53.6667L78.5833 72.8333L72.8333 78.5833L53.6667 59.4167V56.3883L52.6317 55.315C48.1239 59.2018 42.3687 61.3379 36.4167 61.3333C29.8084 61.3333 23.4707 58.7082 18.7979 54.0354C14.1251 49.3626 11.5 43.025 11.5 36.4167C11.5 29.8084 14.1251 23.4707 18.7979 18.7979C23.4707 14.1251 29.8084 11.5 36.4167 11.5C43.025 11.5 49.3626 14.1251 54.0354 18.7979C58.7082 23.4707 61.3333 29.8084 61.3333 36.4167C61.3333 42.5883 59.0717 48.2617 55.315 52.6317L56.3883 53.6667H59.4167ZM36.4167 17.25L34.3083 17.365C33.3883 19.3583 31.97 22.7317 30.935 26.8333H41.8983C40.8633 22.7317 39.445 19.3583 38.525 17.365C37.835 17.25 37.145 17.25 36.4167 17.25ZM53.015 26.8333C50.7362 22.8444 47.085 19.82 42.7417 18.3233C43.6617 20.355 44.85 23.3067 45.7317 26.8333H53.015ZM19.8183 26.8333H27.1017C27.9833 23.3067 29.1717 20.355 30.0917 18.3233C25.7483 19.82 22.0972 22.8444 19.8183 26.8333ZM17.25 36.4167C17.25 38.3333 17.5567 40.365 18.1317 42.1667H26.335L25.875 36.4167L26.335 30.6667H18.1317C17.5567 32.4683 17.25 34.5 17.25 36.4167ZM54.7017 42.1667C55.2767 40.365 55.5833 38.3333 55.5833 36.4167C55.5833 34.5 55.2767 32.4683 54.7017 30.6667H46.4983C47.1074 34.4758 47.1074 38.3575 46.4983 42.1667H54.7017ZM30.1683 30.6667L29.7083 36.4167L30.1683 42.1667H42.665C43.2741 38.3575 43.2741 34.4758 42.665 30.6667H30.1683ZM36.4167 55.5833C37.1067 55.5833 37.7967 55.5833 38.4483 55.4683C39.4067 53.475 40.8633 50.1017 41.8983 46H30.935C31.97 50.1017 33.4267 53.475 34.385 55.4683L36.4167 55.5833ZM53.015 46H45.7317C44.85 49.5267 43.6617 52.4783 42.7417 54.51C47.085 53.0134 50.7362 49.9889 53.015 46ZM19.8183 46C22.0972 49.9889 25.7483 53.0134 30.0917 54.51C29.1717 52.4783 27.9833 49.5267 27.1017 46H19.8183Z" fill="white"/>
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
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <Loader2 className={styles.loaderIcon} />
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
            onScrape={handleScrape}
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
              onClick={handleScrapeWithGPT}
              disabled={isLoading || selectedItems.length === 0 || !userPurpose.trim()}
            >
              <span className={styles.scrape}>Scrape</span>
              {/* <Crown className={styles.scrapeIcon} /> */}
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
