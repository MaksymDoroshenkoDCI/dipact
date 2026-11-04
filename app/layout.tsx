import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dipact.de"),
  title: "DIPACT | Direct Sales. Maximum Impact.",
  description:
    "DIPACT ist eine Marke der Lavut & Engel Sales Group GmbH. Wir bauen Vertriebsteams auf, entwickeln Menschen und bringen Unternehmen im persönlichen Kundenkontakt voran.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://dipact.de",
    siteName: "DIPACT",
    title: "DIPACT | Direct Sales. Maximum Impact.",
    description:
      "DIPACT baut Vertriebsteams auf, entwickelt Menschen und bringt Unternehmen im persönlichen Kundenkontakt voran.",
  },
  twitter: {
    card: "summary",
    title: "DIPACT | Direct Sales. Maximum Impact.",
    description:
      "Direktvertrieb, Karriere und Vertriebsprojekte in Berlin und Brandenburg.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
