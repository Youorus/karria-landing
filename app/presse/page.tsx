import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Download, FileText, Image as ImageIcon, Mail } from "lucide-react";
import { CONTACT_EMAILS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Espace Presse & Media",
  description:
      "Retrouvez prochainement les ressources officielles de Karria pour la presse, les médias et les partenaires.",
  path: "/presse",
});

const PRESS_ASSETS = [
  {
    icon: ImageIcon,
    title: "Logos & identité",
    description:
        "Les logos, visuels et éléments de marque officiels seront bientôt disponibles.",
  },
  {
    icon: FileText,
    title: "Communiqués",
    description:
        "Les annonces officielles de Karria seront publiées ici au moment opportun.",
  },
  {
    icon: Download,
    title: "Kit média",
    description:
        "Un kit complet avec visuels, captures et informations fondateur sera ajouté prochainement.",
  },
];

export default function PressPage() {
  return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeader
                eyebrow="Media"
                title="Espace Presse"
                subtitle="Cette page rassemblera bientôt les ressources officielles pour parler de Karria."
                className="mb-20"
            />
          </Reveal>

          <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PRESS_ASSETS.map((asset, index) => (
                <Reveal key={asset.title} delay={index * 0.1}>
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-secondary/30 p-8 transition-colors hover:border-primary">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <asset.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mb-4 text-xl font-bold">{asset.title}</h3>

                    <p className="flex-grow text-muted-foreground">
                      {asset.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 font-bold text-muted-foreground/70">
                      Disponible bientôt
                    </div>
                  </div>
                </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="grid grid-cols-1 items-center gap-16 rounded-[2.5rem] bg-foreground p-10 text-background md:p-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Contact presse</h2>

                <p className="mb-8 text-lg text-background/70">
                  Vous souhaitez parler de Karria, préparer un article, proposer
                  un partenariat média ou demander plus d’informations sur le
                  projet ? Vous pouvez nous écrire directement.
                </p>

                <Link
                    href={`mailto:${CONTACT_EMAILS.press}`}
                    className="inline-flex items-center gap-3 text-xl font-bold hover:underline sm:text-2xl"
                >
                  <Mail className="h-6 w-6" />
                  {CONTACT_EMAILS.press}
                </Link>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-background/20 bg-background/10 p-6">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wider opacity-50">
                    Ressources
                  </p>
                  <h4 className="mb-2 text-xl font-bold">
                    Kit média en préparation
                  </h4>
                  <p className="text-sm opacity-70">
                    Logos, captures, visuels et informations officielles seront
                    ajoutés ici progressivement.
                  </p>
                </div>

                <div className="rounded-2xl border border-background/20 bg-background/10 p-6">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wider opacity-50">
                    Actualités
                  </p>
                  <h4 className="mb-2 text-xl font-bold">
                    Les annonces officielles arriveront bientôt
                  </h4>
                  <p className="text-sm opacity-70">
                    Cette page sera mise à jour lors des prochaines étapes
                    importantes de Karria.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
  );
}