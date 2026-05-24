import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Mail, MessageSquare, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contactez Karria",
  description: "Une question ? Un partenariat ? Ou juste envie de dire bonjour ? Contactez l'équipe Karria et notre fondateur Marc Takoumba.",
  path: "/contact",
});

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Support & Aide",
    description: "Notre équipe est là pour vous aider avec l'application.",
    email: "hello@karria.app",
    label: "Nous écrire"
  },
  {
    icon: MessageSquare,
    title: "Presse & Media",
    description: "Pour toute demande d'interview ou kit média.",
    email: "press@karria.app",
    label: "Demande presse"
  },
  {
    icon: Linkedin,
    title: "Partenariats",
    description: "Construisons ensemble le futur de la carrière.",
    email: "partners@karria.app",
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
                <a 
                  href={`mailto:${method.email}`}
                  className="inline-flex items-center gap-2 font-bold text-primary group"
                >
                  {method.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="p-10 md:p-16 rounded-[2.5rem] bg-foreground text-background">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Contactez Marc</h2>
              <p className="text-background/70 text-lg mb-10 leading-relaxed">
                Le fondateur de Karria, Marc Takoumba, est très attaché aux retours des utilisateurs. Vous pouvez le contacter directement pour partager votre expérience ou vos idées.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://linkedin.com/in/marctakoumba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground hover:bg-background/90 transition-all font-bold"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/marctakoumba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-bold"
                >
                  <Twitter className="w-5 h-5" />
                  Twitter / X
                </a>
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
                <a href="https://instagram.com/karria.app" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="https://linkedin.com/company/karria" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="https://twitter.com/karriaapp" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="w-8 h-8" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
