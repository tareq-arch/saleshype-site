import type { MetadataRoute } from "next";

const baseUrl = "https://www.saleshype.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/b2b-outbound-lead-generation-uk",
    "/managed-cold-email-uk",
    "/cold-email-agency-uk",
    "/apollo-hubspot-outbound",
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
