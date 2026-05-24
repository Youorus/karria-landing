import { Variants } from "framer-motion";

// ── Easings ──
// Apple / Google style ultra-smooth easing
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT = [0.25, 1, 0.5, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

// ── Variants ──

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 1.2, ease: EASE } 
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 1.2, ease: EASE } 
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    transition: { duration: 1, ease: EASE } 
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)", 
    transition: { duration: 1.2, ease: EASE } 
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)", 
    transition: { duration: 1.2, ease: EASE } 
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)", 
    transition: { duration: 1.2, ease: EASE } 
  },
};
