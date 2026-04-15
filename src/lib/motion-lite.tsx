"use client";

import React from "react";

type MotionValueLike = {
  get: () => number;
  set: (next: number) => void;
};

type MotionProps = React.HTMLAttributes<HTMLElement> & {
  style?: React.CSSProperties & { x?: number | MotionValueLike };
};

const stripMotionProps = (props: Record<string, unknown>) => {
  const {
    initial,
    animate,
    exit,
    whileHover,
    whileTap,
    whileInView,
    variants,
    viewport,
    layout,
    layoutId,
    transition,
    drag,
    dragConstraints,
    dragElastic,
    dragMomentum,
    onDrag,
    onAnimationStart,
    onAnimationComplete,
    ...rest
  } = props;

  void initial;
  void animate;
  void exit;
  void whileHover;
  void whileTap;
  void whileInView;
  void variants;
  void viewport;
  void layout;
  void layoutId;
  void transition;
  void drag;
  void dragConstraints;
  void dragElastic;
  void dragMomentum;
  void onDrag;
  void onAnimationStart;
  void onAnimationComplete;

  return rest;
};

const normalizeStyle = (style?: MotionProps["style"]): React.CSSProperties | undefined => {
  if (!style) return undefined;

  const { x, transform, ...rest } = style;
  if (typeof x === "undefined") return style;

  const xValue = typeof x === "number" ? x : x.get();
  const translateX = `translateX(${xValue}px)`;

  return {
    ...rest,
    transform: transform ? `${translateX} ${transform}` : translateX,
  };
};

const createMotionComponent = (tag: keyof JSX.IntrinsicElements) => {
  const MotionComponent = React.forwardRef<HTMLElement, MotionProps>((incomingProps, ref) => {
    const cleanedProps = stripMotionProps(incomingProps as Record<string, unknown>) as MotionProps;
    const normalizedStyle = normalizeStyle(cleanedProps.style);

    return React.createElement(tag, {
      ...cleanedProps,
      ref,
      style: normalizedStyle,
    });
  });

  MotionComponent.displayName = `Motion(${String(tag)})`;
  return MotionComponent;
};

const motionComponentCache = new Map<string, React.ComponentType<any>>();

export const motion = new Proxy(
  {},
  {
    get: (_target, key: string) => {
      const existing = motionComponentCache.get(key);
      if (existing) return existing;

      const next = createMotionComponent(key as keyof JSX.IntrinsicElements);
      motionComponentCache.set(key, next);
      return next;
    },
  },
) as Record<string, React.ComponentType<any>>;

export const AnimatePresence: React.FC<React.PropsWithChildren<{ mode?: string }>> = ({ children }) => (
  <>{children}</>
);

export const useReducedMotion = () => {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);

    onChange();
    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
    };
  }, []);

  return reduced;
};

export const useMotionValue = (initial: number): MotionValueLike => {
  const valueRef = React.useRef(initial);

  return React.useMemo(
    () => ({
      get: () => valueRef.current,
      set: (next: number) => {
        valueRef.current = next;
      },
    }),
    [],
  );
};

export const useSpring = (value: number | MotionValueLike, _config?: Record<string, number>): MotionValueLike => {
  const resolvedInitial = typeof value === "number" ? value : value.get();
  const springRef = React.useRef(resolvedInitial);

  React.useEffect(() => {
    springRef.current = typeof value === "number" ? value : value.get();
  }, [value]);

  return React.useMemo(
    () => ({
      get: () => springRef.current,
      set: (next: number) => {
        springRef.current = next;
      },
    }),
    [],
  );
};
