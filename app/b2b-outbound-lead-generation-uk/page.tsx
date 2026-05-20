import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "B2B Outbound Lead Generation UK",
  description: "Fully managed B2B outbound lead generation for UK founders. Sales Hype builds Apollo lists, cold email sequences, deliverability and HubSpot pipeline reporting.",
  alternates: { canonical: "/b2b-outbound-lead-generation-uk" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="B2B outbound lead generation UK"
      title="B2B outbound lead generation for founder-led UK businesses."
      description="Sales Hype builds and runs the outbound system: targeted Apollo lists, written sequences, protected sending domains, deliverability management, HubSpot integration and weekly pipeline reporting. Built for B2B services with real deal value, not vanity lead volume."
      primaryKeyword="B2B outbound lead generation UK"
      supportingKeywords={["outbound lead generation agency UK", "B2B lead generation agency UK", "founder led sales pipeline", "managed outbound UK"]}
      sections={[
        { title: "Outbound needs a system", body: "Most campaigns fail before the first email is sent. The list is too broad, the offer is vague, the domain is exposed, and nobody has decided what happens after a positive reply. Sales Hype fixes the operating system around outbound, not just the email copy." },
        { title: "Built for founder-led B2B", body: "The offer is designed for B2B services, professional services, recruitment, hospitality supply, specialist consulting and operators with identifiable decision-makers and average deal values that justify a managed outbound motion." },
        { title: "HubSpot becomes the pipeline layer", body: "Interested replies should not sit inside inboxes. Sales Hype routes pipeline into HubSpot so owners, stages, next actions and reporting stay visible every week." },
      ]}
      bullets={["ICP and market mapping before any list is built.", "Apollo prospect list building with decision-maker focus.", "Cold email copy written in a direct founder/operator voice.", "Secondary domains and inboxes to protect the main brand domain.", "Deliverability monitoring, warm-up and sending volume control.", "HubSpot pipeline setup for interested replies and weekly reporting."]}
      faqs={[
        { question: "What is B2B outbound lead generation?", answer: "B2B outbound lead generation is the process of identifying specific target companies and decision-makers, contacting them directly, and turning positive replies into sales conversations. Sales Hype manages this through Apollo, cold email infrastructure and HubSpot." },
        { question: "How much does Sales Hype cost?", answer: "Sales Hype is GBP 1,800 per month with a three-month minimum and no setup fee. That includes lists, copy, deliverability, campaign management, HubSpot integration and weekly reporting." },
        { question: "Who is this best for?", answer: "It is best for B2B services with GBP 5,000+ average deal size, founder-led or director-led teams, and a clear buyer profile." },
      ]}
    />
  );
}
