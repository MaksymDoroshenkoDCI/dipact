"use client";

import { useActionState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";

import { loginDashboard, type LoginState } from "@/app/dashboard/actions";

const initialState: LoginState = {};

export function DashboardLoginForm() {
  const [state, action, pending] = useActionState(loginDashboard, initialState);

  return (
    <form action={action} className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">E-Mail-Adresse</label>
        <input id="email" name="email" type="email" autoComplete="username" required className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400" placeholder="name@dipact.de" />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">Passwort</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-orange-400" placeholder="Passwort eingeben" />
      </div>
      {state.error && <p role="alert" className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{state.error}</p>}
      <button type="submit" disabled={pending} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-orange-300 disabled:opacity-60">
        <LockKeyhole className="h-4 w-4" />
        {pending ? "Anmeldung läuft..." : "Sicher anmelden"}
        {!pending && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}