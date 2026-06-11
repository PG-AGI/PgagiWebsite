"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import styles from "@/styles/components/organisms/text-flipping-board.module.scss";

const FLAP_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,-:'&!?+%/";

interface AccentColor {
  top: string;
  bottom: string;
  text: string;
}

const ACCENT_COLORS: AccentColor[] = [
  // { top: "#ef4444", bottom: "#dc2626", text: "#ffffff" },
  // { top: "#ef4444", bottom: "#dc2626", text: "#171717" },
  // { top: "#ef4444", bottom: "#dc2626", text: "#ffffff" },
  // { top: "#ef4444", bottom: "#dc2626", text: "#ffffff" },
  // { top: "#ef4444", bottom: "#dc2626", text: "#ffffff" },
];

// ── Individual Split-Flap Character ───────────────────────────────────

const FlapCell = React.memo(
  function FlapCell({
    target,
    delay,
    stepMs,
    flipDuration,
  }: {
    target: string;
    delay: number;
    stepMs: number;
    flipDuration: number;
  }) {
    const [current, setCurrent] = useState(" ");
    const [prev, setPrev] = useState(" ");
    const [flipId, setFlipId] = useState(0);
    const [accent, setAccent] = useState<AccentColor | null>(null);
    const [prevAccent, setPrevAccent] = useState<AccentColor | null>(null);
    const curRef = useRef(" ");
    const tgtRef = useRef<string | null>(null);
    const accentRef = useRef<AccentColor | null>(null);
    const startTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const stepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      if (startTimer.current) clearTimeout(startTimer.current);
      if (stepTimer.current) clearTimeout(stepTimer.current);
      startTimer.current = null;
      stepTimer.current = null;

      const upper = target.toUpperCase();
      const normalized = FLAP_CHARS.includes(upper) ? upper : " ";
      if (normalized === tgtRef.current) return;
      tgtRef.current = normalized;

      if (normalized === " " && curRef.current === " ") return;

      const scrambleCount =
        normalized === " "
          ? 5 + Math.floor(Math.random() * 4)
          : 12 + Math.floor(Math.random() * 8);

      const runStep = (i: number) => {
        const isLast = i === scrambleCount;
        const ch = isLast
          ? normalized
          : FLAP_CHARS[1 + Math.floor(Math.random() * (FLAP_CHARS.length - 1))];

        const newAccent = isLast
          ? null
          : Math.random() < 0.18
            ? ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)]
            : null;

        setPrev(curRef.current);
        setPrevAccent(accentRef.current);
        curRef.current = ch;
        accentRef.current = newAccent;
        setCurrent(ch);
        setAccent(newAccent);
        setFlipId((n) => n + 1);

        if (!isLast) {
          stepTimer.current = setTimeout(() => runStep(i + 1), stepMs);
        }
      };

      startTimer.current = setTimeout(() => runStep(1), delay);

      return () => {
        if (startTimer.current) clearTimeout(startTimer.current);
        if (stepTimer.current) clearTimeout(stepTimer.current);
        startTimer.current = null;
        stepTimer.current = null;
        tgtRef.current = null;
      };
    }, [target, delay, stepMs]);

    const show = current === " " ? " " : current;
    const showPrev = prev === " " ? " " : prev;

    const topBgStyle = accent
      ? { background: accent.top, color: accent.text }
      : undefined;
    const bottomBgStyle = accent
      ? { background: accent.bottom, color: accent.text }
      : undefined;
    const prevTopBgStyle = prevAccent
      ? { background: prevAccent.top, color: prevAccent.text }
      : undefined;

    const bottomDelay = flipDuration * 0.5;

    return (
      <div className={styles.cell}>
        <div className={styles.stage}>
          {/* Static top — new character top half */}
          <div
            className={`${styles.staticHalf} ${styles.staticTop}`}
            style={topBgStyle}
          >
            <div className={`${styles.flapText} ${styles.flapTextTop}`}>
              {show}
            </div>
          </div>

          {/* Static bottom — new character bottom half */}
          <div
            className={`${styles.staticHalf} ${styles.staticBottom}`}
            style={bottomBgStyle}
          >
            <div className={`${styles.flapText} ${styles.flapTextBottom}`}>
              {show}
            </div>
            {flipId > 0 && (
              <motion.div
                key={`s${flipId}`}
                className={styles.staticShine}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0 }}
                transition={{ duration: flipDuration * 1.3, ease: "easeOut" }}
              />
            )}
          </div>

          {/* Flipping top flap — old character drops down */}
          {flipId > 0 && (
            <motion.div
              key={flipId}
              className={styles.flippingTop}
              style={prevTopBgStyle}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -100 }}
              transition={{
                duration: flipDuration,
                ease: [0.55, 0.055, 0.675, 0.19],
              }}
            >
              <div className={`${styles.flapText} ${styles.flapTextTop}`}>
                {showPrev}
              </div>
              <motion.div
                className={styles.shadowDrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                transition={{ duration: flipDuration }}
              />
            </motion.div>
          )}

          {/* Flipping bottom flap — new character rises up */}
          {flipId > 0 && (
            <motion.div
              key={`b${flipId}`}
              className={styles.flippingBottom}
              style={bottomBgStyle}
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{
                duration: flipDuration * 0.85,
                delay: bottomDelay,
                ease: [0.33, 1.55, 0.64, 1],
              }}
            >
              <div className={`${styles.flapText} ${styles.flapTextBottom}`}>
                {show}
              </div>
              <motion.div
                className={styles.shadowRise}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: flipDuration * 0.85,
                  delay: bottomDelay,
                }}
              />
            </motion.div>
          )}

          {/* Center split line */}
          <div className={styles.splitLine} />
        </div>
      </div>
    );
  },
  (prev, next) =>
    prev.target === next.target &&
    prev.delay === next.delay &&
    prev.stepMs === next.stepMs &&
    prev.flipDuration === next.flipDuration,
);

