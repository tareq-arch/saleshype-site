import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "Cold Email Deliverability Review",
  description: "Cold email deliverability review for B2B founders: diagnose inbox placement risk, protect your main domain and fix outbound infrastructure before scaling campaigns.",
  alternates: { canonical: "/cold-email-deliverability-checklist" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Cold email deliverability review"
      title="Cold email deliverability problems are expensive to fix late."
      description="Sales Hype reviews the health of your outbound setup before volume scales: sending risk, inbox reputation, list quality, campaign behaviour and how replies move into HubSpot. You get a clear diagnosis, not a public playbook."
      primaryKeyword="cold email deliverability checklist"
      supportingKeywords={["cold email deliverability consultant", "cold email infrastructure review", "cold email warm up", "protect main domain cold email"]}
      sections={[
        { title: "Protect the business domain first", body: "Your main website and client communication domain should not carry unnecessary outbound risk. We review how your sending setup is separated from your core brand presence before campaigns go live." },
        { title: "Diagnose reputation before scaling", body: "Deliverability is not one switch. It is the combined effect of sending history, authentication, list quality, copy patterns, volume, replies and complaints. We look for the weak points before they become expensive." },
        { title: "Measure commercial signal, not vanity metrics", body: "Outbound only matters if it creates useful conversations. We focus on reply quality, meeting flow and pipeline movement rather than inflated open-rate dashboards." },
      ]}
      bullets={["Review of sending and inbox risk", "Checks for avoidable authentication and reputation problems", "Assessment of list quality before launch", "Review of campaign behaviour and early volume risk", "HubSpot reply-routing and ownership review", "Plain-English diagnosis of what should be fixed first", "Managed outbound setup available for teams that want it handled", "Built for B2B founders selling into the UK and GCC"]}
      faqs={[
        { question: "Is this a public cold email setup guide?", answer: "No. This page explains the risks we look for and the outcome of the service. The detailed operating process stays inside Sales Hype client work." },
        { question: "Why does deliverability matter before outbound starts?", answer: "If the sending setup is wrong, a good offer can still land in spam. Fixing the foundations before launch protects your brand and gives the campaign a fair chance to produce replies." },
        { question: "Can Sales Hype set this up for me?", answer: "Yes. Sales Hype handles outbound infrastructure, deliverability, prospect lists, sequence copy, campaign management and HubSpot routing as part of the managed outbound service." },
      ]}
    />
  );
}
