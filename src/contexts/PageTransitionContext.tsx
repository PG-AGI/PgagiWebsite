"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface PageTransitionContextType {
  isTransitioning: boolean;
  navigateWithTransition: (path: string) => void;
  endTransition: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};

interface PageTransitionProviderProps {
  children: ReactNode;
}

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const navigateWithTransition = useCallback((path: string) => {
    if (isTransitioning) return; // Prevent multiple transitions
    
    setIsTransitioning(true);
    
    // Start navigation after a short delay to show the transition
    setTimeout(() => {
      router.push(path);
    }, 50);
  }, [router, isTransitioning]);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <PageTransitionContext.Provider value={{
      isTransitioning,
      navigateWithTransition,
      endTransition
    }}>
      {children}
    </PageTransitionContext.Provider>
  );
};
