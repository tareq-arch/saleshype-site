import type { Metadata } from "next";
import { SeoLandingPage } from "../seo-page-template";

export const metadata: Metadata = {
  title: "Cold Email Deliverability Checklist",
  description: "A practical cold email deliverability checklist for B2B founders: secondary domains, SPF, DKIM, DMARC, warm-up, tracking, list quality and HubSpot routing.",
  alternates: { canonical: "/cold-email-deliverability-checklist" },
};

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Cold email deliverability checklist"
      title="Cold email deliverability checklist for B2B founders."
      description="Before you send cold outbound, protect your main domain, authenticate your sending setup, warm your inboxes, clean your lists and decide how interested replies will move into your pipeline."
      primaryKeyword="cold email deliverability checklist"
      supportingKeywords={["cold email deliverability consultant", "SPF DKIM DMARC cold email", "cold email warm up", "protect main domain cold email"]}
      sections={[
        { title: "Your main domain is sacred", body: "Do not use the domain your business depends on for cold outbound. Cold email should run through secondary sending domains and inboxes built for that purpose." },
        { title: "Authentication is not optional", body: "SPF, DKIM and DMARC help receiving servers understand that your mail is legitimate. If these records are missing or wrong, the campaign starts with avoidable risk." },
        { title: "Measure replies, not vanity metrics", body: "Open tracking can create noisy data and may affect deliverability. For outbound, positive replies and meetings matter more than inflated open rates." },
      ]}
      bullets={["Buy secondary sending domains, not just extra inboxes.", "Set SPF, DKIM and DMARC before sending.", "Warm inboxes before scaling volume.", "Keep early send volume conservative.", "Avoid image-heavy HTML and newsletter-style formatting.", "Clean and verify Apollo lists before launch.", "Segment by ICP, market and decision-maker role.", "Route interested replies into HubSpot with clear ownership."]}
      faqs={[
        { question: "What is cold email deliverability?", answer: "Cold email deliverability is the ability of outbound emails to reach the inbox rather than spam. It depends on domain setup, authentication, reputation, list quality, copy, sending volume and recipient engagement." },
        { question: "What records do I need before sending cold email?", answer: "You should configure SPF, DKIM and DMARC on your sending domains before launching outbound." },
        { question: "Can Sales Hype set this up for me?", answer: "Yes. Sales Hype handles domain setup, warm-up, deliverability, lists, copy, campaign management and HubSpot routing as part of the managed outbound service." },
      ]}
    />
  );
}
