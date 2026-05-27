import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, FileText, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "CV IA professionnel et optimisé en quelques secondes",
  description:
    "Générez un CV professionnel et optimisé grâce à l'intelligence artificielle. Karria adapte votre CV à chaque offre d'emploi pour maximiser vos chances d'être sélectionné.",
  path: "/cv-ia",
  keywords: [
    "CV IA",
    "créer CV intelligence artificielle",
    "générateur CV automatique",
    "CV professionnel IA",
    "optimisation CV",
    "CV ATS",
    "CV adaptatif",
  ],
});

const features = [
  "CV adapté automatiquement à chaque offre",
  "Optimisation ATS pour passer les filtres automatiques",
  "Dizaines de templates professionnels",
  "Export PDF prêt à envoyer",
  "Suggestions de compétences intelligentes",
  "Mise en page moderne et lisible",
];

const faqs = [
  {
    q: "Comment Karria génère-t-il mon CV avec l'IA ?",
    a: "Karria analyse votre parcours, vos compétences et l'offre ciblée pour produire automatiquement un CV structuré, clair et optimisé pour les recruteurs et les logiciels ATS.",
  },
  {
    q: "Est-ce que le CV est optimisé pour les ATS ?",
    a: "Oui. Tous les CV générés par Karria sont conçus pour être lus et parsés correctement par les logiciels de recrutement (ATS), avec les bons mots-clés et une structure adaptée.",
  },
  {
    q: "Puis-je personnaliser mon CV après génération ?",
    a: "Absolument. Karria vous donne un point de départ optimal que vous pouvez modifier, enrichir et exporter dans le format de votre choix.",
  },
  {
    q: "Combien de CV puis-je créer avec Karria ?",
    a: "Avec le plan Free vous pouvez créer un CV de base. Les plans Premium et Pro offrent un nombre illimité de CV adaptés par offre.",
  },
];

export default function CvIaPage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>CV IA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Votre CV professionnel,
              <br />
              <span className="text-gradient-blue">généré par l&apos;IA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Karria analyse votre profil et chaque offre ciblée pour créer
              automatiquement un CV optimisé, moderne et prêt à envoyer en
              quelques secondes.
            </p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Créer mon CV gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Features list */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Tout ce dont vous avez besoin pour un CV parfait
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Questions fréquentes sur la génération de CV par IA
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="text-center">
            <p className="text-muted-foreground mb-6">Explorez aussi</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/lettre-motivation-ia", label: "Lettre de motivation IA" },
                { href: "/matching-emploi-ia", label: "Matching emploi IA" },
                { href: "/recherche-emploi-ia", label: "Recherche d'emploi IA" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-foreground/20 text-sm transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
