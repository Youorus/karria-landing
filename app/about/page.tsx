import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { AuroraText } from "@/components/ui/aurora-text";
import { Heart, Zap, Target, Users, Quote } from "lucide-react";
import { AppDownloadCTA } from "@/components/ui/AppDownloadCTA";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "À propos de Karria",
  description:
      "Découvrez l'histoire de Karria, l'application IA pensée pour simplifier la recherche d'emploi et accompagner chaque parcours professionnel.",
  path: "/about",
});

const VALUES = [
  {
    icon: Heart,
    title: "Humain d’abord",
    description:
        "Derrière chaque profil, il y a une personne, une histoire et une carrière à construire.",
  },
  {
    icon: Zap,
    title: "Gain de temps",
    description:
        "Réduire les tâches répétitives pour vous aider à vous concentrer sur les bonnes opportunités.",
  },
  {
    icon: Target,
    title: "Précision",
    description:
        "Ne plus chercher partout, mais trouver ce qui correspond vraiment à votre profil.",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description:
        "Karria n’est pas une étape. C’est un compagnon qui évolue avec votre carrière.",
  },
];

const ABOUT_HERO = {
  eyebrow: "Notre histoire",
  titleHighlight: "intelligence",
  subtitle:
      "Karria aide les candidats à gagner du temps, mieux candidater et retrouver de la clarté dans leur recherche.",
};

const FOUNDER = {
  name: "Marc Takoumba",
  role: "Fondateur de Karria",
  image: "/marc-takoumba.jpg",
  quote:
      "Chercher un travail ne devrait pas devenir un travail à temps plein.",
};

const ORIGIN_CONTENT = {
  eyebrow: "Pourquoi Karria existe",
  title:
    "Une app construite avec passion pour simplifier une étape souvent difficile de la vie.",
  intro:
    "Karria est né d’une expérience réelle, d’une frustration vécue, et d’une envie profonde : créer un outil utile, accessible et sincèrement pensé pour les candidats.",
  finalText:
    "Ce projet a été construit avec beaucoup d’amour, d’énergie et de vision. Si vous utilisez Karria, si vous trouvez un emploi grâce à lui, ou si vous avez une idée pour l’améliorer, je serai toujours heureux de vous lire.",
  finalStrong: "Karria a été pensé pour faire partie de votre parcours.",
};

const VALUES_TEXT = {
  title: "Nos valeurs",
  subtitle: "Ce qui guide chaque choix dans la construction de Karria.",
};

const CTA_TEXT = {
  title: "Votre carrière mérite un vrai compagnon.",
  subtitle:
    "Téléchargez Karria et avancez avec plus de clarté, de confiance et de temps pour ce qui compte vraiment.",
};

const STORY_BLOCKS = [
  {
    eyebrow: "Le constat",
    title: "Chercher un emploi prend trop de place.",
    text:
      "Entre les plateformes à surveiller, les offres à lire et les candidatures à préparer, beaucoup de personnes finissent par passer plus de temps à chercher qu’à avancer.",
  },
  {
    eyebrow: "La douleur",
    title: "Même les personnes motivées peuvent s’épuiser.",
    text:
      "Adapter son CV, écrire une lettre, vérifier les mots, recommencer pour chaque offre… quand on veut bien faire, chaque candidature devient une tâche lourde.",
  },
  {
    eyebrow: "L’idée",
    title: "Et si une IA faisait enfin ce travail avec vous ?",
    text:
      "Karria a été imaginé pour comprendre votre profil, repérer les bonnes opportunités et vous aider à préparer de meilleures candidatures, plus vite.",
  },
  {
    eyebrow: "La vision",
    title: "Une carrière ne se construit pas en une seule étape.",
    text:
      "Premier emploi, reconversion, nouvelle ambition, changement de vie : Karria est pensé pour vous accompagner dans le temps, pas seulement pour une recherche ponctuelle.",
  },
];

export default function AboutPage() {
  return (
      <div className="overflow-hidden">
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeader
                  eyebrow={ABOUT_HERO.eyebrow}
                  title={
                    <>
                      Réinventer la recherche d&apos;emploi avec{" "}
                      <AuroraText>{ABOUT_HERO.titleHighlight}</AuroraText>
                    </>
                  }
                  subtitle={ABOUT_HERO.subtitle}
                  className="mb-20"
              />
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/30 py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <aside className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:self-start">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full shadow-2xl shadow-primary/10">
                  <img
                    src={FOUNDER.image}
                    alt={`${FOUNDER.name}, ${FOUNDER.role}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-8 text-center">
                  <p className="text-xl font-bold text-foreground">{FOUNDER.name}</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {FOUNDER.role}
                  </p>
                </div>

                <div className="mt-8 rounded-[2rem] bg-background/80 p-6 text-center shadow-xl shadow-primary/5 backdrop-blur-xl">
                  <Quote className="mx-auto mb-4 h-6 w-6 text-primary" />
                  <p className="text-base font-medium leading-relaxed text-foreground">
                    “{FOUNDER.quote}”
                  </p>
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-10">
                <div className="max-w-3xl space-y-5">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                    {ORIGIN_CONTENT.eyebrow}
                  </div>

                  <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    {ORIGIN_CONTENT.title}
                  </h2>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {ORIGIN_CONTENT.intro}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {STORY_BLOCKS.map((block, index) => (
                    <div
                      key={block.title}
                      className={cn(
                        "rounded-[2rem] bg-background/70 p-6 shadow-sm shadow-primary/5 backdrop-blur-sm",
                        index === 0 || index === 3 ? "sm:col-span-2" : ""
                      )}
                    >
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        {block.eyebrow}
                      </p>

                      <h3 className="mb-3 text-xl font-bold text-foreground">
                        {block.title}
                      </h3>

                      <p className="text-base leading-relaxed text-muted-foreground">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[2rem] bg-primary/10 p-8">
                  <p className="text-lg leading-relaxed text-foreground">
                    {ORIGIN_CONTENT.finalText}
                  </p>

                  <p className="mt-5 text-xl font-bold text-foreground">
                    {ORIGIN_CONTENT.finalStrong}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="mb-20 text-center">
                <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                  {VALUES_TEXT.title}
                </h2>
                <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                  {VALUES_TEXT.subtitle}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((value, index) => (
                  <Reveal key={value.title} delay={index * 0.1}>
                    <div className="h-full rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <value.icon className="h-6 w-6" />
                      </div>

                      <h4 className="mb-4 text-xl font-bold">{value.title}</h4>

                      <p className="leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-24 text-center text-primary-foreground sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="mb-8 text-4xl font-bold md:text-6xl">
                {CTA_TEXT.title}
              </h2>

              <p className="mx-auto mb-12 max-w-2xl text-xl text-primary-foreground/80">
                {CTA_TEXT.subtitle}
              </p>

              <AppDownloadCTA showWebCTA={false} />
            </Reveal>
          </div>
        </section>
      </div>
  );
}