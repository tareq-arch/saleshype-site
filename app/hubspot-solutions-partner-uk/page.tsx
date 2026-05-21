import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "HubSpot Solutions Partner UK",
  description: "HubSpot Solutions Partner in the UK for outbound lead generation, CRM pipeline setup, reply routing, reporting and B2B sales systems.",
  alternates: { canonical: "/hubspot-solutions-partner-uk" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="HubSpot Solutions Partner UK"
      title="A HubSpot Solutions Partner for outbound teams that need pipeline clarity."
      description="Sales Hype builds HubSpot pipelines around managed outbound: reply routing, sales ownership, deal stages, reporting and follow-up systems for B2B companies selling across the UK and GCC."
      primaryKeyword="HubSpot Solutions Partner UK"
      supportingKeywords={["hubspot partner agency uk", "HubSpot CRM implementation", "HubSpot sales pipeline setup", "HubSpot outbound setup"]}
      sections={[
        { title: "HubSpot should show commercial reality", body: "A CRM is only useful if it shows what is happening. Sales Hype builds HubSpot around outbound replies, sales ownership, next actions and weekly reporting." },
        { title: "Useful for founder-led teams", body: "Most founder-led B2B teams do not need a bloated CRM project. They need a clean pipeline, clear follow-up and reporting that shows whether outbound is working." },
        { title: "Built around managed outbound", body: "Because Sales Hype also runs outbound campaigns, the CRM is designed around real pipeline movement rather than abstract process diagrams." },
      ]}
      bullets={["HubSpot pipeline setup", "Lead and reply routing", "Deal stages and owner visibility", "Outbound campaign reporting", "CRM cleanup for sales teams", "UK and GCC pipeline support"]}
      faqs={[
        { question: "Is Sales Hype a HubSpot Solutions Partner?", answer: "Yes. Sales Hype is positioned as a HubSpot Solutions Partner focused on outbound lead generation and pipeline systems." },
        { question: "Do I need HubSpot before working with Sales Hype?", answer: "No. Sales Hype can work with an existing setup or build a simple HubSpot pipeline for outbound replies and reporting." },
        { question: "Can HubSpot support GCC outbound?", answer: "Yes. HubSpot can support regional pipeline visibility, follow-up ownership and reporting for UK and GCC outbound campaigns." },
      ]}
    />
  );
}
