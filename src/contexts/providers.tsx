

'use client';

import { PageTransitionProvider } from "./PageTransitionContext";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <PageTransitionProvider>
      {children}
    </PageTransitionProvider>
  );
};

export default Providers;
