import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "GCC Lead Generation for B2B Companies",
  description: "GCC lead generation for UK and regional B2B companies. Sales Hype runs English and Arabic outbound with Apollo, HubSpot and deliverability infrastructure.",
  alternates: { canonical: "/gcc-lead-generation" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="GCC lead generation"
      title="GCC lead generation for B2B companies selling across UK, UAE and KSA."
      description="Sales Hype runs managed outbound for companies that need to reach decision-makers across the UK and GCC. English and Arabic capability, Apollo prospecting, protected sending infrastructure and HubSpot pipeline reporting."
      primaryKeyword="GCC lead generation"
      supportingKeywords={["Saudi B2B lead generation", "Arabic outbound lead generation", "UAE B2B lead generation", "UK to GCC outbound"]}
      sections={[
        { title: "GCC outbound needs local nuance", body: "A translated UK sequence is not enough. Sales Hype combines English and Arabic capability with a practical understanding of how business conversations move across GCC markets." },
        { title: "KSA and WhatsApp matter", body: "For Saudi and wider GCC campaigns, the follow-up path may involve WhatsApp and Arabic messaging, especially after initial interest. HubSpot can support those handoffs when the pipeline is designed properly." },
        { title: "Useful for UK companies expanding into the region", body: "Sales Hype is a fit for UK B2B companies that already know their offer works and now need a controlled outbound route into GCC markets." },
      ]}
      bullets={["UK, UAE, GCC and KSA market targeting.", "English and Arabic messaging capability.", "Apollo lists by geography, sector and decision-maker role.", "Secondary domains and deliverability setup.", "HubSpot routing for replies and regional pipeline visibility.", "Weekly reporting on reply quality and market response."]}
      faqs={[
        { question: "Does Sales Hype work with Saudi Arabia and GCC markets?", answer: "Yes. Sales Hype works across the UK and GCC, including KSA, with English and Arabic capability." },
        { question: "Can outbound work for UK companies entering the GCC?", answer: "Yes, when the ICP, offer, messaging and follow-up route are adapted to the region. Sales Hype helps build that motion instead of simply translating a UK campaign." },
        { question: "Do you support Arabic outbound?", answer: "Yes. Sales Hype can support Arabic messaging and region-aware follow-up, including WhatsApp paths where appropriate." },
      ]}
    />
  );
}
