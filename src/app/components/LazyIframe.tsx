'use client'
import { useEffect, useRef, useState } from 'react';

interface LazyIframeProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
  allow?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  allowFullScreen?: boolean;
  threshold?: number;
  rootMargin?: string;
}

const LazyIframe: React.FC<LazyIframeProps> = ({
  src,
  title,
  width = "100%",
  height = "100%",
  allow,
  referrerPolicy,
  allowFullScreen = false,
  threshold = 0.1,
  rootMargin = "50px"
}) => {
  const iframeRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = iframeRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={iframeRef} style={{ width, height, position: 'relative' }}>
      {isInView ? (
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          frameBorder="0"
          allow={allow}
          referrerPolicy={referrerPolicy}
          allowFullScreen={allowFullScreen}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px'
          }}
        >
          <div style={{ textAlign: 'center', color: '#666' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>▶️</div>
            <div>Click to load video</div>
          </div>
        </div>
      )}
      
      {!isLoaded && isInView && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            color: '#666',
            fontSize: '14px'
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default LazyIframe;
