"use client";

import { useCallback, useEffect, useState } from "react";
import { updateConsent } from "@/lib/gtag";

const STORAGE_KEY = "karria-cookie-consent";
const CONSENT_EVENT = "karria-consent-update";

export function useCookieConsent() {
  const [consent, setConsentState] = useState<boolean | null>(null);

  // Read from localStorage after mount (avoids SSR/hydration mismatch)
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted") {
      setConsentState(true);
      // Restore previously accepted consent for returning visitors
      updateConsent({
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
      });
    } else if (stored === "refused") {
      setConsentState(false);
      // Explicit re-confirmation of denial (no-op, but keeps state consistent)
      updateConsent({
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
  }, []);

  // Sync across multiple hook instances on the same page
  useEffect(() => {
    const handler = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted") setConsentState(true);
      else if (stored === "refused") setConsentState(false);
      else setConsentState(null);
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsentState(true);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    // STEP 4 — Consent Mode v2: grant all signals
    updateConsent({
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  }, []);

  const refuse = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setConsentState(false);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    // STEP 4 — Consent Mode v2: deny all signals
    updateConsent({
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConsentState(null);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }, []);

  return { consent, accept, refuse, reset };
}
