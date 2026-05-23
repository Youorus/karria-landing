import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, Brain, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Matching Emploi IA — Trouvez les offres qui vous correspondent vraiment | Karria",
  description:
    "Karria analyse votre profil en profondeur et vous recommande les offres d'emploi les plus pertinentes grâce à l'intelligence artificielle. Moins de bruit, plus d'opportunités réelles.",
  path: "/matching-emploi-ia",
  keywords: [
    "matching emploi IA",
    "offres emploi personnalisées",
    "recommandation emploi intelligence artificielle",
    "trouver emploi IA",
    "matching candidat offre",
    "plateforme emploi intelligente",
  ],
});

const features = [
  "Analyse complète de votre profil et compétences",
  "Score de compatibilité pour chaque offre",
  "Mise à jour en temps réel du feed personnalisé",
  "Alertes intelligentes sur les nouvelles opportunités",
  "Filtres avancés par secteur, lieu, salaire",
  "Apprentissage continu de vos préférences",
];

const faqs = [
  {
    q: "Comment fonctionne le matching IA de Karria ?",
    a: "Karria analyse votre profil complet (compétences, expériences, préférences, objectifs) et le compare aux milliers d'offres disponibles pour vous présenter celles avec le meilleur niveau de compatibilité.",
  },
  {
    q: "Le matching s'améliore-t-il avec le temps ?",
    a: "Oui. Karria apprend de vos interactions : les offres que vous consultez, celles que vous ignorez, vos candidatures. Plus vous utilisez la plateforme, plus les recommandations deviennent précises.",
  },
  {
    q: "Quels types d'offres sont disponibles dans Karria ?",
    a: "Karria agrège des offres de multiples sources : CDI, CDD, alternance, stages, freelance, dans tous les secteurs. Le feed est mis à jour en permanence.",
  },
  {
    q: "Puis-je recevoir des alertes pour les nouvelles offres ?",
    a: "Absolument. Configurez des alertes intelligentes et recevez une notification dès qu'une offre correspondant à votre profil est publiée, directement sur l'application mobile.",
  },
];

export default function MatchingEmploiIaPage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>Matching IA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Les offres qui vous
              <br />
              <span className="text-gradient-blue">correspondent vraiment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Arrêtez de chercher. Laissez l&apos;IA travailler pour vous.
              Karria analyse votre profil en profondeur et trouve les
              opportunités qui ont réellement du sens pour votre carrière.
            </p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Découvrir mes opportunités
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Un matching qui va au-delà des mots-clés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Questions fréquentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <p className="text-muted-foreground mb-6">Explorez aussi</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/cv-ia", label: "CV IA" },
                { href: "/lettre-motivation-ia", label: "Lettre de motivation IA" },
                { href: "/recherche-emploi-ia", label: "Recherche d'emploi IA" },
                { href: "/alternance", label: "Alternance" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="px-5 py-2 rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-foreground/20 text-sm transition-all duration-200">
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
