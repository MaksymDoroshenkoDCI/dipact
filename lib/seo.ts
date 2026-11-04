import type { Metadata } from "next";

const siteUrl = "https://dipact.de";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const fullTitle = `${title} | DIPACT`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: canonicalUrl,
      siteName: "DIPACT",
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}