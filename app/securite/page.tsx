import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { ShieldCheck, Lock, EyeOff, Server } from "lucide-react";
import { CONTACT_EMAILS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Sécurité des données",
  description: "Découvrez les mesures de sécurité avancées mises en place par Karria pour protéger vos données professionnelles et personnelles.",
  path: "/securite",
});

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "Chiffrement AES-256",
    description: "Toutes vos données personnelles et documents sont chiffrés au repos et en transit avec les standards les plus élevés du marché."
  },
  {
    icon: EyeOff,
    title: "Anonymisation par IA",
    description: "Nos algorithmes peuvent anonymiser vos données sensibles lors des phases de matching pour garantir une totale impartialité."
  },
  {
    icon: ShieldCheck,
    title: "Audit Permanent",
    description: "Nous réalisons des tests d'intrusion réguliers et des audits de sécurité pour prévenir toute vulnérabilité potentielle."
  },
  {
    icon: Server,
    title: "Hébergement Souverain",
    description: "Vos données sont hébergées sur des serveurs sécurisés conformes aux normes de sécurité internationales les plus strictes."
  }
];

export default function SecurityPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Confiance"
            headingLevel={1}
            title="Sécurité & Intégrité"
            subtitle="La protection de vos données n'est pas une option, c'est le cœur de notre architecture."
            align="left"
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SECURITY_FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <div className="p-8 rounded-3xl bg-secondary/30 border border-border hover:border-primary/50 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="max-w-3xl">
          <Reveal delay={0.4}>
            <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
              <section>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre engagement</h3>
                <p>
                  Karria a été conçu avec une approche &quot;Security by Design&quot;. Chaque nouvelle fonctionnalité passe par une revue de sécurité rigoureuse avant d&apos;être déployée. Nous travaillons quotidiennement pour assurer que vos informations professionnelles restent entre de bonnes mains : les vôtres.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-foreground mb-4">Signalement de vulnérabilité</h3>
                <p>
                  Si vous pensez avoir découvert une faille de sécurité sur notre plateforme, nous vous encourageons à nous en informer immédiatement. Nous traitons chaque signalement avec la plus haute priorité.
                </p>
                <Link 
                  href={`mailto:${CONTACT_EMAILS.security}`}
                  className="inline-block mt-4 text-primary font-medium hover:underline"
                >
                  {CONTACT_EMAILS.security}
                </Link>
              </section>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
