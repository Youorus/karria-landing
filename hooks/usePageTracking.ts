"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { gtagEvent } from "@/lib/gtag";

const SCROLL_THRESHOLDS = [25, 50, 75, 90, 100] as const;

export function usePageTracking() {
  const pathname = usePathname();
  const { consent } = useCookieConsent();
  const enteredAt = useRef<number>(Date.now());
  const reachedThresholds = useRef<Set<number>>(new Set());

  // Reset on route change
  useEffect(() => {
    enteredAt.current = Date.now();
    reachedThresholds.current = new Set();
  }, [pathname]);

  // Scroll depth tracking
  useEffect(() => {
    if (!consent) return;

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of SCROLL_THRESHOLDS) {
        if (pct >= threshold && !reachedThresholds.current.has(threshold)) {
          reachedThresholds.current.add(threshold);
          gtagEvent("scroll", { percent_scrolled: threshold, page: pathname });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, consent]);

  // Time on page — fires on unload / route change
  useEffect(() => {
    if (!consent) return;

    function sendTimeOnPage() {
      const seconds = Math.round((Date.now() - enteredAt.current) / 1000);
      if (seconds < 1) return;
      gtagEvent("time_on_page", { seconds, page: pathname });
    }

    window.addEventListener("beforeunload", sendTimeOnPage);
    return () => {
      sendTimeOnPage();
      window.removeEventListener("beforeunload", sendTimeOnPage);
    };
  }, [pathname, consent]);
}
