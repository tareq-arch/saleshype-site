type SeoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
  bullets: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export function SeoLandingPage({
  eyebrow,
  title,
  description,
  primaryKeyword,
  supportingKeywords,
  sections,
  bullets,
  faqs,
}: SeoPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType: primaryKeyword,
    provider: {
      "@type": "Organization",
      name: "Sales Hype",
      url: "https://www.saleshype.co.uk",
    },
    areaServed: ["United Kingdom", "GCC", "Saudi Arabia", "United Arab Emirates"],
    description,
    offers: {
      "@type": "Offer",
      price: "1800",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://www.saleshype.co.uk/",
    },
  };

  return (
    <main className="relative bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav className="relative z-10 px-6 md:px-12 pt-8 pb-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <a href="/" className="flex items-baseline gap-2.5 group">
            <span className="font-serif text-xl tracking-tightest font-medium text-ink">
              Sales Hype
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted font-medium">
              UK · GCC
            </span>
          </a>
          <a
            href="https://calendly.com/tareq-saleshype/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm bg-ink text-paper px-4 py-2.5 hover:bg-accent-deep transition-colors duration-300"
          >
            Book a 30-min call
          </a>
        </div>
      </nav>

      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-serif font-light text-[40px] md:text-[64px] lg:text-[78px] leading-[1.02] tracking-tightest text-ink mb-10 md:mb-14 max-w-5xl">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mb-12 leading-[1.6]">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <a
              href="https://calendly.com/tareq-saleshype/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 hover:bg-accent-deep transition-colors duration-300 group"
            >
              <span className="text-sm font-medium tracking-wide">Book a 30-min pipeline call</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </a>
            <div className="text-sm text-muted">GBP 1,800/mo · 3-month minimum · no setup fee</div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-ink text-paper px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-3 font-medium">
              Search focus
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tightest leading-[1.05]">
              Built around {primaryKeyword}.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-3">
              {[primaryKeyword, ...supportingKeywords].map((keyword) => (
                <span key={keyword} className="border border-paper/20 px-3 py-2 text-sm text-paper/80">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] text-ink">
              Why this matters now
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8 text-ink/80 text-[17px] leading-[1.75]">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="font-serif text-2xl font-light tracking-tight text-ink mb-3">
                  {section.title}
                </h3>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 py-24 md:py-32 bg-paper-warm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-accent"></span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
                What Sales Hype runs
              </span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tightest leading-[1.05] text-ink">
              The whole outbound system, not one loose campaign.
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-rule border rule-soft">
            {bullets.map((item) => (
              <div key={item} className="bg-paper-warm p-6 md:p-8">
                <p className="text-ink/80 leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-accent"></span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium">
              Common questions
            </span>
          </div>
          <div className="space-y-px bg-rule border rule-soft">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-paper group p-7 md:p-8">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-serif text-lg md:text-xl font-normal text-ink leading-[1.4]">
                    {faq.question}
                  </h3>
                  <span className="text-accent text-2xl leading-none font-light flex-shrink-0 mt-1 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 text-muted leading-[1.7] text-[16px] pr-10">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 py-28 md:py-36 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tightest leading-[1.0] mb-8">
            Want to know if outbound fits your offer?
          </h2>
          <p className="text-paper/75 text-lg max-w-xl mx-auto mb-10 leading-[1.6]">
            In 30 minutes, we will map your ICP, outbound risks, tooling and likely path to pipeline. No pitch theatre.
          </p>
          <a
            href="https://calendly.com/tareq-saleshype/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-paper text-ink px-8 py-4 hover:bg-accent hover:text-paper transition-colors duration-300 group"
          >
            <span className="text-sm font-medium tracking-wide">Book a 30-min pipeline call</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
