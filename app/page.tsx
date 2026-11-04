import { ArrowRight, Sparkles, Users, Wand2 } from "lucide-react";
import Link from "next/link";

import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Direktvertrieb mit Wirkung",
  description:
    "DIPACT baut Vertriebsteams auf, entwickelt Menschen und unterstützt Unternehmen im persönlichen Direktvertrieb in Berlin und Brandenburg.",
  path: "/",
});

const featureCards = [
  {
    title: "Einsatz",
    description: "Wir übernehmen Verantwortung für unsere Ergebnisse.",
    icon: Sparkles,
  },
  {
    title: "Entwicklung",
    description:
      "Wir trainieren Kommunikation, Produktwissen und Vertriebskompetenz.",
    icon: Wand2,
  },
  {
    title: "Zusammenhalt",
    description: "Wir unterstützen uns im Alltag und lernen voneinander.",
    icon: Users,
  },
];

const teamMembers = [
  {
    name: "Maxim Engel",
    role: "Geschäftsführer",
    quote: "Wir bauen mit Menschen, nicht gegen sie.",
  },
  {
    name: "Alexander Lavut",
    role: "Gesellschafter",
    quote:
      "Vertrieb funktioniert, wenn Klarheit, Haltung und Umsetzung zusammenpassen.",
  },
  {
    name: "Sarah Möller",
    role: "Team Lead",
    quote: "Man wächst durch Verantwortung und echte Verantwortung im Team.",
  },
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              Direct sales. maximum impact.
            </div>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              DIRECT SALES. MAXIMUM IMPACT.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Wir sind DIPACT. Wir bauen Vertriebsteams auf, entwickeln Menschen
              und bringen Unternehmen im persönlichen Kundenkontakt voran.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/karriere"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-slate-950 transition hover:brightness-110"
              >
                Karriere entdecken
              </Link>
              <Link
                href="/fuer-unternehmen"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-orange-400/50 hover:bg-white/10"
              >
                Für Unternehmen
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4 shadow-2xl shadow-orange-500/10">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.2),_transparent_40%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(30,41,59,0.9))] p-6">
              <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-slate-950/50 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>Briefing</span>
                  <span>Team</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-24 rounded-full bg-orange-500/80" />
                  <div className="h-2 w-40 rounded-full bg-slate-700" />
                  <div className="h-2 w-32 rounded-full bg-slate-700" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {new Array(6).fill(0).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-20 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-700"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Außendienst</span>
                  <span>Ergebnisse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <div className="aspect-[4/3] bg-[linear-gradient(120deg,_rgba(249,115,22,0.14),_transparent_60%),linear-gradient(135deg,_#111827,_#0f172a)]" />
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Wer wir sind
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Vertrieb ist unser Geschäft. Menschen sind unsere Stärke.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Guter Direktvertrieb entsteht nicht zufällig. Er braucht Menschen,
              die Verantwortung übernehmen, eine gründliche Einarbeitung und
              Teams, die gemeinsam besser werden. Genau daran arbeiten wir bei
              DIPACT – jeden Tag.
            </p>
            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />
                <span>
                  Wir bauen Vertriebsteams auf, entwickeln Menschen und bringen
                  Unternehmen im persönlichen Kundenkontakt voran.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />
                <span>
                  Klare Prozesse, echte Beziehungen und eine professionelle
                  Tagesarbeit stehen im Mittelpunkt.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Was uns ausmacht
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Einsatz. Entwicklung. Zusammenhalt.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featureCards.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-slate-900 p-8"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-orange-500/15 p-3 text-orange-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/80 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Karriere
          </p>
          <h2 className="max-w-3xl text-3xl font-black text-white sm:text-4xl">
            Du willst mehr aus dir machen?
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Du brauchst keinen perfekten Lebenslauf, um bei uns anzufangen.
            Entscheidend sind deine Bereitschaft zu lernen, deine
            Zuverlässigkeit und dein Umgang mit Menschen. Wir zeigen dir, wie
            professioneller Direktvertrieb funktioniert.
          </p>
          <Link
            href="/karriere"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-200"
          >
            Karriere bei DIPACT
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8 md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Für Unternehmen
              </p>
              <h2 className="mt-4 text-3xl font-black text-white">
                Direktvertrieb braucht klare Strukturen.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Wir unterstützen Unternehmen bei der Umsetzung persönlicher
                Vertriebsprojekte – mit Teamaufbau, Einarbeitung,
                Gebietsorganisation und laufender Vertriebssteuerung.
              </p>
            </div>
            <Link
              href="/fuer-unternehmen"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-6 py-3 font-semibold text-orange-200 transition hover:border-orange-300 hover:bg-orange-500/20"
            >
              Zusammenarbeit anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Menschen hinter DIPACT
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Lerne die Menschen kennen, die DIPACT ausmachen.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Echte Einblicke statt austauschbarer Versprechen: Wer wir sind, wie
            wir arbeiten und was uns antreibt.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900"
            >
              <div className="aspect-[4/5] bg-[radial-gradient(circle_at_20%_20%,_rgba(251,146,60,0.35),_transparent_20%),linear-gradient(135deg,_#1e293b,_#0f172a)]" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-orange-300">
                  {member.role}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  “{member.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Abschluss
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Dein nächster Schritt beginnt hier.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/karriere"
              className="rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-slate-950"
            >
              Jetzt bewerben
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white"
            >
              Projekt besprechen
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
