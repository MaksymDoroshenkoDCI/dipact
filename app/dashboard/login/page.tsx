import { Activity } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { DashboardLoginForm } from "@/app/dashboard/login/login-form";
import { getDashboardSession } from "@/lib/admin-auth";

export default function DashboardLoginPage() {
  return (
    <Suspense fallback={<LoginLoading />}>
      <DashboardLoginContent />
    </Suspense>
  );
}

async function DashboardLoginContent() {
  if (await getDashboardSession()) redirect("/dashboard");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-50">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-400 text-slate-950">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-bold text-white">DIPACT</p>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Interner Bereich
            </p>
          </div>
        </div>
        <section className="rounded-xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-sm font-medium text-orange-300">
            Willkommen zurück
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white">
            Dashboard Login
          </h1>
          <p className="mt-2 mb-7 text-sm leading-6 text-slate-400">
            Melden Sie sich an, um Anfragen und Vertriebskennzahlen einzusehen.
          </p>
          <DashboardLoginForm />
        </section>
        <p className="mt-6 text-center text-xs text-slate-500">
          Zugriff nur für autorisierte DIPACT-Mitarbeitende.
        </p>
      </div>
    </main>
  );
}

function LoginLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-400">
      Lade Anmeldung...
    </main>
  );
}
