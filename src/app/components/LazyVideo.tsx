'use client'
import { useEffect, useRef, useState, useCallback } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  poster?: string;
  onLoad?: () => void;
  onError?: () => void;
  threshold?: number; // Intersection observer threshold
  rootMargin?: string; // Intersection observer root margin
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className = '',
  style = {},
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  controls = false,
  poster,
  onLoad,
  onError,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleVideoError = useCallback(() => {
    setHasError(true);
    onError?.();
    console.error(`Failed to load video: ${src}`);
  }, [onError, src]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          // Disconnect observer once video is in view
          observerRef.current?.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observerRef.current.observe(videoElement);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !isInView) return;

    // Load video source when in view
    videoElement.src = src;
    videoElement.addEventListener('loadeddata', handleVideoLoad);
    videoElement.addEventListener('error', handleVideoError);

    return () => {
      videoElement.removeEventListener('loadeddata', handleVideoLoad);
      videoElement.removeEventListener('error', handleVideoError);
    };
  }, [isInView, src, handleVideoLoad, handleVideoError]);

  return (
    <div style={{ position: 'relative', ...style }}>
      <video
        ref={videoRef}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          willChange: 'auto',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          ...style
        }}
        autoPlay={autoPlay && isLoaded}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        controls={controls}
        poster={poster}
        preload="none" // Don't preload anything until in view
      />
      
      {/* Loading placeholder */}
      {!isLoaded && !hasError && isInView && (
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
            backgroundColor: '#f0f0f0',
            color: '#666',
            fontSize: '14px'
          }}
        >
          Loading video...
        </div>
      )}

      {/* Error placeholder */}
      {hasError && (
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
            backgroundColor: '#f5f5f5',
            color: '#999',
            fontSize: '14px'
          }}
        >
          Failed to load video
        </div>
      )}

      {/* Initial placeholder before intersection */}
      {!isInView && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f8f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {poster && (
            <img
              src={poster}
              alt="Video thumbnail"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
