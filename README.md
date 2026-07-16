# Findory-E-Book-Store

## Start

```bash
npm install
npm run dev
```

Für einen Produktions-Build: `npm run build`.

## Inhalte austauschen

- E-Book-Daten: `src/data/ebooks.ts`
- Artikel: `src/data/articles.ts`
- Markenname, Domain, Kontakt und Amazon-Hinweis: `src/config/site.ts`
- Cover: `public/images/ebooks/` – Dateipfad anschließend bei `coverImage` in den E-Book-Daten eintragen.
- Amazon-Links: Den Platzhalter `[AMAZON-AFFILIATE-LINK]` in `src/data/ebooks.ts` ersetzen. Affiliate-Kennzeichnung und sichere Link-Attribute bleiben automatisch erhalten.
- Rechtliches: Die klar markierten Platzhalter auf Impressum- und Datenschutzseite vor Veröffentlichung durch geprüfte Inhalte ersetzen.
- Newsletter: Das Formular ist absichtlich lokal. Erst bei Auswahl eines Anbieters einen datenschutzkonformen Versanddienst anbinden.
