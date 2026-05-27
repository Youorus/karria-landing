import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./utils";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  // Strip any existing "| Karria" or "— Karria" suffix and "Karria — " prefix before formatting
  const cleanTitle = title
    .replace(/\s*[|—]\s*Karria\s*$/i, "")
    .replace(/^Karria\s*[—\-]\s*/i, "")
    .trim();
  const fullTitle = `${SITE_NAME} — ${cleanTitle}`;

  return {
    // { absolute } bypasses the layout template to avoid "Karria | Karria" duplication
    title: { absolute: fullTitle },
    description,
    keywords: [
      "karria",
      "IA carrière",
      "intelligence artificielle emploi",
      ...keywords,
    ].join(", "),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — La plateforme IA qui réinvente votre carrière`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-image.png`],
      creator: "@karriaapp",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const DEFAULT_KEYWORDS = [
  "recherche emploi IA",
  "matching emploi intelligent",
  "CV IA",
  "génération CV automatique",
  "lettre de motivation IA",
  "candidature intelligente",
  "coaching carrière IA",
  "recrutement IA",
  "offres emploi personnalisées",
  "plateforme carrière",
  "optimisation profil candidat",
  "ATS optimisation",
  "emploi jeune diplômé",
  "alternance IA",
  "reconversion professionnelle IA",
];
