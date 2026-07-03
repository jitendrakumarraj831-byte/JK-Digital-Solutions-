import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jkdigitalsolutions.in";

const sections = [
  "", "services", "portfolio", "case-studies", "testimonials",
  "pricing", "blog", "faq", "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return sections.map(section => ({
    url: section ? `${siteUrl}/#${section}` : siteUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: section === "" ? 1 : 0.7,
  }));
}
