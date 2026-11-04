import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Impressum",
  description:
    "Anbieterkennzeichnung und Kontaktangaben der DIPACT, einer Marke der Lavut & Engel Sales Group GmbH.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white">Impressum</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-300">
          <p>DIPACT ist eine Marke der Lavut &amp; Engel Sales Group GmbH.</p>
          <p>Adresse: Berlin / Brandenburg</p>
          <p>E-Mail: hello@dipact.de</p>
          <p>Telefon: +49 (0) 30 000 000 00</p>
        </div>
      </main>
    </SiteLayout>
  );
}
