/**
 * KARRIA — la vérité sur l'app, en un seul endroit.
 *
 * Liens des stores, slogan, prix et limites : tout texte du site qui cite
 * l'un de ces éléments le lit ici. Pour changer le lien Google Play, il n'y a
 * que `STORE_LINKS.googlePlay` à modifier.
 */

/** Liens de téléchargement. Le seul endroit où ils sont écrits. */
export const STORE_LINKS = {
  appStore: "https://apps.apple.com/fr/app/id6776608930",
  // À remplacer par le lien définitif dès que la fiche Google Play est en ligne.
  googlePlay: "https://play.google.com/store/apps/details?id=com.karria.app",
} as const;

export const SLOGAN = "Trouve ton job, soigne ton CV";

/** Chiffres vérifiés (offres : 544 000 actives mesurées le 20/11/2026). */
export const FACTS = {
  activeOffers: 500_000,
  activeOffersLabel: "plus de 500 000",
  cvTemplates: 9,
  contracts: "CDI, CDD, alternance, stage, intérim",
} as const;

/** Tarification. Karria est gratuite ; une seule offre payante. */
export const PRICING = {
  planName: "Karria sans pub",
  monthly: 4.99,
  yearly: 49.9,
  monthlyLabel: "4,99 €",
  yearlyLabel: "49,90 €",
  /** Limites de la version gratuite. */
  freeLimits: {
    cvExportsWithoutMentionPerMonth: 3,
    atsOptimizationsPerMonth: 3,
    aiPortraitsPerMonth: 3,
    cvImportsPerMonth: 5,
    tailoredCvsPerMonth: 20,
    lettersPerMonth: 30,
    assistantMessagesPerDay: 40,
  },
} as const;

/**
 * L'entité légale qui édite Karria (entreprise individuelle).
 * Le seul endroit où ces coordonnées sont écrites : les Mentions légales,
 * la Confidentialité et les CGV les lisent ici. Le nom n'apparaît nulle part
 * ailleurs sur le site.
 */
export const EDITEUR = {
  raisonSociale: "Nkue Takoumba Marc Junior (EI)",
  formeJuridique: "entreprise individuelle (entrepreneur individuel)",
  siege: "23 avenue Léon Bollée, 75013 Paris, France",
  immatriculation: "R.C.S. Paris 130 777 196 — SIREN 130 777 196",
  tva: "TVA non applicable, article 293 B du Code général des impôts",
  directeurDePublication: "Marc Junior Nkue Takoumba",
  contact: "hello@karria.fr",
} as const;
