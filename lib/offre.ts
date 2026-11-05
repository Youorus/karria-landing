/**
 * Une offre d'emploi lue sur l'API publique de Karria (mode invité,
 * `GET /offers/{id}` — ADR-0025 de karria_api_v2), et les quelques règles
 * d'affichage reprises de l'application pour que la page dise la même chose.
 */

export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "https://api.karria.fr/api/v1").replace(/\/$/, "");

export interface OffrePublique {
  id: string;
  titre: string;
  entreprise: string | null;
  logo: string | null;
  ville: string | null;
  contrat: string | null;
  teletravail: string | null;
  salaire: string | null;
  extrait: string | null;
  description: string | null;
  lienCandidature: string | null;
  publieeLe: string | null;
  active: boolean;
}

interface JobMatchBrut {
  job_offer: {
    id: string;
    title: string;
    excerpt: string | null;
    description: string | null;
    company: { name: string | null; logo_large: string | null; logo: string | null } | null;
    location_label: string | null;
    city: { name: string } | null;
    contract_type: { label: string } | null;
    remote: "sur_site" | "hybride" | "teletravail" | null;
    salary_raw: string | null;
    published_at: string | null;
    apply_url: string | null;
    origin_url: string | null;
    is_active: boolean;
  };
}

const TELETRAVAIL = { sur_site: "sur site", hybride: "hybride", teletravail: "télétravail" } as const;

/** « Mensuel de 2048.00 Euros à 2730.00 Euros » → « 2 048 - 2 730 € / mois » (règle de l'app). */
export function salaireLisible(brut: string | null): string | null {
  if (!brut) return null;
  const montants = brut.match(/\d+(?:\.\d+)?/g);
  if (!montants) return null;
  const formates = montants
    .slice(0, 2)
    .map((m) => parseFloat(m).toLocaleString("fr-FR", { maximumFractionDigits: 0 }));
  const fourchette = formates.length > 1 ? `${formates[0]} - ${formates[1]} €` : `${formates[0]} €`;
  const bas = brut.toLowerCase();
  const periode = bas.includes("mensuel") ? " / mois" : bas.includes("annuel") ? " / an" : bas.includes("horaire") ? " / h" : "";
  return `${fourchette}${periode}`;
}

/** Les premières lignes de l'annonce, sans Markdown, coupées à une phrase entière. */
export function extrait(texte: string | null, max = 280): string | null {
  if (!texte) return null;
  const propre = texte
    .replace(/\*\*|__|^#+\s*/gm, "")
    .replace(/^-{3,}\s*$/gm, "")
    .replace(/\s+/g, " ")
    .trim();
  if (propre.length <= max) return propre || null;
  const coupe = propre.slice(0, max);
  const fin = Math.max(coupe.lastIndexOf(". "), coupe.lastIndexOf("! "), coupe.lastIndexOf("? "));
  return (fin > max / 2 ? coupe.slice(0, fin + 1) : `${coupe.trimEnd()}…`).trim();
}

export function versOffre(brut: JobMatchBrut): OffrePublique {
  const o = brut.job_offer;
  return {
    id: o.id,
    titre: o.title,
    entreprise: o.company?.name ?? null,
    logo: o.company?.logo_large ?? o.company?.logo ?? null,
    ville: o.location_label ?? o.city?.name ?? null,
    contrat: o.contract_type?.label ?? null,
    teletravail: o.remote ? TELETRAVAIL[o.remote] : null,
    salaire: salaireLisible(o.salary_raw),
    extrait: extrait(o.excerpt ?? o.description),
    description: o.description,
    lienCandidature: o.apply_url ?? o.origin_url ?? null,
    publieeLe: o.published_at,
    active: o.is_active,
  };
}

/** L'offre, ou `null` si elle n'existe pas (404) ou si l'API ne répond pas. */
export async function lireOffre(id: string): Promise<OffrePublique | null> {
  if (!/^[A-Za-z0-9-]{1,64}$/.test(id)) return null;
  try {
    const reponse = await fetch(`${API_URL}/offers/${encodeURIComponent(id)}`, {
      headers: { Accept: "application/json" },
      // L'API compte les lectures anonymes par adresse : on garde la réponse cinq minutes.
      next: { revalidate: 300 },
    });
    if (!reponse.ok) return null;
    return versOffre((await reponse.json()) as JobMatchBrut);
  } catch {
    return null;
  }
}

/** Le lien du schéma de l'app, pour « Ouvrir dans Karria » quand le lien universel n'a pas pris. */
export function lienSchemaOffre(id: string): string {
  return `karria://offre/${encodeURIComponent(id)}`;
}
