import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "Cold Email Agency UK",
  description: "A UK cold email agency alternative for B2B founders who need clean lists, protected domains, direct copy, HubSpot routing and honest pipeline reporting.",
  alternates: { canonical: "/cold-email-agency-uk" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Cold email agency UK"
      title="A cold email agency for founders who care about pipeline, not activity."
      description="Sales Hype is operator-led, HubSpot-backed and focused on managed B2B outbound. We run cold email with the infrastructure, copy, data and reporting needed to create useful sales conversations."
      primaryKeyword="cold email agency UK"
      supportingKeywords={["B2B cold email agency", "cold outreach agency UK", "managed cold email UK", "outbound sales agency UK"]}
      sections={[
        { title: "Most agency reports hide the real question", body: "Sends, opens and clicks do not pay the bills. The question is whether the campaign is reaching the right decision-makers and producing conversations that can become revenue." },
        { title: "Operator-led execution", body: "Sales Hype is built by an operator running outbound across real businesses. The system sold to clients is the system used internally across the portfolio." },
        { title: "Clear offer, clear price", body: "GBP 1,800 per month, three-month minimum, no setup fee. The price includes lists, copy, domains, deliverability, management, HubSpot integration and weekly reporting." },
      ]}
      bullets={["Built for B2B services with identifiable buyers.", "No cold outreach from your main domain.", "Apollo prospecting and list refreshes.", "Cold email sequences written and managed end to end.", "HubSpot routing for interested replies.", "Weekly reporting on what is working and what needs changing."]}
      faqs={[
        { question: "How is Sales Hype different from a typical cold email agency?", answer: "Sales Hype is positioned as an operator-led outbound partner rather than a broad marketing agency. The focus is lists, cold email infrastructure, deliverability, HubSpot and weekly pipeline movement." },
        { question: "Do you guarantee meetings?", answer: "Sales Hype does not promise fake certainty. The three-month minimum gives enough time to test targeting, offer and deliverability honestly. The work is measured by replies, meetings and pipeline quality." },
        { question: "What markets do you cover?", answer: "Sales Hype works across the UK, GCC and KSA, with English and Arabic capability." },
      ]}
    />
  );
}
