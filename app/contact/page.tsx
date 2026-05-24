import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Mail, MessageSquare, Linkedin, Instagram, ArrowRight, SVGProps } from "lucide-react";
import { CONTACT_EMAILS, SOCIAL_LINKS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Contactez Karria",
  description: "Une question ? Un partenariat ? Ou juste envie de dire bonjour ? Contactez l'équipe Karria et notre fondateur Marc Takoumba.",
  path: "/contact",
});

// Custom X Icon
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-9.56-6.638 9.56H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z" />
  </svg>
);

// Custom TikTok Icon
const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.99 0-1.48.18-1.96.99-3.86 2.45-5.18 1.5-1.36 3.53-2.04 5.54-1.82.01 1.38-.02 2.76 0 4.14-.84-.06-1.71.04-2.47.5-.58.35-1.04.91-1.28 1.56-.21.57-.24 1.2-.18 1.8.1.91.54 1.79 1.25 2.39.73.61 1.68.91 2.63.85.94-.02 1.86-.39 2.53-1.03.63-.61.94-1.48.97-2.35.03-3.75-.01-7.49.02-11.24z" />
  </svg>
);

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Support & Aide",
    description: "Notre équipe est là pour vous aider avec l'application.",
    email: CONTACT_EMAILS.support,
    label: "Nous écrire"
  },
  {
    icon: MessageSquare,
    title: "Presse & Media",
    description: "Pour toute demande d'interview ou kit média.",
    email: CONTACT_EMAILS.press,
    label: "Demande presse"
  },
  {
    icon: Linkedin,
    title: "Partenariats",
    description: "Construisons ensemble le futur de la carrière.",
    email: CONTACT_EMAILS.partners,
    label: "Devenir partenaire"
  }
];

export default function ContactPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Parlons de votre avenir"
            subtitle="Une question sur Karria ? Notre équipe est à votre écoute pour vous accompagner dans votre réussite."
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {CONTACT_METHODS.map((method, index) => (
            <Reveal key={method.title} delay={index * 0.1}>
              <div className="p-8 rounded-3xl bg-secondary/30 border border-border flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {method.description}
                </p>
                <Link 
                  href={`mailto:${method.email}`}
                  className="inline-flex items-center gap-2 font-bold text-primary group"
                >
                  {method.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="p-10 md:p-16 rounded-[2.5rem] bg-foreground text-background">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Contactez Marc</h2>
              <p className="text-background/70 text-lg mb-10 leading-relaxed">
                Le fondateur de Karria, Marc Takoumba, est très attaché aux retours des utilisateurs. Vous pouvez le contacter directement sur Instagram pour partager votre expérience ou vos idées.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={SOCIAL_LINKS.founderInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-all font-bold"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-10">
              <h3 className="text-3xl font-bold">Suivez l&apos;aventure</h3>
              <p className="text-muted-foreground text-lg">
                Rejoignez notre communauté sur les réseaux sociaux pour découvrir les coulisses de Karria, nos dernières mises à jour et des conseils carrière quotidiens.
              </p>
              <div className="flex gap-8">
                <Link href={SOCIAL_LINKS.instagram} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-8 h-8" />
                </Link>
                <Link href={SOCIAL_LINKS.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-8 h-8" />
                </Link>
                <Link href={SOCIAL_LINKS.x} className="text-muted-foreground hover:text-foreground transition-colors">
                  <XIcon className="w-8 h-8" />
                </Link>
                <Link href={SOCIAL_LINKS.tiktok} className="text-muted-foreground hover:text-foreground transition-colors">
                  <TikTokIcon className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
