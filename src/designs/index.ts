import Terminal from './Terminal.astro';
import Abflugtafel from './Abflugtafel.astro';
import C64 from './C64.astro';
import Wuerfel from './Wuerfel.astro';
import type { DesignSlug } from '../data/designs';

export const components: Record<DesignSlug, typeof Terminal> = { terminal: Terminal, abflugtafel: Abflugtafel, c64: C64, wuerfel: Wuerfel };
