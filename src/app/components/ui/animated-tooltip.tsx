"use client";

import React, { useState, useRef, MouseEvent } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

import "./AnimatedTooltip.scss"; // <-- import your SCSS here

interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface AnimatedTooltipProps {
  items: TooltipItem[];
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 200, damping: 20 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-32, 32], [-8, 8]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-32, 32], [-12, 12]),
    springConfig,
  );

  const handleMouseMove = (event: MouseEvent<HTMLImageElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = (event.target as HTMLImageElement).offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  const handleMouseEnter = (id: number) => {
    setHoveredIndex(id);
    x.set(0); // center on enter
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    x.set(0); // reset on leave to avoid drift
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="tooltip-group"
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  },
                }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="tooltip"
              >
                <div className="tooltip-gradient gradient-emerald" />
                <div className="tooltip-gradient gradient-sky" />
                <div className="tooltip-name">{item.name}</div>
                <div className="tooltip-designation">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <img
            onMouseMove={handleMouseMove}
            height={64}
            width={64}
            src={item.image}
            alt={item.name}
            className="tooltip-avatar"
          />
        </div>
      ))}
    </>
  );
};
