import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, RefreshCw, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Reconversion Professionnelle — L'IA pour changer de carrière | Karria",
  description:
    "Vous envisagez une reconversion professionnelle ? Karria vous accompagne avec l'IA pour identifier les opportunités qui correspondent à vos nouvelles ambitions et transférer vos compétences.",
  path: "/reconversion",
  keywords: [
    "reconversion professionnelle IA",
    "changer de carrière",
    "reconversion emploi",
    "nouveau métier IA",
    "bilan compétences IA",
    "transition professionnelle",
  ],
});

export default function ReconversionPage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <RefreshCw className="w-4 h-4" />
              <span>Reconversion</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Votre reconversion,
              <br />
              <span className="text-gradient-blue">accompagnée par l&apos;IA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Changer de voie est une décision courageuse. Karria vous aide à
              valoriser vos compétences transférables, identifier les secteurs
              porteurs et construire un nouveau chapitre professionnel.
            </p>
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Commencer ma reconversion
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Comment Karria accompagne votre reconversion</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Analyse de vos compétences transférables",
                "Identification des secteurs adaptés à votre profil",
                "CV repositionné pour votre nouveau métier",
                "Lettres de motivation axées sur votre valeur ajoutée",
                "Matching avec des offres dans votre nouveau domaine",
                "Conseils personnalisés pour réussir votre transition",
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
                { href: "/cv-ia", label: "CV IA" },
                { href: "/matching-emploi-ia", label: "Matching emploi IA" },
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
