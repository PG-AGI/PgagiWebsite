"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import styles from "./TransitionLink.module.scss";
import { setScrollIntent } from "@/utils/scrollIntent";

interface TransitionLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  prefetch?: boolean;
  ariaLabel?: string;
  /**
   * When true, shows a centered circular spinner over the link after it is
   * clicked (until navigation completes / the component unmounts), giving the
   * user immediate feedback that the click registered.
   */
  showSpinnerOnClick?: boolean;
  /**
   * Case-study slug (element id) to scroll to on the destination page. Recorded
   * as a one-shot in-memory intent just before navigating, so arriving via this
   * link lands on that element while the URL stays clean. See scrollIntent util.
   */
  scrollToOnArrive?: string;
  [key: `data-${string}`]: unknown;
}

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  prefetch = false,
  ariaLabel,
  showSpinnerOnClick = false,
  scrollToOnArrive,
  ...rest
}: TransitionLinkProps): JSX.Element {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

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

    // Record a one-shot scroll target for the destination page before we push.
    if (scrollToOnArrive) {
      setScrollIntent(scrollToOnArrive);
    }

    if (showSpinnerOnClick) {
      setIsNavigating(true);
    }

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

  const linkClassName = showSpinnerOnClick
    ? [className, styles.spinnerHost, isNavigating && styles.isLoading]
        .filter(Boolean)
        .join(" ")
    : className;

  return (
    <Link
      href={href}
      className={linkClassName}
      onClick={handleClick}
      prefetch={prefetch}
      aria-label={ariaLabel}
      aria-busy={isNavigating || undefined}
      {...rest}
    >
      {children}
      {isNavigating && <span className={styles.spinner} aria-hidden="true" />}
    </Link>
  );
}
