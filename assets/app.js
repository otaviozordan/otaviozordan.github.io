/* Renderiza o site a partir de window.DADOS (dados.js).
   Normalmente não é preciso editar este arquivo. */
(() => {
const D = window.DADOS;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const ext = (url, txt) => `<a href="${esc(url)}" target="_blank" rel="noopener">${txt}</a>`;
const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

/* ------------------------------- HERO ------------------------------- */
const P = D.perfil;
const parts = P.nome.split(' ');
set('#h-nome', `${esc(parts[0])}<br><em>${esc(parts[1] || '')}</em> ${esc(parts.slice(2).join(' '))}`);
set('#h-status', esc(P.status));
set('#h-titulo', '// ' + esc(P.titulo));
set('#h-chamada', fmt(P.chamada));
$('#h-foto').src = P.foto;
set('#h-ficha', P.ficha.map(f => `<div><small>${esc(f.rotulo)}</small><span>${esc(f.valor)}</span></div>`).join(''));
set('#ft-nome', esc(P.nome));
$('#yr').textContent = new Date().getFullYear();

/* ------------------------------- SOBRE ------------------------------ */
set('#sobre-texto', P.sobre.map(p => `<p>${fmt(p)}</p>`).join(''));
set('#interesses', P.interesses.map(i => `<li>${esc(i)}</li>`).join(''));
set('#numeros', P.numeros.map(n => {
  const v = n.auto === 'publicacoes' ? D.publicacoes.length : n.auto === 'premios' ? D.premios.length : n.valor;
  return `<div class="stat"><div class="n"><span data-count="${v}" data-dec="${n.casas || 0}">0</span>${n.sufixo ? `<sup>${esc(n.sufixo)}</sup>` : ''}</div><div class="l">${esc(n.rotulo)}</div></div>`;
}).join(''));
set('#grupos', D.grupos.map(g => `
  <a class="panel group reveal" href="${esc(g.url)}" target="_blank" rel="noopener">
    <div class="logo"><img src="${esc(g.logo)}" alt="Logo ${esc(g.sigla)}" loading="lazy"></div>
    <div class="gt"><h3>${esc(g.sigla)}</h3><div class="gn">${esc(g.nome)}</div><p>${esc(g.descricao)}</p>
      <span class="go">${esc(g.site.replace(/^https?:\/\//, '').replace(/\/$/, ''))} ↗</span></div>
  </a>`).join(''));

/* ---------------------------- PUBLICAÇÕES --------------------------- */
const pubs = [...D.publicacoes].sort((a, b) => (b.ano || 0) - (a.ano || 0));
set('#pubs', pubs.map(p => {
  const url = p.doi ? 'https://doi.org/' + p.doi : p.url;
  return `<article class="panel pub reveal">
    <div class="venue">${esc(p.sigla || p.ano)}<small>${esc([p.editora, p.ano].filter(Boolean).join(' · '))}</small></div>
    <div><span class="type">${esc(p.tipo || 'Publicação')}</span><h3>${esc(p.titulo)}</h3>
      <p>${fmt(p.autores)} · ${esc(p.evento)}${p.nota ? '. ' + esc(p.nota) + '.' : ''}</p></div>
    ${url ? `<a class="doi" href="${esc(url)}" target="_blank" rel="noopener">${p.doi ? 'DOI' : 'Link'} ↗</a>` : '<span></span>'}
  </article>`;
}).join(''));
set('#perfis', D.perfisAcademicos.map(l => `<a class="chip" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.rotulo)} ↗</a>`).join(''));

/* ------------------------------ PROJETOS ---------------------------- */
const ICONS = {
  formacao: `<g class="g"><path d="M20 125H280M20 25H280"/></g><path class="a" d="M150 40l22 30h-44z" stroke-dasharray="3 3"/><circle class="fa" cx="150" cy="40" r="5"/><g class="fc"><circle cx="128" cy="70" r="5"/><circle cx="172" cy="70" r="5"/><circle cx="106" cy="100" r="5"/><circle cx="194" cy="100" r="5"/></g><path class="s" d="M128 70L106 100M172 70L194 100" stroke-dasharray="3 3"/><text x="20" y="136">FORMATION · ROBUST</text>`,
  sysid: `<g class="g"><path d="M20 120H280"/></g><path class="s" d="M20 90 C50 40,70 40,90 80 S130 120,150 70 S200 30,220 75 S260 110,280 60"/><path class="a" d="M20 93 C50 45,72 44,90 83 S128 118,150 74 S198 34,220 78 S262 106,280 64" stroke-dasharray="4 3"/><text x="20" y="136">MEDIDO — · RNA - -</text>`,
  foguete: `<g class="g"><path d="M20 128H280"/></g><path class="s" d="M60 128 Q120 10 240 60" stroke-dasharray="2 4"/><g transform="translate(150 48) rotate(32)"><path class="a" d="M-6 14V-10L0-20 6-10V14zM-6 14l-6 8h24l-6-8"/></g><text x="20" y="140">APOGEU · ATITUDE · GNC</text>`,
  cubesat: `<g class="g"><path d="M20 128H280"/></g><ellipse class="s" cx="150" cy="38" rx="22" ry="26"/><path class="s" d="M150 64V90"/><rect class="a" x="138" y="90" width="24" height="24"/><path class="g" d="M138 102h24M150 90v24"/><text x="20" y="140">BALÃO ESTRATOSFÉRICO · γ</text>`,
  radar: `<g class="g"><circle cx="150" cy="70" r="55"/><circle cx="150" cy="70" r="30"/><path d="M150 12v116M92 70h116"/></g><path class="a" d="M150 70L196 40"/><g class="fc"><circle cx="190" cy="42" r="3"/><circle cx="200" cy="52" r="3"/><circle cx="182" cy="34" r="3"/><circle cx="205" cy="38" r="3"/></g><path class="s" d="M110 105 Q140 75 186 44" stroke-dasharray="3 3"/><text x="20" y="136">RADAR · ALOCAÇÃO</text>`,
  chip: `<rect class="a" x="110" y="30" width="80" height="80"/><rect class="g" x="128" y="48" width="44" height="44"/><g class="s"><path d="M120 30v-12M135 30v-12M150 30v-12M165 30v-12M180 30v-12M120 110v12M135 110v12M150 110v12M165 110v12M180 110v12M110 45h-12M110 60h-12M110 75h-12M110 90h-12M190 45h12M190 60h12M190 75h12M190 90h12"/></g><text x="20" y="136">RTL → GDSII</text>`,
  aerofolio: `<g class="g"><path d="M20 72H280"/></g><path class="a" d="M40 72 C60 45,110 39,170 49 S250 67,265 72 C230 77,170 85,110 87 S55 83,40 72Z"/><path class="s" d="M40 72 C90 61,180 61,265 72" stroke-dasharray="3 3"/><text x="20" y="136">NACA 2412</text>`,
  altimetro: `<g class="g"><path d="M40 118H260"/></g><g class="s"><path d="M60 118V93M90 118V78M120 118V68M150 118V56M180 118V48M210 118V38M240 118V28"/></g><path class="a" d="M60 90 L240 24"/><circle class="fa" cx="240" cy="24" r="4"/><text x="20" y="136">ALTÍMETRO · LATTES</text>`,
  ar: `<path class="a" d="M100 36h100l-10 70h-80z"/><path class="s" d="M150 36V16M120 106l-20 20M180 106l20 20"/><circle class="g" cx="150" cy="71" r="18"/><circle class="fc" cx="150" cy="71" r="4"/><text x="20" y="136">AR · IoT · LAB</text>`,
  rs485: `<path class="s" d="M30 72H270"/><g class="a"><rect x="40" y="52" width="40" height="40"/><rect x="130" y="52" width="40" height="40"/><rect x="220" y="52" width="40" height="40"/></g><path class="g" d="M60 52V32h180v20"/><text x="20" y="136">RS-485 · 5 BYTES</text>`,
  farol: `<g class="g"><path d="M20 118H280"/></g><path class="a" d="M70 66h30v20H70z"/><path class="s" d="M100 68L260 46M100 84L260 101" stroke-dasharray="4 4"/><path class="s" d="M100 76L260 66"/><text x="20" y="136">PITCH COMP · LDR</text>`,
  python: `<g class="s"><path d="M40 30h220v80H40z"/><path d="M40 48h220"/></g><text x="52" y="42" style="fill:var(--amber)">&gt;&gt;&gt; import numpy as np</text><text x="52" y="68">sol = solve_ivp(f, t, x0)</text><text x="52" y="84">sp.symbols('x y')</text><text x="20" y="136">PYTHON · CIÊNCIA</text>`,
  padrao: `<g class="g"><path d="M20 70H280M150 15V125"/><circle cx="150" cy="70" r="40"/></g><path class="a" d="M110 70 Q150 20 190 70 Q150 120 110 70Z"/>`
};
const cats = [...new Set(D.projetos.flatMap(p => p.categorias || []))];
const origens = [...new Set(D.projetos.map(p => p.origem).filter(Boolean))];
set('#filtros', ['Todos', ...cats, ...origens].map((c, i) => `<button class="${i ? '' : 'on'}" data-f="${esc(c)}">${esc(c)}</button>`).join(''));
set('#grid', D.projetos.map((p, i) => `
  <article class="panel card reveal" data-f="${esc([...(p.categorias || []), p.origem].join('|'))}">
    <div class="viz"><span class="code">PRJ-${String(i + 1).padStart(2, '0')}</span><span class="yr">${esc(p.ano)}</span>
      ${p.imagem ? `<img src="${esc(p.imagem)}" alt="" loading="lazy">` : `<svg viewBox="0 0 300 145" aria-hidden="true">${ICONS[p.icone] || ICONS.padrao}</svg>`}</div>
    <div class="cb"><h3>${esc(p.titulo)}</h3><div class="org">${esc(p.org)}${p.origem ? ` <em>· ${esc(p.origem)}</em>` : ''}</div>
      <p>${fmt(p.descricao)}</p>
      ${p.premio ? `<div class="award">★ ${esc(p.premio)}</div>` : ''}
      <div class="tags">${(p.tags || []).map(t => `<span>${esc(t)}</span>`).join('')}</div>
      ${(p.links || []).length ? `<div class="lnk">${p.links.map(l => ext(l.url, esc(l.rotulo) + ' ↗')).join('')}</div>` : ''}
    </div>
  </article>`).join(''));
$('#filtros').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#filtros button').forEach(x => x.classList.toggle('on', x === b));
  const f = b.dataset.f;
  document.querySelectorAll('#grid .card').forEach(c => c.classList.toggle('hide', f !== 'Todos' && !c.dataset.f.split('|').includes(f)));
});

