import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calendar,
  ChevronDown,
  CircleDollarSign,
  Rocket,
  Users,
} from "lucide-react";
import Link from "next/link";

import { CandidateApplicationForm } from "@/components/forms";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Karriere im Direktvertrieb",
  description:
    "Starte bei DIPACT im persönlichen Vertrieb. Entdecke Aufgaben, Einarbeitung und Entwicklungsmöglichkeiten in Berlin und Brandenburg.",
  path: "/karriere",
});

const benefits = [
  {
    title: "Einarbeitung",
    description: "Produktwissen, Gesprächsführung und praktische Begleitung.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Training",
    description: "Regelmäßige Übungen und individuelles Feedback.",
    icon: BadgeCheck,
  },
  {
    title: "Team",
    description: "Gemeinsame Vorbereitung und Unterstützung im Gebiet.",
    icon: Users,
  },
  {
    title: "Entwicklung",
    description:
      "Perspektiven in Teamleitung, Gebietsleitung oder Training bei entsprechender Eignung und Leistung.",
    icon: Rocket,
  },
  {
    title: "Vergütung",
    description:
      "Abhängig vom vereinbarten Beschäftigungsmodell; Details im persönlichen Gespräch.",
    icon: CircleDollarSign,
  },
];

const timeline = [
  "Ankommen",
  "Tagesbriefing",
  "Training",
  "Fahrt ins Gebiet",
  "Kundenkontakt",
  "Tagesabschluss",
];

const ladder = [
  "Einstieg im Vertrieb",
  "Übernahme zusätzlicher Verantwortung",
  "Teamleitung",
  "Weitere Führungs- oder Trainingsaufgaben",
];

const faqItems = [
  {
    question: "Brauche ich Erfahrung?",
    answer: "Nicht zwingend. Entscheidend ist, dass du lernen möchtest.",
  },
  {
    question: "Ist das Haustürvertrieb?",
    answer: "Ja, persönlicher Direktvertrieb ist Teil unserer Tätigkeit.",
  },
  {
    question: "Wie werde ich eingearbeitet?",
    answer: "Mit Schulungen, Übungen und Begleitung im Alltag.",
  },
  {
    question: "Gibt es Festanstellung und Selbstständigkeit?",
    answer:
      "Ja, je nach ausgeschriebener Position und individueller Vereinbarung.",
  },
];

export default function KarrierePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Karriere
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Kein gewöhnlicher Bürojob. Aber vielleicht genau dein Ding.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Du gehst gerne auf Menschen zu, willst etwas lernen und bist
              bereit, dich anzustrengen? Dann lern DIPACT kennen. Wir suchen
              Menschen, die im Vertrieb etwas bewegen wollen – mit oder ohne
              Vorerfahrung.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#bewerbung"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 font-semibold text-slate-950"
              >
                Jetzt unkompliziert bewerben
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Tätigkeit</p>
                <h2 className="text-2xl font-bold text-white">
                  Direct Sales / Haustürvertrieb
                </h2>
              </div>
              <Building2 className="h-8 w-8 text-orange-300" />
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                Du sprichst persönlich mit potenziellen Kunden, erklärst
                Produkte verständlich, beantwortest Fragen und begleitest
                Interessenten durch den Abschlussprozess.
              </p>
              <p>
                Du arbeitest in einem Team, bereitest dich gemeinsam auf den Tag
                vor und erhältst Feedback zu deiner Entwicklung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Was wir bieten
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Du bringst Einsatz mit. Wir geben dir Struktur.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {benefits.map(({ title, description, icon: Icon }) => (
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
            Für wen passt DIPACT?
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Erfahrung ist hilfreich. Einstellung ist entscheidend.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Du bist zuverlässig, offen für Feedback, kommunizierst gerne und
            kannst auch nach einem schwierigen Gespräch weitermachen? Dann
            sollten wir sprechen. Erfahrung im Vertrieb ist willkommen, aber
            keine Voraussetzung für jede Einstiegsposition.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Ein Tag bei DIPACT
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Schau dir an, wie unser Alltag wirklich aussieht.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-6">
          {timeline.map((step, index) => (
            <div
              key={step}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-5"
            >
              <div className="mb-4 flex items-center justify-between text-sm text-orange-300">
                <span>{index + 1}</span>
                <Calendar className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-bold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/80 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Entwicklung
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              Deine Entwicklung hört nicht beim ersten Abschluss auf.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {ladder.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-6 text-center"
              >
                <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-200">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{step}</h3>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-slate-300">
            Entwicklungsmöglichkeiten sind leistungs- und bedarfsabhängig; keine
            automatischen Beförderungsversprechen.
          </p>
        </div>
      </section>

      <section
        id="bewerbung"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Bewerbung
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Keine lange Bewerbung. Ein erstes Gespräch.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Erzähl uns kurz, wer du bist. Wir melden uns, um gemeinsam zu
            schauen, ob DIPACT zu dir passt.
          </p>
        </div>

        <CandidateApplicationForm />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">
            Häufige Fragen
          </h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-[1.25rem] border border-white/10 bg-slate-900 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>
                <ChevronDown className="h-5 w-5 text-orange-300" />
              </div>
              <p className="mt-3 text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
