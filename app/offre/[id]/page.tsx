import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { OuvrirDansKarria } from "@/components/ui/OuvrirDansKarria";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { lienSchemaOffre, lireOffre } from "@/lib/offre";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

/**
 * La page publique d'une offre : ce qu'une personne voit quand on lui
 * partage un lien `karria.fr/offre/<id>` et qu'elle n'a pas l'app.
 * L'offre d'abord, lisible en entier ; puis Karria, qui l'a trouvée.
 */

type Props = { params: Promise<{ id: string }> };

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const offre = await lireOffre(id);
  if (offre === null) {
    return { title: { absolute: `${SITE_NAME} — Offre introuvable` }, robots: { index: false, follow: true } };
  }
  const titre = offre.entreprise ? `${offre.titre} chez ${offre.entreprise}` : offre.titre;
  const details = [offre.ville, offre.contrat, offre.salaire].filter(Boolean).join(" · ");
  const description = [details, offre.extrait].filter(Boolean).join(" — ") || `Une offre vue sur ${SITE_NAME}.`;
  const url = `${SITE_URL}/offre/${encodeURIComponent(offre.id)}`;
  return {
    title: { absolute: `${titre} | ${SITE_NAME}` },
    description,
    alternates: { canonical: url },
    robots: offre.active ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title: titre,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "article",
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${titre} — vue sur ${SITE_NAME}` }],
    },
    twitter: { card: "summary_large_image", title: titre, description, images: [`${SITE_URL}/opengraph-image`] },
  };
}

export default async function PageOffre({ params }: Props) {
  const { id } = await params;
  const offre = await lireOffre(id);
  if (offre === null) notFound();

  const repli = `/app?utm_source=offre&utm_medium=web&utm_campaign=partage&offre=${encodeURIComponent(offre.id)}`;
  const details = [offre.ville, offre.contrat, offre.teletravail, offre.salaire].filter(
    (d): d is string => typeof d === "string" && d !== "",
  );
  const publiee = offre.publieeLe
    ? new Date(offre.publieeLe).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <article className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-sm text-muted-foreground mb-6">
          Offre vue sur {SITE_NAME}
          {publiee ? ` · publiée le ${publiee}` : ""}
          {offre.active ? "" : " · cette offre n'est plus active"}
        </p>

        <header className="flex items-start gap-4 mb-8">
          {offre.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={offre.logo}
              alt=""
              width={56}
              height={56}
              className="w-14 h-14 rounded-xl border border-border bg-background object-contain flex-shrink-0"
            />
          ) : null}
          <div>
            <h1 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight leading-tight">
              {offre.titre}
            </h1>
            {offre.entreprise ? (
              <p className="text-lg text-muted-foreground mt-1">{offre.entreprise}</p>
            ) : null}
          </div>
        </header>

        {details.length > 0 ? (
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-foreground mb-8">
            {details.map((d) => (
              <li key={d} className="text-base">
                {d}
              </li>
            ))}
          </ul>
        ) : null}

        {offre.extrait ? (
          <p className="text-lg leading-relaxed text-muted-foreground mb-10">{offre.extrait}</p>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <OuvrirDansKarria
            schema={lienSchemaOffre(offre.id)}
            repli={repli}
            className="btn-primary justify-center h-14 px-8 text-base shadow-xl shadow-primary/20"
          />
          {offre.lienCandidature ? (
            <Link
              href={offre.lienCandidature}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-secondary justify-center h-14 px-8 text-base"
            >
              Postuler sur le site de l&apos;employeur
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground mb-16">
          Dans Karria, cette offre est analysée pour toi : ce qui compte pour le recruteur, ce que ton CV
          couvre déjà, et un CV adapté en quelques secondes.
        </p>

        <section className="border-t border-border pt-10">
          <h2 className="font-display font-semibold text-foreground text-xl mb-2">
            Pas encore Karria ?
          </h2>
          <p className="text-muted-foreground mb-6">
            L&apos;application gratuite qui trouve les offres faites pour toi et adapte ton CV à chacune.
          </p>
          <StoreBadges utm="utm_source=offre&utm_medium=web&utm_campaign=partage" />
        </section>
      </div>
    </article>
  );
}
