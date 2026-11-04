"use client";

import { useState } from "react";
import { Search } from "lucide-react";

type Candidate = { id: string; name: string; email: string; phone: string; location: string; hasExperience: boolean; workModel: string; message: string | null; createdAt: string };
type Company = { id: string; company: string; contactPerson: string; email: string; phone: string; region: string; startDate: string; message: string | null; createdAt: string };
type Contact = { id: string; name: string; email: string; phone: string | null; subject: string; message: string; createdAt: string };
type Monthly = { key: string; label: string; candidates: number; companies: number; contacts: number };

export type DashboardData = {
  totals: { candidates: number; companies: number; contacts: number; newThisMonth: number };
  monthly: Monthly[];
  candidates: Candidate[];
  companies: Company[];
  contacts: Contact[];
};

const tabs = [
  { id: "all", label: "Alle Anfragen" },
  { id: "candidates", label: "Bewerbungen" },
  { id: "companies", label: "Unternehmen" },
  { id: "contacts", label: "Kontakt" },
] as const;

type Tab = (typeof tabs)[number]["id"];

export function DashboardView({ data }: { data: DashboardData }) {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [search, setSearch] = useState("");
  const maximum = Math.max(1, ...data.monthly.map((month) => month.candidates + month.companies + month.contacts));

  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_1.95fr]">
      <section className="rounded-xl border border-white/10 bg-slate-900 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4"><div><h2 className="font-semibold text-white">Eingänge im Zeitverlauf</h2><p className="mt-1 text-sm text-slate-400">Anfragen pro Monat nach Typ</p></div><span className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-400">6 Monate</span></div>
        <div className="mt-7 flex h-48 items-end gap-3 border-b border-l border-white/10 px-2 pb-2 sm:gap-4">
          {data.monthly.map((month) => {
            const candidateHeight = (month.candidates / maximum) * 100;
            const companyHeight = (month.companies / maximum) * 100;
            const contactHeight = (month.contacts / maximum) * 100;
            return <div key={month.key} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"><div className="flex h-full w-full items-end justify-center gap-1" title={`${month.label}: ${month.candidates + month.companies + month.contacts} Anfragen`}><div className="w-2/5 rounded-t-sm bg-orange-400" style={{ height: `${candidateHeight}%`, minHeight: month.candidates ? 3 : 0 }} /><div className="w-2/5 rounded-t-sm bg-cyan-400" style={{ height: `${companyHeight}%`, minHeight: month.companies ? 3 : 0 }} /><div className="w-2/5 rounded-t-sm bg-emerald-400" style={{ height: `${contactHeight}%`, minHeight: month.contacts ? 3 : 0 }} /></div><span className="text-[11px] text-slate-500">{month.label}</span></div>;
          })}
        </div>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400"><Legend color="bg-orange-400" label="Bewerbungen" /><Legend color="bg-cyan-400" label="Unternehmen" /><Legend color="bg-emerald-400" label="Kontakt" /></div>
        <div className="mt-6 border-t border-white/10 pt-5"><div className="flex justify-between text-sm"><span className="text-slate-400">Neue Anfragen diesen Monat</span><span className="font-semibold tabular-nums text-white">{data.totals.newThisMonth}</span></div></div>
      </section>

      <section className="min-w-0 rounded-xl border border-white/10 bg-slate-900">
        <div className="border-b border-white/10 px-5 pt-5 sm:px-6 sm:pt-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><h2 className="font-semibold text-white">Anfragen</h2><p className="mt-1 text-sm text-slate-400">Zuletzt eingegangene Formulare</p></div><label className="relative block w-full sm:max-w-xs"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Name, E-Mail, Region..." className="w-full rounded-lg border border-white/10 bg-slate-950 py-2.5 pl-9 pr-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-orange-400" aria-label="Anfragen durchsuchen" /></label></div>
          <div className="mt-5 flex gap-5 overflow-x-auto" role="tablist" aria-label="Anfragen filtern">{tabs.map((tab) => <button key={tab.id} role="tab" aria-selected={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} className={`shrink-0 border-b-2 pb-3 text-sm transition ${activeTab === tab.id ? "border-orange-400 text-orange-300" : "border-transparent text-slate-400 hover:text-white"}`}>{tab.label}</button>)}</div>
        </div>
        <div className="overflow-x-auto">
          {(activeTab === "all" || activeTab === "candidates") && <CandidateTable rows={filterRows(data.candidates, search, (row) => `${row.name} ${row.email} ${row.phone} ${row.location} ${row.workModel}`)} />}
          {(activeTab === "all" || activeTab === "companies") && <CompanyTable rows={filterRows(data.companies, search, (row) => `${row.company} ${row.contactPerson} ${row.email} ${row.region}`)} />}
          {(activeTab === "all" || activeTab === "contacts") && <ContactTable rows={filterRows(data.contacts, search, (row) => `${row.name} ${row.email} ${row.subject} ${row.message}`)} />}
        </div>
        <p className="border-t border-white/10 px-5 py-3 text-xs text-slate-500 sm:px-6">Maximal 200 aktuelle Einträge je Kategorie.</p>
      </section>
    </div>
  );
}

