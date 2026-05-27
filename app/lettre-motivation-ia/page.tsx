import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, PenLine, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Lettre de motivation IA personnalisée en quelques secondes",
  description:
    "Générez une lettre de motivation personnalisée et convaincante grâce à l'IA. Karria adapte chaque lettre à l'offre et à votre profil pour maximiser vos chances de décrocher un entretien.",
  path: "/lettre-motivation-ia",
  keywords: [
    "lettre de motivation IA",
    "générer lettre motivation automatique",
    "lettre motivation intelligente",
    "lettre candidature IA",
    "rédiger lettre motivation",
    "lettre motivation professionnelle",
  ],
});

const features = [
  "Lettre personnalisée selon l'offre et votre profil",
  "Ton professionnel et naturel",
  "Prête à envoyer en quelques secondes",
  "Adaptée à tous les secteurs d'activité",
  "Mise en forme soignée et impactante",
  "Rééditable et exportable en PDF",
];

const faqs = [
  {
    q: "Comment Karria personnalise-t-il ma lettre de motivation ?",
    a: "Karria analyse simultanément votre profil, vos expériences et la description de l'offre pour rédiger une lettre qui met en avant vos atouts les plus pertinents et répond directement aux besoins de l'employeur.",
  },
  {
    q: "Les lettres générées sonnent-elles naturel ?",
    a: "Oui. Karria utilise des modèles de langage avancés pour produire des lettres qui sonnent authentiques, professionnelles et non robotiques. Vous pouvez toujours les modifier à votre guise.",
  },
  {
    q: "Puis-je générer plusieurs lettres pour différentes offres ?",
    a: "Absolument. Chaque candidature mérite une lettre unique. Karria vous permet de générer autant de lettres que nécessaire, chacune adaptée à son offre spécifique.",
  },
  {
    q: "La lettre est-elle compatible avec les exigences ATS ?",
    a: "Les lettres générées par Karria intègrent les mots-clés pertinents de l'offre, ce qui améliore leur lisibilité par les logiciels de recrutement automatiques.",
  },
];

export default function LettreMotivationIaPage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <PenLine className="w-4 h-4" />
              <span>Lettre de motivation IA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Une lettre de motivation
              <br />
              <span className="text-gradient-blue">qui vous ressemble vraiment</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Fini les lettres génériques copiées-collées. Karria génère en
              quelques secondes une lettre de motivation unique, adaptée à
              chaque offre et à votre parcours.
            </p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Générer ma lettre gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Une lettre parfaite pour chaque candidature
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-foreground/20 text-sm transition-all duration-200"
                >
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
