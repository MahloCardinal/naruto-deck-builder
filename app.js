'use strict';

const $ = id => document.getElementById(id);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// New sessions start in English; refreshes restore the current tab's language.
let language = 'en';
const SESSION_KEY = 'naruto-ninja-cards.session';
const panelSelectors = {dbFilters:'#db-filter-host details',builderFilters:'#builder-filter-host details',assumptions:'#scenario-panel'};
let sessionReady = false, sessionTimer, lastSessionText = '', sessionWarning = false;
const numberFormatters = new Map();
const pluralRules = new Map();
function getTranslation(key,code=language) {
  const read = catalog => key.split('.').reduce((value,part) => value?.[part],catalog);
  return read(TRANSLATIONS[code]) ?? read(TRANSLATIONS.en);
}
function t(key,values={}) {
  let text = getTranslation(key);
  if (text && typeof text === 'object' && 'other' in text) {
    if (!pluralRules.has(language)) pluralRules.set(language,new Intl.PluralRules(TRANSLATIONS[language].locale));
    text=text[pluralRules.get(language).select(Number(values.count ?? values.value))] ?? text.other;
  }
  if (typeof text !== 'string') throw Error(`Missing translation: ${key}`);
  return text.replace(/\{(\w+)\}/g,(_,name) => values[name] ?? `{${name}}`);
}
function fmt(value,maximumFractionDigits=2) {
  const key = language+':'+maximumFractionDigits;
  if (!numberFormatters.has(key)) numberFormatters.set(key,new Intl.NumberFormat(TRANSLATIONS[language].locale,{maximumFractionDigits}));
  return numberFormatters.get(key).format(value);
}
const cardText = card => getTranslation('cards.'+card.card_key);
const imagePath = card => `card_images/${card.card_key}.webp`;
const effectLabel = key => t('effects.'+key);
function translateStatic(root=document) {
  for (const el of root.querySelectorAll('[data-i18n]')) {
    const value=t(el.dataset.i18n,{count:CARDS.length});
    if (el.hasAttribute('data-i18n-rich')) el.innerHTML=formatTerms(value); else el.textContent=value;
  }
  for (const attribute of ['aria-label','placeholder','title']) {
    for (const el of root.querySelectorAll('[data-i18n-'+attribute+']')) el.setAttribute(attribute,t(el.getAttribute('data-i18n-'+attribute)));
  }
}
function setStandardStatus(key) {
  $('standard-status').dataset.i18n = key;
  $('standard-status').textContent = t(key);
  scheduleSessionSave();
}
const LEVEL_CYCLE_ICON = `<svg class="cycle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5"/></svg>`;
const RANK = {Common:0, Rare:1, Epic:2, Legendary:3};
const byIndex = new Map(CARDS.map(c => [c.index,c]));
const defaults={...DEFAULT_SCENARIO};
const F = id => $(mode+'-'+id);
const settingIds = {enemyChakra:'s-enemy-chakra', enemies:'s-enemies', allyChakra:'s-ally-chakra', allies:'s-allies', activations:'s-activations'};

