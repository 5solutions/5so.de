# sobek.info

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

Live unter **https://www.sobek.info**. Gehostet in einer Surfer-App auf dem Cloudron-Server (Hetzner, `my.rhenaniahinsbeck.de`).

- **Veröffentlichen:** `npm run deploy` baut die Seite und lädt `dist/` per Surfer-API hoch (`scripts/deploy.mjs`, entfernt auch veraltete Dateien). Der Token steht lokal in `.surfer-token` (git-ignoriert); Surfer-Admin: `https://www.sobek.info/_admin` → Access Tokens.
- Optional per GitHub Action (`.github/workflows/deploy.yml`, derzeit nur manuell startbar) – dafür das Repo-Secret `SURFER_TOKEN` anlegen.
- Weiterleitungen (in Cloudron unter App → Standort → Weiterleitungen): `sobek.info`, `5so.de`, `www.5so.de` → `www.sobek.info` (www.5so.de per CNAME auf `my.rhenaniahinsbeck.de`).
- DNS liegt bei Hetzner (Console, Projekt „5so“ bzw. „DNS Migrated“). Cloudron-Domain `sobek.info` steht auf „Manual“, damit Cloudron die Apple-Mail-Einträge (MX, SPF, DKIM) nicht anfasst.
- Alte Jekyll-Seite: Tag `v1-jekyll` / Branch `legacy-jekyll`.
