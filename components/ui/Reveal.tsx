"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer, fadeDown, fadeIn, slideInLeft, slideInRight, scaleUp } from "@/lib/animations";

interface RevealProps {
  children: React.ReactNode;
  variant?: "fadeUp" | "fadeDown" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleUp" | "staggerContainer";
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
  once?: boolean;
}

export function Reveal({
  children,
  variant = "fadeUp",
  className = "",
  delay = 0,
  width = "100%",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const getVariant = () => {
    switch (variant) {
      case "fadeUp": return fadeUp;
      case "fadeDown": return fadeDown;
      case "fadeIn": return fadeIn;
      case "slideInLeft": return slideInLeft;
      case "slideInRight": return slideInRight;
      case "scaleUp": return scaleUp;
      case "staggerContainer": return staggerContainer;
      default: return fadeUp;
    }
  };

  const selectedVariant = getVariant();

  // If delay is provided, we inject it into the visible state
  const customVariant = delay
    ? {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...(typeof selectedVariant.visible === "object" && selectedVariant.visible !== null && "transition" in selectedVariant.visible
              ? (selectedVariant.visible.transition as object)
              : {}),
            delay,
          },
        },
      }
    : selectedVariant;

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={customVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}
