"use client";

import {
  Children,
  useEffect,
  isValidElement,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  useRef,
  useState,
} from "react";
import { motion, type MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import styles from "./ScrollStack.module.scss";

type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  stickyTop?: number;
  mobileStickyTop?: number;
};

type ScrollStackItemProps = {
  children: ReactNode;
  className?: string;
};

type StackLayerProps = {
  index: number;
  total: number;
  stickyTop: number;
  mobileStickyTop: number;
  trackStep: number;
  progress: MotionValue<number>;
  className?: string;
  onMeasure?: (metrics: { cardHeight: number; trackHeight: number }) => void;
  children: ReactNode;
};

export const ScrollStackItem = ({ children }: ScrollStackItemProps) => {
  return <>{children}</>;
};

const StackLayer = ({
  index,
  total,
  stickyTop,
  mobileStickyTop,
  trackStep,
  progress,
  className,
  onMeasure,
  children,
}: StackLayerProps) => {
  const shouldReduceMotion = useReducedMotion();
  const itemRef = useRef<HTMLDivElement>(null);
  const stackIndex = index;
  const isFirstCard = index === 0;

  useEffect(() => {
    if (!onMeasure) {
      return;
    }

    const element = itemRef.current;
    if (!element) {
      return;
    }

    const updateHeight = () => {
      const trackElement = element.parentElement as HTMLElement | null;
      onMeasure({
        cardHeight: element.getBoundingClientRect().height,
        trackHeight: trackElement?.getBoundingClientRect().height ?? 0,
      });
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, [onMeasure]);

  // Phase 1: cards arrive one-after-another from below.
  // Starts are intentionally earlier so card 3 also animates in shorter track heights.
  const appearStart = 0.04 + index * 0.1;
  const appearEnd = appearStart + 0.16;

  // Phase 2: after appearing, each card compresses into a tight bunch.
  const packStart = Math.max(0.34, appearEnd + 0.02);
  const packEnd = Math.min(0.78, packStart + 0.18);

  // Lift based on track spacing so cards stack tightly without creating extra tail space.
  const overlapLift = Math.max(72, trackStep * 0.55);
  const spreadLift = Math.max(54, trackStep * 0.36);
  const finalY = -stackIndex * overlapLift;
  const finalScale = 1 - stackIndex * 0.018;
  const finalOpacity = 1 - stackIndex * 0.07;

  // Wider temporary spacing before compression, so "assemble/disassemble" is clear.
  const spreadY = -stackIndex * spreadLift;
  const entryY = 112 + stackIndex * 40;

  const y = useTransform(
    progress,
    [appearStart, appearEnd, packStart, packEnd],
    [entryY, spreadY, spreadY, finalY],
  );
  const opacity = useTransform(
    progress,
    [appearStart, appearEnd, packStart, packEnd],
    [0.35, 1, 1, finalOpacity],
  );
  const scale = useTransform(
    progress,
    [appearStart, appearEnd, packStart, packEnd],
    [0.94, 1, 1, finalScale],
  );

  return (
    <div
      className={`${styles.track} ${index === total - 1 ? styles.trackLast : ""}`}
      style={
        {
          "--stack-top": `${stickyTop}px`,
          "--stack-top-mobile": `${mobileStickyTop}px`,
          "--stack-z": index + 1,
        } as CSSProperties
      }
    >
      <motion.div
        ref={itemRef}
        className={`${styles.item} ${className ?? ""}`.trim()}
        style={{
          y: shouldReduceMotion || isFirstCard ? 0 : y,
          opacity: shouldReduceMotion || isFirstCard ? 1 : opacity,
          scale: shouldReduceMotion || isFirstCard ? 1 : scale,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const ScrollStack = ({
  children,
  className,
  stickyTop = 96,
  mobileStickyTop = 88,
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trackStep, setTrackStep] = useState(220);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 82%", "end 22%"],
  });

  const items = Children.toArray(children).filter((child) =>
    isValidElement<ScrollStackItemProps>(child),
  ) as ReactElement<ScrollStackItemProps>[];

  const handleMeasure = ({ trackHeight }: { cardHeight: number; trackHeight: number }) => {
    if (trackHeight > 0) {
      setTrackStep(trackHeight);
    }
  };

  return (
    <div ref={containerRef} className={`${styles.stack} ${className ?? ""}`.trim()}>
      {items.map((item, index) => (
        <StackLayer
          key={item.key ?? index}
          index={index}
          total={items.length}
          stickyTop={stickyTop}
          mobileStickyTop={mobileStickyTop}
          trackStep={trackStep}
          progress={scrollYProgress}
          className={item.props.className}
          onMeasure={index === 0 ? handleMeasure : undefined}
        >
          {item.props.children}
        </StackLayer>
      ))}
    </div>
  );
};

export default ScrollStack;
