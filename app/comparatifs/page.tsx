import { buildMetadata } from "@/lib/metadata";
import { ArrowRight, BarChart2 } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Comparatif des plateformes d'emploi et de CV IA",
  description:
    "Comparez Karria avec les autres outils de recherche d'emploi et générateurs de CV. Découvrez pourquoi Karria est la solution IA la plus complète pour votre carrière.",
  path: "/comparatifs",
  keywords: [
    "comparatif plateforme emploi",
    "Karria vs LinkedIn",
    "meilleure plateforme CV IA",
    "comparaison outils recherche emploi",
  ],
});

const comparisons = [
  { feature: "Matching IA personnalisé", karria: true, others: false },
  { feature: "CV adaptatif par offre", karria: true, others: false },
  { feature: "Lettres de motivation IA", karria: true, others: false },
  { feature: "Optimisation ATS automatique", karria: true, others: false },
  { feature: "Application mobile native", karria: true, others: true },
  { feature: "Feed offres personnalisé", karria: true, others: true },
  { feature: "Suivi des candidatures", karria: true, others: true },
  { feature: "Score de compatibilité", karria: true, others: false },
  { feature: "Conseils carrière intelligents", karria: true, others: false },
  { feature: "Gratuit pour commencer", karria: true, others: false },
];

export default function ComparatifsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <BarChart2 className="w-4 h-4" />
            <span>Comparatifs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            Pourquoi Karria est
            <br />
            <span className="text-gradient-blue">la solution la plus complète</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparez les fonctionnalités et découvrez ce qui distingue Karria
            des plateformes d&apos;emploi traditionnelles.
          </p>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl bg-card border border-border overflow-hidden mb-16">
          <div className="grid grid-cols-3 p-4 bg-muted/50 border-b border-border">
            <div className="font-semibold text-muted-foreground text-sm">Fonctionnalité</div>
            <div className="text-center font-semibold text-primary text-sm">Karria</div>
            <div className="text-center font-semibold text-muted-foreground/60 text-sm">Autres plateformes</div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 p-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
            >
              <div className="text-sm text-foreground/80 flex items-center">{row.feature}</div>
              <div className="flex items-center justify-center">
                {row.karria ? (
                  <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs">✓</span>
                ) : (
                  <span className="w-6 h-6 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive text-xs">✗</span>
                )}
              </div>
              <div className="flex items-center justify-center">
                {row.others ? (
                  <span className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground text-xs">✓</span>
                ) : (
                  <span className="w-6 h-6 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive text-xs">✗</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Essayer Karria gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
