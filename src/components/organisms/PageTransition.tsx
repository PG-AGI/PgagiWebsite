"use client";

import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div className="page-transition-container">
      <div key={pathname} className="page-transition-motion page-route-enter">
        {children}
      </div>
    </div>
  );
}
