import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/seo/FaqSection";
import { ArrowRight, Search, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Recherche d'emploi IA — Trouvez votre prochain poste",
  description:
    "Transformez votre recherche d'emploi avec l'intelligence artificielle. Karria centralise les offres, optimise vos candidatures et vous accompagne à chaque étape de votre parcours.",
  path: "/recherche-emploi-ia",
  keywords: [
    "recherche emploi IA",
    "trouver emploi intelligence artificielle",
    "plateforme emploi IA",
    "recherche emploi intelligente",
    "candidature IA",
    "trouver travail rapidement",
  ],
});

const features = [
  "Feed d'offres personnalisé mis à jour en temps réel",
  "Candidature en un clic avec documents optimisés",
  "Suivi centralisé de toutes vos candidatures",
  "Conseils personnalisés pour chaque étape",
  "Notifications intelligentes sur vos offres favorites",
  "Analyse de vos chances de succès par offre",
];

const faqs = [
  {
    q: "En quoi Karria change la recherche d'emploi ?",
    a: "Au lieu de parcourir manuellement des dizaines de sites, Karria centralise les offres pertinentes, les classe par compatibilité avec votre profil et prépare vos candidatures. Vous passez moins de temps à chercher et plus de temps à décrocher des entretiens.",
  },
  {
    q: "Combien de temps faut-il pour trouver un emploi avec Karria ?",
    a: "Cela dépend de votre secteur et de votre profil, mais en automatisant le tri des offres et la préparation des candidatures, Karria vous permet de postuler plus vite et de manière plus ciblée, ce qui augmente vos chances de réponse.",
  },
  {
    q: "Karria convient-il à tous les niveaux d'expérience ?",
    a: "Oui. Que vous soyez jeune diplômé, en reconversion ou cadre confirmé, Karria adapte ses recommandations et ses documents à votre situation et à vos objectifs de carrière.",
  },
  {
    q: "Dois-je payer pour commencer ma recherche ?",
    a: "Non, vous pouvez créer votre profil, consulter des offres compatibles et générer vos premiers documents gratuitement, sans carte bancaire.",
  },
];

export default function RechercheEmploiIaPage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Search className="w-4 h-4" />
              <span>Recherche d&apos;emploi IA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              La recherche d&apos;emploi
              <br />
              <span className="text-gradient-blue">réinventée par l&apos;IA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Karria centralise, filtre et personnalise toute votre recherche
              d&apos;emploi. Moins de temps perdu, plus d&apos;entretiens
              décrochés.
            </p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Commencer ma recherche
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Intro rédactionnelle */}
          <section className="mb-20 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">
              Pourquoi repenser sa recherche d&apos;emploi ?
            </h2>
            <p>
              La recherche d&apos;emploi classique est chronophage et
              décourageante : multiplier les comptes sur les job boards, refaire
              le même CV, suivre ses candidatures dans un tableur et relancer au
              petit bonheur. La plupart des candidats abandonnent par fatigue
              avant d&apos;avoir trouvé le bon poste, alors que le problème
              n&apos;est pas leur profil mais leur méthode.
            </p>
            <p>
              Karria réunit toutes les étapes au même endroit et confie le
              travail répétitif à l&apos;intelligence artificielle :{" "}
              <Link href="/matching-emploi-ia" className="text-primary hover:underline">
                matching des offres
              </Link>
              , génération du{" "}
              <Link href="/cv-ia" className="text-primary hover:underline">
                CV
              </Link>{" "}
              et de la{" "}
              <Link href="/lettre-motivation-ia" className="text-primary hover:underline">
                lettre de motivation
              </Link>
              , suivi centralisé et alertes intelligentes. Vous gardez le
              contrôle, mais sans la charge mentale.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Tout ce qu&apos;il vous faut pour trouver plus vite
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
                { href: "/matching-emploi-ia", label: "Matching emploi IA" },
                { href: "/alternance", label: "Alternance" },
                { href: "/jeune-diplome", label: "Jeune diplômé" },
                { href: "/reconversion", label: "Reconversion" },
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