// Keyword patterns belong to each language catalog, rather than to the renderer.
let termPatterns,termRegex;
function normalizeText(text) {
  return (TRANSLATIONS[language].normalizations || []).reduce((value,[from,to]) => value.replaceAll(from,to),String(text ?? ''));
}
function buildTermPatterns() {
  const patterns=Object.entries(TRANSLATIONS[language].terms);
  termPatterns=patterns.map(([key,pattern]) => [key,new RegExp(`^(?:${pattern})$`,'iu')]);
  termRegex=new RegExp(`\\b(?:${patterns.map(([,pattern]) => pattern).join('|')})\\b(?:\\s*[([][+−-]?\\d+(?:[.,]\\d+)?s?[)\\]])?`,'giu');
}
function effectHTML(text,key) {
  return `<span class="effect effect-${key}">${esc(normalizeText(text).replace(/^\p{L}/u,char => char.toLocaleUpperCase(TRANSLATIONS[language].locale)))}</span>`;
}
function formatTerms(text) {
  text=normalizeText(text);let output='',last=0;
  for (const match of text.matchAll(termRegex)) {
    const key=termPatterns.find(([,pattern]) => pattern.test(match[0].replace(/\s*[([][\s\S]*$/,'')))[0];
    output+=esc(text.slice(last,match.index))+effectHTML(match[0],key);
    last=match.index+match[0].length;
  }
  return output+esc(text.slice(last));
}
buildTermPatterns();
const descriptionDifferenceCache = new WeakMap();
function descriptionDifferences(c) {
  const texts = [1,2].map(level => normalizeText(cardText(c).descriptions[level-1]));
  const cached = descriptionDifferenceCache.get(c);
  if (cached && cached.language===language && cached.texts.every((text,i) => text===texts[i])) return cached;
  // A keyword plus its parameter is atomic, so Chakra(+N) is underlined as a whole.
  const tokenRegex = new RegExp(`(?:${termRegex.source})|\\p{L}[\\p{L}\\p{M}]*|\\d+(?:[.,]\\d+)?|[^\\s]`,'giu');
  const tokens = texts.map(text => Array.from(text.matchAll(tokenRegex),m => ({text:m[0],start:m.index,end:m.index+m[0].length,key:m[0].toLocaleLowerCase(TRANSLATIONS[language].locale)})));
  const [a,b] = tokens, rows = Array.from({length:a.length+1},() => new Uint16Array(b.length+1));
  for (let i=a.length-1;i>=0;i--) for (let j=b.length-1;j>=0;j--) rows[i][j] = a[i].key===b[j].key ? rows[i+1][j+1]+1 : Math.max(rows[i+1][j],rows[i][j+1]);
  const changed = [a.map(() => true),b.map(() => true)];
  let i=0,j=0;
  while (i<a.length && j<b.length) {
    if (a[i].key===b[j].key) { changed[0][i++]=false; changed[1][j++]=false; }
    else if (rows[i+1][j]>=rows[i][j+1]) i++; else j++;
  }
  const result = {language,texts,tokens,changed}; descriptionDifferenceCache.set(c,result); return result;
}
function formatDescription(c,level) {
  const diff = descriptionDifferences(c), n = level-1, text = diff.texts[n];
  const ranges = diff.tokens[n].filter((_,i) => diff.changed[n][i]);
  const mark = html => html.replace('class="effect ','class="level-change effect ');
  function plain(start,end) {
    let html='',cursor=start;
    for (const range of ranges) {
      const left=Math.max(start,range.start),right=Math.min(end,range.end);
      if (left>=right) continue;
      html += esc(text.slice(cursor,left))+`<span class="level-change">${esc(text.slice(left,right))}</span>`;
      cursor=right;
    }
    return html+esc(text.slice(cursor,end));
  }
  let out='',last=0;
  for (const match of text.matchAll(termRegex)) {
    out += plain(last,match.index);
    const end=match.index+match[0].length;
    const key=termPatterns.find(([,re]) => re.test(match[0].replace(/\s*[([][\s\S]*$/,'')))[0];
    const html=effectHTML(match[0],key);
    out += ranges.some(r => r.start<end && r.end>match.index) ? mark(html) : html;
    last=end;
  }
  return out+plain(last,text.length);
}

function acceptedInteger(input) {
  return /^\d+$/.test(input.value) && Number(input.value) <= 99;
}
function commitInteger(input) {
  const before = input.value;
  if (before === '' && !input.required) return;
  const digits = before.replace(/\D/g,'');
  input.value = String(Math.min(99,Number(digits) || 0));
  if (input.value !== before) input.dispatchEvent(new Event('input',{bubbles:true}));
}
document.addEventListener('beforeinput',event => {
  if (event.target.matches('input[data-integer]') && event.data != null && /\D/.test(event.data)) event.preventDefault();
},true);
document.addEventListener('paste',event => {
  if (event.target.matches('input[data-integer]') && /\D/.test(event.clipboardData.getData('text'))) event.preventDefault();
},true);
document.addEventListener('input',event => {
  const input=event.target;
  if (!input.matches('input[data-integer]')) return;
  const clean=input.value.replace(/\D/g,'');
  if(input.value!==clean) { const cursor=input.selectionStart; input.value=clean; input.setSelectionRange(Math.min(cursor,clean.length),Math.min(cursor,clean.length)); }
},true);
document.addEventListener('focusout',event => {
  if(event.target.matches('input[data-integer]')) commitInteger(event.target);
},true);

function cleanScenario(value = {}) {
  const scenario = {};
  for (const key of Object.keys(defaults)) {
    const n = Number(value[key] ?? defaults[key]);
    scenario[key] = Number.isFinite(n) ? Math.max(0, Math.min(99,Math.round(n))) : defaults[key];
  }
  return scenario;
}
const emptyDeck = () => ({name:t('ui.defaultDeckName'),cards:[],levels:{},scenario:{...defaults},cardOptions:{}});
let current = emptyDeck();
let useDefaultDeckName = true;
let mode = 'db', dialogCard = null, dialogLevel = 1, confirmAction = null, confirmMessageKey = null, toastTimer;
const deckLevel = c => current.levels[c.index] ?? Number($('builder-f-level').value);
const levelOf = c => mode === 'builder' ? deckLevel(c) : Number($('db-f-level').value);
const description = (c,level) => normalizeText(cardText(c).descriptions[level-1]);
const scenarioFor = c => ({...(current.cardOptions[c.index] || current.scenario)});
function applyWrittenStandard() {
  const values = {};
  for (const [key,id] of Object.entries(settingIds)) {
    commitInteger($(id));
    if (!$(id).reportValidity()) return;
    values[key] = Number($(id).value);
  }
  Object.assign(defaults,cleanScenario(values));
  current.scenario=cleanScenario(defaults); current.cardOptions={}; syncScenario(); changed();
  setStandardStatus('ui.standardApplied');
}
const computed = (c,level = levelOf(c)) => estimate(c,level);
function toast(message,error = false) {
  clearTimeout(toastTimer);
  $('toast').textContent = message;
  $('toast').className = 'toast' + (error ? ' error' : '');
  toastTimer = setTimeout(() => $('toast').classList.add('hidden'),2600);
}
function ask(key,action) { confirmAction=action; confirmMessageKey=key; $('confirm-text').textContent=t(key); $('confirm-dialog').showModal(); }
function syncScenario() {
  for (const [key,id] of Object.entries(settingIds)) $(id).value = current.scenario[key];
}

function cardHTML(c) {
  const level=levelOf(c),build=mode==='builder',result=build?computed(c,level):null,selected=build&&current.cards.includes(c.index),text=cardText(c);
  return `<article class="game-card${selected?' selected':''}" data-index="${c.index}">
    <button class="card-main" data-open="${c.index}" aria-label="${esc(t('ui.openCard',{name:text.name,index:c.index}))}">
      <img src="${imagePath(c)}" alt="${esc(text.name)}" loading="lazy" decoding="async" width="${CARD_ART.width}" height="${CARD_ART.height}">
      <span class="orb cost" title="${t('ui.energyCost')}" aria-label="${t('ui.costValue',{value:c.energy_cost})}">${c.energy_cost}</span>
      <span class="orb chakra" title="${t('ui.baseChakra')}" aria-label="${t('ui.chakraValue',{value:c.chakra})}">${c.chakra}</span>
    </button>
    <div class="card-info"><div class="card-heading"><strong class="card-title">${esc(text.name)}</strong><span class="card-level">${t('ui.levelShort',{level})}</span></div>
      <div class="card-text" data-open="${c.index}"><strong>${esc(text.ability)}</strong><p class="ability">${formatDescription(c,level)}</p></div>
      ${build?`<div class="card-metrics"><span><b>${fmt(result.value)}</b><small>${t('ui.power')}</small></span><span><b>${fmt(result.quality,1)}</b><small>${t('ui.quality')}</small></span><button class="card-toggle ${selected?'is-selected':'primary'}" data-toggle="${c.index}" aria-label="${esc(t(selected?'ui.removeCard':'ui.addCard',{name:text.name}))}" title="${t(selected?'ui.removeFromDeck':'ui.addToDeck')}" aria-pressed="${selected}" ${!selected&&current.cards.length>=10?'disabled':''}>${selected?'−':'+'}</button></div>`:''}
    </div></article>`;
}
const filterIds = ['f-level','f-text','f-estimate'];
function filteredCards() {
  const query = F('f-text').value.trim().toLowerCase();
  const words = query.split(/\s+/).filter(Boolean);
  const rarity = selectedFilterValues('f-rarity'), season = selectedFilterValues('f-season'), skill = selectedFilterValues('f-skill');
  const cost = selectedFilterValues('f-cost'), chakra = selectedFilterValues('f-chakra');
  const indexQuery = /^#?\d+$/.test(query) ? Number(query.replace('#','')) : null;
  return CARDS.filter(c => {
    if (rarity.size && !rarity.has(c.rarity) || season.size && !season.has(String(c.season))) return false;
    if (skill.size && ![...skill].some(value => value === 'none' ? c.skill_types_original.length === 0 : c.skill_types_original.includes(value))) return false;
    if (cost.size && !cost.has(String(c.energy_cost)) || chakra.size && !chakra.has(String(c.chakra))) return false;
    if (mode === 'builder') {
      const e = computed(c);
      if (F('f-estimate').value !== '' && e.value < Number(F('f-estimate').value)) return false;
    }
    if (query) {
      if (indexQuery !== null) { if (c.index !== indexQuery) return false; }
      else {
        const text = `${cardText(c).name} ${c.card_key} ${cardText(c).ability} ${description(c,levelOf(c))}`.toLowerCase();
        if (!words.every(w => /^#\d+$/.test(w) ? c.index === Number(w.slice(1)) : text.includes(w))) return false;
      }
    }
    return true;
  });
}
function renderCatalog() {
  const cards = filteredCards(), sort = F('sort').value, direction = F('sort-direction').dataset.direction === 'desc' ? -1 : 1;
  cards.sort((a,b) => {
    let d = 0;
    switch (sort) {
      case 'name': d = cardText(a).name.localeCompare(cardText(b).name,TRANSLATIONS[language].locale); break;
      case 'cost': d = a.energy_cost-b.energy_cost; break;
      case 'chakra': d = a.chakra-b.chakra; break;
      case 'quality': d = computed(a).quality-computed(b).quality; break;
      case 'rarity': d = RANK[a.rarity]-RANK[b.rarity];
    }
    return direction*(d || a.index-b.index);
  });
  $(mode+'-card-list').innerHTML = cards.length ? cards.map(cardHTML).join('') : `<div class="empty-results">${t('ui.noResults')}</div>`;
  scheduleSessionSave();
}
function deckSlotsHTML(cards,showLevel=false) {
  return Array.from({length:10},(_,slot) => {
    const card=cards[slot];
    if (!card) return `<li class="deck-slot empty" aria-label="${t('ui.emptySlot',{slot:slot+1})}">${slot+1}</li>`;
    const name=cardText(card).name,level=deckLevel(card);
    return `<li class="deck-slot"><button class="deck-open" data-deck-open="${card.index}" title="${esc(t('ui.cardLevelTitle',{name,level}))}"><img src="${imagePath(card)}" alt="${esc(name)}"></button>${showLevel?`<span class="slot-level">${t('ui.levelShort',{level})}</span>`:''}<button class="remove" data-remove="${card.index}" aria-label="${esc(t('ui.removeNamedCard',{name}))}">×</button></li>`;
  }).join('');
}
function renderDeck() {
  const cards = current.cards.map(i => byIndex.get(i)), n = cards.length;
  $('deck-count').textContent = `${n}/10`;
  if (document.activeElement !== $('deck-name')) $('deck-name').value = current.name;
  $('deck-grid').innerHTML = deckSlotsHTML(cards);
  $('deck-dialog-grid').innerHTML = deckSlotsHTML(cards,true);
  const totals = cards.reduce((a,c) => {
    const e = computed(c,deckLevel(c));
    return {cost:a.cost+c.energy_cost,power:a.power+e.value,quality:a.quality+e.quality};
  },{cost:0,power:0,quality:0});
  for (const prefix of ['', 'deck-dialog-']) {
    $(prefix+'avg-cost').textContent = n ? fmt(totals.cost/n) : '—';
    $(prefix+'avg-max').textContent = n ? fmt(totals.power/n) : '—';
    $(prefix+'avg-quality').textContent = n ? fmt(totals.quality/n) : '—';
  }
  const counts = Array.from({length:9},(_,i) => cards.filter(c => Math.min(c.energy_cost,9) === i+1).length), peak = Math.max(1,...counts);
  $('curve').innerHTML = counts.map((num,i) => `<div class="bar-slot" title="${t('ui.curveBar',{cost:i+1,count:num})}"><span>${num || ''}</span><div class="bar" style="height:${num/peak*29}px"></div><small>${i+1}${i === 8 ? '+' : ''}</small></div>`).join('');
  $('clear-deck').disabled = n === 0;
}

function changed() { renderDeck(); renderCatalog(); }
function addCard(index) {
  if (current.cards.includes(index) || current.cards.length >= 10) return;
  current.levels[index] = deckLevel(byIndex.get(index));
  current.cards.push(index);
  current.cardOptions[index] = {...(current.cardOptions[index] || current.scenario)};
  changed();
}
function removeCard(index) {
  current.cards = current.cards.filter(i => i !== index);
  delete current.levels[index];
  changed();
}
function toggleCard(index) {
  if (current.cards.includes(index)) removeCard(index); else addCard(index);
}
function setMode(next) {
  closeFilterMenus();
  mode = next;
  const build = mode === 'builder';
  $('db-area').classList.toggle('hidden',build);
  $('builder-area').classList.toggle('hidden',!build);
  $('tab-db').setAttribute('aria-selected',String(!build));
  $('tab-builder').setAttribute('aria-selected',String(build));
  renderCatalog();
  if (build) renderDeck();
}
function openCard(index,level) {
  dialogCard = byIndex.get(index); dialogLevel = level || levelOf(dialogCard);
  renderDialog(); $('card-dialog').showModal();
}
function calculationHTML(c,level,result=estimate(c,level)) {
  const ledger=[['baseChakra',c.chakra],['summonedChakra',result.summoned],['chakraBoosts',result.boosts],['friendlyDamage',-result.friendly],['enemyDamage',result.damage],['burn',result.burn],['heal',result.heal]];
  return `<div class="calculation-summary"><h4>${t('ui.powerComposition')}</h4><div class="ledger">${ledger.filter((row,index)=>row[1]!==0||index===0).map(([key,value])=>`<div class="ledger-row ${value<0?'negative':''}"><span>${formatTerms(t('ui.'+key))}</span><b>${fmt(value)}</b></div>`).join('')}</div></div>
    <div class="contributions"><h4>${t('ui.contributions')}</h4>${result.parts.map(part=>`<div class="contribution-row"><span>${formatTerms(part.label)}</span><span class="contribution-equals">=</span><b>${part.value>=0?'+':'−'}${fmt(Math.abs(part.value))}</b></div>`).join('')||`<p>${t('ui.noContributions')}</p>`}</div>
    ${result.note?`<p class="notice">${formatTerms(result.note)}</p>`:''}`;
}
function refreshDialogCalculation() {
  const result=computed(dialogCard,dialogLevel);
  $('dialog-calculation').innerHTML=calculationHTML(dialogCard,dialogLevel,result);
  $('dialog-quality').textContent = fmt(result.quality);
  $('dialog-max').textContent = fmt(result.value);
}
// Trace formula inputs instead of testing only the current value (which may sit on a cap).
function relevantSettings(c,level) {
  const used = new Set();
  estimate(c,level,scenarioFor(c),used);
  return Object.keys(defaults).filter(key => used.has(key));
}
function renderDialog() {
  const c = dialogCard, level = dialogLevel, build = mode === 'builder';
  const scenario = build ? scenarioFor(c) : null, keys = build ? relevantSettings(c,level) : [];
  const text=cardText(c);
  $('dialog-title').innerHTML=`<span class="dialog-index">#${String(c.index).padStart(3,'0')}</span> ${esc(text.name)}`;
  $('card-dialog').classList.toggle('compact',keys.length===0);
  const result=build?computed(c,level):null,selected=current.cards.includes(c.index);
  $('dialog-body').innerHTML=`<div class="dialog-layout"><div class="dialog-art-column"><div class="dialog-visual"><img class="dialog-art" src="${imagePath(c)}" alt="${esc(text.name)}"><span class="orb cost" title="${t('ui.cost')}">${c.energy_cost}</span><span class="orb chakra" title="${t('ui.baseChakra')}">${c.chakra}</span></div></div>
    <div class="dialog-content"><div class="dialog-effect"><div class="ability-heading"><h3 class="ability-title">${esc(text.ability)}</h3><div class="tags">${c.skill_types_original.map(key=>`<span class="tag">${effectHTML(effectLabel(key),key)}</span>`).join('')}</div></div><p class="ability">${formatDescription(c,level)}</p></div>
    <div class="dialog-toolbar${build?'':' read-only'}"><button class="toolbar-cell level-cell" id="dialog-level" type="button" title="${t('ui.changeLevelTitle',{level:level===1?2:1})}" role="switch" aria-checked="${level===2}" aria-label="${t('ui.changeLevelAction',{level,next:level===1?2:1})}"><span>${t('ui.changeLevel')}</span><span class="level-value"><b>${level}</b>${LEVEL_CYCLE_ICON}</span></button>${build?`<div class="dialog-stats" aria-label="${t('ui.powerQuality')}"><div class="toolbar-cell"><span>${t('ui.power')}</span><b id="dialog-max">${fmt(result.value)}</b></div><div class="toolbar-cell"><span>${t('ui.quality')}</span><b id="dialog-quality">${fmt(result.quality)}</b></div></div><button class="${selected?'strong-danger':'primary'}" id="dialog-add" ${!selected&&current.cards.length>=10?'disabled':''}>${t(selected?'ui.removeFromDeck':'ui.addToDeck')}</button>`:''}</div></div>
    ${build?`<div class="dialog-workbench${keys.length?'':' calculation-only'}">${keys.length?`<section class="local-options"><div class="section-head"><h4>${t('ui.localAssumptions')}</h4><button class="small" id="reset-local">${t('ui.useStandard')}</button></div><p class="inline-note">${t('ui.localChanges')}</p><div class="local-grid">${keys.map(key=>`<div class="parameter"><label for="local-${key}">${formatTerms(t('ui.'+key))}</label><input id="local-${key}" data-local="${key}" type="text" inputmode="numeric" pattern="[0-9]*" data-integer min="0" max="99" required step="1" value="${scenario[key]}"></div>`).join('')}</div></section>`:''}<section id="dialog-calculation">${calculationHTML(c,level,result)}</section></div>`:''}</div>`;
  $('dialog-level').onclick = () => {
    dialogLevel = level===1 ? 2 : 1;
    if (build) current.levels[c.index] = dialogLevel;
    changed(); renderDialog(); $('dialog-level').focus();
  };
  for (const input of document.querySelectorAll('[data-local]')) {
    input.oninput = () => {
      if (!acceptedInteger(input)) return;
      current.cardOptions[c.index] = cleanScenario({...scenarioFor(c),[input.dataset.local]:Number(input.value)});
      changed(); refreshDialogCalculation();
    };
  }
  if ($('reset-local')) $('reset-local').onclick = () => { current.cardOptions[c.index] = {...current.scenario}; changed(); renderDialog(); };
  if ($('dialog-add')) $('dialog-add').onclick = () => {
    if (selected) { removeCard(c.index); $('card-dialog').close(); }
    else {
      current.levels[c.index] = dialogLevel; addCard(c.index);
      if (current.cards.includes(c.index)) $('card-dialog').close();
    }
  };
}

function exportDeck() {
  const data = {format:'naruto-deck',name:current.name,
    cards:current.cards.map(index => ({index,level:deckLevel(byIndex.get(index))})),
    scenario:{...current.scenario},
    cardOptions:Object.fromEntries(current.cards.map(index => [index,scenarioFor(byIndex.get(index))]))
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
  const link = document.createElement('a'); link.href = url;
  link.download = (current.name.trim().replace(/[^\p{L}\p{N}_-]+/gu,'-') || t('ui.defaultDeckName').replace(/\s+/g,'-'))+'.json';
  link.click(); setTimeout(() => URL.revokeObjectURL(url),1000);
  return data;
}
function parseScenarioOptions(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw Error(t('errors.invalidOptions'));
  const out = {};
  for (const key of Object.keys(defaults)) {
    const n = value[key];
    if (typeof n !== 'number' || !Number.isFinite(n)) throw Error(t('errors.invalidValues'));
    out[key] = n;
  }
  return cleanScenario(out);
}
function parseDeck(text) {
  let data;
  try { data = JSON.parse(text); } catch { throw Error(t('errors.invalidJson')); }
  if (data?.format !== 'naruto-deck' || typeof data.name !== 'string' || !Array.isArray(data.cards) || data.cards.length > 10) throw Error(t('errors.invalidDeck'));
  const next = emptyDeck(), selected = new Set(); next.name = data.name.slice(0,15);
  for (const card of data.cards) {
    if (!card || !Number.isInteger(card.index) || !byIndex.has(card.index) || selected.has(card.index) || ![1,2].includes(card.level)) throw Error(t('errors.invalidCards'));
    selected.add(card.index); next.cards.push(card.index);
    next.levels[card.index] = card.level;
  }
  next.scenario = parseScenarioOptions(data.scenario);
  if (!data.cardOptions || typeof data.cardOptions !== 'object' || Array.isArray(data.cardOptions)) throw Error(t('errors.invalidOverrides'));
  for (const [key,value] of Object.entries(data.cardOptions)) {
    if (!selected.has(Number(key)) || !/^\d+$/.test(key)) throw Error(t('errors.missingCard'));
    next.cardOptions[key] = parseScenarioOptions(value);
  }
  for (const index of selected) if (!next.cardOptions[index]) next.cardOptions[index] = {...next.scenario};
  return next;
}
function createFilterDefinitions() {
  const labels=keys=>keys.map(([value,key])=>({value,label:t('ui.'+key)}));
  return {
    'f-rarity':{label:t('ui.rarity'),all:t('ui.allFeminine'),options:labels([['Common','common'],['Rare','rare'],['Epic','epic'],['Legendary','legendary']])},
    'f-season':{label:t('ui.season'),all:t('ui.allFeminine'),options:labels([['1','first'],['2','second'],['3','third']])},
    'f-skill':{label:t('ui.skillType'),all:t('ui.all'),options:[{value:'none',label:t('ui.none')},...Array.from(new Set(CARDS.flatMap(card=>card.skill_types_original))).sort((a,b)=>effectLabel(a).localeCompare(effectLabel(b),TRANSLATIONS[language].locale)).map(key=>({value:key,label:effectLabel(key),html:effectHTML(effectLabel(key),key)}))]},
    ...Object.fromEntries([['f-cost','cost','energy_cost'],['f-chakra','chakra','chakra']].map(([id,key,field])=>[id,{label:t('ui.'+key),all:t('ui.all'),numeric:true,options:Array.from(new Set(CARDS.map(card=>card[field]))).sort((a,b)=>a-b).map(value=>({value:String(value),label:String(value)}))}]))
  };
}
let filterDefinitions=createFilterDefinitions();
function selectedFilterValues(id) {
  return new Set(Array.from($(mode+'-'+id+'-menu').querySelectorAll('input:checked'),input => input.value));
}
function updateMultiFilter(button,config) {
  const menu = $(button.getAttribute('popovertarget'));
  const checked = Array.from(menu.querySelectorAll('input:checked'),input => input.value);
  const options = config.options.filter(option => checked.includes(option.value));
  button.querySelector('.filter-value').innerHTML = options.length === 1 ? options[0].html || esc(options[0].label) : options.length ? t('ui.selectedCount',{count:options.length}) : config.all;
  const names = options.length ? options.map(option => option.label).join(', ') : config.all;
  button.title = config.label+': '+names;
  button.setAttribute('aria-label',button.title);
}
function positionFilterMenu(button,menu) {
  const r=button.getBoundingClientRect(),width=Math.min(menu.classList.contains('numeric-filter-menu')?112:210,innerWidth-20);
  const below = innerHeight-r.bottom-10, above = r.top-10, upward = below < 160 && above > below;
  menu.style.width = width+'px';
  menu.style.left = Math.max(10,Math.min(r.left,innerWidth-width-10))+'px';
  menu.style.top = upward ? 'auto' : r.bottom+4+'px';
  menu.style.bottom = upward ? innerHeight-r.top+4+'px' : 'auto';
  menu.style.maxHeight = Math.min(320,Math.max(80,upward ? above : below))+'px';
}
function closeFilterMenus() {
  for (const menu of document.querySelectorAll('.filter-menu:popover-open')) menu.hidePopover();
}
function mountMultiFilter(area,id,config) {
  const button = $(area+'-'+id), menu = $(area+'-'+id+'-menu');
  button.setAttribute('popovertarget',menu.id);
  button.setAttribute('aria-controls',menu.id);
  menu.classList.toggle('numeric-filter-menu',!!config.numeric);
  const selected=new Set(Array.from(menu.querySelectorAll('input:checked'),input=>input.value));
  menu.innerHTML = `<div class="filter-menu-head"><strong>${formatTerms(config.label)}</strong><button type="button" data-filter-clear>${config.all}</button></div>`+config.options.map(option => `<label class="filter-option-row"><span>${option.html || esc(option.label)}</span><input class="filter-option" type="checkbox" value="${esc(option.value)}" aria-label="${esc(option.label)}" ${selected.has(option.value)?'checked':''}></label>`).join('');
  menu.onbeforetoggle=event=>{if(event.newState==='open')positionFilterMenu(button,menu);};
  menu.ontoggle=event=>button.setAttribute('aria-expanded',String(event.newState==='open'));
  menu.onchange=()=>{updateMultiFilter(button,config);renderCatalog();};
  menu.querySelector('[data-filter-clear]').onclick = () => {
    for (const input of menu.querySelectorAll('input')) input.checked = false;
    updateMultiFilter(button,config); renderCatalog();
  };
  updateMultiFilter(button,config);
}
function repositionFilterMenus() {
  for (const menu of document.querySelectorAll('.filter-menu:popover-open')) positionFilterMenu($(menu.id.replace(/-menu$/,'')),menu);
}
window.addEventListener('resize',repositionFilterMenus,{passive:true});
window.addEventListener('scroll',repositionFilterMenus,{capture:true,passive:true});

function sizeFilterControls() {
  // Reserve enough room for every possible selection count in the active language.
  const context=document.createElement('canvas').getContext('2d');
  for (const button of document.querySelectorAll('[data-multi-filter]')) {
    const config=filterDefinitions[button.id.replace(/^(?:db|builder)-/,'')];
    const style=getComputedStyle(button),arrow=getComputedStyle(button.querySelector('.filter-arrow'));
    context.font=`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    let textWidth=0;
    for (let count=2;count<=config.options.length;count++) textWidth=Math.max(textWidth,context.measureText(t('ui.selectedCount',{count})).width);
    context.font=`${arrow.fontWeight} ${arrow.fontSize} ${arrow.fontFamily}`;
    const arrowWidth=context.measureText('▾').width;
    const spacing=['paddingLeft','paddingRight','borderLeftWidth','borderRightWidth','columnGap'].reduce((sum,key)=>sum+(parseFloat(style[key])||0),0);
    button.closest('.field').style.minWidth=Math.ceil(textWidth+arrowWidth+spacing+2)+'px';
  }
  for (const select of document.querySelectorAll('.filters-panel select')) {
    const probe=select.cloneNode(true);
    probe.removeAttribute('id'); probe.removeAttribute('class');
    Object.assign(probe.style,{position:'fixed',left:'-9999px',visibility:'hidden',width:'auto',maxWidth:'none',fieldSizing:'fixed',font:getComputedStyle(select).font,fontWeight:'400'});
    document.body.append(probe);
    select.style.width = Math.ceil(probe.getBoundingClientRect().width)+10+'px';
    probe.remove();
  }
}
function setFilterLevel(button,level) {
  button.value = String(level);
  button.innerHTML = `<span>${level}</span>${LEVEL_CYCLE_ICON}`;
  button.title = t('ui.changeLevelTitle',{level:level===1?2:1});
  button.setAttribute('aria-checked',String(level===2));
  button.setAttribute('aria-label',t('ui.changeLevelAction',{level,next:level===1?2:1}));
}
function applyBuilderLevel(level) {
  for (const index of current.cards) current.levels[index] = deckLevel(byIndex.get(index));
  const selected = new Set(current.cards);
  for (const index of Object.keys(current.levels)) if (!selected.has(Number(index))) delete current.levels[index];
  setFilterLevel($('builder-f-level'),level);
}
function mountFilters(area) {
  const fragment = $('filters-template').content.cloneNode(true);
  fragment.querySelectorAll(area === 'db' ? '.builder-only' : '.db-only').forEach(el => el.remove());
  for (const el of fragment.querySelectorAll('[id]')) el.id = area+'-'+el.id;
  for (const el of fragment.querySelectorAll('label[for]')) el.htmlFor = area+'-'+el.htmlFor;
  $(area+'-filter-host').append(fragment);
  translateStatic($(area+'-filter-host'));
  setFilterLevel($(area+'-f-level'),1);
  for (const [id,config] of Object.entries(filterDefinitions)) mountMultiFilter(area,id,config);
  $(area+'-filter-host').querySelectorAll('input:not(.filter-option),select,[data-level-toggle]').forEach(el => el.addEventListener(el.matches('[data-level-toggle]') ? 'click' : el.type === 'search' || el.hasAttribute('data-integer') ? 'input' : 'change',() => {
    if (el.matches('[data-level-toggle]')) {
      const level = Number(el.value)===1?2:1;
      if (area === 'builder') applyBuilderLevel(level); else setFilterLevel(el,level);
    }
    if (el.id === 'builder-f-level') renderDeck();
    renderCatalog();
  }));
  $(area+'-sort-direction').onclick = () => {
    const button = $(area+'-sort-direction'), descending = button.dataset.direction !== 'desc';
    button.dataset.direction = descending ? 'desc' : 'asc';
    button.textContent = descending ? '↓' : '↑';
    button.setAttribute('aria-label',t(descending?'ui.descendingAction':'ui.ascendingAction'));
    button.title = t(descending?'ui.descending':'ui.ascending');
    renderCatalog();
  };
  $(area+'-reset').onclick = () => {
    for (const id of filterIds) {
      const el = $(area+'-'+id); if (!el) continue;
      if (el.matches('[data-level-toggle]')) { if (area === 'builder') applyBuilderLevel(1); else setFilterLevel(el,1); }
      else el.value = '';
    }
    $(area+'-sort').value = 'index';
    const direction = $(area+'-sort-direction'); direction.dataset.direction = 'asc'; direction.textContent = '↑'; direction.title=t('ui.ascending'); direction.setAttribute('aria-label',t('ui.ascendingAction'));
    for (const [id,config] of Object.entries(filterDefinitions)) {
      for (const input of $(area+'-'+id+'-menu').querySelectorAll('input')) input.checked = false;
      updateMultiFilter($(area+'-'+id),config);
    }
    closeFilterMenus();
    if (area === 'builder') renderDeck();
    renderCatalog();
  };
  $(area+'-card-list').onclick = event => {
    const toggle = event.target.closest('[data-toggle]'), open = event.target.closest('[data-open]');
    if (toggle && area === 'builder') toggleCard(Number(toggle.dataset.toggle));
    else if (open) openCard(Number(open.dataset.open));
  };
}
// Switching language changes presentation only; deck choices and filter values stay intact.
function applyLanguage() {
  document.documentElement.lang=language;
  buildTermPatterns();translateStatic();
  filterDefinitions=createFilterDefinitions();
  for (const area of ['db','builder']) {
    for (const [id,config] of Object.entries(filterDefinitions)) mountMultiFilter(area,id,config);
    setFilterLevel($(area+'-f-level'),Number($(area+'-f-level').value));
    const button=$(area+'-sort-direction'),descending=button.dataset.direction==='desc';
    button.title=t(descending?'ui.descending':'ui.ascending');
    button.setAttribute('aria-label',t(descending?'ui.descendingAction':'ui.ascendingAction'));
  }
  $('language-select').value=language;
  sizeFilterControls();renderDeck();renderCatalog();
  if ($('card-dialog').open) renderDialog();
  if (confirmMessageKey) $('confirm-text').textContent=t(confirmMessageKey);
}
function setLanguage(code) {
  if (!Object.hasOwn(TRANSLATIONS,code)) return false;
  closeFilterMenus();language=code;
  if (useDefaultDeckName) current.name=t('ui.defaultDeckName');
  clearTimeout(toastTimer);$('toast').classList.add('hidden');
  applyLanguage();return true;
}

// Store data, not rendered HTML. Session storage is scoped to this origin and tab.
function captureFilters(area) {
  return {
    text:$(area+'-f-text').value,
    level:Number($(area+'-f-level').value),
    minimumPower:$(area+'-f-estimate')?.value ?? '',
    sort:$(area+'-sort').value,
    direction:$(area+'-sort-direction').dataset.direction,
    selected:Object.fromEntries(Object.keys(filterDefinitions).map(id => [id,
      Array.from($(area+'-'+id+'-menu').querySelectorAll('input:checked'),input => input.value)]))
  };
}
function restoreFilters(area,filter = {}) {
  $(area+'-f-text').value = typeof filter.text === 'string' ? filter.text : '';
  setFilterLevel($(area+'-f-level'),filter.level === 2 ? 2 : 1);
  const minimum = $(area+'-f-estimate');
  if (minimum) minimum.value = typeof filter.minimumPower === 'string' && /^\d{0,3}$/.test(filter.minimumPower) ? filter.minimumPower : '';
  const sort = $(area+'-sort');
  sort.value = Array.from(sort.options).some(option => option.value === filter.sort) ? filter.sort : 'index';
  const direction = $(area+'-sort-direction'), descending = filter.direction === 'desc';
  direction.dataset.direction = descending ? 'desc' : 'asc';
  direction.textContent = descending ? '↓' : '↑';
  for (const [id,config] of Object.entries(filterDefinitions)) {
    const selected = new Set(Array.isArray(filter.selected?.[id]) ? filter.selected[id] : []);
    for (const input of $(area+'-'+id+'-menu').querySelectorAll('input')) input.checked = selected.has(input.value);
    updateMultiFilter($(area+'-'+id),config);
  }
}
function notifyStorageFailure(key) {
  if (sessionWarning) return;
  sessionWarning = true;
  toast(t(key),true);
}
function saveSession() {
  clearTimeout(sessionTimer);
  if (!sessionReady) return;
  try {
    const text = JSON.stringify({
      language,mode,useDefaultDeckName,defaults,deck:current,
      panels:Object.fromEntries(Object.entries(panelSelectors).map(([key,selector]) => [key,document.querySelector(selector).open])),
      filters:{db:captureFilters('db'),builder:captureFilters('builder')},
      standardDraft:Object.fromEntries(Object.entries(settingIds).map(([key,id]) => [key,$(id).value])),
      standardStatus:$('standard-status').dataset.i18n || ''
    });
    if (text === lastSessionText) return;
    sessionStorage.setItem(SESSION_KEY,text);
    lastSessionText = text;
  } catch { notifyStorageFailure('ui.sessionUnavailable'); }
}
function scheduleSessionSave() {
  if (!sessionReady) return;
  clearTimeout(sessionTimer);
  sessionTimer = setTimeout(saveSession,80);
}
function restoreSession() {
  let text;
  try { text = sessionStorage.getItem(SESSION_KEY); }
  catch { return {warning:'ui.sessionUnavailable'}; }
  if (!text) return {};
  try {
    if (text.length > 1000000) throw Error('Session too large');
    const saved = JSON.parse(text);
    if (!saved || !Object.hasOwn(TRANSLATIONS,saved.language) || !['db','builder'].includes(saved.mode) || typeof saved.useDefaultDeckName !== 'boolean') throw Error('Invalid session');
    const nextDefaults = parseScenarioOptions(saved.defaults), deck = saved.deck;
    if (!deck || !Array.isArray(deck.cards) || !deck.levels || !deck.cardOptions || Array.isArray(deck.levels) || Array.isArray(deck.cardOptions)) throw Error('Invalid session deck');
    const levels = {}, cardOptions = {};
    for (const [key,value] of Object.entries(deck.levels)) {
      if (!/^\d+$/.test(key) || !byIndex.has(Number(key)) || ![1,2].includes(value)) throw Error('Invalid session level');
      levels[key] = value;
    }
    for (const [key,value] of Object.entries(deck.cardOptions)) {
      if (!/^\d+$/.test(key) || !byIndex.has(Number(key))) throw Error('Invalid session card');
      cardOptions[key] = parseScenarioOptions(value);
    }
    const next = parseDeck(JSON.stringify({format:'naruto-deck',name:deck.name,
      cards:deck.cards.map(index => ({index,level:levels[index] ?? (saved.filters?.builder?.level === 2 ? 2 : 1)})),
      scenario:deck.scenario,
      cardOptions:Object.fromEntries(deck.cards.filter(index => Object.hasOwn(cardOptions,index)).map(index => [index,cardOptions[index]]))
    }));
    // Preserve overrides for browsed cards as well as the cards in the deck.
    next.levels = {...levels,...next.levels};
    next.cardOptions = {...cardOptions,...next.cardOptions};
    language = saved.language; mode = saved.mode; useDefaultDeckName = saved.useDefaultDeckName;
    Object.assign(defaults,nextDefaults); current = next;
    if (useDefaultDeckName) current.name = t('ui.defaultDeckName');
    for (const area of ['db','builder']) restoreFilters(area,saved.filters?.[area] || {});
    return saved;
  } catch {
    try { sessionStorage.removeItem(SESSION_KEY); } catch { /* The app also works without browser storage. */ }
    return {warning:'ui.sessionInvalid'};
  }
}
$('language-select').innerHTML=Object.entries(TRANSLATIONS).map(([code,catalog])=>`<option value="${esc(code)}">${esc(catalog.name)}</option>`).join('');
$('language-select').onchange=()=>setLanguage($('language-select').value);

mountFilters('db'); mountFilters('builder');
sizeFilterControls();
for (const id of Object.values(settingIds)) $(id).addEventListener('input',() => {
  setStandardStatus('ui.standardPending');
});
$('apply-standard').onclick = applyWrittenStandard;
$('tab-db').onclick = () => setMode('db'); $('tab-builder').onclick = () => setMode('builder');
document.querySelector('.tabs').onkeydown = event => {
  if (['ArrowLeft','ArrowRight'].includes(event.key)) { event.preventDefault(); setMode(mode === 'db' ? 'builder' : 'db'); $(mode === 'db' ? 'tab-db' : 'tab-builder').focus(); }
};
for (const id of ['deck-grid','deck-dialog-grid']) $(id).onclick = event => {
  const remove = event.target.closest('[data-remove]'), open = event.target.closest('[data-deck-open]');
  if (remove) removeCard(Number(remove.dataset.remove));
  else if (open) { const c = byIndex.get(Number(open.dataset.deckOpen)); openCard(c.index,deckLevel(c)); }
};
$('view-deck').onclick = () => { renderDeck(); $('deck-dialog').showModal(); };
$('close-deck-dialog').onclick = () => $('deck-dialog').close();
$('deck-name').oninput = () => {
  const input = $('deck-name');
  useDefaultDeckName=false;
  current.name = input.value.slice(0,15);
  if (input.value !== current.name) input.value = current.name;
};
$('export-deck').onclick = exportDeck;
$('import-deck').onclick = () => $('import-file').click();
$('import-file').onchange = async () => {
  const file = $('import-file').files[0]; if (!file) return;
  try {
    if (file.size > 1000000) throw Error(t('errors.fileTooLarge'));
    const next = parseDeck(await file.text());
    const apply = () => { current=next;useDefaultDeckName=false;syncScenario();changed();toast(t('ui.deckImported')); };
    if (current.cards.length) ask('ui.replaceDeck',apply); else apply();
  } catch (error) { toast(error.message || t('errors.importFailed'),true); }
  $('import-file').value = '';
};
$('clear-deck').onclick = () => ask('ui.confirmClear',() => { current.cards = []; current.levels = {}; changed(); });
$('close-dialog').onclick = () => $('card-dialog').close();
$('calculation-info-button').onclick = () => $('calculation-info-dialog').showModal();
$('close-calculation-info').onclick = () => $('calculation-info-dialog').close();
$('confirm-no').onclick = () => { confirmAction = null; $('confirm-dialog').close(); };
$('confirm-yes').onclick = () => { const action = confirmAction; confirmAction = null; $('confirm-dialog').close(); action?.(); };
$('confirm-dialog').oncancel = () => { confirmAction = null; };
for (const dialog of document.querySelectorAll('dialog')) {
  let startedOutside = false;
  const outside = event => { const r = dialog.getBoundingClientRect(); return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom; };
  dialog.addEventListener('pointerdown',event => { startedOutside = event.target === dialog && outside(event); });
  dialog.addEventListener('click',event => { if (startedOutside && event.target === dialog && outside(event)) dialog.close(); startedOutside = false; });
}

const restoredSession = restoreSession();
for (const [key,selector] of Object.entries(panelSelectors)) {
  if (typeof restoredSession.panels?.[key] === 'boolean') document.querySelector(selector).open = restoredSession.panels[key];
}
syncScenario(); applyLanguage(); setMode(mode);
for (const [key,id] of Object.entries(settingIds)) {
  const draft = restoredSession.standardDraft?.[key];
  if (typeof draft === 'string' && /^\d{0,3}$/.test(draft)) $(id).value = draft;
}
if (['ui.standardApplied','ui.standardPending'].includes(restoredSession.standardStatus)) setStandardStatus(restoredSession.standardStatus);
sessionReady = true;
for (const selector of Object.values(panelSelectors)) document.querySelector(selector).addEventListener('toggle',scheduleSessionSave);
document.addEventListener('input',scheduleSessionSave);
document.addEventListener('change',scheduleSessionSave);
window.addEventListener('pagehide',saveSession);
document.addEventListener('visibilitychange',() => { if (document.visibilityState === 'hidden') saveSession(); });
saveSession();
if (restoredSession.warning) notifyStorageFailure(restoredSession.warning);
window.NarutoApp = {cards:CARDS,estimate,computed,deckLevel,defaults,exportDeck,parseDeck,getCurrent:() => structuredClone(current),setLanguage,getLanguage:()=>language};
