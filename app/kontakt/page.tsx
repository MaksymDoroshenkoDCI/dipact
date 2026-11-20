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
                <span>Innsbrucker Straße 25, 10825 Berlin</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-300" />
                <span>info@lavut-engel.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-300" />
                <span>+49 (30) 814574359</span>
              </div>
            </div>
          </div>

          <ContactMessageForm />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-white">Unser Standort</h2>
          <p className="mt-2 text-slate-300">
            Innsbrucker Straße 25, 10825 Berlin
          </p>
          <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 sm:aspect-[16/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4644971729526!2d13.340149712799924!3d52.480100139065186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85068c9216eb5%3A0xd8c2a5eb2f44ccc3!2sInnsbrucker%20Str.%2025%2C%2010825%20Berlin-Bezirk%20Tempelhof-Sch%C3%B6neberg!5e1!3m2!1suk!2sde!4v1795170251898!5m2!1suk!2sde"
              title="Karte: Innsbrucker Straße 25, 10825 Berlin"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
