import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Datenschutzhinweise",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten bei der Nutzung der DIPACT-Website und ihrer Kontaktformulare.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white">Datenschutz</h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-300">
          <p>
            Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der
            gesetzlichen Bestimmungen.
          </p>
          <p>
            Kontaktformulare werden zur Bearbeitung der Anfrage verarbeitet und
            nicht an Dritte weitergegeben, sofern keine gesetzliche
            Verpflichtung besteht.
          </p>
          <p>
            Weitere Details werden an dieser Stelle entsprechend der rechtlichen
            Anforderungen ergänzt.
          </p>
        </div>
      </main>
    </SiteLayout>
  );
}
