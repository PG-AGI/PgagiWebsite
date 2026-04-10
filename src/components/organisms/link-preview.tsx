"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { EXTERNAL_APIS } from "@/constants/externalLinks";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `${EXTERNAL_APIS.MICROLINK}?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <HoverCardPrimitive.Root
      openDelay={50}
      closeDelay={100}
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <HoverCardPrimitive.Trigger
        onMouseMove={handleMouseMove}
        className={cn("text-black dark:text-white hover:underline", className)}
        href={url}
      >
        {children}
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        className="transform-origin-[var(--radix-hover-card-content-transform-origin)] z-50 "
        side="top"
        align="center"
        sideOffset={10}
      >
        <AnimatePresence>
          {isOpen && isMounted && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className="shadow-2xl rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-800 p-[2px]"
              style={{
                x: translateX,
              }}
            >
              <Link
                href={url}
                className="block overflow-hidden bg-white dark:bg-neutral-900 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ fontSize: 0 }}
              >
                <div className="relative group">
                  <Image
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority={true}
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                    alt="preview image"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};
