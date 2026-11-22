import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number, locale = "fr-FR"): string {
  return new Intl.NumberFormat(locale).format(n);
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://karria.fr";
export const SITE_NAME = "Karria";
export const SITE_TAGLINE = "Trouve ton job, soigne ton CV";
/** Image de partage (1200 × 630). */
export const OG_IMAGE = "/og-karria.jpg";
export const SITE_DESCRIPTION =
  "Karria, l’app française pour trouver ton job et soigner ton CV : plus de 500 000 offres, une assistante qui cherche avec toi, un CV adapté à chaque offre et des alertes. Gratuite, sur iPhone et Android.";
