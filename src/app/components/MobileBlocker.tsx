'use client';

import { useEffect, useState } from 'react';

const MobileBlocker = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      // Check if screen width is less than 1024px (tablet and mobile)
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(isSmallScreen);
      
      // Prevent body scrolling on mobile using CSS class
      if (isSmallScreen) {
        document.body.classList.add('mobile-blocked');
        // Also prevent touch scrolling
        document.body.style.touchAction = 'none';
        document.body.style.overscrollBehavior = 'none';
      } else {
        document.body.classList.remove('mobile-blocked');
        document.body.style.touchAction = '';
        document.body.style.overscrollBehavior = '';
      }
    };

    // Check on mount
    checkScreenSize();

    // Check on resize
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      // Cleanup: restore body styles when component unmounts
      document.body.classList.remove('mobile-blocked');
      document.body.style.touchAction = '';
      document.body.style.overscrollBehavior = '';
    };
  }, []);

  if (!isMobile) {
    return null; // Don't render anything on desktop
  }

  return (
    <div 
      className="mobile-blocker"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        margin: 0,
        border: 'none',
        outline: 'none'
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%'
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px',
            lineHeight: '1.3'
          }}
        >
          THIS WEBSITE IS ONLY COMPATIBLE WITH DESKTOP VIEW
        </h1>
        
        <p
          style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '30px',
            lineHeight: '1.5'
          }}
        >
          COMING SOON FOR OTHER DEVICES
        </p>
        
        <div
          style={{
            width: '100px',
            height: '4px',
            backgroundColor: '#007bff',
            margin: '0 auto',
            borderRadius: '2px'
          }}
        />
      </div>
    </div>
  );
};

export default MobileBlocker;
