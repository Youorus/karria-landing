import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Code, Palette, Megaphone, LineChart, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Rejoignez l'équipe Karria",
  description: "Découvrez nos offres d'emploi et rejoignez l'aventure Karria pour construire ensemble le futur de la carrière avec l'IA.",
  path: "/carrieres",
});

const JOBS = [
  {
    title: "Senior Product Designer",
    team: "Design",
    location: "Remote / Paris",
    type: "CDI"
  },
  {
    title: "AI Engineer (NLP)",
    team: "Engineering",
    location: "Remote / Paris",
    type: "CDI"
  },
  {
    title: "Growth Marketer",
    team: "Marketing",
    location: "Paris",
    type: "CDI"
  }
];

export default function CareersPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Recrutement"
            title="Construisez le futur du travail"
            subtitle="Nous recherchons des passionnés pour nous aider à transformer la recherche d'emploi en une expérience humaine et intelligente."
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <Reveal>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Pourquoi nous rejoindre ?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Chez Karria, nous ne construisons pas juste une application. Nous construisons un outil qui a un impact réel sur la vie des gens. Chaque ligne de code, chaque pixel dessiné aide quelqu&apos;un à trouver sa voie.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                  <h4 className="font-bold mb-2">Liberté</h4>
                  <p className="text-sm text-muted-foreground">Culture remote-first et horaires flexibles.</p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                  <h4 className="font-bold mb-2">Impact</h4>
                  <p className="text-sm text-muted-foreground">Travaillez sur des technologies IA de pointe.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-video rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-secondary border border-border flex items-center justify-center">
              <p className="text-xl font-medium text-muted-foreground italic">&quot;Une équipe unie par une mission commune.&quot;</p>
            </div>
          </Reveal>
        </div>

        <div className="mb-24">
          <Reveal>
            <h3 className="text-3xl font-bold mb-12">Postes ouverts</h3>
          </Reveal>
          <div className="space-y-4">
            {JOBS.map((job, index) => (
              <Reveal key={job.title} delay={index * 0.1}>
                <div className="group p-8 rounded-3xl border border-border bg-background hover:bg-secondary/50 hover:border-primary transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">{job.team}</span>
                      <span className="text-sm text-muted-foreground">{job.location} • {job.type}</span>
                    </div>
                    <h4 className="text-xl font-bold">{job.title}</h4>
                  </div>
                  <RainbowButton href={`mailto:jobs@karria.app?subject=Candidature: ${job.title}`}>
                    Postuler
                  </RainbowButton>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="p-10 md:p-16 rounded-[2.5rem] bg-secondary/30 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Pas de poste correspondant ?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Nous sommes toujours à la recherche de talents exceptionnels. Envoyez-nous une candidature spontanée et racontez-nous comment vous pouvez aider Karria.
            </p>
            <a 
              href="mailto:jobs@karria.app"
              className="inline-flex items-center gap-2 font-bold text-primary group"
            >
              Candidature spontanée
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
