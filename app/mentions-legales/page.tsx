import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { EDITEUR } from "@/lib/karria";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description:
      "Éditeur et hébergeurs du site et de l'application Karria.",
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
                subtitle="Qui édite Karria, et qui héberge le site et l’application."
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
                      Karria est un service édité par {EDITEUR.raisonSociale},{" "}
                      {EDITEUR.formeJuridique}.
                      <br />
                      Adresse de l’établissement : {EDITEUR.siege}.
                      <br />
                      {EDITEUR.immatriculation}.
                      <br />
                      {EDITEUR.tva}.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Directeur de la publication
                    </h3>
                    <p>
                      Le directeur de la publication est{" "}
                      {EDITEUR.directeurDePublication}.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Hébergement
                    </h3>
                    <p>
                      Le site karria.fr est hébergé par Vercel Inc., 440 N
                      Barranca Avenue #4133, Covina, CA 91723, États-Unis
                      (vercel.com).
                    </p>

                    <p className="mt-4">
                      L’application Karria et ses données (comptes, CV,
                      documents, messages) sont hébergées par Hetzner Online
                      GmbH, Industriestr. 25, 91710 Gunzenhausen, Allemagne,
                      dans son centre de données de Falkenstein, en Allemagne
                      (Union européenne).
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
                          href={`mailto:${EDITEUR.contact}`}
                          className="text-primary hover:underline"
                      >
                        {EDITEUR.contact}
                      </Link>
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      Mise à jour
                    </h3>
                    <p>
                      Ces mentions légales sont mises à jour à chaque changement
                      des informations ci-dessus.
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