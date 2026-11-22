/**
 * KARRIA - Centralized Links & Constants
 * This file contains all links, emails, and external resources used across the application.
 */

import { STORE_LINKS } from "./karria";

export const SITE_CONFIG = {
  name: "Karria",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://karria.fr",
  foundingDate: "2024",
  founder: "Marc Takoumba",
  location: "Paris, France",
};

export const CONTACT_EMAILS = {
  general: "hello@karria.fr",
  support: "hello@karria.fr",
  press: "hello@karria.fr",
  partners: "hello@karria.fr",
  jobs: "hello@karria.fr",
  privacy: "hello@karria.fr",
  legal: "hello@karria.fr",
  billing: "hello@karria.fr",
  security: "hello@karria.fr",
};

export const SOCIAL_LINKS = {
  x: "https://x.com/karriaapp",
  linkedin: "https://linkedin.com/company/karria",
  instagram: "https://instagram.com/karria.app",
  tiktok: "https://tiktok.com/@karria.fr",
  founderInstagram: "https://instagram.com/marctakoumba",
};

// Les liens des stores vivent dans lib/karria.ts (une seule source).
export const APP_LINKS = STORE_LINKS;

export const NAV_ROUTES = {
  // Product
  matching: "/matching-emploi-ia",
  cv: "/cv-ia",
  letters: "/lettre-motivation-ia",
  search: "/recherche-emploi-ia",
  comparatifs: "/comparatifs",
  pricing: "/#pricing",
  howItWorks: "/#how-it-works",
  features: "/#features",
  download: "/#download",

  // Resources
  blog: "/blog",
  faq: "/faq",
  ressources: "/ressources",
  alternance: "/alternance",
  reconversion: "/reconversion",
  jeuneDiplome: "/jeune-diplome",

  // Company
  about: "/about",
  contact: "/contact",
  careers: "/carrieres",
  press: "/presse",
  partners: "/partenaires",

  // Legal
  privacy: "/confidentialite",
  cgu: "/cgu",
  cgv: "/cgv",
  legalNotice: "/mentions-legales",
  cookies: "/cookies",
  security: "/securite",
  accountDeletion: "/suppression-compte",
};

// Grouped links for Navigation components
export const FOOTER_SECTIONS = {
  product: [
    { label: "Matching IA", href: NAV_ROUTES.matching },
    { label: "CV IA", href: NAV_ROUTES.cv },
    { label: "Lettres IA", href: NAV_ROUTES.letters },
    { label: "Recherche Emploi", href: NAV_ROUTES.search },
    { label: "Comparatifs", href: NAV_ROUTES.comparatifs },
    { label: "FAQ", href: NAV_ROUTES.faq },
    { label: "Tarifs", href: NAV_ROUTES.pricing },
  ],
  resources: [
    { label: "Blog", href: NAV_ROUTES.blog },
    { label: "Ressources", href: NAV_ROUTES.ressources },
    { label: "Alternance", href: NAV_ROUTES.alternance },
    { label: "Reconversion", href: NAV_ROUTES.reconversion },
    { label: "Jeune diplômé", href: NAV_ROUTES.jeuneDiplome },
    { label: "Sécurité", href: NAV_ROUTES.security },
  ],
  company: [
    { label: "À propos", href: NAV_ROUTES.about },
    { label: "Carrières", href: NAV_ROUTES.careers },
    { label: "Presse", href: NAV_ROUTES.press },
    { label: "Partenaires", href: NAV_ROUTES.partners },
    { label: "Contact", href: NAV_ROUTES.contact },
  ],
  legal: [
    { label: "Confidentialité", href: NAV_ROUTES.privacy },
    { label: "CGU", href: NAV_ROUTES.cgu },
    { label: "CGV", href: NAV_ROUTES.cgv },
    { label: "Cookies", href: NAV_ROUTES.cookies },
    { label: "Mentions légales", href: NAV_ROUTES.legalNotice },
    { label: "Suppression de compte", href: NAV_ROUTES.accountDeletion },
  ],
};
