import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Blog Karria — Conseils carrière, IA et emploi",
  description:
    "Découvrez les meilleurs conseils de Karria sur la recherche d'emploi, l'optimisation de CV, la rédaction de lettres de motivation et l'utilisation de l'IA pour booster votre carrière.",
  path: "/blog",
  keywords: [
    "blog emploi",
    "conseils carrière",
    "astuces CV",
    "lettre motivation conseils",
    "recherche emploi tips",
    "IA carrière",
  ],
});

// Placeholder articles — replace with CMS/MDX in production
const articles = [
  {
    slug: "cv-ia-guide-complet",
    title: "Guide complet : comment l'IA révolutionne la création de CV",
    excerpt: "Découvrez comment les outils d'IA transforment la façon dont les candidats créent et optimisent leurs CV pour maximiser leurs chances.",
    date: "2025-01-15",
    readTime: "5 min",
    tag: "CV IA",
  },
  {
    slug: "matching-emploi-futur",
    title: "Le matching emploi de demain : quand l'IA comprend vraiment votre profil",
    excerpt: "Comment les algorithmes de matching de nouvelle génération vont transformer la façon dont on trouve un emploi.",
    date: "2025-01-10",
    readTime: "7 min",
    tag: "Matching",
  },
  {
    slug: "lettre-motivation-IA-conseils",
    title: "5 façons d'utiliser l'IA pour écrire une lettre de motivation percutante",
    excerpt: "Conseils pratiques pour tirer parti de l'intelligence artificielle dans la rédaction de vos lettres de motivation.",
    date: "2025-01-05",
    readTime: "4 min",
    tag: "Lettre de motivation",
  },
  {
    slug: "ats-optimisation",
    title: "ATS : comment s'assurer que votre CV passe les filtres automatiques",
    excerpt: "Comprendre le fonctionnement des logiciels ATS et adapter votre candidature pour maximiser vos chances d'être lu.",
    date: "2024-12-28",
    readTime: "6 min",
    tag: "ATS",
  },
  {
    slug: "reconversion-guide-ia",
    title: "Reconversion professionnelle : comment l'IA peut accélérer votre transition",
    excerpt: "L'intelligence artificielle comme outil puissant pour identifier vos compétences transférables et trouver votre voie.",
    date: "2024-12-20",
    readTime: "8 min",
    tag: "Reconversion",
  },
  {
    slug: "alternance-2025",
    title: "Alternance 2025 : les secteurs qui recrutent et comment se démarquer",
    excerpt: "Panorama des opportunités d'alternance et stratégies pour décrocher votre contrat dans un marché compétitif.",
    date: "2024-12-15",
    readTime: "5 min",
    tag: "Alternance",
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Conseils carrière
              <br />
              <span className="text-gradient-blue">& intelligence IA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ressources, guides et insights pour transformer votre recherche
              d&apos;emploi et propulser votre carrière.
            </p>
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {article.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime} de lecture</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/60">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Prêt à transformer votre recherche d&apos;emploi ?
            </p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              Essayer Karria gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
