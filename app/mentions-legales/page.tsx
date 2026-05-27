import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_EMAILS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description:
      "Informations légales relatives au site Karria. Cette page sera complétée lors de la création officielle de la structure juridique.",
  path: "/mentions-legales",
});

export default function LegalPage() {
  return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeader
                eyebrow="Transparence"
                headingLevel={1}
                title="Mentions légales"
                subtitle="Cette page sera complétée avec les informations officielles de Karria avant le lancement complet du service."
                align="left"
                className="mb-20"
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal delay={0.2}>
                <div className="space-y-12 text-lg leading-relaxed text-muted-foreground">
                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Éditeur du site
                    </h3>
                    <p>
                      Le site Karria est actuellement édité par Marc Takoumba,
                      fondateur du projet Karria.
                    </p>

                    <p className="mt-4">
                      Les informations relatives à la structure juridique
                      officielle de Karria seront ajoutées dès sa création.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Directeur de la publication
                    </h3>
                    <p>
                      Le directeur de la publication est Marc Takoumba, fondateur
                      de Karria.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Hébergement
                    </h3>
                    <p>
                      Le site est hébergé par un prestataire technique externe.
                      Les informations détaillées relatives à l’hébergement seront
                      précisées avant le lancement officiel du service.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Propriété intellectuelle
                    </h3>
                    <p>
                      Les contenus, textes, visuels, éléments graphiques, logos,
                      interfaces et composants présents sur ce site sont protégés
                      par le droit de la propriété intellectuelle.
                    </p>

                    <p className="mt-4">
                      Toute reproduction, représentation, modification,
                      publication ou adaptation, totale ou partielle, sans
                      autorisation préalable, est interdite.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Contact
                    </h3>
                    <p>
                      Pour toute question concernant le site ou le projet Karria,
                      vous pouvez écrire à l’adresse suivante :
                      <br />
                      <Link
                          href={`mailto:${CONTACT_EMAILS.general}`}
                          className="text-primary hover:underline"
                      >
                        {CONTACT_EMAILS.general}
                      </Link>
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Mise à jour
                    </h3>
                    <p>
                      Ces mentions légales seront mises à jour dès que les
                      informations juridiques définitives de Karria seront
                      disponibles.
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