import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_EMAILS, NAV_ROUTES, SITE_CONFIG } from "@/lib/constants";
import { PRICING } from "@/lib/karria";

export const metadata = buildMetadata({
  title: "Politique de Confidentialité",
  description: "Quelles données Karria traite, pourquoi, avec quels prestataires (Google, Stripe, Hetzner), combien de temps, et comment exercer vos droits ou supprimer votre compte.",
  path: "/confidentialite",
});

const H3 = "text-2xl font-bold text-foreground mb-4";
const LIST = "mt-4 list-disc list-inside space-y-3";
const LINK = "text-primary hover:underline";

export default function PrivacyPage() {
  const deletionUrl = `${SITE_CONFIG.url}${NAV_ROUTES.accountDeletion}`.replace(/^https?:\/\//, "");

  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Confidentialité"
            headingLevel={1}
            title="Votre vie privée est notre priorité"
            subtitle="Quelles données Karria traite, pourquoi, avec qui, combien de temps, et comment les supprimer."
            align="left"
            className="mb-20"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
                <section>
                  <h3 className={H3}>1. Qui traite vos données</h3>
                  <p>
                    Karria est éditée par {SITE_CONFIG.founder}, son fondateur, en son nom : la structure juridique de Karria n&apos;est pas encore créée. C&apos;est lui qui décide de l&apos;usage fait de vos données et qui en répond. Pour toute question, écrivez à{" "}
                    <Link href={`mailto:${CONTACT_EMAILS.privacy}`} className={LINK}>{CONTACT_EMAILS.privacy}</Link>.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>2. Les données que nous traitons</h3>
                  <p>
                    Nous traitons uniquement ce dont l&apos;application a besoin pour fonctionner :
                  </p>
                  <ul className={LIST}>
                    <li>votre adresse e-mail ;</li>
                    <li>le contenu de votre CV (nom, coordonnées, parcours, photo si vous en ajoutez une) et vos lettres ;</li>
                    <li>vos critères de recherche et vos recherches enregistrées ;</li>
                    <li>les offres que vous avez vues, ouvertes ou gardées ;</li>
                    <li>vos messages à l&apos;assistante et à l&apos;équipe ;</li>
                    <li>vos enregistrements audio, le temps de la dictée ;</li>
                    <li>l&apos;identifiant de votre appareil et son jeton de notification ;</li>
                    <li>la langue, la région et le fuseau horaire réglés sur votre appareil ;</li>
                    <li>l&apos;état de votre abonnement.</li>
                  </ul>
                  <p className="mt-4">
                    À la création de votre compte, nous enregistrons également le pays et le fuseau horaire indiqués par les réglages de votre appareil (réglage « Région »). Ce pays est déduit du réglage de l&apos;appareil et non de votre position ni de votre adresse IP ; il sert uniquement à établir des statistiques sur la provenance de nos utilisateurs et est supprimé avec votre compte.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>3. Pourquoi nous les utilisons</h3>
                  <p>
                    Ces données servent à faire fonctionner Karria : vous connecter, vous proposer des offres, créer et adapter vos CV et vos lettres, répondre à vos messages, vous envoyer des e-mails et des notifications, afficher les annonces de la version gratuite, gérer votre abonnement et protéger le service contre les abus.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>4. Intelligence artificielle et consentement</h3>
                  <p>
                    Certaines fonctions de Karria reposent sur l&apos;intelligence artificielle. Avec votre consentement explicite, demandé dans l&apos;application, le contenu de votre CV, vos messages et les photos à retravailler sont envoyés à Google (Gemini) pour être traités. Sans ce consentement, ces fonctions restent fermées.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>5. Publicité et suivi</h3>
                  <p>
                    La version gratuite de l&apos;application affiche des annonces Google AdMob. Google reçoit pour cela l&apos;identifiant publicitaire de votre appareil et des données d&apos;usage. Sur iPhone, l&apos;autorisation de suivi vous est demandée ; la refuser ne réduit pas le nombre d&apos;annonces, seulement leur ciblage. L&apos;offre « {PRICING.planName} » retire les annonces.
                  </p>
                  <p className="mt-4">
                    Sur le site karria.fr, la mesure d&apos;audience (Google Analytics) ne dépose de cookies qu&apos;avec votre accord. Le détail figure dans notre{" "}
                    <Link href={NAV_ROUTES.cookies} className={LINK}>politique des cookies</Link>.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>6. Paiement</h3>
                  <p>
                    L&apos;abonnement « {PRICING.planName} » se règle par Stripe, sur une page de paiement sécurisée ouverte depuis l&apos;application. Karria ne voit ni ne stocke les numéros de carte ; nous conservons seulement l&apos;état de votre abonnement. Les conditions de l&apos;abonnement figurent dans nos{" "}
                    <Link href={NAV_ROUTES.cgv} className={LINK}>conditions générales de vente</Link>.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>7. Hébergement et destinataires</h3>
                  <p>
                    Karria ne vend pas vos données personnelles. Elles ne sont transmises qu&apos;aux prestataires qui font fonctionner le service, chacun pour sa tâche :
                  </p>
                  <ul className={LIST}>
                    <li>Hetzner Online GmbH (Allemagne) héberge l&apos;application et ses données — comptes, CV, documents, messages — dans son centre de données de Falkenstein, dans l&apos;Union européenne ;</li>
                    <li>Vercel Inc. (États-Unis) héberge le site karria.fr ;</li>
                    <li>Google traite les contenus confiés à l&apos;intelligence artificielle (Gemini), diffuse les annonces (AdMob), achemine nos e-mails (Google Workspace) et les notifications sur Android, et assure la connexion avec Google si vous la choisissez ;</li>
                    <li>Apple achemine les notifications sur iPhone et assure la connexion avec Apple si vous la choisissez ;</li>
                    <li>Expo relaie les notifications vers les services d&apos;Apple et de Google ;</li>
                    <li>Stripe encaisse les paiements et gère les abonnements.</li>
                  </ul>
                  <p className="mt-4">
                    Vercel, Google, Apple, Expo et Stripe sont des sociétés américaines : une partie de ces traitements peut donc avoir lieu hors de l&apos;Union européenne.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>8. Durées de conservation</h3>
                  <p>
                    Vos données sont conservées tant que votre compte existe. Les enregistrements audio ne sont gardés que le temps de la dictée. Lorsque vous supprimez votre compte, vos données sont effacées ; seule une trace anonyme du motif de départ peut être conservée.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>9. Sécurité</h3>
                  <p>
                    Les échanges avec Karria sont chiffrés en transit (HTTPS, TLS 1.2 au minimum). La connexion se fait sans mot de passe, par un code à six chiffres envoyé par e-mail ou avec Apple ou Google : Karria ne stocke donc aucun mot de passe. Le détail des mesures en place figure sur notre page{" "}
                    <Link href={NAV_ROUTES.security} className={LINK}>Sécurité</Link>.
                  </p>
                </section>

                <section>
                  <h3 className={H3}>10. Vos droits (RGPD)</h3>
                  <p>
                    Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données. Vous pouvez aussi retirer à tout moment un consentement que vous avez donné, par exemple pour l&apos;intelligence artificielle.
                  </p>
                  <p className="mt-4">
                    Pour exercer ces droits, écrivez à{" "}
                    <Link href={`mailto:${CONTACT_EMAILS.privacy}`} className={LINK}>{CONTACT_EMAILS.privacy}</Link>{" "}
                    depuis l&apos;adresse e-mail de votre compte : nous vous répondons dans un délai d&apos;un mois. Si la réponse ne vous satisfait pas, vous pouvez adresser une réclamation à la CNIL (cnil.fr).
                  </p>
                </section>

                <section>
                  <h3 className={H3}>11. Suppression de votre compte</h3>
                  <p>
                    Vous pouvez supprimer votre compte à tout moment depuis l&apos;application (Profil › Paramètres › Supprimer mon compte) ou en suivant la page{" "}
                    <Link href={NAV_ROUTES.accountDeletion} className={LINK}>{deletionUrl}</Link>.
                    Le compte et ses données sont alors effacés, y compris dans les modules annexes de l&apos;application.
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
                  <p className="text-sm">22 Novembre 2026</p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
