"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { GA_ID, pageview } from "@/lib/gtag";

export function GoogleAnalytics() {
  const { consent } = useCookieConsent();
  const pathname = usePathname();

  // Track route changes once GA is loaded and consent is given
  useEffect(() => {
    if (consent === true) {
      pageview(pathname);
    }
  }, [pathname, consent]);

  // Never load in development
  if (process.env.NODE_ENV !== "production") return null;
  // Never load without explicit consent
  if (consent !== true) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="karria-ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
