import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Handshake, Mail, Building2 } from "lucide-react";
import { CONTACT_EMAILS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Partenaires",
  description:
    "Karria construit ses premiers partenariats. Écoles, associations, entreprises : contactez-nous pour en discuter.",
  path: "/partenaires",
});

const PARTNER_TYPES = [
  {
    icon: Building2,
    title: "Écoles & organismes de formation",
    description:
      "Aider vos étudiants et alumni à mieux préparer leurs candidatures grâce à Karria.",
  },
  {
    icon: Handshake,
    title: "Associations & acteurs de l'emploi",
    description:
      "Faciliter l'accès à Karria pour les personnes que vous accompagnez.",
  },
];

export default function PartenairesPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Partenaires"
            headingLevel={1}
            title="Construisons ensemble"
            subtitle="Karria n'a pas encore de programme de partenariat formalisé, mais nous sommes ouverts à en discuter dès maintenant."
            className="mb-20"
          />
        </Reveal>

        <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PARTNER_TYPES.map((type, index) => (
            <Reveal key={type.title} delay={index * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-secondary/30 p-8 transition-colors hover:border-primary">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <type.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{type.title}</h3>
                <p className="flex-grow text-muted-foreground">
                  {type.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="rounded-[2.5rem] bg-foreground p-10 text-background md:p-16">
            <h2 className="mb-6 text-3xl font-bold">Parlons-en directement</h2>
            <p className="mb-8 max-w-2xl text-lg text-background/70">
              Chaque demande de partenariat est lue et traitée personnellement
              par l&apos;équipe Karria. Écrivez-nous en décrivant votre projet.
            </p>
            <Link
              href={`mailto:${CONTACT_EMAILS.partners}`}
              className="inline-flex items-center gap-3 text-xl font-bold hover:underline sm:text-2xl"
            >
              <Mail className="h-6 w-6" />
              {CONTACT_EMAILS.partners}
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
