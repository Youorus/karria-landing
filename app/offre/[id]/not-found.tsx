import Link from "next/link";
import { StoreBadges } from "@/components/ui/StoreBadges";

/** L'offre n'existe plus (ou jamais) : on le dit, et Karria reste à portée. */
export default function OffreIntrouvable() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-sm text-muted-foreground mb-6">Offre vue sur Karria</p>
        <h1 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight leading-tight mb-4">
          Cette offre n&apos;est plus disponible
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground mb-10">
          Elle a été pourvue, retirée, ou le lien est incomplet. Dans Karria, d&apos;autres offres qui te
          ressemblent arrivent chaque jour — et ton CV s&apos;adapte à chacune.
        </p>
        <StoreBadges utm="utm_source=offre&utm_medium=web&utm_campaign=introuvable" className="mb-10" />
        <Link href="/" className="text-primary hover:underline">
          Découvrir Karria
        </Link>
      </div>
    </div>
  );
}