/* ------------------------- CARREIRA ACADÊMICA ----------------------- */
const timeline = itens => itens.map(e => `
  <div class="ev reveal"><div class="when">${esc(e.quando)}</div><h3>${esc(e.titulo)}</h3><div class="at">${esc(e.local)}</div>
    <ul>${(e.pontos || []).map(p => `<li>${fmt(p)}</li>`).join('')}</ul></div>`).join('');
set('#abas', D.academico.map((a, i) => `<button role="tab" class="${i ? '' : 'on'}" data-i="${i}">${esc(a.aba)}</button>`).join(''));
function aba(i) {
  const a = D.academico[i];
  set('#aba-conteudo', `
    <div class="panel inst"><div><h3>${esc(a.instituicao)}</h3><div class="ic">${esc(a.curso)}</div>
      <div class="dest">${(a.destaques || []).map(d => `<span>${esc(d)}</span>`).join('')}</div></div>
      <div class="per">${esc(a.periodo)}${a.site ? ext(a.site, a.site.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') + ' ↗') : ''}</div></div>
    <div class="tl">${timeline(a.itens)}</div>`);
  document.querySelectorAll('#aba-conteudo .reveal').forEach(el => el.classList.add('in'));
}
$('#abas').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#abas button').forEach(x => x.classList.toggle('on', x === b));
  aba(+b.dataset.i);
});
aba(0);
document.querySelectorAll('#aba-conteudo .reveal').forEach(el => el.classList.remove('in'));

