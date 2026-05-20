import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "Managed Cold Email UK",
  description: "Managed cold email for UK B2B founders. Sales Hype handles lists, copy, domains, warm-up, deliverability, reply routing and HubSpot reporting.",
  alternates: { canonical: "/managed-cold-email-uk" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Managed cold email UK"
      title="Managed cold email that protects your domain and creates real replies."
      description="Sales Hype runs cold email as a managed outbound system: clean data, secondary sending domains, SPF/DKIM/DMARC, warm-up, plain-language copy, reply handling and HubSpot reporting."
      primaryKeyword="managed cold email UK"
      supportingKeywords={["cold email agency UK", "cold email deliverability consultant", "B2B cold email outreach", "managed cold outreach"]}
      sections={[
        { title: "Cold email is unforgiving", body: "Bad lists, rushed sending, tracking-heavy templates and exposed brand domains can damage a campaign quickly. The work is not just writing emails. The work is protecting the infrastructure and learning from real replies." },
        { title: "Reply rate matters more than open rate", body: "Sales Hype focuses on useful signals: positive replies, meetings, pipeline movement and deliverability health. Opens can be noisy and sometimes harmful when tracking pixels affect placement." },
        { title: "Done for you, not dumped on your team", body: "We build the lists, write the sequences, manage the infrastructure, monitor campaigns and route interested replies so your team can focus on sales conversations." },
      ]}
      bullets={["Secondary sending domains set up for cold outreach.", "SPF, DKIM and DMARC configured before launch.", "Apollo lists cleaned around your ICP.", "Human-written sequence copy with follow-up logic.", "Daily campaign management and deliverability checks.", "Interested replies routed into HubSpot for follow-up."]}
      faqs={[
        { question: "Should I send cold email from my main domain?", answer: "No. Your main domain should be protected. Sales Hype uses secondary sending domains and proper authentication so cold outreach does not put your core brand email at risk." },
        { question: "How fast can a managed cold email campaign launch?", answer: "The normal pace is two weeks to launch. Week one is ICP, list, copy and infrastructure. Week two is launch and monitoring." },
        { question: "Do you write the email copy?", answer: "Yes. Sales Hype writes the sequence and follow-ups in a direct operator voice, then adjusts based on actual reply data." },
      ]}
    />
  );
}
