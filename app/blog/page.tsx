import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, BookOpen, FileText, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Blog Karria — Conseils carrière, IA et emploi",
  description:
      "Retrouvez bientôt les guides Karria sur la recherche d’emploi, les CV, les lettres de motivation et l’IA appliquée à la carrière.",
  path: "/blog",
  keywords: [
    "blog emploi",
    "conseils carrière",
    "CV IA",
    "lettre motivation IA",
    "recherche emploi",
    "IA carrière",
  ],
});

const UPCOMING_TOPICS = [
  {
    icon: FileText,
    title: "Créer un CV plus clair",
    description:
        "Des conseils simples pour mieux présenter votre parcours et donner envie aux recruteurs de vous lire.",
    tag: "CV",
  },
  {
    icon: Sparkles,
    title: "Utiliser l’IA sans perdre votre personnalité",
    description:
        "Comment gagner du temps avec l’IA tout en gardant une candidature sincère, humaine et crédible.",
    tag: "IA carrière",
  },
  {
    icon: BookOpen,
    title: "Mieux organiser sa recherche d’emploi",
    description:
        "Des méthodes pour éviter de se perdre entre les offres, les candidatures, les relances et les réponses.",
    tag: "Recherche",
  },
];

export default function BlogPage() {
  return (
      <>
        <JsonLd />

        <main className="min-h-screen bg-background pb-24 pt-32">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mb-20 text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <BookOpen className="h-4 w-4" />
                <span>Blog</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Des conseils pour mieux avancer
                <br />
                <span className="text-gradient-blue">dans votre carrière.</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Le blog Karria arrive bientôt avec des guides simples, humains et
                utiles pour mieux chercher, mieux candidater et gagner du temps.
              </p>
            </div>

            <div className="mb-16 rounded-[2rem] border border-border bg-card p-8 text-center md:p-12">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                En préparation
              </p>

              <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
                Les premiers articles arrivent bientôt.
              </h2>

              <p className="mx-auto max-w-2xl text-muted-foreground">
                Cette page accueillera progressivement des ressources sur les CV,
                les lettres de motivation, le matching emploi, l’IA carrière et
                l’organisation d’une recherche d’emploi efficace.
              </p>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {UPCOMING_TOPICS.map((topic) => (
                  <article
                      key={topic.title}
                      className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <topic.icon className="h-5 w-5" />
                    </div>

                    <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {topic.tag}
                </span>

                    <h3 className="mb-3 text-lg font-bold text-foreground">
                      {topic.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {topic.description}
                    </p>
                  </article>
              ))}
            </div>

            <div className="text-center">
              <p className="mb-6 text-muted-foreground">
                En attendant, découvrez comment Karria peut simplifier votre
                recherche d’emploi.
              </p>

              <Link href="/" className="btn-primary inline-flex items-center gap-2">
                Découvrir Karria
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </main>
      </>
  );
}