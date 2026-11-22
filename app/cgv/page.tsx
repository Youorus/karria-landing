import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_EMAILS } from "@/lib/constants";
import { EDITEUR, PRICING } from "@/lib/karria";

export const metadata = buildMetadata({
  title: "Conditions Générales de Vente",
  description: `Conditions de vente de l'abonnement « ${PRICING.planName} » : prix, paiement par Stripe, résiliation et remboursement.`,
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
            subtitle={`L'abonnement « ${PRICING.planName} », ses prix et vos droits en tant que client.`}
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
                    Le vendeur est {EDITEUR.raisonSociale}, {EDITEUR.formeJuridique}, {EDITEUR.siege} ({EDITEUR.immatriculation}). Karria est le service qu&apos;elle édite. {EDITEUR.tva}.
                  </p>
                  <p className="mt-4">
                    Karria est gratuite, financée par des annonces. Une seule offre payante existe : l&apos;abonnement « {PRICING.planName} », à {PRICING.monthlyLabel} par mois ou {PRICING.yearlyLabel} par an, sans engagement. Il retire les annonces et lève les limites mensuelles de la version gratuite. Les tarifs sont indiqués en euros toutes taxes comprises. Nous nous réservons le droit de modifier nos prix à tout moment, tout en garantissant le tarif en vigueur au moment de la souscription pour la période déjà payée.
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    2. Paiement et sécurité
                  </h3>

                  <p>
                    Le paiement de l’abonnement est effectué par Stripe, sur une page de
                    paiement sécurisée ouverte depuis l’application Karria. Il ne passe ni
                    par l’App Store d’Apple ni par le Google Play Store.
                  </p>

                  <p className="mt-4">
                    Karria ne voit ni ne stocke les numéros de carte : ils sont saisis et
                    conservés par Stripe. Karria ne conserve que l’état de votre abonnement.
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    3. Abonnements et résiliation
                  </h3>

                  <p>
                    L’abonnement « {PRICING.planName} » est proposé au mois ou à l’année,
                    sans engagement.
                  </p>

                  <p className="mt-4">
                    Il est renouvelé automatiquement à chaque échéance, mensuelle ou
                    annuelle, sauf résiliation effectuée par l’utilisateur avant la
                    prochaine date de renouvellement.
                  </p>

                  <p className="mt-4">
                    Vous pouvez résilier à tout moment depuis l’application Karria, qui
                    ouvre le portail de gestion de l’abonnement fourni par Stripe. La
                    gestion de l’abonnement ne s’effectue pas depuis les paramètres de
                    votre compte Apple ou Google.
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    4. Droit de rétractation
                  </h3>

                  <p>
                    L’abonnement étant souscrit directement auprès de Karria et réglé par
                    Stripe, les règles et politiques de remboursement de l’App Store
                    d’Apple et du Google Play Store ne s’appliquent pas.
                  </p>

                  <p className="mt-4">
                    Toute demande de remboursement, d’annulation ou d’exercice du droit de
                    rétractation, dans les conditions prévues par le Code de la
                    consommation, doit nous être adressée par e-mail à{" "}
                    <Link href={`mailto:${CONTACT_EMAILS.billing}`} className="text-primary hover:underline">{CONTACT_EMAILS.billing}</Link>.
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
