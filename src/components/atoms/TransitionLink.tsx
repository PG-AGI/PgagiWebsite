"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  prefetch?: boolean;
}

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  prefetch = false,
}: TransitionLinkProps): JSX.Element {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isModifiedClick =
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;

    if (isModifiedClick) {
      return;
    }

    // Call any additional onClick handler
    if (onClick) {
      onClick();
    }

    if (!href.startsWith('/')) {
      return;
    }

    if (href === window.location.pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    e.preventDefault();

    const navigate = () => {
      router.push(href);
    };

    const doc = document as Document & {
      startViewTransition?: (updateCallback: () => void) => void;
    };

    if (typeof doc.startViewTransition === "function") {
      doc.startViewTransition(navigate);
      return;
    }

    navigate();
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}
