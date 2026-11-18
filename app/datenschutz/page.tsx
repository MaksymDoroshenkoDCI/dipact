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
            Unsere Datenschutzerklärung erläutert, wie die Lavut &amp; Engel
            Sales Group GmbH personenbezogene Daten im Zusammenhang mit dieser
            Website verarbeitet. Sie enthält Informationen zu Hosting,
            Formularen, Bewerbungen, Cookies und Ihren Rechten.
          </p>
          <a
            href="/DIPACT_Impressum_Datenschutz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-5 py-3 text-base font-semibold text-orange-200 transition hover:border-orange-300 hover:bg-orange-500/20"
          >
            Impressum &amp; Datenschutzerklärung als PDF öffnen
          </a>
        </div>
      </main>
    </SiteLayout>
  );
}
