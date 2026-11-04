import { Mail, MapPin, Phone } from "lucide-react";

import { ContactMessageForm } from "@/components/forms";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kontakt zu DIPACT",
  description:
    "Kontaktieren Sie DIPACT zu Vertriebsprojekten, Geschäftspartnerschaften und allgemeinen Fragen. Wir sind in Berlin und Brandenburg aktiv.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Kontakt
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Sprechen wir miteinander.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Sie möchten ein Vertriebsprojekt besprechen oder haben eine Frage zu
            DIPACT? Schreiben Sie uns. Für Bewerbungen nutzen Sie bitte unser
            Karriereformular.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-white">
              Kontaktinformationen
            </h2>
            <div className="mt-8 space-y-6 text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-300" />
                <span>Berlin / Brandenburg</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-300" />
                <span>hello@dipact.de</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-300" />
                <span>+49 (0) 30 000 000 00</span>
              </div>
            </div>
          </div>

          <ContactMessageForm />
        </div>
      </section>
    </SiteLayout>
  );
}
