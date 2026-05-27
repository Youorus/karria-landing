export const GA_ID = "G-W1T52GGV42";

type GtagCommand = "config" | "event" | "js" | "set" | "consent";

export type ConsentState = "granted" | "denied";

export interface ConsentParams {
  ad_storage?: ConsentState;
  ad_user_data?: ConsentState;
  ad_personalization?: ConsentState;
  analytics_storage?: ConsentState;
  wait_for_update?: number;
}

declare global {
  interface Window {
    gtag: (command: GtagCommand, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function pageview(url: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: url });
}

export function event({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function gtagEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params ?? {});
}

export function updateConsent(params: ConsentParams) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", params);
}
