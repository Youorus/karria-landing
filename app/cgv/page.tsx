import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = buildMetadata({
  title: "Conditions Générales de Vente",
  description: "Consultez nos CGV pour tout savoir sur les abonnements Karria, les modalités de paiement et de remboursement.",
  path: "/cgv",
});

export default function CGVPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Commercial"
            title="Conditions Générales de Vente"
            subtitle="Transparence totale sur nos offres, nos abonnements et vos droits en tant que client."
            align="left"
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">1. Services et Tarifs</h3>
                  <p>
                    Karria propose différents niveaux d&apos;abonnement (Gratuit, Premium, Pro). Les tarifs sont indiqués en euros toutes taxes comprises. Nous nous réservons le droit de modifier nos prix à tout moment, tout en garantissant le tarif en vigueur au moment de la souscription pour la durée de l&apos;engagement.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">2. Paiement et Sécurité</h3>
                  <p>
                    Le paiement s&apos;effectue par carte bancaire via nos prestataires de paiement sécurisés (Stripe). Karria ne stocke aucune information bancaire sur ses propres serveurs.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">3. Abonnement et Résiliation</h3>
                  <p>
                    Les abonnements sont renouvelés automatiquement à la fin de chaque période (mensuelle ou annuelle) sauf résiliation par l&apos;utilisateur avant la date d&apos;échéance. La résiliation est possible en un clic depuis votre espace personnel.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">4. Droit de rétractation</h3>
                  <p>
                    Conformément à la législation en vigueur pour les services numériques, le droit de rétractation de 14 jours peut s&apos;appliquer sous certaines conditions, sauf si l&apos;exécution du service a commencé avec votre accord.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">5. Support et Réclamations</h3>
                  <p>
                    Notre équipe support est à votre disposition pour toute question relative à votre facturation à l&apos;adresse : <br />
                    <a href="mailto:billing@karria.app" className="text-primary hover:underline">billing@karria.app</a>
                  </p>
                </section>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
