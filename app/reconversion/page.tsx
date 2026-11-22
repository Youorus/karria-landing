import { buildMetadata } from "@/lib/metadata";
import { FaqSection } from "@/components/seo/FaqSection";
import { ArrowRight, RefreshCw, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Reconversion professionnelle avec l'IA",
  description:
    "Tu envisages une reconversion professionnelle ? Karria t'accompagne avec l'IA pour identifier les opportunités qui correspondent à tes nouvelles ambitions et transférer tes compétences.",
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

const faqs = [
  {
    q: "Comment réussir une reconversion professionnelle ?",
    a: "Une reconversion réussie repose sur l'identification de tes compétences transférables, une bonne connaissance du secteur visé et une candidature qui met en valeur ta nouvelle direction. Karria t'accompagne sur chacune de ces étapes.",
  },
  {
    q: "Comment valoriser une expérience dans un autre domaine ?",
    a: "Karria repositionne ton parcours en mettant l'accent sur les compétences transférables (gestion de projet, relation client, organisation…) plutôt que sur les intitulés de poste, afin de rassurer les recruteurs de ton nouveau secteur.",
  },
  {
    q: "Est-il trop tard pour se reconvertir ?",
    a: "Il n'y a pas d'âge pour changer de voie. De plus en plus de professionnels se reconvertissent en milieu de carrière. L'essentiel est de structurer son projet et de présenter sa transition de façon cohérente, ce que Karria facilite.",
  },
  {
    q: "Karria aide-t-il à choisir un nouveau métier ?",
    a: "Karria ne remplace pas un bilan de compétences. Tu peux en revanche lui dire que tu veux changer de métier : elle lance la recherche et te montre les offres du domaine visé, que tu affines avec elle.",
  },
];

export default function ReconversionPage() {
  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <RefreshCw className="w-4 h-4" />
              <span>Reconversion</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Ta reconversion,
              <br />
              <span className="text-gradient-blue">accompagnée par Karria</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Changer de voie est une décision courageuse. Karria t&apos;aide à
              valoriser tes compétences transférables, identifier les secteurs
              porteurs et construire un nouveau chapitre professionnel.
            </p>
            <Link href={NAV_ROUTES.download} className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Commencer ma reconversion
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Intro rédactionnelle */}
          <section className="mb-20 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">
              Changer de métier sans repartir de zéro
            </h2>
            <p>
              La plus grande crainte lors d&apos;une reconversion, c&apos;est
              d&apos;avoir l&apos;impression de tout recommencer. En réalité,
              tu as accumulé des compétences transférables — organisation,
              communication, gestion, expertise sectorielle — qui ont de la
              valeur dans ton nouveau domaine. Le défi est de les présenter de
              manière convaincante à des recruteurs qui ne connaissent pas ton
              parcours d&apos;origine.
            </p>
            <p>
              Karria t&apos;aide à faire ce travail de traduction : analyse de tes
              acquis, identification des secteurs porteurs adaptés à ton
              profil,{" "}
              <Link href="/cv-ia" className="text-primary hover:underline">
                CV repositionné
              </Link>{" "}
              et lettres axées sur ta valeur ajoutée. Ensuite, le{" "}
              <Link href="/matching-emploi-ia" className="text-primary hover:underline">
                matching IA
              </Link>{" "}
              t&apos;oriente vers les offres de ton nouveau domaine.
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Comment Karria accompagne ta reconversion</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Un CV qui met en avant tes compétences transférables",
                "Une recherche lancée à l'écrit ou à la voix : « je veux changer de métier »",
                "CV repositionné pour ton nouveau métier",
                "Lettres de motivation axées sur ta valeur ajoutée",
                "Matching avec des offres dans ton nouveau domaine",
                "Une équipe humaine joignable dans l'app",
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
      </div>
    </>
  );
}
