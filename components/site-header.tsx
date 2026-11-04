"use client";

import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const themeListeners = new Set<() => void>();

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);
  return () => themeListeners.delete(listener);
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

function applyTheme(theme: Theme, persist = false) {
  document.documentElement.dataset.theme = theme;
  if (persist) window.localStorage.setItem("dipact-theme", theme);
  themeListeners.forEach((listener) => listener());
}

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/karriere", label: "Karriere" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/fuer-unternehmen", label: "Für Unternehmen" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("dipact-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-white"
          onClick={closeMenu}
        >
          DIPACT
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex"
          aria-label="Hauptnavigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-orange-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:bg-white/10"
            aria-label={
              theme === "dark"
                ? "Helles Design aktivieren"
                : "Dunkles Design aktivieren"
            }
            title={
              theme === "dark"
                ? "Helles Design aktivieren"
                : "Dunkles Design aktivieren"
            }
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <Link
            href="/karriere"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:brightness-110 md:inline-flex"
          >
            Jetzt bewerben
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-slate-950 px-4 py-3 md:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-3 text-sm font-medium text-slate-200 transition hover:text-orange-300 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/karriere"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Jetzt bewerben
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
