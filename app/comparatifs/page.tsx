import { buildMetadata } from "@/lib/metadata";
import { ArrowRight, BarChart2, Check, X, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Comparatif des plateformes d'emploi et de CV IA",
  description:
    "Comparez Karria avec LinkedIn, Indeed et les générateurs de CV classiques. Matching IA, CV adaptatif, optimisation ATS : découvrez pourquoi Karria est la solution IA la plus complète pour votre carrière en 2026.",
  path: "/comparatifs",
  keywords: [
    "comparatif plateforme emploi",
    "Karria vs LinkedIn",
    "Karria vs Indeed",
    "meilleure plateforme CV IA",
    "comparaison outils recherche emploi",
    "générateur CV IA comparatif",
    "alternative LinkedIn 2026",
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

const versus = [
  {
    name: "Karria vs LinkedIn",
    intro:
      "LinkedIn est un excellent réseau professionnel, mais il a été pensé pour le réseautage, pas pour candidater efficacement.",
    points: [
      "Là où LinkedIn affiche des milliers d'offres génériques, Karria analyse votre profil et ne vous propose que les opportunités réellement compatibles, avec un score de compatibilité chiffré.",
      "LinkedIn vous laisse rédiger votre CV et vos messages seul. Karria génère un CV adapté à chaque offre et une lettre de motivation ciblée en quelques secondes.",
      "Karria optimise automatiquement vos documents pour les logiciels ATS utilisés par les recruteurs, un point que LinkedIn ne traite pas.",
    ],
  },
  {
    name: "Karria vs Indeed & job boards",
    intro:
      "Les job boards classiques (Indeed, Welcome to the Jungle, HelloWork) reposent sur la recherche par mots-clés et le tri manuel.",
    points: [
      "Vous passez des heures à filtrer des offres. Karria fait le tri à votre place grâce au matching IA et vous notifie uniquement des offres pertinentes.",
      "Sur un job board, vous envoyez le même CV partout. Karria adapte votre candidature à chaque annonce pour maximiser vos chances de passer les filtres.",
      "Karria centralise le suivi de toutes vos candidatures au même endroit, sans tableur ni copier-coller.",
    ],
  },
  {
    name: "Karria vs générateurs de CV",
    intro:
      "Les générateurs de CV en ligne produisent un beau document, mais s'arrêtent là.",
    points: [
      "Un générateur classique crée un CV statique. Karria crée un CV vivant, optimisé offre par offre et noté pour sa compatibilité ATS.",
      "Au-delà du CV, Karria couvre tout le parcours : matching d'offres, lettre de motivation, suivi et conseils carrière.",
      "La plupart des générateurs facturent le téléchargement. Karria est gratuit pour commencer.",
    ],
  },
];

const faqs = [
  {
    q: "Karria est-il vraiment gratuit ?",
    a: "Oui, vous pouvez créer votre profil, recevoir des offres compatibles et générer vos premiers documents gratuitement. Des fonctionnalités avancées sont disponibles via des formules payantes, mais aucune carte bancaire n'est requise pour commencer.",
  },
  {
    q: "En quoi le matching IA de Karria est-il différent ?",
    a: "Plutôt que de filtrer des offres par mots-clés, Karria analyse en profondeur vos compétences, votre expérience et vos objectifs pour calculer un score de compatibilité avec chaque offre, et ne vous présente que les opportunités les plus pertinentes.",
  },
  {
    q: "Karria remplace-t-il LinkedIn ou Indeed ?",
    a: "Karria est complémentaire : vous pouvez continuer à utiliser votre réseau, mais Karria automatise la partie la plus chronophage de la recherche d'emploi — trouver les bonnes offres et préparer des candidatures sur mesure.",
  },
  {
    q: "Mes documents sont-ils optimisés pour les ATS ?",
    a: "Oui. Karria structure et optimise automatiquement vos CV et lettres pour les logiciels de tri automatique (ATS) utilisés par la majorité des recruteurs, afin d'augmenter vos chances d'arriver entre les mains d'un humain.",
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
    <main className="min-h-screen bg-background pt-32 pb-24">
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
            Pourquoi Karria est
            <br />
            <span className="text-gradient-blue">la solution la plus complète</span>
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
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Essayer Karria gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
