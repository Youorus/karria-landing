import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
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
