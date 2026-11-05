import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { APP_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

/**
 * `karria.fr/app` : le lien intelligent. Un iPhone va droit à l'App Store,
 * un Android à Google Play (dès qu'il y est) ; tout le reste voit les deux
 * badges. Les `utm_*` suivent jusqu'au magasin. C'est le lien qu'on imprime
 * au pied des CV et des lettres, et qu'on glisse dans chaque partage.
 */

export const metadata: Metadata = buildMetadata({
  title: "Télécharger Karria",
  description:
    "Karria, l'application gratuite qui trouve les offres faites pour toi et adapte ton CV à chacune. Disponible sur iPhone, bientôt sur Android.",
  path: "/app",
});

type Recherche = Record<string, string | string[] | undefined>;

function utmDe(recherche: Recherche): string {
  const p = new URLSearchParams();
  for (const [cle, valeur] of Object.entries(recherche)) {
    if (!cle.startsWith("utm_")) continue;
    const v = Array.isArray(valeur) ? valeur[0] : valeur;
    if (v) p.set(cle, v);
  }
  return p.toString();
}

export default async function PageApp({ searchParams }: { searchParams: Promise<Recherche> }) {
  const recherche = await searchParams;
  const utm = utmDe(recherche);
  const suffixe = utm ? `?${utm}` : "";
  const ua = ((await headers()).get("user-agent") ?? "").toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) redirect(`${APP_LINKS.appStore}${suffixe}`);
  if (/android/.test(ua) && APP_LINKS.googlePlayAvailable && APP_LINKS.googlePlay !== "#") {
    redirect(`${APP_LINKS.googlePlay}${suffixe}`);
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight leading-tight mb-4">
          Karria, sur ton téléphone
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground mb-10">
          Les offres faites pour toi, un CV adapté à chacune, des lettres prêtes à envoyer. Gratuit,
          sur iPhone — bientôt sur Android.
        </p>
        <StoreBadges utm={utm || undefined} />
      </div>
    </div>
  );
}
