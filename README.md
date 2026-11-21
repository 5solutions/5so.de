# 5so.de

Persönliche Seite von Stefan Sobek. Statisch gebaut mit [Astro](https://astro.build), ohne Client-JavaScript, ohne Cookies, Schriften selbst gehostet.

## Lokal starten

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # statischer Output in dist/
npm run preview   # dist/ lokal ansehen
```

## Inhalte ändern

Alle Texte (Profil, Schwerpunkte, Projekte, Stationen, Zertifikate) stehen in **`src/data/profile.ts`**. Alle Designs lesen nur von dort.

## Designs

Startseite ist die **Abflugtafel**. Die anderen Designs zeigen denselben Inhalt und bleiben als Option erreichbar (mit Umschalter unten rechts, `noindex`, canonical auf `/`):

| Design | URL | Datei |
| --- | --- | --- |
| Terminal | `/design/terminal/` | `src/designs/Terminal.astro` |
| Abflugtafel (Startseite) | `/` | `src/designs/Abflugtafel.astro` |
| C64 | `/design/c64/` | `src/designs/C64.astro` |
| Würfel | `/design/wuerfel/` | `src/designs/Wuerfel.astro` (+ `src/components/Cube.astro`) |

**Startseite wechseln:** in `src/data/designs.ts` `home` auf einen anderen Slug setzen (z. B. `'terminal'`) und neu bauen. Das alte Start-Design wandert dann automatisch unter `/design/<slug>/`.

**Neues Design hinzufügen:** Datei in `src/designs/` anlegen (`<Base design="slug">`), in `src/designs/index.ts` und `src/data/designs.ts` eintragen.

Rechtstexte: `src/pages/impressum.astro`, `src/pages/datenschutz.astro`.

## Deployment

Jeder Push auf `main` baut die Seite per GitHub Action (`.github/workflows/deploy.yml`) und veröffentlicht sie über GitHub Pages unter **https://www.5so.de**.

- Die alte Jekyll-Seite ist gesichert als Tag `v1-jekyll` und Branch `legacy-jekyll` (identisch mit `gh-pages`).
- Rückfall auf die alte Seite: Repo → Settings → Pages → Source „Deploy from a branch“ → `gh-pages`.
- `5so.de` ohne www zeigt per DNS (Hetzner) noch auf den Cloudron-Server. Für GitHub Pages bräuchte die Apex-Domain A-Records auf 185.199.108.153 – 185.199.111.153; geplant ist stattdessen später ein Umzug zu Hetzner. `npm run build` erzeugt dafür einfach statische Dateien in `dist/`, die auf jeden Webserver passen.
