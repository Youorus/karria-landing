"use client";

import { useCallback } from "react";

/**
 * « Ouvrir dans Karria ». Si la page est arrivée par un lien universel, l'app
 * s'est déjà ouverte et on n'est pas ici. Sinon (Safari, aperçu d'un
 * message), on tente le schéma `karria://` ; si rien ne prend la main en
 * une seconde et demie — l'app n'est pas installée —, on va au lien
 * intelligent `/app`, qui mène au bon magasin.
 */
export function OuvrirDansKarria({ schema, repli, className }: { schema: string; repli: string; className?: string }) {
  const ouvrir = useCallback(() => {
    const depart = Date.now();
    const minuterie = window.setTimeout(() => {
      // L'app a pris la main : l'onglet est passé en arrière-plan, le temps a « sauté ».
      if (document.visibilityState === "hidden" || Date.now() - depart > 2500) return;
      window.location.href = repli;
    }, 1500);
    window.addEventListener("pagehide", () => window.clearTimeout(minuterie), { once: true });
    window.location.href = schema;
  }, [schema, repli]);

  return (
    <button type="button" onClick={ouvrir} className={className}>
      Ouvrir dans Karria
    </button>
  );
}
