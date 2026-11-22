import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { NAV_ROUTES } from "@/lib/constants";
import { SITE_URL } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Questions fréquentes sur Karria",
  description: "Les réponses à tes questions sur Karria : offres, CV, alertes, limites de la version gratuite, offre « Karria sans pub » et données.",
  path: "/faq",
});

const FAQS = [
  {
    category: "Général",
    questions: [
      {
        q: "Qu'est-ce que Karria ?",
        a: "Karria est une application mobile française, sur iPhone et Android. Elle trouve les offres d'emploi qui te correspondent parmi plus de 500 000 offres actives en France (CDI, CDD, alternance, stage, intérim), t'aide à faire ton CV et te prévient dès qu'une nouvelle offre arrive.",
      },
      {
        q: "Est-ce que Karria est gratuite ?",
        a: "Oui. Karria est gratuite, financée par des annonces discrètes, et la recherche d'offres est illimitée. Une seule offre payante existe : « Karria sans pub », à 4,99 € par mois ou 49,90 € par an, sans engagement. Elle retire les annonces et lève les limites mensuelles.",
      },
      {
        q: "Quelles sont les limites de la version gratuite ?",
        a: "Chaque mois : 3 CV exportés sans la mention Karria (ensuite le CV sort avec la mention, sans jamais être bloqué), 3 optimisations ATS, 3 portraits retravaillés par IA, 5 imports de CV, 20 CV adaptés à une offre et 30 lettres. L'assistante répond à 40 messages par jour.",
      },
    ],
  },
  {
    category: "Offres et CV",
    questions: [
      {
        q: "Comment Karria trouve-t-elle des offres pour moi ?",
        a: "Tu dis à Karria ce que tu cherches, à l'écrit ou à la voix : un métier, un lieu, un contrat. Elle lance la recherche et classe les offres les plus pertinentes en premier. Tes recherches sont enregistrées, et tu reçois une alerte dès qu'une nouvelle offre correspond ; chaque alerte s'active ou se désactive séparément.",
      },
      {
        q: "Les CV sont-ils compatibles ATS ?",
        a: "Karria note ton CV comme le ferait un logiciel de recrutement (ATS), t'explique ce qui bloque et l'optimise en un geste. Tu choisis parmi 9 modèles, puis tu exportes en PDF ou en Word.",
      },
    ],
  },
  {
    category: "Compte et données",
    questions: [
      {
        q: "Mes données sont-elles en sécurité ?",
        a: "Tu décides si l'IA peut lire ton CV, tu peux supprimer tes documents à tout moment, et ton compte se supprime directement depuis l'app. Le détail figure dans notre politique de confidentialité.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faqpage`,
  mainEntity: FAQS.flatMap((category) =>
    category.questions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <div className="py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Aide"
            headingLevel={1}
            title="Questions Fréquentes"
            subtitle="Tout ce que tu dois savoir pour tirer le meilleur parti de Karria."
            className="mb-20"
          />
        </Reveal>

        <div className="space-y-16">
          {FAQS.map((category, catIndex) => (
            <div key={category.category}>
              <Reveal delay={catIndex * 0.1}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8 pb-4 border-b border-border">
                  {category.category}
                </h3>
              </Reveal>
              <div className="space-y-8">
                {category.questions.map((faq, index) => (
                  <Reveal key={faq.q} delay={(catIndex * 0.1) + (index * 0.05)}>
                    <div className="group">
                      <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {faq.q}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {faq.a}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-24 p-10 rounded-3xl bg-secondary/50 border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Tu n&apos;as pas trouvé ta réponse ?</h3>
            <p className="text-muted-foreground mb-8">
              Écris-nous : une vraie personne te répond.
            </p>
            <Link 
              href={NAV_ROUTES.contact}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
