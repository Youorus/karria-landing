import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/seo/FaqSection";
import { ArrowRight, Users, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Recrutement IA — Matching candidats intelligent",
  description:
    "Karria redéfinit la relation entre candidats et recruteurs grâce à l'intelligence artificielle. Des profils qualifiés, des CV optimisés et un matching précis pour tous.",
  path: "/recrutement-ia",
  keywords: [
    "recrutement IA",
    "recrutement intelligence artificielle",
    "matching candidat recruteur",
    "profil candidat optimisé",
    "recrutement automatisé",
    "plateforme recrutement IA",
  ],
});

const faqs = [
  {
    q: "Comment l'IA améliore-t-elle le recrutement ?",
    a: "L'IA permet de qualifier les candidatures sur la base des compétences réelles plutôt que de mots-clés, de réduire le temps de présélection et d'offrir une expérience candidat fluide. Côté Karria, les candidats arrivent avec des profils enrichis et des documents déjà optimisés.",
  },
  {
    q: "Le matching IA remplace-t-il le jugement humain ?",
    a: "Non. Karria assiste la décision en mettant en avant les profils les plus pertinents et en objectivant la compatibilité candidat-poste, mais la décision finale reste entre les mains du recruteur.",
  },
  {
    q: "Comment Karria améliore l'expérience candidat ?",
    a: "En aidant les candidats à présenter leur meilleur profil (CV et lettres optimisés, matching transparent), Karria valorise votre marque employeur et réduit les frictions tout au long du processus.",
  },
  {
    q: "Karria s'adresse-t-il aussi aux candidats ?",
    a: "Oui, Karria est d'abord pensé pour les candidats. Cette page présente la vision côté recrutement, mais l'essentiel de la plateforme accompagne les chercheurs d'emploi dans toutes leurs démarches.",
  },
];

export default function RecrutementIaPage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Recrutement IA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Le recrutement
              <br />
              <span className="text-gradient-blue">réinventé par l&apos;IA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Karria connecte les meilleurs candidats aux meilleures
              opportunités grâce à un matching intelligent, des profils
              enrichis et des candidatures ultra-optimisées.
            </p>
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Découvrir Karria
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Intro rédactionnelle */}
          <section className="mb-20 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">
              Le recrutement à l&apos;ère de l&apos;intelligence artificielle
            </h2>
            <p>
              Le recrutement traditionnel souffre de deux maux : un temps de
              traitement long et un tri trop souvent basé sur des mots-clés qui
              écarte de bons profils. En automatisant la mise en relation entre
              compétences réelles et besoins du poste, l&apos;IA permet de gagner
              du temps tout en améliorant la qualité des candidatures retenues.
            </p>
            <p>
              Karria aborde le recrutement par l&apos;expérience candidat :
              lorsque les chercheurs d&apos;emploi disposent d&apos;outils pour
              présenter leur meilleur profil — un{" "}
              <Link href="/cv-ia" className="text-primary hover:underline">
                CV optimisé
              </Link>{" "}
              et un{" "}
              <Link href="/matching-emploi-ia" className="text-primary hover:underline">
                matching pertinent
              </Link>{" "}
              — les recruteurs reçoivent des candidatures mieux ciblées et plus
              faciles à évaluer. Tout le monde y gagne.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Une nouvelle ère du recrutement</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Candidats avec CV et lettres optimisés par IA",
                "Matching précis basé sur les compétences réelles",
                "Réduction du temps de recrutement",
                "Profils enrichis et vérifiés",
                "Score de compatibilité candidat-poste",
                "Expérience candidat premium = meilleure réputation employeur",
              ].map((f, i) => (
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
                { href: "/matching-emploi-ia", label: "Matching emploi IA" },
                { href: "/cv-ia", label: "CV IA" },
                { href: "/recherche-emploi-ia", label: "Recherche d'emploi IA" },
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
