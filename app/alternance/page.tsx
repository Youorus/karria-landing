import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqSection } from "@/components/seo/FaqSection";
import { ArrowRight, GraduationCap, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Trouver une alternance grâce à l'IA",
  description:
    "Karria vous aide à trouver votre alternance idéale grâce à l'intelligence artificielle. CV optimisé, lettre de motivation personnalisée et matching précis pour décrocher votre contrat.",
  path: "/alternance",
  keywords: [
    "trouver alternance IA",
    "alternance intelligence artificielle",
    "contrat alternance",
    "apprentissage offres",
    "CV alternance",
    "lettre motivation alternance",
  ],
});

const faqs = [
  {
    q: "Comment Karria aide à trouver une alternance ?",
    a: "Karria filtre les offres d'alternance par secteur, région et niveau d'études, puis génère un CV et des lettres adaptés aux attentes des entreprises qui recrutent en contrat d'apprentissage ou de professionnalisation.",
  },
  {
    q: "Faut-il déjà avoir une école pour postuler ?",
    a: "Pas nécessairement. De nombreuses entreprises recrutent d'abord l'alternant, qui rejoint ensuite l'école partenaire. Karria vous aide à valoriser votre projet de formation auprès des recruteurs.",
  },
  {
    q: "Karria convient-il aussi aux contrats de professionnalisation ?",
    a: "Oui. Que vous visiez un contrat d'apprentissage ou de professionnalisation, Karria adapte vos candidatures au type de contrat et au public ciblé par l'entreprise.",
  },
  {
    q: "L'alternance est-elle compatible avec mon niveau d'études ?",
    a: "L'alternance existe du CAP au Bac+5 et au-delà. Karria filtre les offres correspondant à votre niveau et à votre domaine pour ne vous présenter que des opportunités réalistes.",
  },
];

export default function AlternancePage() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Alternance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Décrochez votre alternance
              <br />
              <span className="text-gradient-blue">avec l&apos;aide de Karria</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Karria comprend les spécificités de l&apos;alternance et vous
              accompagne pas à pas : offres ciblées, CV adapté, lettres
              personnalisées pour chaque entreprise.
            </p>
            <Link href={NAV_ROUTES.download} className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Trouver mon alternance
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Intro rédactionnelle */}
          <section className="mb-20 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">
              Trouver une alternance : un vrai parcours du combattant
            </h2>
            <p>
              Décrocher une alternance demande souvent autant d&apos;efforts
              qu&apos;un emploi à temps plein : il faut convaincre une entreprise
              de vous former tout en menant ses études, multiplier les
              candidatures et se démarquer face à de nombreux autres candidats
              au profil similaire. Beaucoup d&apos;étudiants s&apos;y prennent
              trop tard ou postulent avec un CV générique.
            </p>
            <p>
              Karria comprend les spécificités de l&apos;alternance et vous fait
              gagner un temps précieux : offres ciblées par secteur et région,{" "}
              <Link href="/cv-ia" className="text-primary hover:underline">
                CV adapté
              </Link>{" "}
              aux recruteurs en apprentissage et lettres personnalisées pour
              chaque entreprise. Si vous hésitez encore sur votre voie,
              découvrez aussi nos conseils pour les{" "}
              <Link href="/jeune-diplome" className="text-primary hover:underline">
                jeunes diplômés
              </Link>
              .
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Pourquoi Karria pour votre alternance ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Offres d'alternance filtrées par secteur et région",
                "CV spécialement adapté aux recruteurs en alternance",
                "Lettres de motivation percutantes pour les entreprises",
                "Score de compatibilité pour chaque offre",
                "Alertes en temps réel sur les nouvelles publications",
                "Accompagnement pour préparer vos entretiens",
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
                { href: "/cv-ia", label: "CV IA" },
                { href: "/matching-emploi-ia", label: "Matching emploi" },
                { href: "/jeune-diplome", label: "Jeune diplômé" },
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
