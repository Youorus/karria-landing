import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { Download, FileText, Image as ImageIcon, Mail } from "lucide-react";

export const metadata = buildMetadata({
  title: "Espace Presse & Media",
  description: "Accédez au kit média de Karria, nos communiqués de presse et nos ressources visuelles officielles.",
  path: "/presse",
});

const PRESS_ASSETS = [
  {
    icon: ImageIcon,
    title: "Logos & Branding",
    description: "Téléchargez nos logos en haute résolution pour le web et l'impression.",
    link: "#"
  },
  {
    icon: FileText,
    title: "Communiqués de Presse",
    description: "Retrouvez toute l'actualité officielle et nos dernières annonces.",
    link: "#"
  },
  {
    icon: Download,
    title: "Kit Média Complet",
    description: "Une archive complète incluant screenshots, logos et bio du fondateur.",
    link: "#"
  }
];

export default function PressPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Media"
            title="Espace Presse"
            subtitle="Retrouvez toutes les ressources nécessaires pour parler de Karria."
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PRESS_ASSETS.map((asset, index) => (
            <Reveal key={asset.title} delay={index * 0.1}>
              <div className="p-8 rounded-3xl bg-secondary/30 border border-border flex flex-col h-full hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <asset.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{asset.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {asset.description}
                </p>
                <a 
                  href={asset.link}
                  className="inline-flex items-center gap-2 font-bold text-primary"
                >
                  Télécharger
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-foreground text-background p-10 md:p-16 rounded-[2.5rem]">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Presse</h2>
              <p className="text-background/70 text-lg mb-8">
                Vous préparez un article ou un reportage ? Notre équipe presse est à votre disposition pour toute demande d&apos;interview, d&apos;informations complémentaires ou de démo personnalisée.
              </p>
              <a 
                href="mailto:press@karria.app"
                className="inline-flex items-center gap-3 text-2xl font-bold hover:underline"
              >
                <Mail className="w-6 h-6" />
                press@karria.app
              </a>
            </div>
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-background/10 border border-background/20">
                <p className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-50">Dernière News</p>
                <h4 className="text-xl font-bold mb-2">Karria lève 2M€ pour démocratiser l&apos;IA carrière</h4>
                <p className="text-sm opacity-70">Mai 2026 • 2 min de lecture</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/10 border border-background/20">
                <p className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-50">Communiqué</p>
                <h4 className="text-xl font-bold mb-2">Lancement de l&apos;optimiseur de CV 2.0</h4>
                <p className="text-sm opacity-70">Avril 2026 • 3 min de lecture</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
