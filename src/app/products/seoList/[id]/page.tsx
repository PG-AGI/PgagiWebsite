'use client'
import { useEffect, useState } from 'react';
import styles from '../productListing.module.scss';
import { Product_Pages_Content } from '@/utils/constants';
import ReactMarkdown from 'react-markdown';
import { ClientJS } from 'clientjs';
import { useAuth } from '@/contexts/AuthContext';
import GoogleSignInButton from '../../../components/googleSignInButton';
import GlareBackground from '../../../../../pgagi-website-blog-page/src/app/components/GlareBackground';
import Footer from '../../../../../pgagi-website-blog-page/src/app/components/Footer2';

export default function Product_Listing_Faq_Page({ params }: { params: { id: string } }) {
  const [productName, setProductName] = useState('');
  const [productFeature, setProductFeature] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);
  const [fingerprint, setFingerprint] = useState('');
  const [freeTrialEnded, setFreeTrialEnded] = useState(false); // New state for free trial status
  const { user } = useAuth();
  // Fetch fingerprint on page load
  useEffect(() => {
    const client = new ClientJS();
    const fingerprint: any = client.getFingerprint();
    setFingerprint(fingerprint);
  }, []);
  useEffect(() => {
    if (user) {
      setShowSignIn(false);  // Automatically hide sign-in and background when signed in
      setError('');
    }
    console.log(user)
  }, [user]);

  
  const pageContent = Product_Pages_Content.find(page => page.id === params.id);
  // const { isSignedIn } = useAuth();  // Clerk's hook to check if the user is signed in

  // Ensure the page exists before rendering
  if (!pageContent) {
    return <div>Page not found</div>;
  }
  const onClose=()=>{
    setShowSignIn(false);
  }

  const checkUserStatus = async () => {
    try {
      const response = await fetch('/api/products/check-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fingerprint, userId: params.id }),
      });

      const data = await response.json();

      if (response.ok && data.freeTrialEnded) {
        // Show the popup if the free trial has ended
        setFreeTrialEnded(true);
        return false;
      } else if (response.ok && data.usedBefore && !user) {
        // Show sign-in popup if the user has used the request before but not signed in
        setError('You need to sign in to make another request.');
        setShowSignIn(true);
        return false;
      }

      return true;
    } catch (error: any) {
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
        <a href="/productDetails/seo-list" className={styles.goBack}>{'< Go Back'}</a>
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

      {freeTrialEnded && (
        <>
          <div className={styles.blurBackground}></div>
          <div className={styles.popupContainer}>
            <h2>Free Trial Ended</h2>
            <p>Your free trial has ended. Please purchase to continue using the product.</p>
            <a href="/pricing" className={styles.pricingLink}>
              <button className={styles.button}>Buy Now</button>
            </a>
          </div>
        </>
      )}

      {showSignIn && (
        <>
          <div className={styles.blurBackground}></div>
          <div className={styles.signInContainer}>
          <button onClick={onClose} className={styles.closeButton}>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.881 22.881L8.11914 8.11914M22.881 8.11914L8.11914 22.881" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
            <h2 className={styles.signInHeading}>Sign In to Use the Product</h2>
            <p className={styles.signInDescription}>Please sign in to continue and access exclusive features</p>

            {/* Google Sign-In Button */}
            <div className={styles.googleButtonContainer}>
              <GoogleSignInButton />
            </div>
          </div>
          <div className={styles.blurBackground}></div>
        </>
      )}
      <GlareBackground/>
      {/* <Footer/> */}
    </div>
  );

}