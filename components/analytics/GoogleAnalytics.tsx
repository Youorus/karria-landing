"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { GA_ID, pageview } from "@/lib/gtag";

export function GoogleAnalytics() {
  const { consent } = useCookieConsent();
  const pathname = usePathname();

  // Track route changes when consent is granted
  useEffect(() => {
    if (consent === true) {
      pageview(pathname);
    }
  }, [pathname, consent]);

  // Never load in development
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      {/*
       * STEP 1 — Consent Mode v2 defaults (must run BEFORE gtag.js)
       * All signals denied by default (RGPD/CNIL compliant for EEE)
       * wait_for_update: 500ms leaves time for useCookieConsent to restore a prior choice
       */}
      <Script id="gtag-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage':          'denied',
            'ad_user_data':        'denied',
            'ad_personalization':  'denied',
            'analytics_storage':   'denied',
            'wait_for_update':     500
          });
        `}
      </Script>

      {/* STEP 2 — Load gtag.js asynchronously */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* STEP 3 — Initialize GA4 config */}
      <Script id="gtag-config" strategy="afterInteractive">
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
