

'use client';

import { SessionProvider } from "next-auth/react";
import { PageTransitionProvider } from "./PageTransitionContext";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <PageTransitionProvider>
        {children}
      </PageTransitionProvider>
    </SessionProvider>
  );
};

export default Providers;
