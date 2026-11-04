# DIPACT

Unternehmenswebsite und internes Anfrage-Dashboard der DIPACT, einer Vertriebsmarke der Lavut & Engel Sales Group GmbH. Die Website informiert Bewerberinnen und Bewerber sowie Unternehmen über persönlichen Direktvertrieb in Berlin und Brandenburg und ermöglicht Kontakt- und Projektanfragen.

## Website

| Bereich | URL | Inhalt |
| --- | --- | --- |
| Startseite | `/` | Unternehmen, Arbeitsweise und zentrale Kontaktwege |
| Karriere | `/karriere` | Tätigkeit, Einarbeitung, Entwicklung und Bewerbungsformular |
| Für Unternehmen | `/fuer-unternehmen` | Leistungen und Anfrage für Vertriebsprojekte |
| Über uns | `/ueber-uns` | Unternehmen, Gründer und Werte |
| Kontakt | `/kontakt` | Kontaktinformationen und Nachrichtenformular |
| Impressum | `/impressum` | Anbieterkennzeichnung |
| Datenschutz | `/datenschutz` | Datenschutzhinweise |

Das interne Dashboard unter `/dashboard` bietet eine Übersicht über Bewerbungen, Unternehmensanfragen und Kontaktmitteilungen. Es ist nicht öffentlich zugänglich und wird nicht in die Sitemap aufgenommen.

## Technologie

- Next.js 16 mit App Router und TypeScript
- Tailwind CSS 4 und Lucide React
- PostgreSQL mit Prisma 7 und PostgreSQL Driver Adapter
- React Hook Form und Zod für Formulare und Validierung
- Server Actions für Formularübermittlung und Dashboard-Anmeldung

## Lokale Entwicklung

Voraussetzung ist eine unterstützte Node.js-Version sowie eine erreichbare PostgreSQL-Datenbank. Umgebungsvariablen werden in `.env` gespeichert und dürfen nicht eingecheckt werden.

```bash
npm install
cp .env.example .env
```

Anschließend die Werte in `.env` eintragen und Prisma vorbereiten:

```bash
npx prisma db push
npx prisma generate
npm run dev
```

Die lokale Website ist danach unter [http://localhost:3000](http://localhost:3000) erreichbar. Der Dashboard-Login befindet sich unter `/dashboard/login`.

## Umgebungsvariablen

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/postgres?sslmode=require"
DASHBOARD_EMAIL="manager@example.com"
DASHBOARD_PASSWORD="use-a-unique-strong-password"
DASHBOARD_SESSION_SECRET="generate-a-random-secret-at-least-32-characters-long"
```

Einen Sitzungsschlüssel können Sie mit `openssl rand -base64 32` erzeugen. Verwenden Sie für den Dashboard-Zugang ein einzigartiges, starkes Passwort, schützen Sie den Login zusätzlich mit Rate Limiting und hinterlegen Sie keine Zugangsdaten in Quellcode, Dokumentation oder Git.

## Formulare und Dashboard

Die Formulare speichern Bewerbungen, Unternehmensanfragen und Kontaktmitteilungen in getrennten PostgreSQL-Tabellen. Das Dashboard liest diese Daten ausschließlich serverseitig nach erfolgreicher Anmeldung. Die Sitzung wird in einem signierten, HTTP-only Cookie gespeichert und läuft nach acht Stunden ab.

Für lokale Umgebungen kann die Prisma-Struktur mit `npx prisma db push` synchronisiert werden. Für Produktionsdeployments sollten Schemaänderungen über versionierte Prisma-Migrationen ausgerollt werden.

## Suchmaschinenoptimierung

- Seitenspezifische deutsche Titel und Beschreibungen sowie Canonical-URLs
- Open-Graph- und Twitter-Metadaten für öffentliche Seiten
- Sitemap: `/sitemap.xml`
- Crawler-Regeln: `/robots.txt`
- Dashboard-Routen sind auf `noindex` gesetzt und nicht Teil der Sitemap

Die Website nutzt `https://dipact.de` als kanonische Domain. Vor dem Launch müssen Unternehmensdaten, Datenschutztexte und Kontaktangaben geprüft und freigegeben werden.

## Prüfungen

```bash
npm run lint
npm run build
npx prisma validate
```
