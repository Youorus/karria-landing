import { buildMetadata } from "@/lib/metadata";
import { FaqSection } from "@/components/seo/FaqSection";
import { ArrowRight, GraduationCap, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Trouver une alternance grâce à l'IA",
  description:
    "Karria t'aide à trouver une alternance : offres ciblées, CV adapté et lettre de motivation pour chaque entreprise, alertes dès qu'une nouvelle offre correspond.",
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
    a: "Dis à Karria le métier, le lieu et le contrat : elle lance la recherche parmi les offres d'alternance et classe les plus pertinentes en premier. Pour chaque offre, elle prépare un CV adapté et une lettre de motivation.",
  },
  {
    q: "Faut-il déjà avoir une école pour postuler ?",
    a: "Pas nécessairement. De nombreuses entreprises recrutent d'abord l'alternant, qui rejoint ensuite l'école partenaire. Karria t'aide à valoriser ton projet de formation auprès des recruteurs.",
  },
  {
    q: "Karria convient-il aussi aux contrats de professionnalisation ?",
    a: "Oui. Que tu vises un contrat d'apprentissage ou de professionnalisation, Karria adapte tes candidatures au type de contrat et au public ciblé par l'entreprise.",
  },
  {
    q: "L'alternance est-elle compatible avec mon niveau d'études ?",
    a: "L'alternance existe du CAP au Bac+5 et au-delà. Précise ton domaine et ton niveau à Karria pour cibler les offres qui te concernent.",
  },
];

export default function AlternancePage() {
  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Alternance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Décroche ton alternance
              <br />
              <span className="text-gradient-blue">avec l&apos;aide de Karria</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Karria comprend les spécificités de l&apos;alternance et
              t&apos;accompagne pas à pas : offres ciblées, CV adapté, lettres
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
              de te former tout en menant ses études, multiplier les
              candidatures et se démarquer face à de nombreux autres candidats
              au profil similaire. Beaucoup d&apos;étudiants s&apos;y prennent
              trop tard ou postulent avec un CV générique.
            </p>
            <p>
              Karria comprend les spécificités de l&apos;alternance et te fait
              gagner un temps précieux : offres ciblées par secteur et région,{" "}
              <Link href="/cv-ia" className="text-primary hover:underline">
                CV adapté
              </Link>{" "}
              aux recruteurs en apprentissage et lettres personnalisées pour
              chaque entreprise. Si tu hésites encore sur ta voie,
              découvre aussi nos conseils pour les{" "}
              <Link href="/jeune-diplome" className="text-primary hover:underline">
                jeunes diplômés
              </Link>
              .
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Pourquoi Karria pour ton alternance ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Offres d'alternance par métier et par lieu",
                "CV spécialement adapté aux recruteurs en alternance",
                "Lettres de motivation percutantes pour les entreprises",
                "Les offres les plus pertinentes en premier",
                "Une alerte dès qu'une nouvelle offre correspond",
                "Un dossier par candidature pour suivre où tu en es",
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
      </div>
    </>
  );
}
