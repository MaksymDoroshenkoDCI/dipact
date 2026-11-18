import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Impressum & Datenschutz",
  description:
    "Impressum und Datenschutzerklärung der DIPACT – Lavut & Engel Sales Group GmbH.",
  path: "/impressum",
});

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="border-b border-white/10 py-8 last:border-b-0">
    <h2 className="mb-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
      {title}
    </h2>
    <div className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
      {children}
    </div>
  </section>
);

const Subheading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="pt-2 font-semibold text-slate-100">{children}</h3>
);

export default function ImpressumPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-slate-950 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10 border-b border-white/10 pb-8 sm:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              DIPACT · Rechtliche Informationen
            </p>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Impressum &amp; Datenschutz
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Angaben zum Anbieter und Informationen zur Verarbeitung
              personenbezogener Daten auf der Website dipact.de.
            </p>
          </header>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-5 shadow-xl shadow-black/10 sm:px-8">
            <div className="border-b border-white/10 py-8">
              <h2 className="mb-5 text-2xl font-bold text-white">Impressum</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
                  <p className="font-semibold text-white">
                    Lavut &amp; Engel Sales Group GmbH
                  </p>
                  <p>
                    Innsbrucker Straße 25
                    <br />
                    10825 Berlin
                  </p>
                  <p>
                    Vertreten durch den Geschäftsführer:
                    <br />
                    <span className="font-medium text-white">Maxim Engel</span>
                  </p>
                </div>
                <div className="space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
                  <p className="font-semibold text-white">Kontakt</p>
                  <p>
                    Telefon:{" "}
                    <a
                      className="text-cyan-400 transition hover:text-cyan-300"
                      href="tel:+4930814574359"
                    >
                      +49 30 814574359
                    </a>
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a
                      className="break-all text-cyan-400 transition hover:text-cyan-300"
                      href="mailto:info@lavut-engel.com"
                    >
                      info@lavut-engel.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      className="text-cyan-400 transition hover:text-cyan-300"
                      href="https://www.dipact.de"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.dipact.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <Section title="Registereintrag">
              <p>Eintragung im Handelsregister.</p>
              <p>
                Registergericht: Amtsgericht Charlottenburg
                <br />
                Registernummer: HRB 286261 B
                <br />
                
              </p>
            </Section>

            <Section title="Hinweis zur Tätigkeit">
              <p>
                DIPACT ist eine Marke der Lavut &amp; Engel Sales Group GmbH.
                Wir sind ein unabhängiges Vertriebsunternehmen und vermitteln
                Energieverträge als beauftragter Vertriebspartner bzw.
                Subunternehmer verschiedener Energieversorger. Wir sind kein
                Energieversorger und keine Mitarbeiter der vertretenen
                Unternehmen.
              </p>
            </Section>

            <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
              <p>
                Maxim Engel
                <br />
                Innsbrucker Straße 25, 10825 Berlin
              </p>
            </Section>

            <Section title="EU-Streitschlichtung">
              <p>
                Die EU-Plattform zur Online-Streitbeilegung wurde zum 20.07.2025
                eingestellt. Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Section>

            <Section title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Bei Bekanntwerden konkreter Rechtsverletzungen
                entfernen wir diese Inhalte umgehend.
              </p>
            </Section>

            <Section title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Für diese fremden
                Inhalte ist stets der jeweilige Anbieter oder Betreiber
                verantwortlich. Zum Zeitpunkt der Verlinkung waren keine
                Rechtsverstöße erkennbar. Bei Bekanntwerden von
                Rechtsverletzungen entfernen wir derartige Links umgehend.
              </p>
            </Section>

            <Section title="Urheberrecht">
              <p>
                Die durch uns erstellten Inhalte und Werke auf dieser Website,
                insbesondere Texte, Bilder, Videos sowie das DIPACT-Logo,
                unterliegen dem deutschen Urheber- und Markenrecht.
                Vervielfältigung, Bearbeitung und Verbreitung außerhalb der
                Grenzen des Urheberrechts bedürfen unserer schriftlichen
                Zustimmung.
              </p>
            </Section>
          </div>

          <header id="datenschutz" className="mb-8 mt-16 scroll-mt-24 sm:mt-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Datenschutz
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Datenschutzerklärung
            </h2>
            <p className="mt-3 text-sm text-slate-400">Stand: November 2026</p>
          </header>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-5 shadow-xl shadow-black/10 sm:px-8">
            <Section title="1. Verantwortlicher">
              <p>
                Verantwortlich für die Datenverarbeitung auf der Website
                www.dipact.de („DIPACT“ ist eine Marke der nachfolgend genannten
                Gesellschaft) ist:
              </p>
              <p>
                <strong className="text-white">
                  Lavut &amp; Engel Sales Group GmbH
                </strong>
                <br />
                Innsbrucker Straße 25
                <br />
                10825 Berlin
                <br />
                Vertreten durch den Geschäftsführer Maxim Engel
                <br />
                Telefon: +49 30 814574359
                <br />
                E-Mail:{" "}
                <a
                  className="text-cyan-400 hover:text-cyan-300"
                  href="mailto:info@lavut-engel.com"
                >
                  info@lavut-engel.com
                </a>
              </p>
              <p>
                Ein Datenschutzbeauftragter ist derzeit nicht bestellt, da die
                gesetzlichen Voraussetzungen (§ 38 BDSG) nicht vorliegen. Bei
                Fragen zum Datenschutz wenden Sie sich bitte an die oben
                genannte Adresse.
              </p>
            </Section>

            <Section title="2. Allgemeines zur Datenverarbeitung">
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                Bereitstellung der Website, zur Beantwortung von Anfragen, zur
                Durchführung von Bewerbungsverfahren, zum Betrieb unseres
                Partner-Dashboards oder aufgrund Ihrer Einwilligung erforderlich
                ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a
                DSGVO (Einwilligung), lit. b (Vertrag bzw. vorvertragliche
                Maßnahmen), lit. c (rechtliche Verpflichtung) und lit. f
                (berechtigtes Interesse). Daten werden gelöscht, sobald der
                Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen.
              </p>
              <p>
                Die Bereitstellung Ihrer Daten ist weder gesetzlich noch
                vertraglich vorgeschrieben. Ohne die als Pflichtfelder
                gekennzeichneten Angaben können wir Ihre Anfrage oder Bewerbung
                jedoch nicht bearbeiten. Eine automatisierte
                Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO)
                findet nicht statt.
              </p>
            </Section>

            <Section title="3. Hosting">
              <p>
                Diese Website wird bei der STRATO GmbH, Otto-Ostrowski-Straße 7,
                10249 Berlin, gehostet. Die Server stehen in Deutschland. Beim
                Aufruf der Website verarbeitet STRATO in unserem Auftrag die
                unter Ziffer 4 genannten Zugriffsdaten sowie die Inhalte der
                Formulare und des Dashboards. Mit STRATO besteht ein Vertrag zur
                Auftragsverarbeitung nach Art. 28 DSGVO. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt
                in einer sicheren und zuverlässigen Bereitstellung der Website.
              </p>
            </Section>

            <Section title="4. Server-Logfiles">
              <p>
                Bei jedem Aufruf werden automatisch folgende Daten erfasst:
                IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer-URL,
                Browsertyp und -version, Betriebssystem. Diese Daten dienen der
                technischen Auslieferung, der Stabilität und der Abwehr von
                Angriffen (Art. 6 Abs. 1 lit. f DSGVO). Sie werden nicht mit
                anderen Datenquellen zusammengeführt und spätestens nach 14
                Tagen gelöscht, sofern sie nicht zur Aufklärung eines
                Sicherheitsvorfalls benötigt werden.
              </p>
            </Section>

            <Section title="5. SSL-/TLS-Verschlüsselung">
              <p>
                Diese Website nutzt aus Sicherheitsgründen eine
                SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie an „https://“ und dem Schloss-Symbol in der
                Adresszeile.
              </p>
            </Section>

            <Section title="6. Kontaktaufnahme">
              <p>
                Sie können uns per E-Mail, Telefon, über unser Kontaktformular
                oder über eine Rückrufanfrage erreichen. Dabei verarbeiten wir
                die von Ihnen angegebenen Daten, im Kontaktformular Name,
                E-Mail-Adresse, Telefonnummer, Art des Anliegens und Ihre
                Nachricht, bei einer Rückrufanfrage Name, Telefonnummer und
                gewünschter Zeitraum. Wir nutzen diese Daten ausschließlich, um
                Ihre Anfrage zu bearbeiten und Sie zurückzurufen.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
                Anfrage auf einen Vertrag oder eine Zusammenarbeit zielt,
                ansonsten Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes
                Interesse liegt in der Beantwortung Ihrer Anfrage. Wir löschen
                die Daten, sobald die Anfrage abschließend bearbeitet ist,
                spätestens nach sechs Monaten, sofern keine gesetzlichen
                Aufbewahrungspflichten (z. B. sechs bzw. zehn Jahre für
                Geschäftsbriefe nach § 257 HGB, § 147 AO) bestehen.
              </p>
              <p>
                Formularanfragen werden per E-Mail an uns übermittelt. Für
                unsere E-Mail-Kommunikation nutzen wir Google Workspace der
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                Irland, auf Grundlage eines Vertrags zur Auftragsverarbeitung.
                Eine Übermittlung an die Google LLC in den USA kann nicht
                ausgeschlossen werden. Google LLC ist unter dem EU-US Data
                Privacy Framework zertifiziert, für das ein
                Angemessenheitsbeschluss der EU-Kommission besteht (Art. 45
                DSGVO); ergänzend hat Google EU-Standardvertragsklauseln
                abgeschlossen.
              </p>
            </Section>

            <Section title="7. Bewerbungen (DIPACT Careers)">
              <p>
                Wenn Sie sich über unser Bewerbungsformular als Mitarbeiter oder
                selbstständiger Vertriebspartner bewerben, verarbeiten wir Name,
                Telefonnummer, E-Mail-Adresse, Wohnort, Angaben zu Ihrer
                Vertriebserfahrung, Ihr bevorzugtes Beschäftigungsmodell und
                Ihre Nachricht sowie Angaben aus späteren Gesprächen. Bitte
                teilen Sie uns keine besonderen Kategorien personenbezogener
                Daten (z. B. Gesundheitsdaten, Religion) mit, wenn dies nicht
                erforderlich ist.
              </p>
              <p>
                Rechtsgrundlage ist bei Bewerbungen auf eine Anstellung Art. 6
                Abs. 1 lit. b DSGVO in Verbindung mit § 26 BDSG, bei Bewerbungen
                als selbstständiger Vertriebspartner Art. 6 Abs. 1 lit. b DSGVO.
                Die Bewerbung wird per E-Mail über Google Workspace (siehe
                Ziffer 6) an uns übermittelt und nur den am Auswahlverfahren
                beteiligten Personen zugänglich gemacht.
              </p>
              <p>
                Kommt eine Zusammenarbeit zustande, werden Ihre Daten für deren
                Durchführung weiterverarbeitet. Andernfalls löschen wir Ihre
                Daten sechs Monate nach Abschluss des Verfahrens; bis dahin
                speichern wir sie zur Abwehr möglicher Ansprüche nach dem
                Allgemeinen Gleichbehandlungsgesetz (Art. 6 Abs. 1 lit. f
                DSGVO). Eine längere Speicherung für künftige Stellen erfolgt
                nur mit Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO), die Sie jederzeit widerrufen können.
              </p>
            </Section>

            <Section title="8. Partner-Dashboard und Cookies">
              <p>
                Über „Dashboard Login“ erhalten unsere Mitarbeiter und
                Vertriebspartner Zugang zu einem geschützten Bereich. Dort
                verarbeiten wir Zugangsdaten (E-Mail-Adresse bzw. Benutzername,
                verschlüsselt gespeichertes Passwort), Zeitpunkt der Anmeldung
                sowie die Daten, die für die Zusammenarbeit erforderlich sind.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. § 26 BDSG.
                Die Zugangsdaten löschen wir mit Ende der Zusammenarbeit; für
                Abrechnungsdaten gelten die gesetzlichen Aufbewahrungsfristen.
              </p>
              <p>
                Diese Website verwendet ausschließlich technisch notwendige
                Cookies bzw. vergleichbare Speichertechniken, insbesondere ein
                Sitzungs-Cookie für den angemeldeten Zustand im Dashboard. Diese
                sind für den von Ihnen ausdrücklich gewünschten Dienst unbedingt
                erforderlich und bedürfen daher keiner Einwilligung (§ 25 Abs. 2
                Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO). Sitzungs-Cookies
                werden beim Abmelden oder Schließen des Browsers gelöscht.
                Analyse-, Tracking- oder Werbe-Tools setzen wir nicht ein.
                Schriftarten werden lokal von unserem Server geladen; eine
                Verbindung zu Google-Servern findet dabei nicht statt.
              </p>
              <p>
                Ihre Design-Einstellung und ob Sie den Cookie-Hinweis bereits
                geschlossen haben, speichern wir lokal in Ihrem Browser. Diese
                Angaben verwenden wir nicht für Analyse oder Werbung.
              </p>
            </Section>

            <Section title="9. Unsere Auftritte in sozialen Netzwerken">
              <p>
                Wir unterhalten Profile auf Instagram, Facebook und TikTok.
                Inhalte dieser Plattformen sind auf unserer Website nicht
                eingebunden. Soweit wir auf unsere Profile verlinken, werden
                Daten erst übertragen, wenn Sie auf den Link klicken und die
                jeweilige Plattform aufrufen.
              </p>
              <p>
                Bei Besuch unserer Profile verarbeiten die Plattformbetreiber
                Ihre Daten nach ihren eigenen Datenschutzbestimmungen, häufig
                auch für Werbezwecke und in Drittländern wie den USA. Für
                Statistikdaten unserer Facebook- und Instagram-Seiten sind wir
                gemeinsam mit der Meta Platforms Ireland Ltd., Merrion Road,
                Dublin 4, Irland, verantwortlich (Art. 26 DSGVO). TikTok wird
                betrieben von der TikTok Technology Limited, 10 Earlsfort
                Terrace, Dublin, D02 T380, Irland. Unser berechtigtes Interesse
                ist die Außendarstellung und Kommunikation mit Interessenten und
                Bewerbern (Art. 6 Abs. 1 lit. f DSGVO). Ihre Rechte können Sie
                am wirksamsten direkt bei den Plattformen geltend machen.
              </p>
            </Section>

            <Section title="10. Empfänger und Drittlandtransfer">
              <p>
                Empfänger Ihrer Daten sind neben uns ausschließlich unsere
                Auftragsverarbeiter STRATO GmbH (Hosting) und Google Ireland
                Limited (E-Mail, Google Workspace) sowie im Einzelfall
                Steuerberater oder Behörden, soweit wir gesetzlich dazu
                verpflichtet sind. Eine Weitergabe an Energieversorger oder
                andere Auftraggeber erfolgt nicht über diese Website. Eine
                Übermittlung in Drittländer erfolgt nur auf Grundlage eines
                Angemessenheitsbeschlusses (EU-US Data Privacy Framework) oder
                geeigneter Garantien wie EU-Standardvertragsklauseln.
              </p>
            </Section>

            <Section title="11. Ihre Rechte">
              <p>
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
                (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
                (Art. 18), Datenübertragbarkeit (Art. 20) und Widerruf einer
                erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs.
                3). Eine formlose Nachricht an{" "}
                <a
                  className="break-all text-cyan-400 hover:text-cyan-300"
                  href="mailto:info@lavut-engel.com"
                >
                  info@lavut-engel.com
                </a>{" "}
                genügt.
              </p>
              <p>
                Widerspruchsrecht (Art. 21 DSGVO): Verarbeiten wir Ihre Daten
                auf Grundlage eines berechtigten Interesses, können Sie aus
                Gründen, die sich aus Ihrer besonderen Situation ergeben,
                jederzeit widersprechen. Wir verarbeiten die Daten dann nicht
                mehr, es sei denn, wir weisen zwingende schutzwürdige Gründe
                nach.
              </p>
            </Section>

            <Section title="12. Beschwerderecht">
              <p>
                Sie können sich bei einer Datenschutz-Aufsichtsbehörde
                beschweren. Für uns zuständig ist die Berliner Beauftragte für
                Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555
                Berlin.
              </p>
            </Section>

            <Section title="13. Stand">
              <p>
                Stand dieser Datenschutzerklärung: November 2026. Wir passen sie
                an, wenn sich die Website oder die Rechtslage ändert.
              </p>
            </Section>
          </div>

          <footer className="mt-10 text-center text-xs leading-6 text-slate-500">
            DIPACT · Lavut &amp; Engel Sales Group GmbH · Innsbrucker Straße 25
            · 10825 Berlin
          </footer>
        </div>
      </main>
    </SiteLayout>
  );
}
