"use client";

import * as React from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps {
  className?: string;
}

export function AnimatedThemeToggler({ className }: AnimatedThemeTogglerProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration errors
  React.useEffect(() => setMounted(true), []);

  const toggleTheme = (event: React.MouseEvent) => {
    const isDark = resolvedTheme === "dark";

    // Support for View Transitions API
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );


    const transition = document.startViewTransition(async () => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  };

  if (!mounted) return <div className="h-11 w-11 lg:h-10 lg:w-10" />;

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-full border bg-background hover:bg-accent transition-colors lg:h-10 lg:w-10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-label={resolvedTheme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {resolvedTheme === "dark" ? (
            <MoonStar className="h-4 w-4 text-blue-400" strokeWidth={1.8} />
          ) : (
            <SunMedium className="h-4 w-4 text-amber-500" strokeWidth={1.8} />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
