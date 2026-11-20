# DIPACT

Unternehmenswebsite und internes Anfrage-Dashboard der DIPACT, einer Vertriebsmarke der Lavut & Engel Sales Group GmbH. Die Website informiert Bewerberinnen und Bewerber sowie Unternehmen über persönlichen Direktvertrieb in Berlin und Brandenburg und ermöglicht Kontakt- und Projektanfragen.

## Website

| Bereich         | URL                 | Inhalt                                                      |
| --------------- | ------------------- | ----------------------------------------------------------- |
| Startseite      | `/`                 | Unternehmen, Arbeitsweise und zentrale Kontaktwege          |
| Karriere        | `/karriere`         | Tätigkeit, Einarbeitung, Entwicklung und Bewerbungsformular |
| Für Unternehmen | `/fuer-unternehmen` | Leistungen und Anfrage für Vertriebsprojekte                |
| Über uns        | `/ueber-uns`        | Unternehmen, Gründer und Werte                              |
| Kontakt         | `/kontakt`          | Kontaktinformationen und Nachrichtenformular                |
| Impressum       | `/impressum`        | Anbieterkennzeichnung                                       |
| Datenschutz     | `/datenschutz`      | Datenschutzhinweise                                         |

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
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="DIPACT <notifications@your-verified-domain.de>"
NOTIFICATION_EMAIL_TO="info@lavut-engel.com"
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

## E-Mail-Benachrichtigungen in Vercel einrichten

Alle drei Formulare senden nach erfolgreicher Speicherung eine Benachrichtigung
über Resend an die in `NOTIFICATION_EMAIL_TO` konfigurierten Adressen. Mehrere
Empfänger werden durch Kommas getrennt. Schlägt der E-Mail-Versand fehl, bleibt
die Anfrage in der Datenbank gespeichert und die absendende Person erhält einen
deutlichen Hinweis.

1. Erstellen Sie ein Konto bei [Resend](https://resend.com/) und fügen Sie unter
   [Domains](https://resend.com/domains) eine Absenderdomain hinzu. Veröffentlichen
   Sie die von Resend angegebenen DNS-Einträge und warten Sie, bis die Domain
   verifiziert ist.
2. Erstellen Sie in Resend einen API-Schlüssel mit Berechtigung zum Versenden
   von E-Mails.
3. Öffnen Sie in Vercel das Projekt unter **Settings → Environment Variables**
   und fügen Sie diese Variablen für **Production** hinzu. Aktivieren Sie
   **Preview** oder **Development** nur, wenn E-Mails auch aus diesen
   Umgebungen versendet werden sollen:

   | Variable | Wert |
   | --- | --- |
   | `RESEND_API_KEY` | Der geheime API-Schlüssel aus Resend (`re_...`) |
   | `RESEND_FROM_EMAIL` | Verifizierter Absender, z. B. `DIPACT <notifications@ihre-domain.de>` |
   | `NOTIFICATION_EMAIL_TO` | Eine oder mehrere kommagetrennte Adressen, z. B. `info@lavut-engel.com, second@example.com` |

4. Speichern Sie die Variablen und erstellen Sie ein neues Deployment, damit
   Vercel sie übernimmt. Senden Sie anschließend je eine Testanfrage über das
   Bewerbungs-, Unternehmens- und Kontaktformular und prüfen Sie den Posteingang
   sowie den Spam-Ordner.

Setzen Sie `RESEND_API_KEY` niemals in `NEXT_PUBLIC_*`-Variablen oder in
Quellcode. Tragen Sie Werte in Vercel ohne Anführungszeichen ein. Da
Formularangaben an Resend übermittelt werden, prüfen Sie vor dem
Produktiveinsatz die Datenschutzhinweise und die erforderliche
Auftragsverarbeitungsvereinbarung mit Resend. Laut Resend steuert die gewählte
Versandregion nicht den Speicherort der Kontodaten: Kontoangaben, E-Mail-
Metadaten, Protokolle und API-Datensätze werden in den USA gespeichert.
