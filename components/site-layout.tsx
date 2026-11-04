import { SiteHeader } from "@/components/site-header";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/karriere", label: "Karriere" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/fuer-unternehmen", label: "Für Unternehmen" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="mb-4 text-2xl font-black tracking-tight text-white">
              DIPACT
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              DIRECT SALES. MAXIMUM IMPACT. Wir bauen Vertriebsteams auf,
              entwickeln Menschen und bringen Unternehmen im persönlichen
              Kundenkontakt voran.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-orange-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange-400" />
                Berlin / Brandenburg
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-400" />
                hello@dipact.de
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-400" />
                +49 (0) 30 000 000 00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              DIPACT ist eine Marke der Lavut &amp; Engel Sales Group GmbH.
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/impressum"
                className="transition hover:text-orange-300"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="transition hover:text-orange-300"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
