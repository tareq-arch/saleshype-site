import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saleshype.co.uk"),
  title: {
    default: "Sales Hype — Outbound Lead Generation & HubSpot Solutions Partner (UK & GCC)",
    template: "%s | Sales Hype",
  },
  description:
    "Managed B2B outbound lead generation for £1,800/month. HubSpot Solutions Partner running targeted Apollo campaigns, written sequences and full deliverability — built by operators in the UK and GCC.",
  keywords: [
    "outbound lead generation UK",
    "B2B lead generation UK",
    "managed cold email UK",
    "HubSpot Solutions Partner UK",
    "Apollo lead generation",
    "B2B outbound services",
    "sales pipeline UK",
    "HubSpot CRM implementation",
    "GCC lead generation",
    "Arabic B2B outbound",
  ],
  authors: [{ name: "Tareq Shaheen" }],
  creator: "Sales Hype",
  publisher: "Sales Hype Ltd",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.saleshype.co.uk",
    siteName: "Sales Hype",
    title: "Sales Hype — Outbound built by operators, not agencies",
    description:
      "Managed B2B outbound for £1,800/month. HubSpot Solutions Partner. UK & GCC. Targeted lists, written sequences, full deliverability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Hype — Outbound built by operators",
    description:
      "Managed B2B outbound for £1,800/month. HubSpot Solutions Partner.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

// JSON-LD structured data — critical for AI search citation
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sales Hype",
  legalName: "Sales Hype Ltd",
  url: "https://www.saleshype.co.uk",
  logo: "https://www.saleshype.co.uk/logo.png",
  description:
    "HubSpot Solutions Partner delivering managed B2B outbound lead generation for UK and GCC businesses. £1,800/month, three-month minimum, fully managed.",
  email: "hello@saleshype.co.uk",
  founder: {
    "@type": "Person",
    name: "Tareq Shaheen",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Apex House, 2nd Floor, Office 2a, Grand Arcade",
    addressLocality: "North Finchley, London",
    postalCode: "N12 0EH",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Place", name: "GCC" },
  ],
  knowsLanguage: ["en", "ar"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "HubSpot Solutions Partner",
    url: "https://ecosystem.hubspot.com/marketplace/solutions/sales-hype",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "B2B Outbound Lead Generation",
  provider: {
    "@type": "Organization",
    name: "Sales Hype",
  },
  description:
    "Managed B2B outbound lead generation including Apollo prospect list building, email sequence copywriting, domain warming, deliverability setup, full campaign management and weekly reporting.",
  areaServed: ["United Kingdom", "GCC", "United Arab Emirates", "Saudi Arabia"],
  offers: {
    "@type": "Offer",
    price: "1800",
    priceCurrency: "GBP",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1800",
      priceCurrency: "GBP",
      unitText: "MONTH",
    },
    eligibleDuration: {
      "@type": "QuantitativeValue",
      minValue: 3,
      unitCode: "MON",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is Sales Hype different from a marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sales Hype is built by an operator running outbound across multiple B2B businesses. The systems we build for clients are the same systems we run ourselves. We are a HubSpot Solutions Partner focused only on outbound infrastructure and revenue operations — not branding, ads, or content marketing.",
      },
    },
    {
      "@type": "Question",
      name: "How much does B2B outbound lead generation cost in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sales Hype charges £1,800 per month with a three-month minimum commitment. This is a fully managed retainer including prospect list building, sequence copywriting, domain and deliverability setup, campaign management, and weekly reporting. There is no setup fee.",
      },
    },
    {
      "@type": "Question",
      name: "How long does outbound lead generation take to produce results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Week one is onboarding and infrastructure setup. Week two launches the first sequences. First replies typically arrive within two to three weeks of launch. Meaningful pipeline begins month two as deliverability and targeting are optimised. Three months is the minimum window to evaluate.",
      },
    },
    {
      "@type": "Question",
      name: "What tools does Sales Hype use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build on HubSpot for CRM and pipeline visibility, and Apollo for prospect data and sequencing. We are a certified HubSpot Solutions Partner. We can integrate with existing stacks rather than forcing a rebuild.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with GCC and Saudi Arabia clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sales Hype operates across the UK and GCC. Our founder is fluent in all Arabic dialects, and we have built native Arabic WhatsApp follow-up sequences inside HubSpot — particularly relevant for the Saudi market where WhatsApp is the primary business channel.",
      },
    },
    {
      "@type": "Question",
      name: "What if my outbound doesn't work after three months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If outbound is not generating meaningful pipeline after three months, we believe the targeting or offer is wrong — not the execution. We will run a free strategic review at month three to diagnose. No long-term lock-in beyond the initial three-month minimum.",
      },
    },
    {
      "@type": "Question",
      name: "Do you also build HubSpot CRM systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As a HubSpot Solutions Partner we build full CRM and pipeline systems — typically as an add-on for outbound clients who need somewhere clean to land the leads they're generating. Available as a separate engagement for businesses that need the infrastructure first.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
