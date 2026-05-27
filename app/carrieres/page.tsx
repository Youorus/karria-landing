import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight, Heart, Sparkles, Target, Users } from "lucide-react";
import { CONTACT_EMAILS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Rejoindre Karria",
  description:
      "Découvrez la vision de Karria et les futures opportunités pour rejoindre l’aventure autour de l’IA carrière.",
  path: "/carrieres",
});

const VALUES = [
  {
    icon: Heart,
    title: "Construire avec sens",
    description:
        "Créer un produit qui aide réellement des personnes à avancer dans leur vie professionnelle.",
  },
  {
    icon: Sparkles,
    title: "IA utile",
    description:
        "Mettre l’intelligence artificielle au service d’un problème concret, humain et quotidien.",
  },
  {
    icon: Target,
    title: "Exigence produit",
    description:
        "Soigner chaque détail pour créer une expérience simple, belle et réellement efficace.",
  },
  {
    icon: Users,
    title: "Ambition collective",
    description:
        "Bâtir une équipe forte autour d’une mission claire : réinventer l’accompagnement carrière.",
  },
];

export default function CareersPage() {
  return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeader
                eyebrow="Carrières"
                headingLevel={1}
                title="Construire Karria, c’est aider des millions de parcours."
                subtitle="Nous ne recrutons pas encore officiellement, mais l’aventure se prépare. Cette page accueillera bientôt les futures opportunités pour rejoindre Karria."
                className="mb-20"
            />
          </Reveal>

          <div className="mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">
                  Une mission profondément humaine.
                </h3>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Karria est né d’une idée simple : l’IA doit aider les personnes
                  à gagner du temps, retrouver de la clarté et mieux avancer dans
                  leur vie professionnelle.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Demain, l’équipe Karria réunira des personnes passionnées par le
                  produit, le design, l’IA, la technologie et l’impact humain.
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {VALUES.slice(0, 2).map((value) => (
                      <div
                          key={value.title}
                          className="rounded-2xl border border-border bg-secondary/50 p-6"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <value.icon className="h-5 w-5" />
                        </div>
                        <h4 className="mb-2 font-bold">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex aspect-video items-center justify-center rounded-[2.5rem] border border-border bg-gradient-to-br from-primary/20 to-secondary p-10 text-center">
                <p className="max-w-md text-xl font-medium italic text-muted-foreground">
                  “Karria se construit pour celles et ceux qui veulent redonner du
                  pouvoir aux candidats.”
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mb-24">
            <Reveal>
              <div className="mb-12">
                <h3 className="mb-4 text-3xl font-bold">
                  Postes ouverts
                </h3>
                <p className="max-w-2xl text-muted-foreground">
                  Aucun poste n’est officiellement ouvert pour le moment. Les
                  premières opportunités seront publiées ici lorsque Karria entrera
                  dans une nouvelle phase de développement.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-background p-8 text-center">
                <p className="text-lg font-semibold text-foreground">
                  Les recrutements arrivent bientôt.
                </p>
                <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                  En attendant, vous pouvez envoyer une candidature spontanée si
                  vous vous reconnaissez dans la mission de Karria.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-[2.5rem] border border-border bg-secondary/30 p-10 text-center md:p-16">
              <h3 className="mb-4 text-2xl font-bold">
                Vous voulez contribuer à Karria ?
              </h3>

              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Présentez-vous, racontez ce qui vous touche dans la mission, et ce
                que vous aimeriez construire avec Karria.
              </p>

              <Link
                  href={`mailto:${CONTACT_EMAILS.jobs}`}
                  className="inline-flex items-center gap-2 font-bold text-primary group"
              >
                Envoyer une candidature spontanée
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
  );
}