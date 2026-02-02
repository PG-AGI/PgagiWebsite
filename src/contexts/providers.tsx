'use client';

import { SessionProvider } from 'next-auth/react';
import { PageTransitionProvider } from './PageTransitionContext';
import { ChatUIProvider } from './ChatUIContext';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <PageTransitionProvider>
        <ChatUIProvider>{children}</ChatUIProvider>
      </PageTransitionProvider>
    </SessionProvider>
  );
};

export default Providers;
