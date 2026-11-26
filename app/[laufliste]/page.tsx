import type { Metadata } from "next";
import { notFound } from "next/navigation";

const LauflisteUrl =
  "https://script.google.com/macros/s/AKfycbx6-QXjaUGJiRwPlp2rKpPpwCGj1KBhhFw4dz2mpI8nD_-wgPr3UKQPDdYHsflNEn9f/exec";

export const instant = false;

export const metadata: Metadata = {
  title: "DIPACT Laufliste",
  description: "Interne DIPACT Laufliste.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function LauflistePage({
  params,
}: {
  params: Promise<{ laufliste: string }>;
}) {
  const { laufliste } = await params;

  if (laufliste !== "laufliste" && laufliste !== "Laufliste") {
    notFound();
  }

  return (
    <main className="h-[100dvh] w-full overflow-hidden bg-slate-950">
      <iframe
        src={LauflisteUrl}
        title="DIPACT Laufliste"
        allow="accelerometer *; autoplay *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; local-network-access *; magnetometer *; midi *; payment *; picture-in-picture *; screen-wake-lock *; sync-xhr *; web-share *"
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        className="h-full w-full border-0"
      />
    </main>
  );
}
