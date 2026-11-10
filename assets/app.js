/* Monta o currículo a partir de window.DADOS (dados.js) no idioma escolhido
   (traduções em idiomas.js). Normalmente não é preciso editar este arquivo. */
(() => {
const BASE = window.DADOS, I = window.IDIOMAS;
const LANGS = ['pt', 'en', 'fr', 'it'];
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const ext = (url, txt, cls) => `<a${cls ? ` class="${cls}"` : ''} href="${esc(url)}" target="_blank" rel="noopener">${txt}</a>`;
const host = u => u.replace(/^(https?:\/\/|mailto:)(www\.)?/, '').replace(/\/$/, '');
const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------ IDIOMA ------------------------------ */
let lang = 'pt';
try {
  const q = new URLSearchParams(location.search).get('lang');
  const saved = localStorage.getItem('lang');
  const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
  lang = [q, saved, nav].find(l => LANGS.includes(l)) || 'pt';
} catch (e) {}

const MES = /\b(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\b/g;
function tr(s) {
  if (lang === 'pt' || typeof s !== 'string') return s;
  const t = I.textos[s];
  if (t && t[lang]) return t[lang];
  if (/^[a-z\d\s—–\-]+$/.test(s) && /\b(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)\b/.test(s)) return s.replace(MES, m => I.meses[lang][m] || m);
  return s;
}
const NAO = new Set(['url', 'site', 'logo', 'foto', 'fotoCredito', 'doi', 'icone', 'imagem', 'sigla', 'nome', 'instituicao', 'equipe', 'autores', 'evento', 'editora', 'texto_c']);
function traduz(v) {
  if (Array.isArray(v)) return v.map(traduz);
  if (v && typeof v === 'object') { const o = {}; for (const k in v) o[k] = NAO.has(k) ? v[k] : traduz(v[k]); return o; }
  return typeof v === 'string' ? tr(v) : v;
}
const ui = k => (I.ui[lang] && I.ui[lang][k]) || I.ui.pt[k] || '';

/* ------------------------------ ÍCONES ------------------------------ */
const CONTATO = {
  whatsapp: '<path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.2L4 20z"/><path d="M9.2 8.6c-.4 3 2.9 6.4 6 6l.9-1.4-1.9-1-.9.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.9-1-1.9z"/>',
  linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10.5V16.5M8 7.6v.2M11.6 16.5v-6M11.6 13.2c0-1.6 1-2.7 2.5-2.7s2.3 1 2.3 2.7v3.3" stroke-width="2"/>',
  email: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
  github: '<path d="M8.5 8l-4 4 4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13"/>',
  lattes: '<path d="M6 3h9l3 3v15H6z"/><path d="M9 10h6M9 14h6M9 18h4"/>',
  researchgate: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><text x="12" y="15.6" text-anchor="middle" font-size="8.5" font-weight="700" font-family="Arial,sans-serif" stroke="none" fill="currentColor">RG</text>'
};
const ICW = '20 0 260 145', ICN = '78 4 144 136';
const ICONS = {
  formacao: [ICN, `<path class="a" d="M150 40l22 30h-44z" stroke-dasharray="4 4"/><circle class="fa" cx="150" cy="40" r="10"/><g class="fc"><circle cx="128" cy="70" r="10"/><circle cx="172" cy="70" r="10"/><circle cx="106" cy="100" r="10"/><circle cx="194" cy="100" r="10"/></g>`],
  sysid: [ICW, `<path class="s" d="M20 90 C50 40,70 40,90 80 S130 120,150 70 S200 30,220 75 S260 110,280 60"/><path class="a" d="M20 96 C50 48,72 46,90 86 S128 118,150 76 S198 36,220 80 S262 104,280 66" stroke-dasharray="6 5"/>`],
  foguete: [ICN, `<path class="s" d="M90 130 Q120 30 210 50" stroke-dasharray="3 5"/><g transform="translate(160 62) rotate(40)"><path class="a" d="M-8 18V-12L0-26 8-12V18zM-8 18l-8 10h32l-8-10"/></g>`],
  cubesat: [ICN, `<ellipse class="s" cx="150" cy="40" rx="24" ry="28"/><path class="s" d="M150 68V92"/><rect class="a" x="136" y="92" width="28" height="28"/>`],
  radar: [ICN, `<g class="g"><circle cx="150" cy="72" r="56"/><circle cx="150" cy="72" r="30"/></g><path class="a" d="M150 72L196 42"/><g class="fc"><circle cx="190" cy="44" r="7"/><circle cx="202" cy="56" r="7"/></g>`],
  chip: [ICN, `<rect class="a" x="110" y="32" width="80" height="80"/><g class="s"><path d="M125 32v-14M150 32v-14M175 32v-14M125 112v14M150 112v14M175 112v14M110 52h-14M110 72h-14M110 92h-14M190 52h14M190 72h14M190 92h14"/></g>`],
  aerofolio: [ICW, `<path class="a" d="M40 72 C60 45,110 39,170 49 S250 67,265 72 C230 77,170 85,110 87 S55 83,40 72Z"/><path class="s" d="M40 72 C90 61,180 61,265 72" stroke-dasharray="5 5"/>`],
  altimetro: [ICW, `<g class="s"><path d="M60 118V93M90 118V78M120 118V68M150 118V56M180 118V48M210 118V38M240 118V28"/></g><path class="a" d="M60 90 L240 24"/>`],
  ar: [ICN, `<path class="a" d="M100 36h100l-10 70h-80z"/><circle class="fc" cx="150" cy="71" r="9"/>`],
  rs485: [ICW, `<path class="s" d="M30 72H270"/><g class="a"><rect x="40" y="52" width="40" height="40"/><rect x="130" y="52" width="40" height="40"/><rect x="220" y="52" width="40" height="40"/></g>`],
  farol: [ICW, `<path class="a" d="M70 66h30v20H70z"/><path class="s" d="M100 68L260 46M100 84L260 101"/>`],
  python: [ICN, `<g class="s"><path d="M90 30h120v84H90z"/></g><path class="a" d="M108 62l18 14-18 14M134 96h32"/>`],
  padrao: [ICN, `<g class="g"><circle cx="150" cy="72" r="44"/></g><path class="a" d="M108 72 Q150 22 192 72 Q150 122 108 72Z"/>`]
};
const logo = (src, alt) => src ? `<img class="lg" src="${esc(src)}" alt="${esc(alt || '')}" loading="lazy">` : `<span class="lg txt">${esc((alt || '').slice(0, 3))}</span>`;

/* ------------------------------ RENDER ------------------------------ */
const SECOES = ['resumo', 'formacao', 'pesquisa', 'profissional', 'academico', 'projetos', 'competencias'];

function render() {
  const D = traduz(BASE);
  const count = k => (D[k] || []).filter(x => k !== 'projetos' || x.destaque).length;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  document.title = ui('_titulo');
  document.querySelectorAll('#lang button').forEach(b => b.classList.toggle('on', b.dataset.l === lang));

  // abertura
  const P = D.perfil, parts = P.nome.split(' ');
  set('#nome', `${esc(parts[0])}<br><em>${esc(parts[1] || '')}</em> ${esc(parts.slice(2).join(' '))}`);
  set('#titulo', '// ' + esc(P.titulo));
  set('#chamada', fmt(P.chamada));
  $('#foto').src = P.foto;
  set('#ficha', (P.ficha || []).map(f => `<div><small>${esc(f.rotulo)}</small><span>${esc(f.valor)}</span></div>`).join(''));
  set('#contatos', D.contatos.map(c => {
    const cls = ['c-' + c.icone, c.texto ? '' : 'ico'].join(' ').trim();
    const tgt = c.url.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
    return `<a class="${cls}" href="${esc(c.url)}"${tgt} title="${esc(c.rotulo)}" aria-label="${esc(c.rotulo)}" data-p="${esc(host(c.url))}">
      <svg viewBox="0 0 24 24" aria-hidden="true">${CONTATO[c.icone] || CONTATO.lattes}</svg>${c.texto ? `<span>${esc(c.texto)}</span>` : `<small>${esc(c.rotulo)}</small>`}</a>`;
  }).join(''));
  set('#ft-nome', esc(P.nome));
  $('#yr').textContent = new Date().getFullYear();
  set('#indice', SECOES.map(id => `<a href="#${id}" data-s="${id}">${esc(ui('n_' + id) || ui(id))}</a>`).join(''));

  // blocos
  const item = e => `<div class="item"><div class="when">${esc(e.quando)}</div>${logo(e.logo, e.local)}<div><h3>${esc(e.titulo)}</h3>
    <div class="at">${esc(e.local)}</div>${e.texto ? `<p>${fmt(e.texto)}</p>` : ''}${e.premio ? `<div class="star">★ ${esc(e.premio)}</div>` : ''}</div></div>`;
  const row = (t, o, a) => `<div class="row"><div><b>${esc(t)}</b><small>${esc(o)}</small></div><span class="d">${esc(a)}</span></div>`;
  const C = {};
  C.resumo = `<p class="resumo">${fmt(P.resumo)}</p>
    <div class="fatos">${P.fatos.map(f => `<div class="fato"><small>${esc(f.rotulo)}</small><strong>${f.auto ? count(f.auto) + esc(f.sufixo || '') : esc(f.valor)}</strong><span>${esc(f.sub)}</span></div>`).join('')}</div>`;
  C.formacao = D.formacao.map(f => `<div class="edu">
    ${f.foto ? `<div class="foto"><img src="${esc(f.foto)}" alt="${esc(f.nomeCompleto)}" loading="lazy">${f.fotoCredito ? `<small>${esc(ui('foto'))}: ${esc(f.fotoCredito)}</small>` : ''}</div>` : ''}
    <div class="info"><div class="edu-top">${logo(f.logo, f.instituicao)}<div><h3>${esc(f.instituicao)}</h3><span class="per">${esc(f.periodo)} · ${esc(f.local)}</span></div></div>
    <div class="cn">${esc(f.curso)} · ${esc(f.nomeCompleto)}</div><p>${fmt(f.texto)}</p>
    <div class="dest">${(f.destaques || []).map(d => `<span>${esc(d)}</span>`).join('')}</div>
    ${f.site ? ext(f.site, host(f.site) + ' ↗', 'site') : ''}</div></div>`).join('');
  C.pesquisa = [...D.publicacoes].sort((a, b) => (b.ano || 0) - (a.ano || 0)).map(p => {
    const url = p.doi ? 'https://doi.org/' + p.doi : p.url;
    return `<div class="pub"><div class="meta"><span class="type">${esc(p.tipo || ui('publicacao'))}</span><strong>${esc(p.sigla || '')}</strong><span>${esc([p.editora, p.ano].filter(Boolean).join(' · '))}</span></div>
      <h3>${esc(p.titulo)}</h3><p>${fmt(p.autores)} · ${esc(p.evento)}${p.nota ? '. ' + esc(p.nota) + '.' : ''}</p>
      ${url ? ext(url, (p.doi ? 'DOI ' + esc(p.doi) : esc(ui('link'))) + ' ↗', 'doi') : ''}</div>`;
  }).join('') + `<div class="groups">${D.grupos.map(g => `<a class="group" href="${esc(g.url)}" target="_blank" rel="noopener">
      ${logo(g.logo, g.sigla)}<div class="gt"><b>${esc(g.sigla)}</b><span>${esc(g.descricao)}</span><em>${esc(host(g.site))} ↗</em></div></a>`).join('')}</div>`;
  C.profissional = D.profissional.map(item).join('');
  C.academico = D.academico.map(a => `<div class="sub-h">${esc(a.instituicao)}</div>${a.itens.map(item).join('')}${a.foguete ? '<div class="slot-foguete"></div>' : ''}`).join('');
  C.projetos = D.projetos.filter(p => p.destaque).map(p => {
    const [vb, ic] = ICONS[p.icone] || ICONS.padrao;
    return `<div class="proj"><div class="ic">${p.imagem ? `<img src="${esc(p.imagem)}" alt="" loading="lazy">` : `<svg viewBox="${vb}" aria-hidden="true">${ic}</svg>`}</div>
      <div><h3>${esc(p.titulo)} <small>${esc(p.ano)}</small></h3><div class="org">${esc(p.org)}</div><p>${fmt(p.descricao)}</p>
      ${(p.links || []).length ? `<div class="lnk">${p.links.map(l => ext(l.url, esc(l.rotulo) + ' ↗')).join('')}</div>` : ''}</div></div>`;
  }).join('') + ext('https://github.com/otaviozordan', esc(ui('mais_github')), 'more');
  C.competencias = `<div class="skills">${D.competencias.map(c => `<div><h3>${esc(c.grupo)}</h3><div class="chips">${c.itens.map(i => `<span>${esc(i)}</span>`).join('')}</div></div>`).join('')}</div>
    <p class="lingua"><b>${esc(ui('idiomas'))}</b>${esc(D.idiomas)}</p>
    <details class="cursos"><summary>${esc(ui('cursos'))}</summary><div class="lista">${D.certificacoes.map(c => row(c.titulo, c.org, c.ano)).join('')}</div></details>`;

  set('#secoes', SECOES.map((id, i) => `<section class="sec" id="${id}"><h2 data-n="${String(i + 1).padStart(2, '0')}">${esc(ui(id))}</h2>${C[id]}</section>`).join(''));

  const F = D.foguete, slot = $('.slot-foguete');
  if (slot && F) {
    slot.appendChild($('#tpl-foguete').content.cloneNode(true));
    set('.fg-equipe', esc(F.equipe));
    set('.fg-texto', fmt(F.texto));
    set('.fg-cargos', F.cargos.map(c => `<div><span>${esc(c.ano)}</span>${esc(c.cargo)}</div>`).join(''));
  }
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = ui(el.dataset.i18n); });
  set('#brand-nome', esc(parts.slice(0, 2).join(' ')));
  espiao();
  gnc();
}

/* -------------------- FOGUETE GUIADO (simulação 2D) -----------------
   Plano vertical, empuxo constante (3 g), arrasto quadrático e vento.
   Guiamento: aceleração desejada leva o vetor velocidade para a linha
   de visada (ganho KV) somada à compensação da gravidade → θref.
   Controle em cascata: θ → taxa comandada (limitada) → gimbal δ (±8°,
   atuador de 1ª ordem). Perturbação: torque de rajada (Ornstein–Uhlenbeck). */
let gncId = 0;
function gnc() {
  const id = ++gncId, cv = $('.rocket .gnc'); if (!cv) return;
  const ctx = cv.getContext('2d'), hud = $('.rocket .hud');
  const AT = 30, G = 9.81, CD = 4e-5, KDEL = 10, DMAX = 0.14, KTH = 1.5, WMAX = 0.45, KW = 1, KV = .5, ESC = 2;
  const X0 = -250, X1 = 3150, Y1 = 2050;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const gauss = () => Math.sqrt(-2 * Math.log(Math.random() + 1e-12)) * Math.cos(2 * Math.PI * Math.random());
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const AC = css('--ac'), AC2 = css('--ac2'), OK = css('--ok'), MU = css('--muted'), FM = css('--fm');
  let W, H, S, ox, oy, st, T, wind, trail, hist, fase, tf, puffs, vis = false, last = 0;
  const X = x => ox + x * S, Y = y => oy - y * S;
  function size() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    S = Math.min((W - 40) / (X1 - X0), (H - 36) / Y1);
    ox = (W - (X1 - X0) * S) / 2 - X0 * S; oy = H - 18;
  }
  function reset() {
    T = { x: 900 + Math.random() * 1900, y: 1000 + Math.random() * 900 }; wind = (Math.random() - .5) * 1.5;
    st = { t: 0, x: 0, y: 0, vx: 0, vy: 0, th: 0, w: 0, d: 0, dist: 0, ref: 0 }; trail = []; hist = []; puffs = []; fase = 'voo'; tf = 0;
  }
  function passo(dt) {
    const a = st, dx = T.x - a.x, dy = T.y - a.y, lam = Math.atan2(dx, dy), v = Math.hypot(a.vx, a.vy);
    const axd = KV * (v * Math.sin(lam) - a.vx), ayd = KV * (v * Math.cos(lam) - a.vy);
    a.ref = a.t < 1 ? 0 : clamp(Math.atan2(axd, ayd + G), -1.2, 1.4);
    const wc = clamp(KTH * (a.ref - a.th), -WMAX, WMAX);
    const dc = clamp(KW * (wc - a.w), -DMAX, DMAX); a.d += (dc - a.d) * Math.min(1, dt / .05);
    a.dist += -a.dist / .8 * dt + .6 * Math.sqrt(dt) * gauss();
    a.w += (KDEL * a.d + a.dist) * dt; a.th += a.w * dt;
    a.vx += (AT * Math.sin(a.th) - CD * a.vx * v + wind) * dt; a.vy += (AT * Math.cos(a.th) - G - CD * a.vy * v) * dt;
    a.x += a.vx * dt; a.y += a.vy * dt; a.t += dt;
    if (Math.hypot(T.x - a.x, T.y - a.y) < 40) { fase = 'ok'; tf = 0; }
    else if ((a.y < -5 && a.t > 2) || a.t > 40 || a.x > X1) reset();
  }
  function foguete() {
    const a = st, x = X(a.x), y = Y(a.y), L = Math.max(22, Math.min(34, W / 34));
    ctx.save(); ctx.translate(x, y); ctx.rotate(a.th);
    if (fase === 'voo') {                       // chama defletida pelo gimbal (exagerada ×3)
      ctx.save(); ctx.translate(0, L * .5); ctx.rotate(-a.d * 3);
      const f = L * (.55 + Math.random() * .25), gr = ctx.createLinearGradient(0, 0, 0, f);
      gr.addColorStop(0, '#fff3c4'); gr.addColorStop(.3, AC); gr.addColorStop(1, 'rgba(255,90,31,0)');
      ctx.fillStyle = gr; ctx.beginPath(); ctx.moveTo(-L * .11, 0); ctx.quadraticCurveTo(0, f * 1.4, L * .11, 0); ctx.fill(); ctx.restore();
    }
    ctx.fillStyle = '#16263f'; ctx.strokeStyle = AC2; ctx.lineWidth = 1.3;
    ctx.beginPath(); ctx.moveTo(-L * .12, L * .5); ctx.lineTo(-L * .12, -L * .2); ctx.quadraticCurveTo(-L * .1, -L * .45, 0, -L * .55);
    ctx.quadraticCurveTo(L * .1, -L * .45, L * .12, -L * .2); ctx.lineTo(L * .12, L * .5); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-L * .12, L * .25); ctx.lineTo(-L * .3, L * .5); ctx.lineTo(-L * .12, L * .5);
    ctx.moveTo(L * .12, L * .25); ctx.lineTo(L * .3, L * .5); ctx.lineTo(L * .12, L * .5); ctx.stroke();
    ctx.strokeStyle = AC; ctx.beginPath(); ctx.moveTo(-L * .1, -L * .32); ctx.quadraticCurveTo(0, -L * .6, L * .1, -L * .32); ctx.stroke();
    ctx.restore();
  }
  function grafico() {                           // θ e θref nos últimos 6 s
    const w = Math.min(220, W * .32), h = 70, x0 = W - w - 14, y0 = 12;
    ctx.fillStyle = 'rgba(6,16,36,.72)'; ctx.strokeStyle = 'rgba(120,170,220,.2)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x0, y0, w, h, 8) : ctx.rect(x0, y0, w, h); ctx.fill(); ctx.stroke();
    ctx.font = `10px ${FM}`; ctx.fillStyle = MU; ctx.fillText('θ  ·  θref', x0 + 8, y0 + 13);
    const py = v => y0 + h - 8 - (v + .2) / 1.7 * (h - 24), n = hist.length;
    const linha = (k, cor, dash) => { ctx.strokeStyle = cor; ctx.setLineDash(dash); ctx.beginPath();
      hist.forEach((p, i) => { const px = x0 + 6 + (w - 12) * (i / Math.max(n - 1, 1)); i ? ctx.lineTo(px, py(p[k])) : ctx.moveTo(px, py(p[k])); }); ctx.stroke(); ctx.setLineDash([]); };
    if (n > 1) { linha(1, AC, [4, 3]); linha(0, AC2, []); }
  }
  function desenha() {
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(120,170,220,.25)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke();
    ctx.fillStyle = 'rgba(120,170,220,.35)'; ctx.fillRect(X(0) - 10, oy, 20, 3);
    // alvo
    const tx = X(T.x), ty = Y(T.y), r = Math.max(9, 40 * S), pul = 1 + .15 * Math.sin(performance.now() / 250);
    ctx.strokeStyle = fase === 'ok' ? OK : AC; ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.arc(tx, ty, r * pul, 0, 7); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(tx - r * 2, ty); ctx.lineTo(tx - r * .5, ty); ctx.moveTo(tx + r * .5, ty); ctx.lineTo(tx + r * 2, ty);
    ctx.moveTo(tx, ty - r * 2); ctx.lineTo(tx, ty - r * .5); ctx.moveTo(tx, ty + r * .5); ctx.lineTo(tx, ty + r * 2); ctx.stroke();
    ctx.font = `10px ${FM}`; ctx.fillStyle = fase === 'ok' ? OK : AC;
    ctx.fillText(fase === 'ok' ? ui('gnc_ok') : ui('gnc_alvo'), tx + r * 2 + 4, ty + 3);
    if (fase === 'ok') { ctx.strokeStyle = `rgba(76,227,154,${Math.max(0, 1 - tf)})`; ctx.beginPath(); ctx.arc(tx, ty, r + tf * 60, 0, 7); ctx.stroke(); }
    // linha de visada
    if (fase === 'voo') { ctx.strokeStyle = 'rgba(255,176,32,.35)'; ctx.setLineDash([5, 6]); ctx.beginPath(); ctx.moveTo(X(st.x), Y(st.y)); ctx.lineTo(tx, ty); ctx.stroke(); ctx.setLineDash([]); }
    // fumaça
    puffs.forEach(p => { ctx.fillStyle = `rgba(160,175,200,${p.a})`; ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), p.r, 0, 7); ctx.fill(); });
    // trajetória
    ctx.strokeStyle = AC2; ctx.lineWidth = 1.6; ctx.beginPath();
    trail.forEach((p, i) => i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1]))); ctx.stroke();
    foguete(); grafico();
    const v = Math.hypot(st.vx, st.vy), g = r2 => (r2 * 57.2958).toFixed(1) + '°';
    hud.innerHTML = `T+ <b>${st.t.toFixed(1)} s</b><br>h <b>${Math.max(0, st.y).toFixed(0)} m</b><br>V <b>${v.toFixed(0)} m/s</b><br>θ <b>${g(st.th)}</b><br>θref <b>${g(st.ref)}</b><br>δ <b>${g(st.d)}</b>`;
  }
  function loop(t) {
    if (id !== gncId || !vis) return;
    const dt = Math.min((t - (last || t)) / 1000, .05) * ESC; last = t;
    if (fase === 'voo') {
      for (let k = 0, n = Math.ceil(dt / .01); k < n; k++) passo(dt / n);
      trail.push([st.x, st.y]); if (trail.length > 900) trail.shift();
      hist.push([st.th, st.ref]); if (hist.length > 180) hist.shift();
      if (Math.random() < .6) puffs.push({ x: st.x - Math.sin(st.th) * 15, y: st.y - Math.cos(st.th) * 15, r: 2, a: .28 });
    } else { tf += dt / ESC; if (tf > 1.8) reset(); }
    puffs = puffs.filter(p => (p.r += .25, p.a -= .004) > 0);
    desenha(); requestAnimationFrame(loop);
  }
  size(); reset(); desenha();
  new ResizeObserver(() => { if (id === gncId) { size(); desenha(); } }).observe(cv);
  if (reduce) return;
  new IntersectionObserver(([e]) => { const was = vis; vis = e.isIntersecting && id === gncId; if (vis && !was) { last = 0; requestAnimationFrame(loop); } }).observe(cv);
}

