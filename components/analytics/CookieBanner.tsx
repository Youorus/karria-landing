"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieBanner() {
  const { consent, accept, refuse } = useCookieConsent();
  // Prevent SSR flash: only show after hydration
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement cookies"
      aria-live="polite"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg"
    >
      <div className="rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl shadow-black/10 dark:shadow-black/40 p-5">
        <div className="flex items-start gap-3 mb-5">
          <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Cookie className="w-4 h-4 text-primary" />
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Nous utilisons des cookies pour analyser notre trafic et améliorer
            votre expérience.{" "}
            <Link
              href="/cookies"
              className="text-primary hover:underline font-semibold"
            >
              En savoir plus
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={refuse}
            className="px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground rounded-xl border border-border hover:border-foreground/20 transition-all duration-200"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-200 shadow-sm shadow-primary/20"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