// ── Horizontal text strip ─────────────────────────────────────────────

type StripAlign = "left" | "center" | "right";

function TextStrip({
  text,
  length,
  colDelay = 22,
  stepMs = 42,
  flipDuration = 0.32,
  align = "center",
}: {
  text: string;
  length: number;
  colDelay?: number;
  stepMs?: number;
  flipDuration?: number;
  align?: StripAlign;
}) {
  const chars = useMemo(() => {
    const upper = text.toUpperCase();
    const pad = Math.max(0, length - upper.length);
    let padded: string;
    if (align === "right") {
      padded = " ".repeat(pad) + upper;
    } else if (align === "left") {
      padded = upper + " ".repeat(pad);
    } else {
      const left = Math.floor(pad / 2);
      const right = pad - left;
      padded = " ".repeat(left) + upper + " ".repeat(right);
    }
    return padded.slice(0, length).split("");
  }, [text, length, align]);

  return (
    <div className={styles.strip}>
      {chars.map((ch, i) => (
        <div key={i} className={styles.cellWrap}>
          <FlapCell
            target={ch}
            delay={i * colDelay}
            stepMs={stepMs}
            flipDuration={flipDuration}
          />
        </div>
      ))}
    </div>
  );
}

// ── AnnouncementBar ────────────────────────────────────────────────────

export interface AnnouncementProject {
  name: string;
  activeUsers: number;
}

export interface AnnouncementBarProps {
  projects: AnnouncementProject[];
  intervalMs?: number;
  className?: string;
}

const formatCount = (n: number): string => n.toLocaleString("en-US");

export function AnnouncementBar({
  projects,
  intervalMs = 4500,
  className,
}: AnnouncementBarProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (projects.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % projects.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [projects.length, intervalMs]);

  const current = projects[index] ?? projects[0];

  const nameLen = useMemo(
    () => Math.max(6, ...projects.map((p) => p.name.length)),
    [projects],
  );
  const countLen = useMemo(
    () =>
      Math.max(5, ...projects.map((p) => formatCount(p.activeUsers).length)),
    [projects],
  );

  if (!current) return null;

  return (
    <div
      className={`${styles.bar}${className ? " " + className : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Live now: ${current.name}, ${formatCount(
        current.activeUsers,
      )} active users`}
    >
      <div className={styles.topHairline} aria-hidden />
      <div className={styles.glow} aria-hidden />

      <div className={styles.row}>
        <div className={styles.live}>
          <span className={styles.dotWrap}>
            <span className={styles.dotPing} />
            <span className={styles.dotCore} />
          </span>
          <span className={styles.liveLabel}>LIVE</span>
        </div>

        <span className={styles.divider} aria-hidden />

        <span className={styles.servingLabel}>Live Projects</span>

        <TextStrip text={current.name} length={nameLen} align="center" />

        <span className={styles.divider} aria-hidden />

        <div className={styles.countGroup}>
          <TextStrip
            text={formatCount(current.activeUsers)}
            length={countLen}
            align="right"
          />
          <span className={styles.activeLabel}>
            <span className={styles.activeLabelLong}>Active users</span>
            <span className={styles.activeLabelShort}>Users</span>
          </span>
        </div>
      </div>

      <div className={styles.bottomHairline} aria-hidden />
    </div>
  );
}

export default AnnouncementBar;