/* ------------------------- MENU ATIVO (scroll) ---------------------- */
let spy;
function espiao() {
  if (spy) spy.disconnect();
  spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    document.querySelectorAll('[data-s]').forEach(a => a.classList.toggle('on', a.dataset.s === e.target.id));
    const m = $(`#indice [data-s="${e.target.id}"]`), box = $('#indice');
    if (m && box.scrollWidth > box.clientWidth) box.scrollTo({ left: m.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
  }), { rootMargin: '-30% 0px -65% 0px' });
  document.querySelectorAll('.sec').forEach(s => spy.observe(s));
}

render();

$('#lang').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b || b.dataset.l === lang) return;
  lang = b.dataset.l;
  try { localStorage.setItem('lang', lang); const u = new URL(location); u.searchParams.set('lang', lang); history.replaceState(null, '', u); } catch (err) {}
  render();
});
$('#print').addEventListener('click', () => window.print());
addEventListener('beforeprint', () => document.querySelectorAll('details').forEach(d => d.open = true));

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
    const cs = getComputedStyle(document.documentElement), g = n => cs.getPropertyValue(n).split(',').map(Number);
    const lo = g('--f-lo'), mid = g('--f-mid'), hi = g('--f-hi');
    C = { stops: [[0, ...lo], [.7, ...lo.map((v, i) => (v + mid[i]) / 2)], [1, ...mid], [1.4, ...mid.map((v, i) => (v * 2 + hi[i]) / 3)], [1.75, ...hi], [2.3, ...hi]],
      wing: g('--f-wing'), vec: g('--f-vec'), txt: g('--f-txt'), fm: cs.getPropertyValue('--fm') };
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
    W = cv.clientWidth; H = cv.clientHeight; if (!W || !H) return;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const mob = W <= 860;
    const pad = mob ? W * .92 * .4 + 40 : Math.min(W * .46, 620) * .44 + 40;
    chord = mob ? W * .78 : Math.min(W * .46, 620);
    S = chord / 4.03; ox = W / 2; oy = H - pad * .56;
    cores(); buildStill(dpr);
    parts = []; const n = mob ? 110 : 220;
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
    const yTop = oy / S + .5, yBot = (oy - H) / S - .5, N = W <= 860 ? 26 : 38;
    for (let i = 0; i <= N; i++) {
      const t = i / N * 2 - 1, yw = (t < 0 ? yBot : yTop) * Math.pow(Math.abs(t), 1.8) + .12;
      const o = {}; [o.zr, o.zi] = fromS(-5, oy - yw * S);
      let px = toX(o.zr, o.zi), py = toY(o.zr, o.zi);
      for (let s = 0; s < 1600; s++) {
        const v = vel(o.zr, o.zi); if (!v) break;
        if (!step(o, .035 / Math.max(Math.hypot(v[0], v[1]), .25))) break;
        const x = toX(o.zr, o.zi), y = toY(o.zr, o.zi);
        c.strokeStyle = rgba(col(o.q), .05 + .3 * near(o.zr, o.zi));
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
    g.addColorStop(0, rgba(C.wing, .22)); g.addColorStop(1, rgba(C.wing, .05));
    c.fillStyle = g; c.fill(); c.strokeStyle = rgba(C.wing, .9); c.lineWidth = 1.5; c.stroke();
    c.setLineDash([4, 5]); c.lineWidth = 1; c.strokeStyle = rgba(C.wing, .35);
    c.beginPath(); c.moveTo(toX(-2.03, 0), toY(-2.03, 0)); c.lineTo(toX(2, 0), toY(2, 0)); c.stroke();
    c.setLineDash([]);
    const fs = W <= 860 ? 10 : 11; c.font = `${fs}px ${C.fm || 'monospace'}`;
    const lx = toX(-1, 0), ly = toY(-1, .05), L = chord * .15;
    c.strokeStyle = c.fillStyle = rgba(C.vec, .9); c.lineWidth = 1.6;
    c.beginPath(); c.moveTo(lx, ly); c.lineTo(lx, ly - L); c.stroke();
    c.beginPath(); c.moveTo(lx, ly - L - 7); c.lineTo(lx - 4, ly - L + 1); c.lineTo(lx + 4, ly - L + 1); c.fill();
    c.fillText('L', lx + 8, ly - L + 4);
    const vx = Math.max(toX(-2.03, 0) - chord * .42, 12), vy = toY(-2.03, 0), al = chord * .16;
    c.strokeStyle = c.fillStyle = rgba(C.txt, .85);
    c.beginPath(); c.moveTo(vx, vy); c.lineTo(vx + al, vy); c.stroke();
    c.beginPath(); c.moveTo(vx + al + 7, vy); c.lineTo(vx + al - 1, vy - 4); c.lineTo(vx + al - 1, vy + 4); c.fill();
    c.fillText('V∞', vx, vy - 8);
    c.fillStyle = rgba(C.wing, .95); c.fillText('α = 6°', toX(1.2, 0), toY(-2.03, 0) + 18);
    c.fillStyle = rgba(C.txt, .7);
    c.fillText('Joukowski · Kutta · Γ = 4πUR sin(α+β)', toX(-2.03, 0), Math.min(toY(-2.03, 0) + chord * .2 + 6, H - 8));
  }

  function frame(t) {
    if (!run) return;
    const dt = Math.min((t - (lastT || t)) / 1000, .05); lastT = t;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(still, 0, 0, W, H);
    const h = dt * 150 / S;
    ctx.lineWidth = 1.3;
    for (const o of parts) {
      if (!step(o, h) || toX(o.zr, o.zi) > W + 20 || ++o.age > 3000) { seed(o, false); continue; }
      o.tr.push([toX(o.zr, o.zi), toY(o.zr, o.zi)]); if (o.tr.length > 16) o.tr.shift();
      if (o.tr.length < 2) continue;
      ctx.strokeStyle = rgba(col(o.q), .12 + .7 * near(o.zr, o.zi));
      ctx.beginPath(); o.tr.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
    }
    requestAnimationFrame(frame);
  }
  let lw = 0, lh = 0, tm;
  function onResize(force) {
    const w = cv.clientWidth, hh = cv.clientHeight;
    if (!force && w === lw && Math.abs(hh - lh) < 80) return;
    lw = w; lh = hh; size(); if (reduce && still) { ctx.clearRect(0, 0, W, H); ctx.drawImage(still, 0, 0, W, H); }
  }
  addEventListener('resize', () => { clearTimeout(tm); tm = setTimeout(onResize, 150); });
  onResize(true);
  if (reduce) return;
  new IntersectionObserver(([e]) => { const was = run; run = e.isIntersecting; if (run && !was) { lastT = 0; requestAnimationFrame(frame); } }).observe(cv);
})();
})();
