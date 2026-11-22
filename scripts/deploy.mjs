// Uploads dist/ to the Surfer app at www.sobek.info and removes remote files that no longer exist locally.
// Token: env SURFER_TOKEN, or the git-ignored file .surfer-token in the project root.
// Talks to Surfer's HTTP API directly: the cloudron-surfer CLI builds remote paths with "\" on Windows.
import { readFileSync, readdirSync, existsSync, statSync, openAsBlob } from 'node:fs';
import { join } from 'node:path';

const SERVER = 'https://www.sobek.info';
const API = `${SERVER}/api/files/`;
const token = process.env.SURFER_TOKEN || (existsSync('.surfer-token') && readFileSync('.surfer-token', 'utf8').trim());
if (!token) fail('Kein Token gefunden. Lege die Datei .surfer-token mit dem Surfer-Access-Token an (oder setze SURFER_TOKEN).');
if (!existsSync('dist')) fail('dist/ fehlt – zuerst "npm run build" ausführen.');

function fail(msg) {
  console.error(msg);
  process.exit(1);
}
const url = (remotePath, extra = {}) =>
  `${API}${encodeURIComponent(remotePath)}?${new URLSearchParams({ access_token: token, ...extra })}`;

// Local tree as remote-style paths: "/design", "/design/c64/index.html", …
const dirs = [];
const files = [];
(function walk(local, remote) {
  for (const name of readdirSync(local)) {
    const l = join(local, name);
    const r = `${remote}/${name}`;
    if (statSync(l).isDirectory()) {
      dirs.push(r);
      walk(l, r);
    } else files.push({ local: l, remote: r });
  }
})('dist', '');
const keep = new Set([...dirs, ...files.map((f) => f.remote)]);

async function request(method, remotePath, extra, body) {
  const res = await fetch(url(remotePath, extra), { method, body });
  if (res.status === 401) fail('Token ungültig (401).');
  return res;
}

// 1. directories (parents first; 409 = exists)
for (const d of dirs) {
  const res = await request('POST', d, { directory: 'true' });
  if (res.status !== 201 && res.status !== 409) fail(`Ordner ${d}: HTTP ${res.status}`);
}

// 2. files, a few in parallel
let done = 0;
async function upload({ local, remote }) {
  const form = new FormData();
  form.append('file', await openAsBlob(local), remote.split('/').pop());
  const res = await request('POST', remote, {}, form);
  if (res.status !== 201) fail(`Upload ${remote}: HTTP ${res.status} ${await res.text()}`);
  done++;
}
for (let i = 0; i < files.length; i += 6) await Promise.all(files.slice(i, i + 6).map(upload));
console.log(`${done} Dateien hochgeladen.`);

// 3. delete remote entries that are not part of the current build
let removed = 0;
async function prune(remoteDir) {
  const res = await request('GET', remoteDir);
  if (res.status !== 222) return; // not a directory listing
  for (const e of (await res.json()).entries) {
    if (!keep.has(e.filePath)) {
      const del = await request('DELETE', e.filePath, e.isDirectory ? { recursive: 'true' } : {});
      if (del.status !== 200 && del.status !== 404) fail(`Löschen ${e.filePath}: HTTP ${del.status}`);
      removed++;
    } else if (e.isDirectory) await prune(e.filePath);
  }
}
await prune('/');
console.log(`${removed} veraltete Einträge entfernt. Fertig: ${SERVER}/`);
