import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "Apollo and HubSpot Outbound Setup",
  description: "Apollo prospecting and HubSpot outbound setup for B2B teams. Sales Hype builds lists, sequences, reply routing, pipeline stages and weekly reporting.",
  alternates: { canonical: "/apollo-hubspot-outbound" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Apollo and HubSpot outbound"
      title="Apollo lists connected to a HubSpot pipeline your team can actually use."
      description="Sales Hype builds the outbound bridge between Apollo and HubSpot: target accounts, verified contacts, cold email sequences, interested-reply routing, deal stages, tasks and weekly reporting."
      primaryKeyword="Apollo HubSpot outbound"
      supportingKeywords={["Apollo lead generation service", "HubSpot outbound setup", "HubSpot sales pipeline setup", "Apollo prospect lists"]}
      sections={[
        { title: "Apollo finds the market", body: "Apollo is powerful when the ICP is clear. Sales Hype uses it to build targeted prospect lists around roles, company size, sectors, geographies and buying signals." },
        { title: "HubSpot holds the pipeline", body: "Positive replies need ownership, stage movement and next actions. HubSpot becomes the place where interested leads are tracked instead of getting lost in inboxes." },
        { title: "The integration is commercial, not cosmetic", body: "The point is not just syncing contacts. The point is making sure outbound creates visible pipeline, clear follow-up and useful weekly decisions." },
      ]}
      bullets={["ICP mapping before Apollo list building.", "Decision-maker and company filters configured around your market.", "Cold email sequences written for each campaign angle.", "Replies routed into HubSpot with clear ownership.", "Pipeline stages and follow-up tasks configured.", "Weekly reporting across replies, meetings and opportunities."]}
      faqs={[
        { question: "Can Apollo and HubSpot work together for outbound?", answer: "Yes. Apollo can support prospecting and sequencing while HubSpot holds pipeline, owners, stages and reporting. Sales Hype builds the process around both tools." },
        { question: "Do I need HubSpot before starting?", answer: "No. Sales Hype can work with your current setup or build a simple HubSpot pipeline if you need somewhere clean to land interested replies." },
        { question: "Is this only for UK companies?", answer: "No. Sales Hype works across the UK and GCC, including KSA-focused outbound motions." },
      ]}
    />
  );
}