function filterRows<T>(rows: T[], query: string, getText: (row: T) => string) {
  const normalized = query.trim().toLowerCase();
  return normalized ? rows.filter((row) => getText(row).toLowerCase().includes(normalized)) : rows;
}

function Legend({ color, label }: { color: string; label: string }) {
  return <span className="inline-flex items-center gap-2"><span className={`h-2 w-2 rounded-sm ${color}`} />{label}</span>;
}

function DateCell({ value }: { value: string }) {
  return <time dateTime={value} className="whitespace-nowrap text-slate-400">{new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value))}</time>;
}

function EmptyState() {
  return <tr><td colSpan={6} className="px-5 py-10 text-center text-sm text-slate-500">Keine passenden Anfragen gefunden.</td></tr>;
}

function CandidateTable({ rows }: { rows: Candidate[] }) {
  return <table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950/50 text-xs uppercase text-slate-500"><tr><th className="px-5 py-3 font-medium">Bewerber</th><th className="px-5 py-3 font-medium">Kontakt</th><th className="px-5 py-3 font-medium">Ort / Modell</th><th className="px-5 py-3 font-medium">Erfahrung</th><th className="px-5 py-3 font-medium">Eingang</th></tr></thead><tbody className="divide-y divide-white/5">{rows.length ? rows.map((row) => <tr key={row.id} className="align-top hover:bg-white/[0.02]"><td className="px-5 py-4"><p className="font-medium text-white">{row.name}</p>{row.message && <p className="mt-1 max-w-xs truncate text-xs text-slate-500" title={row.message}>{row.message}</p>}</td><td className="px-5 py-4"><a className="text-orange-300 hover:underline" href={`mailto:${row.email}`}>{row.email}</a><p className="mt-1 text-xs text-slate-500">{row.phone}</p></td><td className="px-5 py-4 text-slate-300">{row.location}<p className="mt-1 text-xs text-slate-500">{row.workModel}</p></td><td className="px-5 py-4 text-slate-300">{row.hasExperience ? "Ja" : "Nein"}</td><td className="px-5 py-4"><DateCell value={row.createdAt} /></td></tr>) : <EmptyState />}</tbody></table>;
}

function CompanyTable({ rows }: { rows: Company[] }) {
  return <table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950/50 text-xs uppercase text-slate-500"><tr><th className="px-5 py-3 font-medium">Unternehmen</th><th className="px-5 py-3 font-medium">Ansprechpartner</th><th className="px-5 py-3 font-medium">Region / Start</th><th className="px-5 py-3 font-medium">Eingang</th></tr></thead><tbody className="divide-y divide-white/5">{rows.length ? rows.map((row) => <tr key={row.id} className="align-top hover:bg-white/[0.02]"><td className="px-5 py-4"><p className="font-medium text-white">{row.company}</p><a className="mt-1 inline-block text-xs text-orange-300 hover:underline" href={`mailto:${row.email}`}>{row.email}</a></td><td className="px-5 py-4 text-slate-300">{row.contactPerson}<p className="mt-1 text-xs text-slate-500">{row.phone}</p></td><td className="px-5 py-4 text-slate-300">{row.region}<p className="mt-1 text-xs text-slate-500">{row.startDate}</p></td><td className="px-5 py-4"><DateCell value={row.createdAt} /></td></tr>) : <EmptyState />}</tbody></table>;
}

function ContactTable({ rows }: { rows: Contact[] }) {
  return <table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-950/50 text-xs uppercase text-slate-500"><tr><th className="px-5 py-3 font-medium">Kontakt</th><th className="px-5 py-3 font-medium">Anliegen</th><th className="px-5 py-3 font-medium">Nachricht</th><th className="px-5 py-3 font-medium">Eingang</th></tr></thead><tbody className="divide-y divide-white/5">{rows.length ? rows.map((row) => <tr key={row.id} className="align-top hover:bg-white/[0.02]"><td className="px-5 py-4"><p className="font-medium text-white">{row.name}</p><a className="mt-1 inline-block text-xs text-orange-300 hover:underline" href={`mailto:${row.email}`}>{row.email}</a>{row.phone && <p className="mt-1 text-xs text-slate-500">{row.phone}</p>}</td><td className="px-5 py-4 text-slate-300">{row.subject}</td><td className="max-w-sm px-5 py-4 text-slate-400"><p className="line-clamp-2" title={row.message}>{row.message}</p></td><td className="px-5 py-4"><DateCell value={row.createdAt} /></td></tr>) : <EmptyState />}</tbody></table>;
}