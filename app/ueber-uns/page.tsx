import { ArrowRight, Building2, HeartHandshake, Users } from "lucide-react";
import Link from "next/link";

import { SiteLayout } from "@/components/site-layout";

const values = [
  {
    title: "Menschen stehen im Mittelpunkt",
    description:
      "Wir glauben an Menschen, die Verantwortung übernehmen, sich weiterentwickeln und im Team wirken.",
  },
  {
    title: "Klare Strukturen",
    description:
      "Professioneller Vertrieb braucht Ordnung, Transparenz und verlässliche Prozesse.",
  },
  {
    title: "Authentische Zusammenarbeit",
    description:
      "Wir arbeiten ehrlich, respektvoll und mit Fokus auf echte Ergebnisse.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Über uns
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Wir glauben an Menschen, die etwas bewegen wollen.
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            <div className="aspect-[4/3] bg-[radial-gradient(circle_at_20%_20%,_rgba(251,146,60,0.28),_transparent_18%),linear-gradient(135deg,_#0f172a,_#1e293b)]" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              DIPACT ist die Vertriebsmarke der Lavut &amp; Engel Sales Group
              GmbH. Wir verbinden praktische Erfahrung im Direktvertrieb mit dem
              Anspruch, starke Teams und langfristige Partnerschaften
              aufzubauen.
            </p>
            <p>
              Aus operativer Erfahrung, dem Aufbau eigener Teams und dem Wunsch,
              Vertrieb besser zu organisieren, entstand die Lavut &amp; Engel
              Sales Group GmbH – und mit DIPACT eine eigenständige Marke.
            </p>
            <p>
              Wir setzen auf Vorbereitung, Verbindlichkeit und gegenseitiges
              Feedback. Wer im Direktvertrieb erfolgreich sein will, muss
              Menschen verstehen, Verantwortung übernehmen und bereit sein, sich
              immer wieder zu verbessern.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Die Gründer
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Aus Vertriebserfahrung wurde eine eigene Organisation.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
              <div className="mb-5 aspect-[4/5] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,_rgba(251,146,60,0.25),_transparent_18%),linear-gradient(135deg,_#1e293b,_#0f172a)]" />
              <h3 className="text-2xl font-bold text-white">Maxim Engel</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.15em] text-orange-300">
                Geschäftsführer
              </p>
              <p className="mt-4 text-slate-300">
                Mit Fokus auf klare Prozesse, Vertriebsleistung und
                verantwortungsbewusste Begleitung.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
              <div className="mb-5 aspect-[4/5] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,_rgba(251,146,60,0.25),_transparent_18%),linear-gradient(135deg,_#1e293b,_#111827)]" />
              <h3 className="text-2xl font-bold text-white">Alexander Lavut</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.15em] text-orange-300">
                Gesellschafter
              </p>
              <p className="mt-4 text-slate-300">
                Mit Blick auf nachhaltige Entwicklung, starke Teams und
                erfolgreiche direkte Kundenbeziehungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Unsere Haltung
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Leistung entsteht nicht allein.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-white/10 bg-slate-900 p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3 text-orange-300">
                {title.includes("Menschen") ? (
                  <Users className="h-5 w-5" />
                ) : title.includes("Strukturen") ? (
                  <Building2 className="h-5 w-5" />
                ) : (
                  <HeartHandshake className="h-5 w-5" />
                )}
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/80 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Team
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Lern uns persönlich kennen.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/karriere"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-slate-950"
            >
              Karriere entdecken
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
