import { redirect } from "next/navigation";
import { Activity, BriefcaseBusiness, Building2, Mail, Users } from "lucide-react";

import { logoutDashboard } from "@/app/dashboard/actions";
import { DashboardView, type DashboardData } from "@/app/dashboard/dashboard-view";
import { getDashboardSession } from "@/lib/admin-auth";
import prisma from "@/lib/prisma";

export async function DashboardContent() {
  const session = await getDashboardSession();
  if (!session) redirect("/dashboard/login");

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const chartStart = new Date(now.getFullYear(), now.getMonth() - 5, 1);

  const [candidateCount, companyCount, contactCount, currentCandidates, currentCompanies, currentContacts, candidates, companies, contacts] = await Promise.all([
    prisma.candidateApplication.count(),
    prisma.companyRequest.count(),
    prisma.contactMessage.count(),
    prisma.candidateApplication.count({ where: { createdAt: { gte: monthStart } } }),
    prisma.companyRequest.count({ where: { createdAt: { gte: monthStart } } }),
    prisma.contactMessage.count({ where: { createdAt: { gte: monthStart } } }),
    prisma.candidateApplication.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.companyRequest.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
  ]);

  const chartRows = await Promise.all([
    prisma.candidateApplication.findMany({ where: { createdAt: { gte: chartStart } }, select: { createdAt: true } }),
    prisma.companyRequest.findMany({ where: { createdAt: { gte: chartStart } }, select: { createdAt: true } }),
    prisma.contactMessage.findMany({ where: { createdAt: { gte: chartStart } }, select: { createdAt: true } }),
  ]);

  const monthly = Array.from({ length: 6 }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    return {
      key,
      label: new Intl.DateTimeFormat("de-DE", { month: "short" }).format(date),
      candidates: chartRows[0].filter((row) => row.createdAt.getFullYear() === date.getFullYear() && row.createdAt.getMonth() === date.getMonth()).length,
      companies: chartRows[1].filter((row) => row.createdAt.getFullYear() === date.getFullYear() && row.createdAt.getMonth() === date.getMonth()).length,
      contacts: chartRows[2].filter((row) => row.createdAt.getFullYear() === date.getFullYear() && row.createdAt.getMonth() === date.getMonth()).length,
    };
  });

  const data: DashboardData = {
    totals: {
      candidates: candidateCount,
      companies: companyCount,
      contacts: contactCount,
      newThisMonth: currentCandidates + currentCompanies + currentContacts,
    },
    monthly,
    candidates: candidates.map((row) => ({ ...row, createdAt: row.createdAt.toISOString() })),
    companies: companies.map((row) => ({ ...row, createdAt: row.createdAt.toISOString() })),
    contacts: contacts.map((row) => ({ ...row, createdAt: row.createdAt.toISOString() })),
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400 text-slate-950"><Activity className="h-5 w-5" /></div>
            <div><p className="font-bold text-white">DIPACT <span className="font-normal text-slate-400">/ Übersicht</span></p><p className="text-xs text-slate-500">Vertrieb und Anfragen</p></div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-400 sm:inline">{session.email}</span>
            <form action={logoutDashboard}><button className="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">Abmelden</button></form>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="text-sm font-medium text-orange-300">Management</p><h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Anfragen im Überblick</h1><p className="mt-2 text-sm text-slate-400">Eingänge und Entwicklung der letzten sechs Monate</p></div>
          <p className="text-sm text-slate-500">Stand: {new Intl.DateTimeFormat("de-DE", { dateStyle: "medium" }).format(now)}</p>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Kennzahlen">
          <MetricCard label="Bewerbungen" value={candidateCount} detail={`${currentCandidates} diesen Monat`} icon={<Users className="h-5 w-5" />} />
          <MetricCard label="Unternehmensanfragen" value={companyCount} detail={`${currentCompanies} diesen Monat`} icon={<Building2 className="h-5 w-5" />} />
          <MetricCard label="Kontaktanfragen" value={contactCount} detail={`${currentContacts} diesen Monat`} icon={<Mail className="h-5 w-5" />} />
          <MetricCard label="Eingänge gesamt" value={candidateCount + companyCount + contactCount} detail={`${currentCandidates + currentCompanies + currentContacts} diesen Monat`} icon={<BriefcaseBusiness className="h-5 w-5" />} />
        </section>

        <DashboardView data={data} />
      </div>
    </main>
  );
}

function MetricCard({ label, value, detail, icon }: { label: string; value: number; detail: string; icon: React.ReactNode }) {
  return <article className="rounded-xl border border-white/10 bg-slate-900 p-5"><div className="flex items-center justify-between"><p className="text-sm text-slate-400">{label}</p><span className="text-orange-300">{icon}</span></div><p className="mt-4 text-3xl font-semibold tabular-nums text-white">{value}</p><p className="mt-2 text-xs text-slate-500">{detail}</p></article>;
}