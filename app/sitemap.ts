import type { MetadataRoute } from "next";

const siteUrl = "https://dipact.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/karriere`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/fuer-unternehmen`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/ueber-uns`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/kontakt`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/impressum`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/datenschutz`, changeFrequency: "yearly", priority: 0.3 },
  ];
}