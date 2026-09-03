import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jkdigitalsolutions.in";

const sections = [
  "", "services", "why", "testimonials", "faq", "contact",
];

const pages = ["privacy", "terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const sectionEntries: MetadataRoute.Sitemap = sections.map(section => ({
    url: section ? `${siteUrl}/#${section}` : siteUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: section === "" ? 1 : 0.7,
  }));
  const pageEntries: MetadataRoute.Sitemap = pages.map(page => ({
    url: `${siteUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));
  return [...sectionEntries, ...pageEntries];
}
