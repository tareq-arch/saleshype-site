import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "Prospect Data and HubSpot Outbound Setup",
  description: "Prospect data tools and HubSpot outbound setup for B2B teams. Sales Hype builds lists, sequences, reply routing, pipeline stages and weekly reporting.",
  alternates: { canonical: "/apollo-hubspot-outbound" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Prospect data and HubSpot outbound"
      title="Prospect data connected to a HubSpot pipeline your team can actually use."
      description="Sales Hype builds the outbound bridge between modern data tools and HubSpot: target accounts, verified contacts, cold email sequences, interested-reply routing, deal stages, tasks and weekly reporting."
      primaryKeyword="prospect data and HubSpot outbound"
      supportingKeywords={["B2B prospect data tools", "HubSpot outbound setup", "HubSpot sales pipeline setup", "data enrichment for outbound"]}
      sections={[
        { title: "Data tools help map the market", body: "Tools such as Apollo, Clay or ZoomInfo can be useful when the ICP is clear. Sales Hype uses the right mix to shape targeted prospect lists around roles, company size, sectors, geographies and buying signals." },
        { title: "HubSpot holds the pipeline", body: "Positive replies need ownership, stage movement and next actions. HubSpot becomes the place where interested leads are tracked instead of getting lost in inboxes." },
        { title: "The integration is commercial, not cosmetic", body: "The point is not just syncing contacts. The point is making sure outbound creates visible pipeline, clear follow-up and useful weekly decisions." },
      ]}
      bullets={["ICP mapping before any list is built.", "Decision-maker and company filters shaped around your market.", "Cold email sequences written for each campaign angle.", "Replies routed into HubSpot with clear ownership.", "Pipeline stages and follow-up tasks configured.", "Weekly reporting across replies, meetings and opportunities."]}
      faqs={[
        { question: "Can prospect data tools and HubSpot work together for outbound?", answer: "Yes. Tools like Apollo, Clay or ZoomInfo can support prospecting and enrichment while HubSpot holds pipeline, owners, stages and reporting. Sales Hype builds the process around the right stack for the campaign." },
        { question: "Do I need HubSpot before starting?", answer: "No. Sales Hype can work with your current setup or build a simple HubSpot pipeline if you need somewhere clean to land interested replies." },
        { question: "Is this only for UK companies?", answer: "No. Sales Hype works across the UK and GCC, including KSA-focused outbound motions." },
      ]}
    />
  );
}
