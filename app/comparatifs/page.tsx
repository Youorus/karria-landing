import { buildMetadata } from "@/lib/metadata";
import { ArrowRight, BarChart2, Check, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Comparatif des plateformes d'emploi et de CV IA",
  description:
    "Ce que Karria réunit au même endroit : fil d'offres personnalisé, CV adapté à chaque offre, score ATS, lettre de motivation et suivi des candidatures.",
  path: "/comparatifs",
  keywords: [
    "comparatif plateforme emploi",
    "Karria vs LinkedIn",
    "Karria vs Indeed",
    "application recherche emploi et CV",
    "comparaison outils recherche emploi",
    "générateur CV IA comparatif",
    "alternative LinkedIn 2026",
  ],
});

const comparisons = [
  { feature: "Recherche lancée à l'écrit ou à la voix", karria: true, others: false },
  { feature: "CV adaptatif par offre", karria: true, others: false },
  { feature: "Lettres de motivation IA", karria: true, others: false },
  { feature: "Optimisation ATS automatique", karria: true, others: false },
  { feature: "Application mobile native", karria: true, others: true },
  { feature: "Feed offres personnalisé", karria: true, others: true },
  { feature: "Suivi des candidatures", karria: true, others: true },
  { feature: "Score ATS du CV", karria: true, others: false },
  { feature: "Équipe humaine joignable dans l'app", karria: true, others: false },
  { feature: "Gratuit pour commencer", karria: true, others: true },
];

const versus = [
  {
    name: "Karria vs LinkedIn",
    intro:
      "LinkedIn est un excellent réseau professionnel, mais il a été pensé pour le réseautage, pas pour candidater efficacement.",
    points: [
      "Sur Karria, vous dites ce que vous cherchez et les offres les plus pertinentes arrivent en premier dans votre fil.",
      "LinkedIn vous laisse rédiger votre CV et vos messages seul. Karria prépare un CV adapté à chaque offre et la lettre de motivation qui va avec.",
      "Karria note votre CV comme le ferait un logiciel de recrutement (score ATS) et l'optimise en un geste.",
    ],
  },
  {
    name: "Karria vs Indeed & job boards",
    intro:
      "Les job boards classiques (Indeed, Welcome to the Jungle, HelloWork) reposent sur la recherche par mots-clés et le tri manuel.",
    points: [
      "Karria classe les offres par pertinence et vous alerte dès qu'une nouvelle offre correspond à une recherche enregistrée.",
      "Sur un job board, vous envoyez le même CV partout. Karria adapte votre CV et votre lettre à chaque annonce.",
      "Chaque candidature a son dossier : l'offre, votre CV, votre lettre, et où vous en êtes.",
    ],
  },
  {
    name: "Karria vs générateurs de CV",
    intro:
      "Les générateurs de CV en ligne produisent un beau document, mais s'arrêtent là.",
    points: [
      "Un générateur classique crée un CV statique. Karria adapte le CV offre par offre et le note pour sa compatibilité ATS.",
      "Au-delà du CV, Karria couvre le reste du parcours : offres, lettre de motivation, alertes et suivi.",
      "Karria est gratuite : au-delà de 3 exports par mois, le CV sort avec la mention Karria, sans jamais être bloqué.",
    ],
  },
];

const faqs = [
  {
    q: "Karria est-il vraiment gratuit ?",
    a: "Oui. Karria est gratuite, financée par des annonces discrètes, et la recherche d'offres est illimitée. Une seule offre payante, « Karria sans pub » (4,99 € par mois ou 49,90 € par an, sans engagement), retire les annonces et lève les limites mensuelles.",
  },
  {
    q: "En quoi le matching IA de Karria est-il différent ?",
    a: "Vous dites à Karria ce que vous cherchez, à l'écrit ou à la voix. Elle lance la recherche parmi plus de 500 000 offres actives en France et classe les plus pertinentes en premier.",
  },
  {
    q: "Karria remplace-t-il LinkedIn ou Indeed ?",
    a: "Karria est complémentaire : vous pouvez continuer à utiliser votre réseau, mais Karria automatise la partie la plus chronophage de la recherche d'emploi — trouver les bonnes offres et préparer des candidatures sur mesure.",
  },
  {
    q: "Mes documents sont-ils optimisés pour les ATS ?",
    a: "Oui. Karria note votre CV comme le ferait un logiciel de tri automatique (ATS), vous explique ce qui bloque et l'optimise pour vous.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ComparatifsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <BarChart2 className="w-4 h-4" />
            <span>Comparatifs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            Ce que Karria
            <br />
            <span className="text-gradient-blue">réunit au même endroit</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparez les fonctionnalités et découvrez ce qui distingue Karria
            des plateformes d&apos;emploi traditionnelles.
          </p>
        </div>

        {/* Intro rédactionnelle */}
        <section className="prose-none mb-16 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Choisir le bon outil pour sa recherche d&apos;emploi n&apos;est pas
            simple : entre les réseaux professionnels, les job boards et les
            générateurs de CV, chaque solution ne couvre qu&apos;une partie du
            parcours. Résultat, vous jonglez entre plusieurs outils, vous
            envoyez le même CV partout et vous perdez un temps précieux à trier
            des offres qui ne vous correspondent pas.
          </p>
          <p>
            Karria a été conçu pour réunir toutes ces étapes au même endroit
            grâce à l&apos;intelligence artificielle : du{" "}
            <Link href="/matching-emploi-ia" className="text-primary hover:underline">
              matching d&apos;offres
            </Link>{" "}
            au{" "}
            <Link href="/cv-ia" className="text-primary hover:underline">
              CV adapté à chaque annonce
            </Link>
            , en passant par la{" "}
            <Link href="/lettre-motivation-ia" className="text-primary hover:underline">
              lettre de motivation
            </Link>{" "}
            et le suivi de vos candidatures. Voici comment Karria se compare aux
            solutions que vous connaissez déjà.
          </p>
        </section>

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

        {/* Comparaisons détaillées */}
        <section className="space-y-10 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
            Karria face aux autres solutions
          </h2>
          {versus.map((v) => (
            <div
              key={v.name}
              className="rounded-2xl bg-card border border-border p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                {v.name}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{v.intro}</p>
              <ul className="space-y-3">
                {v.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-card border border-border p-6 [&_summary]:cursor-pointer"
              >
                <summary className="font-semibold text-foreground list-none flex items-center justify-between gap-4">
                  {f.q}
                  <X className="w-5 h-5 text-primary shrink-0 rotate-45 transition-transform group-open:rotate-0" />
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link href={NAV_ROUTES.download} className="btn-primary inline-flex items-center gap-2">
            Essayer Karria gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
