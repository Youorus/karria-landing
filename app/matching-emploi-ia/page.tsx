import { buildMetadata } from "@/lib/metadata";
import { FaqSection } from "@/components/seo/FaqSection";
import { ArrowRight, Brain, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Matching emploi IA : des offres pour ton profil",
  description:
    "Dis à Karria ce que tu cherches : elle classe les plus pertinentes parmi plus de 500 000 offres en France et t'alerte dès qu'une nouvelle correspond.",
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
  "CDI, CDD, alternance, stage et intérim",
  "Les offres les plus pertinentes en premier",
  "Plus de 500 000 offres actives, mises à jour chaque jour",
  "Alertes sur tes recherches enregistrées",
  "Filtres et tri : pertinence, date, proximité",
  "Une recherche lancée à l'écrit ou à la voix",
];

const faqs = [
  {
    q: "Comment fonctionne le matching IA de Karria ?",
    a: "Tu dis à Karria ce que tu cherches (métier, lieu, contrat), à l'écrit ou à la voix. Elle lance la recherche parmi plus de 500 000 offres actives en France et classe les plus pertinentes en premier dans ton fil.",
  },
  {
    q: "Comment affiner les offres proposées ?",
    a: "En précisant ta recherche à Karria, ou avec les filtres et le tri du fil. Tes recherches sont enregistrées : tu les retrouves et les modifies quand tu veux.",
  },
  {
    q: "Quels types d'offres sont disponibles dans Karria ?",
    a: "Plus de 500 000 offres actives en France : CDI, CDD, alternance, stage et intérim. Le fil est mis à jour chaque jour.",
  },
  {
    q: "Puis-je recevoir des alertes pour les nouvelles offres ?",
    a: "Oui. Dès qu'une nouvelle offre correspond à une recherche enregistrée, tu reçois une notification. Chaque alerte s'active ou se désactive séparément, dans les réglages de l'app.",
  },
];

export default function MatchingEmploiIaPage() {
  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>Matching IA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Les offres qui te
              <br />
              <span className="text-gradient-blue">correspondent vraiment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Arrête de chercher. Laisse l&apos;IA travailler pour toi.
              Dis à Karria ce que tu cherches : elle classe pour toi les
              offres les plus pertinentes.
            </p>
            <Link
              href={NAV_ROUTES.download}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Découvrir mes opportunités
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Intro rédactionnelle */}
          <section className="mb-20 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">
              Qu&apos;est-ce que le matching emploi par IA ?
            </h2>
            <p>
              La recherche d&apos;emploi traditionnelle repose sur des mots-clés :
              tu tapes un intitulé, tu filtres par ville, puis tu parcours
              des dizaines de pages d&apos;offres dont la plupart ne te
              correspondent pas. Le matching par IA inverse cette logique. Tu décris ce que tu cherches, et Karria classe les offres
              par pertinence au lieu de te laisser tout trier.
            </p>
            <p>
              Résultat : les offres les plus pertinentes arrivent en premier
              dans ton fil, et Karria t&apos;alerte dès qu&apos;une nouvelle
              offre correspond à une recherche enregistrée. Une fois
              l&apos;offre repérée, tu candidates avec un{" "}
              <Link href="/cv-ia" className="text-primary hover:underline">
                CV adapté
              </Link>{" "}
              et une{" "}
              <Link href="/lettre-motivation-ia" className="text-primary hover:underline">
                lettre ciblée
              </Link>
              , préparés par Karria.
            </p>
          </section>

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

          <FaqSection faqs={faqs} />

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
      </div>
    </>
  );
}