/* ------------------------------ FOGUETE ----------------------------- */
const F = D.foguete;
set('#fg-equipe', esc(F.equipe));
set('#fg-texto', fmt(F.texto));
set('#fg-cargos', F.cargos.map(c => `<div><span>${esc(c.ano)}</span>${esc(c.cargo)}</div>`).join(''));
if (F.url) set('#fg-link', `<div class="links-row">${ext(F.url, 'Conheça a equipe ↗').replace('<a ', '<a class="chip" ')}</div>`);

/* ------------------------ PROFISSIONAL / RESTO ---------------------- */
set('#prof', timeline(D.profissional));
set('#skills', D.competencias.map(c => `<div class="panel sk reveal"><h3>${esc(c.grupo)}</h3><ul>${c.itens.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join(''));
const row = (t, o, a, star) => `<div class="row"><div><b>${star ? '<span class="trophy">★</span>' : ''}${esc(t)}</b><small>${esc(o)}</small></div><span class="d">${esc(a)}</span></div>`;
set('#certs', D.certificacoes.map(c => row(c.titulo, c.org, c.ano)).join(''));
set('#premios', D.premios.map(p => row(p.titulo, p.org, p.ano, true)).join('') + (D.idiomas ? row('Idiomas', D.idiomas, '—') : ''));
set('#ct-chamada', fmt(D.contato.chamada));
set('#ct-links', D.contato.links.map(l => `<a href="${esc(l.url)}"${l.url.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><b>${esc(l.texto)}</b><span>${esc(l.rotulo)}</span></a>`).join(''));

/* -------------------------------- UI -------------------------------- */
const nav = $('#nav'), burger = $('#burger');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });
burger.onclick = () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
document.querySelectorAll('#menu a').forEach(a => a.onclick = () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  e.target.querySelectorAll('[data-count]').forEach(el => {
    const t = +el.dataset.count, d = +el.dataset.dec, t0 = performance.now();
    (function f(n) { const k = Math.min((n - t0) / 1400, 1), v = t * (1 - Math.pow(1 - k, 3)); el.textContent = v.toFixed(d).replace('.', ','); if (k < 1) requestAnimationFrame(f); })(t0);
  });
  io.unobserve(e.target);
}), { threshold: .08 });
const observe = () => document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
observe();
$('#abas').addEventListener('click', observe);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------- FOGUETE ANIMADO -------------------------- */
(() => {
  const sec = $('#foguete'), body = $('#rk-body'), smoke = $('#smoke');
  if (!sec || !body) return;
  let vis = false, puffs = [], last = 0;
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !reduce) requestAnimationFrame(loop); }).observe(sec);
  const NS = 'http://www.w3.org/2000/svg';
  function loop(t) {
    if (!vis) return;
    const r = sec.getBoundingClientRect();
    const p = Math.min(Math.max((innerHeight - r.top) / (innerHeight + r.height), 0), 1);
    body.style.transform = `translateY(${(0.5 - p) * 70}px)`;
    if (t - last > 70 && puffs.length < 26) {
      last = t;
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('fill', 'rgba(147,163,184,.18)'); smoke.appendChild(c);
      puffs.push({ c, x: 120 + (Math.random() - .5) * 8, y: 395, r: 4, vx: (Math.random() - .5) * .6, a: .5 });
    }
    puffs = puffs.filter(s => {
      s.y += 1.6; s.x += s.vx; s.r += .45; s.a -= .009;
      if (s.a <= 0) { s.c.remove(); return false; }
      s.c.setAttribute('cx', s.x); s.c.setAttribute('cy', s.y); s.c.setAttribute('r', s.r); s.c.setAttribute('opacity', s.a);
      return true;
    });
    requestAnimationFrame(loop);
  }
})();

/* ---------------- ESCOAMENTO POTENCIAL · AEROFÓLIO DE JOUKOWSKI ----------------
   Círculo no plano ζ (centro μ, raio R passando por ζ=1) + transformação
   z = ζ + 1/ζ. Circulação Γ fixada pela condição de Kutta no bordo de fuga.
   Partículas e linhas de corrente seguem o campo de velocidade exato. */
(() => {
  const cv = $('#flow'); if (!cv) return;
  const ctx = cv.getContext('2d');
  const EPS = .1, DEL = .085, MUr = -EPS, MUi = DEL;
  const R = Math.hypot(1 - MUr, MUi), R2 = R * R;
  const AL = 6 * Math.PI / 180, ca = Math.cos(AL), sa = Math.sin(AL);
  const BETA = Math.asin(DEL / R);
  const K = 4 * Math.PI * R * Math.sin(AL + BETA) / (2 * Math.PI); // Γ/2π (U = 1)

  // velocidade (u, v) no plano físico z; null se dentro do perfil
  function vel(zr, zi) {
    const ar = zr * zr - zi * zi - 4, ai = 2 * zr * zi, m = Math.hypot(ar, ai);
    const sr = Math.sqrt((m + ar) / 2), si = (ai >= 0 ? 1 : -1) * Math.sqrt(Math.max(0, (m - ar) / 2));
    let x = (zr + sr) / 2, y = (zi + si) / 2;
    const x2 = (zr - sr) / 2, y2 = (zi - si) / 2;
    if ((x2 - MUr) ** 2 + (y2 - MUi) ** 2 > (x - MUr) ** 2 + (y - MUi) ** 2) { x = x2; y = y2; }
    const pr = x - MUr, pi = y - MUi, pp = pr * pr + pi * pi;
    if (pp < R2 * 1.0004) return null;
    const p2r = pr * pr - pi * pi, p2i = 2 * pr * pi, n2 = p2r * p2r + p2i * p2i;
    const t2r = R2 * (ca * p2r + sa * p2i) / n2, t2i = R2 * (sa * p2r - ca * p2i) / n2;
    const wr = ca - t2r + K * pi / pp, wi = -sa - t2i + K * pr / pp;            // dw/dζ
    const z2r = x * x - y * y, z2i = 2 * x * y, zn = z2r * z2r + z2i * z2i;
    const dr = 1 - z2r / zn, di = z2i / zn;                                      // dz/dζ
    const dn = dr * dr + di * di; if (dn < 1e-9) return null;
    let u = (wr * dr + wi * di) / dn, v = -(wi * dr - wr * di) / dn;            // conj(dw/dz)
    const s = Math.hypot(u, v); if (s > 3) { u *= 3 / s; v *= 3 / s; }
    return [u, v];
  }

  let W, H, S, ox, oy, chord, parts = [], still, run = false, lastT = 0;
  const toX = (zr, zi) => ox + (zr * ca + zi * sa) * S;
  const toY = (zr, zi) => oy - (zi * ca - zr * sa) * S;
  const fromS = (X, Y) => { const wr = (X - ox) / S, wi = (oy - Y) / S; return [wr * ca - wi * sa, wr * sa + wi * ca]; };

  const STOPS = [[0, 120, 90, 255], [.6, 70, 130, 255], [1, 63, 208, 255], [1.35, 200, 235, 255], [1.7, 255, 196, 90], [2.2, 255, 150, 30]];
  function col(q) {
    for (let i = 1; i < STOPS.length; i++) if (q <= STOPS[i][0] || i === STOPS.length - 1) {
      const a = STOPS[i - 1], b = STOPS[i], t = Math.min(Math.max((q - a[0]) / (b[0] - a[0]), 0), 1);
      return [0, 1, 2].map(k => Math.round(a[k + 1] + (b[k + 1] - a[k + 1]) * t));
    }
  }
  const near = (zr, zi) => Math.exp(-Math.max(0, Math.hypot(zr, zi * 1.6) - 2) / 1.3);

  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const mob = W <= 900;
    const pad = mob ? W * .92 * .4 + 50 : Math.min(W * .5, 700) * .5 + 70;
    chord = mob ? W * .78 : Math.min(W * .5, 700);
    S = chord / 4.03; ox = W / 2; oy = H - pad * .6;
    buildStill(dpr);
    parts = []; const n = mob ? 120 : 240;
    for (let i = 0; i < n; i++) parts.push(seed({}, true));
  }
  function seed(o, anywhere) {
    const X = anywhere ? Math.random() * W : -10 - Math.random() * 40;
    const Y = Math.random() * H;
    [o.zr, o.zi] = fromS(X, Y); o.tr = []; o.age = 0;
    if (!vel(o.zr, o.zi)) return seed(o, anywhere);
    return o;
  }
  function step(o, h) { // RK2
    const a = vel(o.zr, o.zi); if (!a) return false;
    const b = vel(o.zr + a[0] * h / 2, o.zi + a[1] * h / 2); if (!b) return false;
    o.zr += b[0] * h; o.zi += b[1] * h; o.q = Math.hypot(b[0], b[1]); return true;
  }
  function buildStill(dpr) {
    still = document.createElement('canvas'); still.width = W * dpr; still.height = H * dpr;
    const c = still.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.lineWidth = 1;
    const yTop = oy / S + .5, yBot = (oy - H) / S - .5;  // limites verticais (plano rotacionado)
    const N = W <= 900 ? 26 : 40;
    for (let i = 0; i <= N; i++) {
      const t = i / N * 2 - 1, yw = (t < 0 ? yBot : yTop) * Math.pow(Math.abs(t), 1.8) + .12;
      const o = {}; [o.zr, o.zi] = fromS(-5, oy - yw * S);
      let px = toX(o.zr, o.zi), py = toY(o.zr, o.zi);
      for (let k = 0; k < 1600; k++) {
        const v = vel(o.zr, o.zi); if (!v) break;
        const sp = Math.hypot(v[0], v[1]) || 1e-3, h = .035 / Math.max(sp, .25);
        if (!step(o, h)) break;
        const x = toX(o.zr, o.zi), y = toY(o.zr, o.zi);
        const [r, g, b] = col(o.q), a = .05 + .3 * near(o.zr, o.zi);
        c.strokeStyle = `rgba(${r},${g},${b},${a})`;
        c.beginPath(); c.moveTo(px, py); c.lineTo(x, y); c.stroke();
        px = x; py = y; if (x > W + 10) break;
      }
    }
    // perfil
    c.beginPath();
    for (let i = 0; i <= 200; i++) {
      const th = i / 200 * 2 * Math.PI, zr0 = MUr + R * Math.cos(th), zi0 = MUi + R * Math.sin(th), n = zr0 * zr0 + zi0 * zi0;
      const zr = zr0 + zr0 / n, zi = zi0 - zi0 / n;
      i ? c.lineTo(toX(zr, zi), toY(zr, zi)) : c.moveTo(toX(zr, zi), toY(zr, zi));
    }
    c.closePath();
    const g = c.createLinearGradient(0, oy - chord * .1, 0, oy + chord * .05);
    g.addColorStop(0, 'rgba(255,176,32,.22)'); g.addColorStop(1, 'rgba(255,176,32,.05)');
    c.fillStyle = g; c.fill(); c.strokeStyle = 'rgba(255,176,32,.9)'; c.lineWidth = 1.5; c.stroke();
    // corda
    c.setLineDash([4, 5]); c.lineWidth = 1; c.strokeStyle = 'rgba(255,176,32,.35)';
    c.beginPath(); c.moveTo(toX(-2.03, 0), toY(-2.03, 0)); c.lineTo(toX(2, 0), toY(2, 0)); c.stroke();
    c.setLineDash([]);
    // vetores e legendas
    const fs = W <= 900 ? 10 : 11; c.font = `${fs}px "JetBrains Mono", monospace`;
    const lx = toX(-1, 0), ly = toY(-1, .05), L = chord * .15;
    c.strokeStyle = c.fillStyle = 'rgba(76,227,154,.9)'; c.lineWidth = 1.6;
    c.beginPath(); c.moveTo(lx, ly); c.lineTo(lx, ly - L); c.stroke();
    c.beginPath(); c.moveTo(lx, ly - L - 7); c.lineTo(lx - 4, ly - L + 1); c.lineTo(lx + 4, ly - L + 1); c.fill();
    c.fillText('L', lx + 8, ly - L + 4);
    const vx = Math.max(toX(-2.03, 0) - chord * .42, 12), vy = toY(-2.03, 0);
    c.strokeStyle = c.fillStyle = 'rgba(230,237,245,.75)';
    c.beginPath(); c.moveTo(vx, vy); c.lineTo(vx + chord * .16, vy); c.stroke();
    c.beginPath(); c.moveTo(vx + chord * .16 + 7, vy); c.lineTo(vx + chord * .16 - 1, vy - 4); c.lineTo(vx + chord * .16 - 1, vy + 4); c.fill();
    c.fillText('V∞', vx, vy - 8);
    c.fillStyle = 'rgba(255,176,32,.95)'; c.fillText('α = 6°', toX(1.2, 0) , toY(-2.03, 0) + 18);
    c.fillStyle = 'rgba(147,163,184,.75)';
    c.fillText('Joukowski · Kutta · Γ = 4πUR sin(α+β)', toX(-2.03, 0), toY(-2.03, 0) + chord * .2 + 6);
  }

  function frame(t) {
    if (!run) return;
    const dt = Math.min((t - (lastT || t)) / 1000, .05); lastT = t;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(still, 0, 0, W, H);
    const h = dt * 150 / S; // velocidade de corrente livre ≈ 150 px/s
    ctx.lineWidth = 1.3;
    for (const o of parts) {
      if (!step(o, h) || toX(o.zr, o.zi) > W + 20 || ++o.age > 3000) { seed(o, false); continue; }
      o.tr.push([toX(o.zr, o.zi), toY(o.zr, o.zi)]); if (o.tr.length > 16) o.tr.shift();
      if (o.tr.length < 2) continue;
      const [r, g, b] = col(o.q), a = .12 + .7 * near(o.zr, o.zi);
      ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
      ctx.beginPath(); o.tr.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
    }
    requestAnimationFrame(frame);
  }
  let lw = 0, lh = 0, tm;
  function onResize() {
    const w = cv.clientWidth, hh = cv.clientHeight;
    if (w === lw && Math.abs(hh - lh) < 120) return;
    lw = w; lh = hh; size(); if (reduce) ctx.drawImage(still, 0, 0, W, H);
  }
  addEventListener('resize', () => { clearTimeout(tm); tm = setTimeout(onResize, 150); });
  onResize();
  if (reduce) { ctx.drawImage(still, 0, 0, W, H); return; }
  new IntersectionObserver(([e]) => { const was = run; run = e.isIntersecting; if (run && !was) { lastT = 0; requestAnimationFrame(frame); } }).observe(cv);
})();
})();
