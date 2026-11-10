/* Renderiza o site a partir de window.DADOS (dados.js).
   Normalmente não é preciso editar este arquivo. */
(() => {
const D = window.DADOS;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const ext = (url, txt, cls) => `<a${cls ? ` class="${cls}"` : ''} href="${esc(url)}" target="_blank" rel="noopener">${txt}</a>`;
const host = u => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
const count = k => (D[k] || []).filter(x => k !== 'projetos' || x.destaque).length;

/* ------------------------------- TOPO ------------------------------- */
const P = D.perfil;
const parts = P.nome.split(' ');
set('#h-nome', `${esc(parts[0])}<br><em>${esc(parts[1] || '')}</em> ${esc(parts.slice(2).join(' '))}`);
set('#h-titulo', '// ' + esc(P.titulo));
set('#h-chamada', fmt(P.chamada));
$('#h-foto').src = P.foto;
set('#h-ficha', P.ficha.map(f => `<div><small>${esc(f.rotulo)}</small><span>${esc(f.valor)}</span></div>`).join(''));
set('#ft-nome', esc(P.nome));
$('#yr').textContent = new Date().getFullYear();
set('#resumo-texto', fmt(P.resumo));
set('#fatos', P.fatos.map(f => `<div class="fato"><small>${esc(f.rotulo)}</small>
  <strong>${f.auto ? count(f.auto) + esc(f.sufixo || '') : esc(f.valor)}</strong><span>${esc(f.sub)}</span></div>`).join(''));

/* ----------------------------- TRAJETÓRIA --------------------------- */
const ev = e => `<div class="ev"><div class="when">${esc(e.quando)}</div><h5>${esc(e.titulo)}</h5>
  <div class="at">${esc(e.local)}</div>${e.texto ? `<p>${fmt(e.texto)}</p>` : ''}${e.premio ? `<div class="star">★ ${esc(e.premio)}</div>` : ''}</div>`;
const lane = (cls, nome, itens) => itens && itens.length ? `<div class="lane ${cls}"><h4><i></i>${nome} <small>· ${itens.length}</small></h4><div class="tl">${itens.map(ev).join('')}</div></div>` : '';
set('#traj', D.trajetoria.map((f, i) => {
  const a = lane('acad', 'Trilha acadêmica', f.academico), p = lane('prof', 'Trilha profissional', f.profissional);
  return `${i ? `<div class="bridge reveal">${esc(D.trajetoria[i - 1].instituicao)} → ${esc(f.instituicao)}</div>` : ''}
  <article class="chap">
    <div class="panel chap-head reveal">
      <div class="fase">Fase<strong>${esc(f.fase)}</strong></div>
      <div><h3>${esc(f.instituicao)}</h3><div class="cn">${esc(f.curso)} · ${esc(f.nomeCompleto)}</div>
        <p>${fmt(f.resumo)}</p><div class="dest">${(f.destaques || []).map(d => `<span>${esc(d)}</span>`).join('')}</div></div>
      <div class="per">${esc(f.periodo)}<br>${esc(f.local)}${f.site ? ext(f.site, host(f.site) + ' ↗') : ''}</div>
    </div>
    <div class="lanes reveal${a && p ? '' : ' one'}">${a}${p}</div>
    ${f.foguete ? '<div class="slot-foguete"></div>' : ''}
  </article>`;
}).join(''));

const F = D.foguete, slot = $('.slot-foguete');
if (slot && F) {
  slot.appendChild($('#tpl-foguete').content.cloneNode(true));
  set('.fg-equipe', esc(F.equipe));
  set('.fg-texto', fmt(F.texto));
  set('.fg-cargos', F.cargos.map(c => `<div><span>${esc(c.ano)}</span>${esc(c.cargo)}</div>`).join(''));
  if (F.url) set('.fg-link', `<div class="links-row">${ext(F.url, 'Conheça a equipe ↗', 'chip')}</div>`);
}

/* ------------------------------ PESQUISA ---------------------------- */
set('#pubs', [...D.publicacoes].sort((a, b) => (b.ano || 0) - (a.ano || 0)).map(p => {
  const url = p.doi ? 'https://doi.org/' + p.doi : p.url;
  return `<article class="panel pub reveal">
    <div class="venue">${esc(p.sigla || p.ano)}<small>${esc([p.editora, p.ano].filter(Boolean).join(' · '))}</small></div>
    <div><span class="type">${esc(p.tipo || 'Publicação')}</span><h3>${esc(p.titulo)}</h3>
      <p>${fmt(p.autores)} · ${esc(p.evento)}${p.nota ? '. ' + esc(p.nota) + '.' : ''}</p></div>
    ${url ? ext(url, (p.doi ? 'DOI' : 'Link') + ' ↗', 'doi') : '<span></span>'}
  </article>`;
}).join(''));
set('#grupos', D.grupos.map(g => `
  <a class="panel group reveal" href="${esc(g.url)}" target="_blank" rel="noopener">
    <div class="logo"><img src="${esc(g.logo)}" alt="Logo ${esc(g.sigla)}" loading="lazy"></div>
    <div class="gt"><h3>${esc(g.sigla)}</h3><div class="gn">${esc(g.nome)}</div><p>${esc(g.descricao)}</p><span class="go">${esc(host(g.site))} ↗</span></div>
  </a>`).join(''));
set('#perfis', D.perfisAcademicos.map(l => ext(l.url, esc(l.rotulo) + ' ↗', 'chip')).join(''));

/* ------------------------------ PROJETOS ---------------------------- */
const W_ = '20 0 260 145', N_ = '78 4 144 136';
const ICONS = {
  formacao: [N_, `<path class="a" d="M150 40l22 30h-44z" stroke-dasharray="4 4"/><circle class="fa" cx="150" cy="40" r="7"/><g class="fc"><circle cx="128" cy="70" r="7"/><circle cx="172" cy="70" r="7"/><circle cx="106" cy="100" r="7"/><circle cx="194" cy="100" r="7"/></g><path class="s" d="M128 70L106 100M172 70L194 100" stroke-dasharray="4 4"/>`],
  sysid: [W_, `<path class="s" d="M20 90 C50 40,70 40,90 80 S130 120,150 70 S200 30,220 75 S260 110,280 60"/><path class="a" d="M20 96 C50 48,72 46,90 86 S128 118,150 76 S198 36,220 80 S262 104,280 66" stroke-dasharray="6 5"/>`],
  foguete: [N_, `<path class="s" d="M90 130 Q120 30 210 50" stroke-dasharray="3 5"/><g transform="translate(160 62) rotate(40)"><path class="a" d="M-8 18V-12L0-26 8-12V18zM-8 18l-8 10h32l-8-10"/></g>`],
  cubesat: [N_, `<ellipse class="s" cx="150" cy="40" rx="24" ry="28"/><path class="s" d="M150 68V92"/><rect class="a" x="136" y="92" width="28" height="28"/><path class="g" d="M136 106h28M150 92v28"/>`],
  radar: [N_, `<g class="g"><circle cx="150" cy="72" r="56"/><circle cx="150" cy="72" r="30"/><path d="M150 14v116M92 72h116"/></g><path class="a" d="M150 72L196 42"/><g class="fc"><circle cx="190" cy="44" r="4"/><circle cx="200" cy="54" r="4"/><circle cx="182" cy="36" r="4"/></g>`],
  chip: [N_, `<rect class="a" x="110" y="32" width="80" height="80"/><rect class="g" x="128" y="50" width="44" height="44"/><g class="s"><path d="M120 32v-12M135 32v-12M150 32v-12M165 32v-12M180 32v-12M120 112v12M135 112v12M150 112v12M165 112v12M180 112v12M110 47h-12M110 62h-12M110 77h-12M110 92h-12M190 47h12M190 62h12M190 77h12M190 92h12"/></g>`],
  aerofolio: [W_, `<path class="a" d="M40 72 C60 45,110 39,170 49 S250 67,265 72 C230 77,170 85,110 87 S55 83,40 72Z"/><path class="s" d="M40 72 C90 61,180 61,265 72" stroke-dasharray="5 5"/>`],
  altimetro: [W_, `<g class="s"><path d="M60 118V93M90 118V78M120 118V68M150 118V56M180 118V48M210 118V38M240 118V28"/></g><path class="a" d="M60 90 L240 24"/><circle class="fa" cx="240" cy="24" r="6"/>`],
  ar: [N_, `<path class="a" d="M100 36h100l-10 70h-80z"/><path class="s" d="M150 36V16M120 106l-20 20M180 106l20 20"/><circle class="fc" cx="150" cy="71" r="6"/>`],
  rs485: [W_, `<path class="s" d="M30 72H270"/><g class="a"><rect x="40" y="52" width="40" height="40"/><rect x="130" y="52" width="40" height="40"/><rect x="220" y="52" width="40" height="40"/></g>`],
  farol: [W_, `<path class="a" d="M70 66h30v20H70z"/><path class="s" d="M100 68L260 46M100 84L260 101" stroke-dasharray="6 5"/><path class="s" d="M100 76L260 66"/>`],
  python: [N_, `<g class="s"><path d="M90 30h120v84H90z"/><path d="M90 50h120"/></g><path class="a" d="M108 70l14 12-14 12M132 96h28"/>`],
  padrao: [N_, `<g class="g"><circle cx="150" cy="72" r="44"/></g><path class="a" d="M108 72 Q150 22 192 72 Q150 122 108 72Z"/>`]
};
set('#grid', D.projetos.filter(p => p.destaque).map(p => {
  const [vb, ic] = ICONS[p.icone] || ICONS.padrao;
  return `<article class="panel card reveal">
    <div class="viz">${p.imagem ? `<img src="${esc(p.imagem)}" alt="" loading="lazy">` : `<svg viewBox="${vb}" aria-hidden="true">${ic}</svg>`}</div>
    <div class="cb"><span class="yr">${esc(p.ano)}</span><h3>${esc(p.titulo)}</h3><div class="org">${esc(p.org)}</div>
      <p>${fmt(p.descricao)}</p>
      ${(p.links || []).length ? `<div class="lnk">${p.links.map(l => ext(l.url, esc(l.rotulo) + ' ↗')).join('')}</div>` : ''}</div>
  </article>`;
}).join(''));

/* ---------------------------- COMPETÊNCIAS -------------------------- */
set('#skills', D.competencias.map(c => `<div class="panel sk reveal"><h3>${esc(c.grupo)}</h3><ul>${c.itens.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join(''));
const row = (t, o, a, star) => `<div class="row"><div><b>${star ? '<span class="trophy">★</span>' : ''}${esc(t)}</b><small>${esc(o)}</small></div><span class="d">${esc(a)}</span></div>`;
set('#premios', D.premios.map(p => row(p.titulo, p.org, p.ano, true)).join(''));
set('#idiomas', `<p>${esc(D.idiomas)}</p>`);
set('#certs', D.certificacoes.map(c => row(c.titulo, c.org, c.ano)).join(''));
set('#ct-chamada', fmt(D.contato.chamada));
set('#ct-links', D.contato.links.map(l => `<a href="${esc(l.url)}"${l.url.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><b>${esc(l.texto)}</b><span>${esc(l.rotulo)}</span></a>`).join(''));

/* -------------------------------- UI -------------------------------- */
const nav = $('#nav'), burger = $('#burger');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });
burger.onclick = () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
document.querySelectorAll('#menu a').forEach(a => a.onclick = () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); });
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .06 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ----------------------- IDENTIDADE VISUAL (prévia) ------------------
   Para fixar um tema: mude data-tema no <html> do index.html e apague
   o bloco .temas do HTML.                                              */
const TEMAS = {
  cockpit:      { nome: 'Cockpit',      cor: '#ffb020', fundo: '#05080d', fonte: 'family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700' },
  prancheta:    { nome: 'Prancheta',    cor: '#ffd25e', fundo: '#0c3566', fonte: 'family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600' },
  relatorio:    { nome: 'Relatório',    cor: '#ff4f00', fundo: '#f3f0e8', fonte: 'family=Archivo:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600' },
  estratosfera: { nome: 'Estratosfera', cor: '#f3c76b', fundo: '#0c1230', fonte: 'family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600' }
};
const root = document.documentElement;
function aplicaTema(t, salvar) {
  if (!TEMAS[t]) t = 'cockpit';
  root.dataset.tema = t;
  $('#fonte').href = `https://fonts.googleapis.com/css2?${TEMAS[t].fonte}&display=swap`;
  document.querySelector('meta[name="theme-color"]').content = TEMAS[t].fundo;
  document.querySelectorAll('#temas button').forEach(b => b.classList.toggle('on', b.dataset.t === t));
  if (salvar) try { localStorage.setItem('tema', t); } catch (e) {}
  window.dispatchEvent(new Event('tema'));
}
set('#temas', '<small>Identidade visual</small>' + Object.entries(TEMAS).map(([k, v]) =>
  `<button data-t="${k}" title="${v.nome}"><i style="background:linear-gradient(135deg,${v.fundo} 50%,${v.cor} 50%)"></i><span>${v.nome}</span></button>`).join(''));
$('#temas').addEventListener('click', e => { const b = e.target.closest('button'); if (b) aplicaTema(b.dataset.t, true); });
aplicaTema(root.dataset.tema);

/* ------------------------- FOGUETE ANIMADO -------------------------- */
(() => {
  const sec = $('.rocket'); if (!sec) return;
  const body = sec.querySelector('.rk-body'), smoke = sec.querySelector('.smoke');
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
      const c = document.createElementNS(NS, 'circle'); smoke.appendChild(c);
      puffs.push({ c, x: 120 + (Math.random() - .5) * 8, y: 395, r: 4, vx: (Math.random() - .5) * .6, a: .22 });
    }
    puffs = puffs.filter(s => {
      s.y += 1.6; s.x += s.vx; s.r += .45; s.a -= .004;
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

  let W, H, S, ox, oy, chord, parts = [], still, run = false, lastT = 0, C = {};
  const toX = (zr, zi) => ox + (zr * ca + zi * sa) * S;
  const toY = (zr, zi) => oy - (zi * ca - zr * sa) * S;
  const fromS = (X, Y) => { const wr = (X - ox) / S, wi = (oy - Y) / S; return [wr * ca - wi * sa, wr * sa + wi * ca]; };

  function cores() {
    const cs = getComputedStyle(root), g = n => cs.getPropertyValue(n).split(',').map(Number);
    const lo = g('--f-lo'), mid = g('--f-mid'), hi = g('--f-hi');
    C = { stops: [[0, ...lo], [.7, ...lo.map((v, i) => (v + mid[i]) / 2)], [1, ...mid], [1.4, ...mid.map((v, i) => (v * 2 + hi[i]) / 3)], [1.75, ...hi], [2.3, ...hi]],
      wing: g('--f-wing'), vec: g('--f-vec'), txt: g('--f-txt'), light: root.dataset.tema === 'relatorio', fm: cs.getPropertyValue('--fm') };
  }
  function col(q) {
    const st = C.stops;
    for (let i = 1; i < st.length; i++) if (q <= st[i][0] || i === st.length - 1) {
      const a = st[i - 1], b = st[i], t = Math.min(Math.max((q - a[0]) / (b[0] - a[0]), 0), 1);
      return [0, 1, 2].map(k => Math.round(a[k + 1] + (b[k + 1] - a[k + 1]) * t));
    }
  }
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  const near = (zr, zi) => Math.exp(-Math.max(0, Math.hypot(zr, zi * 1.6) - 2) / 1.3);

  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const mob = W <= 900;
    const pad = mob ? W * .92 * .4 + 50 : Math.min(W * .5, 700) * .5 + 70;
    chord = mob ? W * .78 : Math.min(W * .5, 700);
    S = chord / 4.03; ox = W / 2; oy = H - pad * .6;
    cores(); buildStill(dpr);
    parts = []; const n = mob ? 120 : 240;
    for (let i = 0; i < n; i++) parts.push(seed({}, true));
  }
  function seed(o, anywhere) {
    for (let k = 0; k < 20; k++) {
      const X = anywhere ? Math.random() * W : -10 - Math.random() * 40, Y = Math.random() * H;
      [o.zr, o.zi] = fromS(X, Y); o.tr = []; o.age = 0;
      if (vel(o.zr, o.zi)) break;
    }
    return o;
  }
  function step(o, h) {
    const a = vel(o.zr, o.zi); if (!a) return false;
    const b = vel(o.zr + a[0] * h / 2, o.zi + a[1] * h / 2); if (!b) return false;
    o.zr += b[0] * h; o.zi += b[1] * h; o.q = Math.hypot(b[0], b[1]); return true;
  }
  function buildStill(dpr) {
    still = document.createElement('canvas'); still.width = W * dpr; still.height = H * dpr;
    const c = still.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.lineWidth = 1;
    const k = C.light ? 1.6 : 1;
    const yTop = oy / S + .5, yBot = (oy - H) / S - .5, N = W <= 900 ? 26 : 40;
    for (let i = 0; i <= N; i++) {
      const t = i / N * 2 - 1, yw = (t < 0 ? yBot : yTop) * Math.pow(Math.abs(t), 1.8) + .12;
      const o = {}; [o.zr, o.zi] = fromS(-5, oy - yw * S);
      let px = toX(o.zr, o.zi), py = toY(o.zr, o.zi);
      for (let s = 0; s < 1600; s++) {
        const v = vel(o.zr, o.zi); if (!v) break;
        if (!step(o, .035 / Math.max(Math.hypot(v[0], v[1]), .25))) break;
        const x = toX(o.zr, o.zi), y = toY(o.zr, o.zi);
        c.strokeStyle = rgba(col(o.q), Math.min(1, (.05 + .3 * near(o.zr, o.zi)) * k));
        c.beginPath(); c.moveTo(px, py); c.lineTo(x, y); c.stroke();
        px = x; py = y; if (x > W + 10) break;
      }
    }
    c.beginPath();
    for (let i = 0; i <= 200; i++) {
      const th = i / 200 * 2 * Math.PI, zr0 = MUr + R * Math.cos(th), zi0 = MUi + R * Math.sin(th), n = zr0 * zr0 + zi0 * zi0;
      const zr = zr0 + zr0 / n, zi = zi0 - zi0 / n;
      i ? c.lineTo(toX(zr, zi), toY(zr, zi)) : c.moveTo(toX(zr, zi), toY(zr, zi));
    }
    c.closePath();
    const g = c.createLinearGradient(0, oy - chord * .1, 0, oy + chord * .05);
    g.addColorStop(0, rgba(C.wing, .24)); g.addColorStop(1, rgba(C.wing, .06));
    c.fillStyle = g; c.fill(); c.strokeStyle = rgba(C.wing, .95); c.lineWidth = 1.5; c.stroke();
    c.setLineDash([4, 5]); c.lineWidth = 1; c.strokeStyle = rgba(C.wing, .4);
    c.beginPath(); c.moveTo(toX(-2.03, 0), toY(-2.03, 0)); c.lineTo(toX(2, 0), toY(2, 0)); c.stroke();
    c.setLineDash([]);
    const fs = W <= 900 ? 10 : 11; c.font = `${fs}px ${C.fm || 'monospace'}`;
    const lx = toX(-1, 0), ly = toY(-1, .05), L = chord * .15;
    c.strokeStyle = c.fillStyle = rgba(C.vec, .9); c.lineWidth = 1.6;
    c.beginPath(); c.moveTo(lx, ly); c.lineTo(lx, ly - L); c.stroke();
    c.beginPath(); c.moveTo(lx, ly - L - 7); c.lineTo(lx - 4, ly - L + 1); c.lineTo(lx + 4, ly - L + 1); c.fill();
    c.fillText('L', lx + 8, ly - L + 4);
    const vx = Math.max(toX(-2.03, 0) - chord * .42, 12), vy = toY(-2.03, 0), al = chord * .16;
    c.strokeStyle = c.fillStyle = rgba(C.txt, .9);
    c.beginPath(); c.moveTo(vx, vy); c.lineTo(vx + al, vy); c.stroke();
    c.beginPath(); c.moveTo(vx + al + 7, vy); c.lineTo(vx + al - 1, vy - 4); c.lineTo(vx + al - 1, vy + 4); c.fill();
    c.fillText('V∞', vx, vy - 8);
    c.fillStyle = rgba(C.wing, .95); c.fillText('α = 6°', toX(1.2, 0), toY(-2.03, 0) + 18);
    c.fillStyle = rgba(C.txt, .8);
    c.fillText('Joukowski · Kutta · Γ = 4πUR sin(α+β)', toX(-2.03, 0), toY(-2.03, 0) + chord * .2 + 6);
  }

  function frame(t) {
    if (!run) return;
    const dt = Math.min((t - (lastT || t)) / 1000, .05); lastT = t;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(still, 0, 0, W, H);
    const h = dt * 150 / S, k = C.light ? 1.25 : 1;
    ctx.lineWidth = 1.3;
    for (const o of parts) {
      if (!step(o, h) || toX(o.zr, o.zi) > W + 20 || ++o.age > 3000) { seed(o, false); continue; }
      o.tr.push([toX(o.zr, o.zi), toY(o.zr, o.zi)]); if (o.tr.length > 16) o.tr.shift();
      if (o.tr.length < 2) continue;
      ctx.strokeStyle = rgba(col(o.q), Math.min(1, (.12 + .7 * near(o.zr, o.zi)) * k));
      ctx.beginPath(); o.tr.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
    }
    requestAnimationFrame(frame);
  }
  let lw = 0, lh = 0, tm;
  function onResize(force) {
    const w = cv.clientWidth, hh = cv.clientHeight;
    if (!force && w === lw && Math.abs(hh - lh) < 120) return;
    lw = w; lh = hh; size(); if (reduce) { ctx.clearRect(0, 0, W, H); ctx.drawImage(still, 0, 0, W, H); }
  }
  addEventListener('resize', () => { clearTimeout(tm); tm = setTimeout(onResize, 150); });
  addEventListener('tema', () => setTimeout(() => onResize(true), 60));
  onResize(true);
  if (reduce) return;
  new IntersectionObserver(([e]) => { const was = run; run = e.isIntersecting; if (run && !was) { lastT = 0; requestAnimationFrame(frame); } }).observe(cv);
})();
})();
