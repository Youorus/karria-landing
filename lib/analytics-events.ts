import { gtagEvent } from "@/lib/gtag";

export function trackDownloadClick(platform: "app_store" | "google_play") {
  gtagEvent("download_app_click", { platform });
}

export function trackCreateCVClick() {
  gtagEvent("create_cv_click");
}

export function trackSignupClick(source?: string) {
  gtagEvent("signup_click", { source });
}

export function trackLoginClick() {
  gtagEvent("login_click");
}

export function trackCTAClick(buttonName: string, page?: string) {
  gtagEvent("cta_click", {
    button_name: buttonName,
    page: page ?? (typeof window !== "undefined" ? window.location.pathname : ""),
  });
}

export function trackReadingTime(seconds: number, page: string) {
  gtagEvent("reading_time", { seconds, page });
}

export function trackArticleCompleted(page: string) {
  gtagEvent("article_completed", { page });
}

export function trackFunnelStep(step: string) {
  gtagEvent("funnel_step", { step });
}

export function trackContentCopied(page?: string) {
  gtagEvent("content_copied", {
    page: page ?? (typeof window !== "undefined" ? window.location.pathname : ""),
  });
}

export function trackShareClick(platform: string) {
  gtagEvent("share_click", { platform });
}

export function trackModalOpen(modalName: string) {
  gtagEvent("modal_open", { modal_name: modalName });
}

export function trackFormError(field: string, formName?: string) {
  gtagEvent("form_error", { field, form_name: formName });
}

export function trackFormSubmit(formName: string) {
  gtagEvent("form_submit", { form_name: formName });
}
