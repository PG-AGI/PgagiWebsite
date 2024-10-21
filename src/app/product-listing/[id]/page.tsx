'use client'
import { useEffect, useState } from 'react';
import styles from '../productListing.module.scss';
import { Product_Pages_Content } from '../../../utils/constants';
import ReactMarkdown from 'react-markdown';
import { ClientJS } from 'clientjs';
import { useAuth } from '@clerk/nextjs';  // Clerk's hook for authentication
import { SignIn } from '@clerk/nextjs';

export default function Product_Listing_Faq_Page({ params }: { params: { id: string } }) {

  const pageContent = Product_Pages_Content.find(page => page.id === params.id);
  const { isSignedIn } = useAuth();  // Clerk's hook to check if the user is signed in

  // Ensure the page exists before rendering
  if (!pageContent) {
    return <div>Page not found</div>;
  }

  const [productName, setProductName] = useState('');
  const [productFeature, setProductFeature] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);
  const [fingerprint, setFingerprint] = useState('');

  // Fetch fingerprint on page load
  useEffect(() => {
    const client = new ClientJS();
    const fingerprint: any = client.getFingerprint();
    setFingerprint(fingerprint);
  }, []);
  useEffect(() => {
    if (isSignedIn) {
      setShowSignIn(false);  // Automatically hide sign-in and background when signed in
    }
    console.log(isSignedIn)
  }, [isSignedIn]);

  const checkUserStatus = async () => {
    try {
      const response = await fetch('/api/products/check-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fingerprint, userId: params.id })
      });

      const data = await response.json();
      if (response.ok && data.usedBefore) {
        // If the fingerprint is found, check if the user is authenticated
        if (!isSignedIn) {
          setError('You need to sign in to make another request.');
          setShowSignIn(true);  // Show Clerk sign-in pop-up if not authenticated
          return false;
        } else {
          return true;  // If authenticated, allow the user to proceed
        }
      } else {
        // If the fingerprint is not found, allow the user to proceed
        return true;
      }
    } catch (error: any) {
      console.error('Error checking user status:', error);
      setError('Failed to check user status.');
      return false;
    }
  };

  const handleGenerateListing = async () => {
    setLoading(true);
    setError('');

    const canProceed = await checkUserStatus();  // Check user status when the button is clicked

    if (!canProceed) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(pageContent.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_name: productName,
          product_features: productFeature,
        }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        if (params.id === 'product-list') {
          setProductDescription(data.product_description);
        } else {
          setProductDescription(data.product_faqs);
        }
      } else {
        setError(`Error: ${data.detail || 'Something went wrong'}`);
      }
    } catch (error: any) {
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.goBackContainer}>
        <a href="#" className={styles.goBack}>{'< Go Back'}</a>
      </div>
  
      <div className={styles.contentContainer}>
        <div className={styles.description}>
          <h1>{pageContent.title}</h1>
          <p>{pageContent.description}</p>
        </div>
  
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Write the Product Name"
            className={styles.inputField}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Write the Product’s feature"
            className={styles.inputField}
            value={productFeature}
            onChange={(e) => setProductFeature(e.target.value)}
          />
          <div className={styles.btnContainer}>
            <button className={styles.button} onClick={handleGenerateListing} disabled={loading}>
              {loading ? 'Loading...' : pageContent.buttonText}
            </button>
          </div>
        </div>
      </div>
  
      {error && (
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{error}</p>
        </div>
      )}
  
      <div className={styles.resultContainer}>
        <h2>Generated Output</h2>
        <div className={styles.markdownContainer}>
          {productDescription ? (
            <ReactMarkdown>
              {productDescription.replace(/\n{2,}/g, '\n')}
            </ReactMarkdown>
          ) : (
            <p>No product description generated yet.</p> // Default message
          )}
        </div>
      </div>
  
      {showSignIn && (
        <>
          <div className={styles.blurBackground}></div>
          <div className={styles.signInContainer}>
            <SignIn routing='hash' />
          </div>
        </>
      )}
    </div>
  );
  
}
