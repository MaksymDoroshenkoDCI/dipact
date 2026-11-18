"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const dismissalStorageKey = "dipact-cookie-notice-dismissed";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(dismissalStorageKey) !== "true";
}

function getServerSnapshot() {
  return false;
}

export function CookieNotice() {
  const isVisible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function dismissNotice() {
    window.localStorage.setItem(dismissalStorageKey, "true");
    listeners.forEach((listener) => listener());
  }

  if (!isVisible) return null;

  return (
    <aside
      aria-labelledby="cookie-notice-title"
      className="cookie-notice fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-slate-950/95 p-5 text-slate-50 shadow-2xl backdrop-blur-xl sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="cookie-notice-title"
            className="text-lg font-bold text-white"
          >
            Cookie-Hinweis
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Wir verwenden ausschließlich technisch notwendige Cookies und
            Speichertechnologien, zum Beispiel für den Dashboard-Login und Ihre
            Einstellungen. Analyse-, Tracking- oder Werbe-Cookies setzen wir
            nicht ein.
          </p>
          <Link
            href="/datenschutz"
            className="mt-2 inline-block text-sm font-medium text-orange-300 underline underline-offset-4 transition hover:text-orange-200"
          >
            Mehr Informationen in unserer Datenschutzerklärung
          </Link>
        </div>
        <button
          type="button"
          onClick={dismissNotice}
          className="shrink-0 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          Verstanden
        </button>
      </div>
    </aside>
  );
}
