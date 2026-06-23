type Faq = { q: string; a: string };

/**
 * Section FAQ accessible + données structurées JSON-LD FAQPage.
 * À n'utiliser que sur les pages où la FAQ est réellement visible
 * (exigence des rich results Google).
 */
export function FaqSection({
  faqs,
  title = "Questions fréquentes",
}: {
  faqs: Faq[];
  title?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
