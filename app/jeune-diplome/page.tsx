import { buildMetadata } from "@/lib/metadata";
import { FaqSection } from "@/components/seo/FaqSection";
import { ArrowRight, Star, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Premier emploi pour jeune diplômé avec l'IA",
  description:
    "Jeune diplômé à la recherche de ton premier emploi ? Karria t'accompagne avec l'IA pour construire un profil attractif, postuler aux bonnes offres et décrocher tes premiers entretiens.",
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

const faqs = [
  {
    q: "Comment trouver un emploi sans expérience ?",
    a: "Sans longue expérience professionnelle, ce sont tes projets académiques, stages, engagements associatifs et compétences qui font la différence. Karria t'aide à les mettre en valeur dans un CV structuré et convaincant.",
  },
  {
    q: "Que mettre dans un CV de jeune diplômé ?",
    a: "Formation, projets significatifs, stages, compétences techniques et soft skills, et éventuellement tes centres d'intérêt pertinents. Karria sélectionne et reformule ces éléments pour qu'ils parlent aux recruteurs et passent les filtres ATS.",
  },
  {
    q: "Faut-il une lettre de motivation quand on débute ?",
    a: "Oui, c'est même un atout : elle te permet d'expliquer ta motivation et de compenser un manque d'expérience. Karria rédige une lettre ciblée pour chaque offre.",
  },
  {
    q: "L'alternance est-elle une bonne alternative ?",
    a: "Si tu poursuis tes études, l'alternance combine théorie et expérience et facilite l'embauche ensuite. Découvre notre page dédiée à l'alternance pour explorer cette voie.",
  },
];

export default function JeuneDiplomePage() {
  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Jeune diplômé</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Ton premier emploi,
              <br />
              <span className="text-gradient-blue">trouvé par Karria</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Ton diplôme en poche, Karria t&apos;aide à valoriser tes
              compétences, construire un profil attractif et trouver les offres
              les plus adaptées à ton profil de jeune diplômé.
            </p>
            <Link href={NAV_ROUTES.download} className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Lancer ma carrière
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Intro rédactionnelle */}
          <section className="mb-20 space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">
              Décrocher son premier emploi : le paradoxe de l&apos;expérience
            </h2>
            <p>
              Le premier emploi est souvent le plus difficile à obtenir : les
              offres réclament de l&apos;expérience que, par définition, tu
              n&apos;as pas encore. Résultat, beaucoup de jeunes diplômés
              sous-estiment la valeur de leurs stages, projets et compétences, et
              envoient des candidatures peu convaincantes qui se perdent dans la
              masse.
            </p>
            <p>
              Karria renverse la situation en valorisant ce que tu as
              réellement accompli : projets académiques, stages, expériences
              associatives et compétences concrètes. La plateforme construit un{" "}
              <Link href="/cv-ia" className="text-primary hover:underline">
                CV professionnel
              </Link>{" "}
              même sans parcours étoffé, génère des{" "}
              <Link href="/lettre-motivation-ia" className="text-primary hover:underline">
                lettres
              </Link>{" "}
              percutantes et t&apos;oriente vers les offres juniors. Si tu
              poursuis tes études, pense aussi à l&apos;
              <Link href="/alternance" className="text-primary hover:underline">
                alternance
              </Link>
              .
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Ce que Karria apporte aux jeunes diplômés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Mise en valeur de tes projets académiques et stages",
                "CV professionnel même sans expérience extensive",
                "Offres juniors et premiers emplois filtrées pour toi",
                "Lettres percutantes malgré un profil en construction",
                "Score ATS de ton CV et optimisation en un geste",
                "Une alerte dès qu'une nouvelle offre correspond",
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
      </div>
    </>
  );
}
