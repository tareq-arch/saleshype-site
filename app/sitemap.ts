import type { MetadataRoute } from "next";

const baseUrl = "https://www.saleshype.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/b2b-lead-generation-services",
    "/b2b-outbound-lead-generation-uk",
    "/outsourced-lead-generation",
    "/managed-cold-email-uk",
    "/cold-email-agency",
    "/cold-email-agency-uk",
    "/apollo-hubspot-outbound",
    "/hubspot-solutions-partner-uk",
    "/gcc-lead-generation",
    "/cold-email-deliverability-checklist",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
