import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "Cold Email Agency for B2B Outbound",
  description: "Cold email agency for B2B companies that need managed outbound campaigns, prospect data, direct copy, deliverability management and HubSpot reporting.",
  alternates: { canonical: "/cold-email-agency" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Cold email agency"
      title="A cold email agency built around pipeline, not volume."
      description="Sales Hype runs managed cold email for B2B businesses that need useful sales conversations. We handle the data, sequence writing, campaign operation, deliverability management and HubSpot routing so your team can focus on qualified replies."
      primaryKeyword="cold email agency"
      supportingKeywords={["cold email marketing agency", "b2b cold email agency", "managed cold email", "cold outreach agency"]}
      sections={[
        { title: "Cold email is a system", body: "The email copy matters, but it is only one piece. Targeting, data quality, sending setup, timing, follow-up logic and reply handling all decide whether outbound creates pipeline or noise." },
        { title: "Founder/operator voice", body: "Sales Hype writes sequences in a direct operator style. The goal is not clever copy. The goal is to start relevant conversations with the right decision-makers." },
        { title: "Built into HubSpot", body: "Interested replies should not sit in inboxes. We route positive responses into a clear HubSpot pipeline so ownership, stage movement and follow-up stay visible." },
      ]}
      bullets={["B2B prospect data and list building", "Cold email sequence writing", "Campaign launch and monitoring", "Deliverability and sending-risk management", "HubSpot reply routing", "Weekly reporting and optimisation"]}
      faqs={[
        { question: "What does a cold email agency do?", answer: "A cold email agency builds and runs outbound email campaigns that reach target decision-makers and turn positive replies into sales conversations." },
        { question: "Is cold email still effective?", answer: "Yes, when targeting, offer, copy and deliverability are handled properly. Poorly run cold email damages reputation; well-run outbound can create predictable pipeline." },
        { question: "Does Sales Hype guarantee meetings?", answer: "No serious outbound partner should guarantee fake certainty. Sales Hype measures reply quality, meetings and pipeline movement across a three-month minimum window." },
      ]}
    />
  );
}
