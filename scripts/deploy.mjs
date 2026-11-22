// Uploads dist/ to the Surfer app at www.sobek.info.
// Token: env SURFER_TOKEN, or the git-ignored file .surfer-token in the project root.
// Passes --server/--token explicitly so the global ~/.surfer.json (turnier server) stays untouched.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const SERVER = 'www.sobek.info';
const token = process.env.SURFER_TOKEN || (existsSync('.surfer-token') && readFileSync('.surfer-token', 'utf8').trim());
if (!token) {
  console.error('Kein Token gefunden. Lege die Datei .surfer-token mit dem Surfer-Access-Token an (oder setze SURFER_TOKEN).');
  process.exit(1);
}
if (!existsSync('dist')) {
  console.error('dist/ fehlt – zuerst "npm run build" ausführen.');
  process.exit(1);
}

// Upload each top-level entry of dist/ to / (same as `dist/*` in a POSIX shell, but works in PowerShell too).
const entries = readdirSync('dist').map((f) => `dist/${f}`);
const res = spawnSync('npx', ['-y', 'cloudron-surfer@6.4.1', 'put', '--delete', '--server', SERVER, '--token', token, ...entries, '/'], {
  stdio: 'inherit',
  shell: process.platform === 'win32', // npx is a .cmd on Windows
});
process.exit(res.status ?? 1);
