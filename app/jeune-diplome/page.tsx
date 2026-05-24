import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, Star, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Emploi Jeune Diplômé — Lancez votre carrière avec l'IA | Karria",
  description:
    "Jeune diplômé à la recherche de votre premier emploi ? Karria vous accompagne avec l'IA pour construire un profil attractif, postuler aux bonnes offres et décrocher vos premiers entretiens.",
  path: "/jeune-diplome",
  keywords: [
    "emploi jeune diplômé",
    "premier emploi IA",
    "recherche emploi sortie études",
    "CV jeune diplômé",
    "offres emploi junior",
    "trouver travail après diplôme",
  ],
});

export default function JeuneDiplomePage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Jeune diplômé</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Votre premier emploi,
              <br />
              <span className="text-gradient-blue">trouvé par Karria</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Votre diplôme en poche, Karria vous aide à valoriser vos
              compétences, construire un profil attractif et trouver les offres
              les plus adaptées à votre profil de jeune diplômé.
            </p>
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Lancer ma carrière
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Karria, le meilleur allié des jeunes diplômés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Mise en valeur de vos projets académiques et stages",
                "CV professionnel même sans expérience extensive",
                "Offres juniors et premiers emplois filtrées pour vous",
                "Lettres percutantes malgré un profil en construction",
                "Score ATS pour maximiser les réponses des recruteurs",
                "Conseils personnalisés pour chaque étape de votre recherche",
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
                { href: "/alternance", label: "Alternance" },
                { href: "/cv-ia", label: "CV IA" },
                { href: "/lettre-motivation-ia", label: "Lettre de motivation IA" },
                { href: "/matching-emploi-ia", label: "Matching emploi IA" },
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
