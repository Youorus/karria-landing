import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { ShieldCheck, Lock, EyeOff, Server } from "lucide-react";
import { CONTACT_EMAILS, NAV_ROUTES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Sécurité des données",
  description: "Comment Karria protège tes données : échanges chiffrés en HTTPS, connexion sans mot de passe, hébergement en Allemagne. Ce qui est en place, sans exagération.",
  path: "/securite",
});

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "Échanges chiffrés",
    description: "Tout ce qui circule entre ton téléphone, ce site et nos serveurs passe par HTTPS (TLS 1.2 au minimum, HSTS activé). Tes données ne voyagent jamais en clair."
  },
  {
    icon: EyeOff,
    title: "Aucun mot de passe",
    description: "Tu te connectes avec un code à six chiffres reçu par e-mail, ou avec Apple ou Google. Le code expire et le nombre d'essais est limité. Karria ne stocke donc aucun mot de passe."
  },
  {
    icon: ShieldCheck,
    title: "Un code audité",
    description: "Un audit de sécurité du code de Karria a été mené en novembre 2026, et ses constats ont été corrigés. Des freins limitent aussi les abus : nombre de requêtes et d'essais plafonné, taille des envois bornée, fichiers importés contrôlés."
  },
  {
    icon: Server,
    title: "Hébergement en Allemagne",
    description: "Ton compte, tes CV, tes documents et tes messages sont hébergés chez Hetzner Online GmbH, dans son centre de données de Falkenstein, en Allemagne, donc dans l'Union européenne."
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
            subtitle="Ce qui protège tes données aujourd'hui, dit simplement et sans exagération."
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
                  Karria est une jeune application, tenue par une petite équipe. Cette page décrit ce qui est réellement en place aujourd&apos;hui, rien de plus, et nous la mettrons à jour à chaque évolution. Tu gardes la main sur tes données : c&apos;est toi qui décides si l&apos;IA peut lire ton CV, et tu peux{" "}
                  <Link href={NAV_ROUTES.accountDeletion} className="text-primary hover:underline">supprimer ton compte</Link>{" "}
                  et ses données quand tu veux. Le détail figure dans notre{" "}
                  <Link href={NAV_ROUTES.privacy} className="text-primary hover:underline">politique de confidentialité</Link>.
                </p>
              </section>
              
              <section>
                <h3 className="text-2xl font-bold text-foreground mb-4">Signalement de vulnérabilité</h3>
                <p>
                  Tu penses avoir trouvé une faille de sécurité sur Karria ? Écris-nous sans attendre : nous lisons chaque signalement et nous te répondons.
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
