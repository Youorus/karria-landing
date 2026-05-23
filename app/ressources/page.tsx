import { buildMetadata } from "@/lib/metadata";
import { ArrowRight, Library } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Ressources Carrière — Guides, modèles et outils gratuits | Karria",
  description:
    "Accédez aux meilleures ressources pour booster votre carrière : guides de recherche d'emploi, modèles de CV, conseils d'entretien et outils IA gratuits.",
  path: "/ressources",
  keywords: [
    "ressources recherche emploi",
    "guide CV gratuit",
    "modèles CV",
    "conseils entretien emploi",
    "outils candidature",
  ],
});

const resources = [
  { title: "Guide ultime du CV 2025", desc: "Tout ce que vous devez savoir pour créer un CV parfait en 2025.", href: "/blog", tag: "Guide" },
  { title: "Templates CV gratuits", desc: "Téléchargez des modèles de CV professionnels et modernes.", href: "/cv-ia", tag: "Template" },
  { title: "Checklist candidature complète", desc: "Ne ratez plus jamais un élément essentiel dans vos candidatures.", href: "/cv-ia", tag: "Checklist" },
  { title: "Guide de la lettre de motivation", desc: "Structure, ton et contenu pour une lettre qui convertit.", href: "/lettre-motivation-ia", tag: "Guide" },
  { title: "Comprendre les ATS en 2025", desc: "Comment fonctionnent les logiciels de tri automatique et comment les passer.", href: "/blog/ats-optimisation", tag: "Technique" },
  { title: "Guide reconversion professionnelle", desc: "Étapes, outils et stratégies pour réussir votre transition.", href: "/reconversion", tag: "Guide" },
];

export default function RessourcesPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Library className="w-4 h-4" />
            <span>Ressources</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            Tout ce qu&apos;il vous faut
            <br />
            <span className="text-gradient-blue">pour réussir votre carrière</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guides pratiques, modèles, checklists et outils IA gratuits pour
            transformer votre recherche d&apos;emploi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {resources.map((r, i) => (
            <Link
              key={i}
              href={r.href}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
            >
              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 inline-block">
                {r.tag}
              </span>
              <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {r.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
              <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Accéder <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Utiliser tous les outils Karria
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
