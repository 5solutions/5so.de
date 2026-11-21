// Which design is the homepage, and which alternatives exist.
// To switch the homepage: change `home` to another slug, then `npm run build`.
export const home = 'abflugtafel';

export const designs = [
  { slug: 'abflugtafel', name: 'Abflugtafel' },
  { slug: 'terminal', name: 'Terminal' },
  { slug: 'c64', name: 'C64' },
  { slug: 'wuerfel', name: 'Würfel' },
] as const;

export type DesignSlug = (typeof designs)[number]['slug'];

// URL of a design: the homepage design lives at /, the others under /design/<slug>/
export const designUrl = (slug: string) => (slug === home ? '/' : `/design/${slug}/`);
