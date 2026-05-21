import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "Outsourced Lead Generation UK",
  description: "Outsourced lead generation for UK B2B teams that need managed outbound, prospect data, cold email campaigns, HubSpot routing and weekly pipeline reporting.",
  alternates: { canonical: "/outsourced-lead-generation" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Outsourced lead generation"
      title="Outsourced lead generation without losing control of your pipeline."
      description="Sales Hype runs outsourced B2B lead generation for companies that want outbound handled properly without hiring internally. We manage the system, surface interested conversations and keep your pipeline visible inside HubSpot."
      primaryKeyword="outsourced lead generation"
      supportingKeywords={["outsourced b2b lead generation", "outsourced lead generation services", "b2b appointment setting agency", "lead generation outsourcing UK"]}
      sections={[
        { title: "Outsourcing should not mean opacity", body: "Many outsourced lead generation providers send dashboards full of activity but little commercial context. Sales Hype reports on replies, meetings, pipeline movement and what the data is telling us." },
        { title: "The right work stays with you", body: "We build the outbound motion and manage the campaign. Your team handles the sales conversations once genuine interest appears, so expertise stays close to the buyer." },
        { title: "Useful before hiring in-house", body: "For founder-led teams, outsourced outbound can prove the market, messaging and follow-up model before committing to a full-time SDR or internal sales hire." },
      ]}
      bullets={["ICP and target-account mapping", "Prospect data and decision-maker research", "Cold email campaign writing and operation", "Deliverability and sending-risk management", "Reply routing into HubSpot", "Weekly commercial reporting and iteration"]}
      faqs={[
        { question: "Is outsourced lead generation right for a small B2B team?", answer: "It can be, especially when the buyer profile is clear and the average deal value is high enough to justify managed outbound." },
        { question: "Do you replace our sales team?", answer: "No. Sales Hype builds and operates the outbound system. Your team still owns qualified sales conversations and closing." },
        { question: "How long should outsourced outbound be tested?", answer: "Three months is the minimum sensible window. It gives enough time to launch, learn from replies and refine targeting." },
      ]}
    />
  );
}
