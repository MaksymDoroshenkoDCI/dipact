import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { CompanyRequestForm } from "@/components/forms";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Direktvertrieb für Unternehmen",
  description:
    "DIPACT unterstützt Unternehmen mit persönlichem Direktvertrieb, Teamaufbau und operativer Vertriebssteuerung in Berlin und Brandenburg.",
  path: "/fuer-unternehmen",
});

const services = [
  {
    title: "Persönlicher Direktvertrieb",
    description: "Kundengespräche im direkten Kontakt.",
    icon: Sparkles,
  },
  {
    title: "Recruiting und Einarbeitung",
    description: "Gewinnung und Vorbereitung geeigneter Vertriebskräfte.",
    icon: ClipboardCheck,
  },
  {
    title: "Gebiets- und Einsatzplanung",
    description: "Koordination der täglichen Vertriebsaktivitäten.",
    icon: MapPinned,
  },
  {
    title: "Operative Führung",
    description: "Begleitung, Feedback und Leistungssteuerung.",
    icon: BarChart3,
  },
  {
    title: "Qualität",
    description: "Dokumentation und Kontrolle vereinbarter Prozessstandards.",
    icon: ShieldCheck,
  },
];

const workflow = [
  "Bedarf verstehen",
  "Einsatz vorbereiten",
  "Vertrieb umsetzen",
  "Ergebnisse auswerten",
];

export default function CompanyPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Für Unternehmen
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Direktvertrieb, der professionell organisiert ist.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Sie suchen einen Partner für die persönliche Kundenansprache?
              DIPACT unterstützt die Umsetzung von Direktvertriebsprojekten mit
              operativer Erfahrung, strukturiertem Teamaufbau und klarer
              Steuerung.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projekt-anfrage"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-slate-950"
              >
                Projekt anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Fokus</p>
                <h2 className="text-2xl font-bold text-white">
                  Energie / Berlin &amp; Brandenburg
                </h2>
              </div>
              <MapPinned className="h-8 w-8 text-orange-300" />
            </div>
            <p className="text-slate-300">
              Unser Schwerpunkt liegt aktuell im persönlichen Vertrieb von
              Energieprodukten in Berlin und Brandenburg. Weitere Projekte
              prüfen wir anhand von Produkt, Region, Kapazität und
              Qualitätsanforderungen.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Leistungen
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Von der Planung bis zum Einsatz im Gebiet.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3 text-orange-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            So arbeiten wir
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Klare Abläufe. Klare Ansprechpartner.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {workflow.map((step, index) => (
            <div
              key={step}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-200">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Erfahrung
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Erfahrung aus dem Energie-Direktvertrieb.
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            Unser Schwerpunkt liegt aktuell im persönlichen Vertrieb von
            Energieprodukten in Berlin und Brandenburg. Weitere Projekte prüfen
            wir anhand von Produkt, Region, Kapazität und
            Qualitätsanforderungen.
          </p>
        </div>
      </section>

      <section
        id="projekt-anfrage"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Kontakt
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Teilen Sie uns mit, welches Produkt Sie vertreiben möchten, welche
            Regionen relevant sind und wann ein Projekt starten soll. Wir melden
            uns für ein erstes Gespräch.
          </p>
        </div>

        <CompanyRequestForm />
      </section>
    </SiteLayout>
  );
}
