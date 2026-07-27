import { buildMetadata } from "@/lib/metadata";
import { ArrowRight, Library, FileText, Search, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Ressources carrière — Guides et outils gratuits",
  description:
    "Accédez aux meilleures ressources pour booster votre carrière en 2026 : guides de recherche d'emploi, modèles de CV, conseils d'entretien, optimisation ATS et outils IA gratuits.",
  path: "/ressources",
  keywords: [
    "ressources recherche emploi",
    "guide CV gratuit",
    "modèles CV",
    "conseils entretien emploi",
    "outils candidature",
    "guide lettre de motivation",
    "optimisation ATS 2026",
  ],
});

const resources = [
  { title: "Créer un CV optimisé pour les ATS", desc: "Un CV professionnel, adapté à chaque offre et structuré pour passer les filtres de tri automatique.", href: "/cv-ia", tag: "Outil" },
  { title: "Écrire une lettre de motivation ciblée", desc: "Une lettre personnalisée et prête à envoyer, générée pour chaque candidature.", href: "/lettre-motivation-ia", tag: "Outil" },
  { title: "Trouver les offres qui vous correspondent", desc: "Le matching IA identifie les opportunités compatibles avec votre profil, sans perdre de temps.", href: "/matching-emploi-ia", tag: "Outil" },
  { title: "Organiser toute sa recherche d'emploi", desc: "Centralisez vos candidatures, vos alertes et votre suivi au même endroit.", href: "/recherche-emploi-ia", tag: "Outil" },
  { title: "Réussir sa reconversion professionnelle", desc: "Étapes et conseils pour valoriser vos compétences transférables.", href: "/reconversion", tag: "Guide" },
  { title: "Décrocher son alternance", desc: "Offres ciblées, CV adapté et préparation aux entretiens.", href: "/alternance", tag: "Guide" },
];

const categories = [
  {
    icon: FileText,
    title: "Rédiger un CV qui passe les filtres",
    body: "Un CV efficace en 2026 doit convaincre deux lecteurs : le logiciel ATS qui filtre les candidatures, puis le recruteur humain. Nos ressources vous expliquent comment structurer vos rubriques, choisir les bons mots-clés et adapter votre CV à chaque offre.",
    links: [
      { label: "Créer mon CV avec l'IA", href: "/cv-ia" },
      { label: "Comprendre les ATS", href: "/faq" },
    ],
  },
  {
    icon: Search,
    title: "Trouver les bonnes offres",
    body: "Postuler à tout va est rarement efficace. Apprenez à cibler les offres réellement compatibles avec votre profil, à exploiter le matching IA et à organiser le suivi de vos candidatures pour ne plus rien laisser passer.",
    links: [
      { label: "Le matching emploi par IA", href: "/matching-emploi-ia" },
      { label: "Optimiser sa recherche d'emploi", href: "/recherche-emploi-ia" },
    ],
  },
  {
    icon: Sparkles,
    title: "Convaincre en entretien et par écrit",
    body: "De la lettre de motivation aux questions pièges en entretien, ces ressources vous aident à raconter votre parcours de façon claire et percutante, et à transformer un entretien en proposition d'embauche.",
    links: [
      { label: "Générer une lettre de motivation", href: "/lettre-motivation-ia" },
      { label: "Réussir sa reconversion", href: "/reconversion" },
    ],
  },
];

const faqs = [
  {
    q: "Les ressources Karria sont-elles gratuites ?",
    a: "Oui. Toutes les pages et outils présentés dans cette section sont accessibles gratuitement, sans carte bancaire.",
  },
  {
    q: "À qui s'adressent ces ressources ?",
    a: "À tous les profils : étudiants et jeunes diplômés, candidats en alternance, personnes en reconversion ou cadres expérimentés. Chaque guide est pensé pour s'adapter à votre situation.",
  },
  {
    q: "À quelle fréquence sont-elles mises à jour ?",
    a: "Nos ressources sont régulièrement actualisées pour refléter les pratiques de recrutement en 2026, notamment l'évolution des logiciels ATS et l'usage de l'IA dans le recrutement.",
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

export default function RessourcesPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
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

        {/* Intro rédactionnelle */}
        <section className="mb-16 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            La recherche d&apos;emploi a profondément changé. En 2026, la
            majorité des candidatures passent d&apos;abord entre les mains
            d&apos;un logiciel avant d&apos;arriver à un recruteur, et les
            attentes en matière de personnalisation n&apos;ont jamais été aussi
            fortes. Pour vous donner toutes les chances, nous avons rassemblé
            ici nos meilleures ressources, organisées par étape clé de votre
            parcours.
          </p>
          <p>
            Que vous prépariez votre premier CV, que vous visiez une{" "}
            <Link href="/reconversion" className="text-primary hover:underline">
              reconversion
            </Link>
            , une{" "}
            <Link href="/alternance" className="text-primary hover:underline">
              alternance
            </Link>{" "}
            ou votre{" "}
            <Link href="/jeune-diplome" className="text-primary hover:underline">
              premier emploi
            </Link>
            , vous trouverez des conseils concrets et des outils pour passer à
            l&apos;action immédiatement.
          </p>
        </section>

        {/* Grille de ressources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
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

        {/* Catégories thématiques */}
        <section className="space-y-8 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
            Par où commencer ?
          </h2>
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-card border border-border p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <c.icon className="w-5 h-5 text-primary" />
                {c.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{c.body}</p>
              <div className="flex flex-wrap gap-3">
                {c.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                  >
                    {l.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
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
            Utiliser tous les outils Karria
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
