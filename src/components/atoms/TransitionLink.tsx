"use client";

import Link from "next/link";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TransitionLink({
  href,
  children,
  className,
  onClick
}: TransitionLinkProps): JSX.Element {
  const { navigateWithTransition } = usePageTransition();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Call any additional onClick handler
    if (onClick) {
      onClick();
    }

    // Only trigger transition for internal links
    if (href.startsWith('/') && href !== window.location.pathname) {
      navigateWithTransition(href);
    } else {
      // For external links or same page, use regular navigation
      router.push(href);
    }
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
