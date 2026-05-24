import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { AuroraText } from "@/components/ui/aurora-text";
import { Heart, Zap, Target, Users } from "lucide-react";

export const metadata = buildMetadata({
  title: "À propos de Karria",
  description: "Découvrez l'histoire de Karria, notre vision pour le futur du travail et comment Marc Takoumba réinvente la recherche d'emploi avec l'IA.",
  path: "/about",
});

const VALUES = [
  {
    icon: Heart,
    title: "Humain d'abord",
    description: "Derrière chaque algorithme, il y a une personne, un rêve et une carrière à construire."
  },
  {
    icon: Zap,
    title: "Rapidité",
    description: "Éliminer les tâches répétitives pour vous permettre de vous concentrer sur l'essentiel : l'entretien."
  },
  {
    icon: Target,
    title: "Précision",
    description: "Ne plus chercher partout, mais trouver exactement ce qui vous correspond vraiment."
  },
  {
    icon: Users,
    title: "Accompagnement",
    description: "Nous ne sommes pas une étape, mais un compagnon qui évolue avec vous toute votre vie."
  }
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SectionHeader
              eyebrow="Notre Histoire"
              title={
                <>
                  Réinventer la recherche d&apos;emploi avec <AuroraText>intelligence</AuroraText>
                </>
              }
              subtitle="Karria est né d'une conviction simple : chercher un job ne devrait pas être un job à plein temps."
              className="mb-20"
            />
          </Reveal>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden border border-border">
                {/* Visual placeholder for Marc Takoumba or a symbolic image */}
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <p className="text-xl font-medium italic text-muted-foreground">
                    &quot;La recherche d&apos;emploi est devenue épuisante. Trop de plateformes, trop de répétition. J&apos;ai créé Karria pour redonner du temps et de la dignité aux candidats.&quot;
                  </p>
                </div>
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-background/80 backdrop-blur-md border border-border">
                  <p className="font-bold">Marc Takoumba</p>
                  <p className="text-sm text-muted-foreground">Fondateur de Karria</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">Pourquoi Karria ?</h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    L&apos;idée de Karria est née d&apos;un constat frustrant partagé par des millions de personnes. La technologie de recrutement a évolué pour les entreprises (ATS, filtres automatiques), mais les candidats, eux, sont restés avec les mêmes outils archaïques.
                  </p>
                  <p>
                    Marc Takoumba a voulu inverser la tendance. Pourquoi ne pas mettre la puissance de l&apos;IA au service exclusif du candidat ? Une IA qui comprend vos compétences mieux que vous, qui adapte vos documents en un clic et qui chasse les opportunités pour vous, 24h/24.
                  </p>
                  <p>
                    Karria n&apos;est pas seulement une application, c&apos;est un assistant carrière intelligent qui vous accompagne dans le temps, de votre premier stage à votre poste de direction.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos Valeurs</h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Ce qui nous guide chaque jour dans le développement de Karria.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1}>
                <div className="p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="py-24 sm:py-32 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Prêt à changer de dimension ?</h2>
            <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-12">
              Rejoignez Marc et des milliers d&apos;utilisateurs qui ont déjà transformé leur recherche d&apos;emploi.
            </p>
            <a 
              href="/#download"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-background text-foreground hover:bg-secondary transition-all duration-300 font-bold text-lg"
            >
              Télécharger Karria
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
