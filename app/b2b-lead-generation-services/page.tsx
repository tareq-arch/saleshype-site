import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "B2B Lead Generation Services UK",
  description: "B2B lead generation services for UK companies that need managed outbound, clean prospect data, cold email sequences, HubSpot routing and weekly pipeline reporting.",
  alternates: { canonical: "/b2b-lead-generation-services" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="B2B lead generation services"
      title="B2B lead generation services for companies that need real pipeline."
      description="Sales Hype builds and runs managed B2B lead generation services for founder-led teams. We combine market mapping, prospect data, outbound copy, protected sending setup, deliverability management and HubSpot reporting so positive replies become visible sales opportunities."
      primaryKeyword="B2B lead generation services"
      supportingKeywords={["b2b lead generation", "lead generation agency", "b2b lead generation agency", "lead generation services UK"]}
      sections={[
        { title: "A service, not a lead list", body: "A spreadsheet of contacts is not pipeline. Sales Hype builds the operating layer around outbound: who to target, what to say, how to protect deliverability, where replies go and how the commercial team follows up." },
        { title: "Built for founder-led B2B", body: "The offer is designed for companies with clear buyers and meaningful deal values: professional services, recruitment, hospitality supply, project management, specialist consulting and other B2B services." },
        { title: "Weekly visibility", body: "You see reply quality, meetings, pipeline movement and deliverability health every week. The work is measured by useful conversations, not vanity activity." },
      ]}
      bullets={["Ideal customer profile and market mapping", "Prospect data built around decision-makers", "Cold email sequences written in a direct operator voice", "Protected sending and deliverability management", "Interested replies routed into HubSpot", "Weekly reporting on replies, meetings and pipeline"]}
      faqs={[
        { question: "What are B2B lead generation services?", answer: "B2B lead generation services help companies identify target accounts, reach decision-makers and turn interested responses into sales conversations. Sales Hype focuses on managed outbound rather than generic marketing activity." },
        { question: "Who is Sales Hype best for?", answer: "Sales Hype is best for B2B services with clear decision-makers, founder-led or director-led teams, and average deal values that justify a managed outbound motion." },
        { question: "How much does Sales Hype cost?", answer: "Sales Hype is GBP 1,800 per month with a three-month minimum and no setup fee." },
      ]}
    />
  );
}
