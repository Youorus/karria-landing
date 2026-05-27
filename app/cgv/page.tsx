import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_EMAILS } from "@/lib/constants";

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
            headingLevel={1}
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
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    2. Paiement et sécurité
                  </h3>

                  <p>
                    Les paiements liés à l’application Karria sont effectués directement via
                    l’App Store d’Apple ou le Google Play Store, selon la plateforme utilisée.
                    Karria ne collecte ni ne stocke aucune information bancaire sur ses propres
                    serveurs.
                  </p>

                  <p className="mt-4">
                    La gestion des abonnements, achats intégrés, renouvellements, annulations et
                    remboursements dépend des conditions et procédures propres à Apple ou Google.
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    3. Abonnements et résiliation
                  </h3>

                  <p>
                    Certains services de Karria peuvent être proposés sous forme d’abonnements
                    mensuels ou annuels via l’App Store d’Apple ou le Google Play Store.
                  </p>

                  <p className="mt-4">
                    Les abonnements sont renouvelés automatiquement selon les règles de la
                    plateforme utilisée, sauf résiliation effectuée par l’utilisateur avant la
                    prochaine date de renouvellement.
                  </p>

                  <p className="mt-4">
                    La gestion des abonnements, modifications, annulations et remboursements
                    s’effectue directement depuis les paramètres de votre compte Apple ou Google.
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    4. Droit de rétractation
                  </h3>

                  <p>
                    Les achats et abonnements effectués via l’App Store d’Apple ou le Google
                    Play Store sont soumis aux règles et politiques de remboursement propres à
                    chaque plateforme.
                  </p>

                  <p className="mt-4">
                    Toute demande de remboursement, d’annulation ou d’exercice du droit de
                    rétractation doit être effectuée directement auprès d’Apple ou de Google,
                    conformément à leurs conditions d’utilisation respectives.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">5. Support et Réclamations</h3>
                  <p>
                    Notre équipe support est à votre disposition pour toute question relative à votre facturation à l&apos;adresse : <br />
                    <Link href={`mailto:${CONTACT_EMAILS.billing}`} className="text-primary hover:underline">{CONTACT_EMAILS.billing}</Link>
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
