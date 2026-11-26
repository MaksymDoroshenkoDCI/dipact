import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard",
        "/dashboard/",
        "/Laufliste",
        "/Laufliste/",
        "/laufliste",
        "/laufliste/",
      ],
    },
    sitemap: "https://dipact.de/sitemap.xml",
    host: "https://dipact.de",
  };
}
