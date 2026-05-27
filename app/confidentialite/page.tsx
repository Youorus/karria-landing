import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_EMAILS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Politique de Confidentialité",
  description: "Découvrez comment Karria protège vos données personnelles et respecte votre vie privée grâce à une gestion sécurisée et transparente.",
  path: "/confidentialite",
});

export default function PrivacyPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Confidentialité"
            headingLevel={1}
            title="Votre vie privée est notre priorité"
            subtitle="Chez Karria, nous croyons que la confiance est le socle de toute carrière réussie. Voici comment nous protégeons vos données."
            align="left"
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">1. Collecte des données</h3>
                  <p>
                    Nous collectons uniquement les informations nécessaires pour vous offrir le meilleur accompagnement carrière : vos coordonnées, votre parcours professionnel, et vos préférences de recherche d&apos;emploi. Ces données sont utilisées exclusivement pour alimenter nos algorithmes de matching et d&apos;optimisation.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">2. Utilisation de l&apos;Intelligence Artificielle</h3>
                  <p>
                    L&apos;IA de Karria analyse vos documents pour extraire des compétences et vous suggérer des améliorations. Vos données ne sont jamais utilisées pour entraîner des modèles tiers sans votre consentement explicite. Nous utilisons des protocoles de chiffrement de bout en bout pour le traitement de vos informations.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">3. Partage des données</h3>
                  <p>
                    Karria ne vend jamais vos données personnelles à des tiers. Vos informations ne sont partagées avec des employeurs potentiels que lorsque vous décidez de postuler à une offre via notre plateforme.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">4. Vos droits (RGPD)</h3>
                  <p>
                    Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez exercer ces droits à tout moment depuis les réglages de votre compte ou en nous contactant.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">5. Sécurité</h3>
                  <p>
                    Nous mettons en œuvre les standards de sécurité les plus élevés du marché pour protéger vos informations contre tout accès non autorisé, modification ou divulgation.
                  </p>
                </section>
              </div>
            </Reveal>
          </div>
          
          <aside className="lg:col-span-4">
            <Reveal delay={0.3}>
              <div className="sticky top-32 p-8 rounded-3xl bg-secondary/50 border border-border">
                <h4 className="text-lg font-bold mb-4">Une question ?</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Karria est là pour vous répondre.
                </p>
                <Link 
                  href={`mailto:${CONTACT_EMAILS.privacy}`}
                  className="text-primary font-medium hover:underline text-sm"
                >
                  {CONTACT_EMAILS.privacy}
                </Link>
                
                <div className="mt-10 pt-10 border-t border-border/50">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Dernière mise à jour</p>
                  <p className="text-sm">24 Mai 2026</p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
