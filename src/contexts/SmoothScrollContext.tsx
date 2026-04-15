'use client'
import React, { createContext, useContext } from 'react';

type SmoothScrollInstance = {
  scroll: number;
  scrollTo: (target: number | string | HTMLElement, options?: { immediate?: boolean; duration?: number; easing?: (t: number) => number }) => void;
  resize: () => void;
  on: (event: 'scroll', callback: (...args: any[]) => void) => void;
  off: (event: 'scroll', callback: (...args: any[]) => void) => void;
};

interface SmoothScrollContextType {
  lenis: SmoothScrollInstance | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
};

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenis = null;

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
