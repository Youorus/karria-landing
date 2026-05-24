import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = buildMetadata({
  title: "Mentions Légales",
  description: "Retrouvez toutes les informations légales concernant l'édition et l'hébergement de la plateforme Karria.",
  path: "/mentions-legales",
});

export default function LegalPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Transparence"
            title="Mentions Légales"
            subtitle="Toutes les informations officielles concernant Karria."
            align="left"
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Éditeur du site</h3>
                  <p>
                    Le site karria.app est édité par la société Karria SAS,<br />
                    Société par Actions Simplifiée au capital de 10 000 euros,<br />
                    Siège social : Paris, France.<br />
                    RCS : Paris B 123 456 789
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Directeur de la publication</h3>
                  <p>
                    Monsieur Marc Takoumba, en sa qualité de Président.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Hébergement</h3>
                  <p>
                    Le site est hébergé par Vercel Inc.<br />
                    440 N Barranca Ave #4133<br />
                    Covina, CA 91723<br />
                    États-Unis
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Propriété intellectuelle</h3>
                  <p>
                    Karria est une marque déposée. L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Contact</h3>
                  <p>
                    Pour toute question, vous pouvez nous contacter à l&apos;adresse suivante : <br />
                    <a href="mailto:contact@karria.app" className="text-primary hover:underline">contact@karria.app</a>
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
