'use strict';

const $ = id => document.getElementById(id);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// New sessions start in English; refreshes restore the current tab's language.
let language = 'en';
const SESSION_KEY = 'naruto-ninja-cards.session';
let collectionCounts=null,collectionRestoreFailed=false,collectionFeedback=null,collectionMethod='sync',collectionCopyState=null,collectionBookmarkCopyState=null;
let collectionSync=null,collectionSyncError=null;
try { collectionCounts=CARD_COLLECTION.restore(); } catch { collectionRestoreFailed=true; }
const ownsCard=card=>!!collectionCounts?.[card.card_key];
const collectionLevel=card=>ownsCard(card)?(collectionCounts[card.card_key]>=2?2:1):null;
const sections = {db:'database',builder:'builder',synergies:'synergies',decks:'prebuiltDecks',collection:'collectionManage'};
const shortSectionLabels = {db:'navDatabase',builder:'navBuilder',synergies:'navSynergies',decks:'navDecks',collection:'collectionManage'};
const sectionIds = Object.keys(sections);
document.documentElement.style.setProperty('--section-count',sectionIds.length);
const toolbarPanels = {
  db: [{key:'filters',label:'filters',id:'db-filter-host'}],
  builder: [
    {key:'filters',label:'filters',id:'builder-filter-host'},
    {key:'assumptions',label:'assumptions',id:'scenario-panel'},
    {key:'deck',label:'deckBuilding',id:'deck-panel'}
  ],
  synergies: [{key:'filters',label:'filters',id:'synergies-filter-host'},{key:'proposal',label:'proposeSynergy',id:'synergy-proposal-panel'}],
  decks: [{key:'filters',label:'filters',id:'decks-filter-host'},{key:'proposal',label:'proposeDeck',id:'deck-proposal-panel'}]
};
const toolbarAreas = Object.keys(toolbarPanels);
const filterAreas = toolbarAreas.filter(area=>area!=='decks');
const toolbarState = Object.fromEntries(toolbarAreas.map(area=>[area,{active:'filters',open:true}]));
const mobileViewport = matchMedia('(max-width:700px)');
const catalogScroll = Object.fromEntries(sectionIds.map(area=>[area,{mobile:0,desktop:0}]));
let mobileToolsArea = null;
let scrollRestoreFrame = null;
const toolbarIcons = {
  filters:'<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  assumptions:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M7 7h10M8 11h1m6 0h1m-8 4h1m6 0h1m-8 3h1m6 0h1"/>',
  deck:'<path d="M8 3h12v15M4 7h12v14H4z"/>',
  proposal:'<path d="M3 5h18v12H9l-5 4v-4H3zM7 9h10M7 13h6"/>'
};
const deckOrder = {sort:'cost',direction:'asc'};
let sessionReady = false, sessionTimer, lastSessionText = '', sessionWarning = false;
const numberFormatters = new Map();
const pluralRules = new Map();
let viewportUpdateFrame = null, scrollUpdateFrame = null;
let lastMobileScrollAt = -Infinity;
// Card lookups and shared rendering state.
const LEVEL_CYCLE_ICON = `<svg class="cycle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5"/></svg>`;
const RANK = {Common:0, Rare:1, Epic:2, Legendary:3};
const byIndex = new Map(CARDS.map(c => [c.index,c]));
const cardByKey = new Map(CARDS.map(card=>[card.card_key,card]));
const presetById = new Map(PREBUILT_DECKS.map(deck=>[deck.id,deck]));
let autoController=null,autoProposals=[],autoLevels={},autoSnapshot='';
let proposalSending=false,deckProposalAttempted=false;
// Sources share a row only when their complete partner lists are identical.
const synergyGroupByIndex = (()=>{
  const groups=new Map(),indices=new Map();
  for (const entry of SYNERGIES) {
    const key=entry.partners.join(',');
    if (!groups.has(key)) groups.set(key,{key:entry.index,partners:entry.partners.map(index=>byIndex.get(index))});
    indices.set(entry.index,groups.get(key));
  }
  return indices;
})();
const SYNERGY_BATCH_SIZE = 12;
const synergySourceSelections = new Map();
let synergyResults = [], synergyResultByKey = new Map(), synergyLoaded = 0, synergyComparator;
let synergySourceHeightCache = new WeakMap();
const defaults={...DEFAULT_SCENARIO};
const F = id => $(mode+'-'+id);
const settingIds = {enemies:'s-enemies', enemyChakra:'s-enemy-chakra', allies:'s-allies', allyChakra:'s-ally-chakra', activations:'s-activations'};

// Localization and language controls.
function getTranslation(key,code=language) {
  const parts=key.split('.');
  const read = catalog => parts.reduce((value,part) => value?.[part],catalog);
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
function syncLanguageControl() {
  const catalog=TRANSLATIONS[language];
  $('language-name').textContent=catalog.name;
  $('language-code').textContent=language.toUpperCase();
  $('language-flag').src=`misc_images/flag-${catalog.flag}.svg`;
  for (const option of $('language-menu').querySelectorAll('[data-language]')) {
    const selected=option.dataset.language===language;
    option.setAttribute('aria-selected',String(selected));
    option.tabIndex=selected?0:-1;
  }
}
function positionLanguageMenu() {
  const button=$('language-select'),menu=$('language-menu'),rect=button.getBoundingClientRect();
  const width=Math.min(Math.max(rect.width,180),innerWidth-20);
  menu.style.width=width+'px';
  menu.style.left=Math.max(10,Math.min(rect.right-width,innerWidth-width-10))+'px';
  menu.style.top=(rect.bottom+6)+'px';
  menu.style.maxHeight=Math.max(80,innerHeight-rect.bottom-16)+'px';
}
function mountLanguageMenu() {
  const button=$('language-select'),menu=$('language-menu');
  menu.innerHTML=Object.entries(TRANSLATIONS).sort(([,a],[,b])=>a.name.localeCompare(b.name,'en',{sensitivity:'base'})).map(([code,catalog])=>`<button class="language-option" data-language="${esc(code)}" role="option" type="button"><img alt="" class="language-flag" src="misc_images/flag-${esc(catalog.flag)}.svg" width="20" height="15"><span lang="${esc(code)}">${esc(catalog.name)}</span></button>`).join('');
  menu.onbeforetoggle=event=>{if(event.newState==='open')positionLanguageMenu();};
  menu.ontoggle=event=>{
    const open=event.newState==='open';
    button.setAttribute('aria-expanded',String(open));
    if(open)menu.querySelector('[aria-selected=true]').focus();
  };
  menu.onclick=event=>{
    const option=event.target.closest('[data-language]');
    if(option){setLanguage(option.dataset.language);button.focus();}
  };
  menu.onkeydown=event=>{
    const options=Array.from(menu.querySelectorAll('[data-language]'));
    const currentIndex=options.indexOf(document.activeElement);
    let next;
    if(event.key==='ArrowDown')next=(currentIndex+1)%options.length;
    else if(event.key==='ArrowUp')next=(currentIndex+options.length-1)%options.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=options.length-1;
    else if(event.key.length===1 && /\p{L}/u.test(event.key)) {
      const offset=options.slice(currentIndex+1).concat(options.slice(0,currentIndex+1));
      next=options.indexOf(offset.find(option=>option.textContent.toLocaleLowerCase().startsWith(event.key.toLocaleLowerCase())));
    } else if(event.key==='Tab')menu.hidePopover();
    if(next>=0){event.preventDefault();options[next].focus();}
  };
  button.onkeydown=event=>{
    if(event.key==='ArrowDown'||event.key==='ArrowUp'){
      event.preventDefault();menu.showPopover();
      menu.querySelector('[aria-selected=true]').focus();
    }
  };
}
function fmt(value,maximumFractionDigits=2) {
  const key = language+':'+maximumFractionDigits;
  if (!numberFormatters.has(key)) numberFormatters.set(key,new Intl.NumberFormat(TRANSLATIONS[language].locale,{maximumFractionDigits}));
  return numberFormatters.get(key).format(value);
}
// Localized card text, keyword formatting and level differences.
const cardTextCache = new WeakMap();
function cardText(card) {
  let cached=cardTextCache.get(card);
  if (!cached || cached.language!==language) {
    const text=getTranslation('cards.'+card.card_key);
    cached={language,text:{...text,name:text.name.toLocaleUpperCase(TRANSLATIONS[language].locale)}};
    cardTextCache.set(card,cached);
  }
  return cached.text;
}
const cardNumber = card => Number(card.card_key.split('_')[1]);
const cardReference = card => `S${card.season} #${String(cardNumber(card)).padStart(3,'0')}`;
const imagePath = card => `card_images/${card.card_key}.webp`;
const effectLabel = key => t('effects.'+key);
function translateStatic(root=document) {
  const values={count:CARDS.length,section:t('ui.builder'),copyLink:t('ui.collectionCopyLink')};
  for (const el of root.querySelectorAll('[data-i18n]')) {
    const value=t(el.dataset.i18n,values);
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
// Keyword patterns belong to each language catalog, rather than to the renderer.
let termPatterns,termRegex;
function normalizeText(text) {
  return (TRANSLATIONS[language].normalizations || []).reduce((value,[from,to]) => value.replaceAll(from,to),String(text ?? ''));
}
function buildTermPatterns() {
  const patterns=Object.entries(TRANSLATIONS[language].terms);
  termPatterns=patterns.map(([key,pattern]) => [key,new RegExp(`^(?:${pattern})$`,'iu')]);
  termRegex=new RegExp(`(?<![\\p{L}\\p{N}_])(?:${patterns.map(([,pattern]) => pattern).join('|')})(?![\\p{L}\\p{N}_])(?:\\s*[([][+−-]?\\d+(?:[.,]\\d+)?s?[)\\]])?`,'giu');
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
  const cached = descriptionDifferenceCache.get(c);
  if (cached && cached.language===language) return cached;
  const texts = [1,2].map(level => normalizeText(cardText(c).descriptions[level-1]));
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

// Shared numeric input validation and calculation assumptions.
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
let mode = 'db', dialogCard = null, dialogLevel = 1, dialogReadOnly = false, confirmAction = null, confirmMessageKey = null, toastTimer;
const deckLevel = c => current.levels[c.index] ?? collectionLevel(c) ?? Number($('builder-f-level').value);
const levelOf = c => mode === 'builder' ? deckLevel(c) : mode === 'db' ? Number($('db-f-level').value) : 1;
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

// Catalog filtering, rendering and progressive synergy groups.
function cardHTML(c,result=mode==='builder'?computed(c):null) {
  const level=levelOf(c),build=mode==='builder',synergy=mode==='synergies',selected=build&&current.cards.includes(c.index),text=cardText(c);
  return `<article class="game-card${selected?' selected':''}" data-index="${c.index}">
    <button class="card-main" data-open="${c.index}" title="${esc(synergy?text.ability:cardReference(c))}" aria-label="${esc(synergy?text.name:t('ui.openCard',{name:text.name,reference:cardReference(c)}))}">
      <img src="${imagePath(c)}" alt="${esc(text.name)}" loading="lazy" decoding="async" width="${CARD_ART.width}" height="${CARD_ART.height}">
      <span class="orb cost" title="${t('ui.energyCost')}" aria-label="${t('ui.costValue',{value:c.energy_cost})}">${c.energy_cost}</span>
      <span class="orb chakra" title="${t('ui.baseChakra')}" aria-label="${t('ui.chakraValue',{value:c.chakra})}">${c.chakra}</span>
      ${build?`<span class="card-level">${t('ui.levelShort',{level})}</span>`:''}
    </button>
    <div class="card-info"><strong class="card-title">${esc(text.name)}</strong>
      <div class="card-text" data-open="${c.index}"><strong>${esc(text.ability)}</strong><p class="ability">${formatDescription(c,level)}</p></div>
      ${build?`<div class="card-metrics"><span><b>${fmt(result.value)}</b><small>${t('ui.power')}</small></span><span><b>${fmt(result.quality,1)}</b><small>${t('ui.quality')}</small></span><button class="card-toggle ${selected?'is-selected':'primary'}" data-toggle="${c.index}" aria-label="${esc(t(selected?'ui.removeCard':'ui.addCard',{name:text.name}))}" title="${t(selected?'ui.removeFromDeck':'ui.addToDeck')}" aria-pressed="${selected}" ${!selected&&current.cards.length>=10?'disabled':''}><svg class="card-toggle-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4 10h12${selected?'':'M10 4v12'}"/></svg></button></div>`:''}
    </div></article>`;
}
const filterIds = ['f-level','f-text','f-estimate'];
function updateFilterCount(area) {
  let count;
  if (area==='decks') count=Number($('library-search').value.trim()!=='')+Number($('library-mode').value!=='all')+Number($('decks-owned-only').checked);
  else {
    const groups=Object.keys(filterDefinitions).filter(id=>$(area+'-'+id+'-menu').querySelector('input:checked')).length;
    count=groups+Number($(area+'-f-text').value.trim()!=='')+Number(!!$(area+'-f-estimate') && $(area+'-f-estimate').value!=='')+Number($(area+'-owned-only').checked);
  }
  const badge=$(area+'-toolbox-tab-filters').querySelector('.filter-count');
  badge.textContent=count?` (${fmt(count,0)})`:'';
  badge.hidden=count===0;
  badge.parentElement.title=t('ui.filters')+badge.textContent;
  const quickBadge=$(area+'-quick-filter-count');
  if (quickBadge) { quickBadge.textContent=badge.textContent;quickBadge.hidden=badge.hidden; }
}
function filteredCards(estimateFor=computed) {
  const query = F('f-text').value.trim().toLowerCase();
  const words = query.replace(/\bs(\d+)\s*(?:[#_-]\s*|\s+)(\d+)\b/g,'s$1#$2').split(/\s+/).filter(Boolean);
  const rarity = selectedFilterValues('f-rarity'), season = selectedFilterValues('f-season'), skills = [...selectedFilterValues('f-skill')];
  const cost = selectedFilterValues('f-cost'), chakra = selectedFilterValues('f-chakra');
  const minimumPower = mode==='builder' && F('f-estimate').value!=='' ? Number(F('f-estimate').value) : null;
  const indexQuery = /^#?\d+$/.test(query) ? Number(query.replace('#','')) : null;
  const ownedOnly = F('owned-only').checked;
  return CARDS.filter(c => {
    if (ownedOnly && !ownsCard(c)) return false;
    if (rarity.size && !rarity.has(c.rarity) || season.size && !season.has(String(c.season))) return false;
    if (skills.length && !skills.some(value => value === 'none' ? c.skill_types_original.length === 0 : c.skill_types_original.includes(value))) return false;
    if (cost.size && !cost.has(String(c.energy_cost)) || chakra.size && !chakra.has(String(c.chakra))) return false;
    if (minimumPower!==null && estimateFor(c).value<minimumPower) return false;
    if (query) {
      if (indexQuery !== null) { if (cardNumber(c) !== indexQuery) return false; }
      else {
        const {name,ability,descriptions}=cardText(c);
        const text = `${name} ${cardReference(c)} ${ability} ${normalizeText(descriptions[levelOf(c)-1])}`.toLowerCase();
        if (!words.every(word => {
          const reference = /^s(\d+)#(\d+)$/.exec(word);
          if (reference) return c.season === Number(reference[1]) && cardNumber(c) === Number(reference[2]);
          if (/^#\d+$/.test(word)) return cardNumber(c) === Number(word.slice(1));
          if (/^s\d+$/.test(word)) return c.season === Number(word.slice(1));
          return text.includes(word);
        })) return false;
      }
    }
    return true;
  });
}
function renderCatalog() {
  if (mode==='decks') { renderPresetLibrary();scheduleSessionSave();return; }
  if (mode==='collection') { renderCollectionUI();scheduleSessionSave();return; }
  // Share estimates within this render; changing level, language or assumptions starts a fresh cache.
  const estimates=new Map();
  const estimateFor=card=>{
    if (!estimates.has(card.index)) estimates.set(card.index,computed(card));
    return estimates.get(card.index);
  };
  const cards = filteredCards(estimateFor).filter(c=>mode!=='synergies' || synergyGroupByIndex.has(c.index)), sort = F('sort').value, direction = F('sort-direction').dataset.direction === 'desc' ? -1 : 1;
  const compareNames=sort==='name'?new Intl.Collator(TRANSLATIONS[language].locale).compare:null;
  const compareCards = (a,b) => {
    let d = 0;
    switch (sort) {
      case 'name': d = compareNames(cardText(a).name,cardText(b).name); break;
      case 'cost': d = a.energy_cost-b.energy_cost; break;
      case 'chakra': d = a.chakra-b.chakra; break;
      case 'quality': d = estimateFor(a).quality-estimateFor(b).quality; break;
      case 'rarity': d = RANK[a.rarity]-RANK[b.rarity];
    }
    return direction*(d || a.index-b.index);
  };
  cards.sort(compareCards);
  if (mode==='synergies') renderSynergies(cards,compareCards);
  else $(mode+'-card-list').innerHTML = cards.length ? cards.map(card=>cardHTML(card,mode==='builder'?estimateFor(card):null)).join('') : `<div class="empty-results">${t('ui.noResults')}</div>`;
  updateFilterCount(mode);
  scheduleSessionSave();
}
function renderSynergies(cards,compareCards) {
  synergyLoader.disconnect();
  const groups=new Map(),ownedOnly=$('synergies-owned-only').checked;
  for (const card of cards) {
    const group=synergyGroupByIndex.get(card.index);
    if (!groups.has(group.key)) {
      const partners=ownedOnly?group.partners.filter(ownsCard):group.partners;
      if (!partners.length) continue;
      groups.set(group.key,{key:group.key,partners,sources:[]});
    }
    groups.get(group.key).sources.push(card);
  }
  synergyResultByKey=groups;synergyResults=[...groups.values()];synergyLoaded=0;synergyComparator=compareCards;
  const list=$('synergies-card-list');
  list.innerHTML=groups.size?'':`<div class="empty-results">${t('ui.noResults')}</div>`;
  list.closest('.catalog').scrollTop=0;
  appendSynergies();
}
function appendSynergies() {
  const list=$('synergies-card-list'),batch=synergyResults.slice(synergyLoaded,synergyLoaded+SYNERGY_BATCH_SIZE);
  list.insertAdjacentHTML('beforeend',batch.map(synergyRowHTML).join(''));
  synergyLoaded+=batch.length;
  const more=$('synergies-more');
  more.hidden=synergyLoaded>=synergyResults.length;
  synergyLoader.disconnect();
  if (!more.hidden) synergyLoader.observe(more);
  scheduleSynergyLayout();
}
function synergyRowHTML(group) {
  const card=group.sources.find(card=>card.index===synergySourceSelections.get(group.key))??group.sources[0];
  const partners=[...group.partners].sort(synergyComparator);
  const menuId='synergy-sources-'+group.key;
  const sourceSelector=group.sources.length>1?`<button class="synergy-source-select" data-synergy-source-toggle popovertarget="${menuId}" aria-controls="${menuId}" aria-haspopup="listbox" aria-expanded="false" aria-label="${esc(t('ui.synergySources'))}" title="${esc(cardText(card).name+' — '+cardText(card).ability)}"><span class="synergy-source-label">${esc(cardText(card).name)} — ${esc(cardText(card).ability)}</span><span class="filter-arrow" aria-hidden="true">▾</span></button><div class="synergy-source-menu" id="${menuId}" popover="auto" role="listbox" aria-label="${esc(t('ui.synergySources'))}">${group.sources.map(source=>`<button class="synergy-source-option" type="button" role="option" data-synergy-source="${source.index}" aria-selected="${source===card}" tabindex="${source===card?0:-1}"><strong>${esc(cardText(source).name)}</strong> — ${esc(cardText(source).ability)}</button>`).join('')}</div>`:'';
  return `<article class="synergy-row" data-synergy="${card.index}" data-synergy-group="${group.key}">
    <div class="synergy-source">${sourceSelector}<div class="synergy-source-card database-list">${cardHTML(card)}</div></div>
    <div class="synergy-group"><ul class="synergy-partners" tabindex="0" aria-label="${esc(t('ui.synergyPartners',{name:cardText(card).name}))}">${partners.map(partner=>`<li><button class="synergy-partner" data-open="${partner.index}" title="${esc(cardText(partner).ability)}" aria-label="${esc(cardText(partner).name)}"><span class="synergy-art"><img src="${imagePath(partner)}" alt="" loading="lazy" decoding="async" width="${CARD_ART.width}" height="${CARD_ART.height}"><span class="orb cost" title="${t('ui.cost')}">${partner.energy_cost}</span><span class="orb chakra" title="${t('ui.baseChakra')}">${partner.chakra}</span></span><strong>${esc(cardText(partner).name)}</strong><span class="synergy-ability">${esc(cardText(partner).ability)}</span></button></li>`).join('')}</ul></div>
  </article>`;
}
const synergyLoader=new IntersectionObserver(entries=>{
  if (mode==='synergies' && !$('synergies-more').hidden && entries.some(entry=>entry.isIntersecting)) appendSynergies();
},{rootMargin:'350px 0px'});
$('load-more-synergies').onclick=appendSynergies;
$('synergies-card-list').addEventListener('click',event=>{
  const option=event.target.closest('[data-synergy-source]');
  if (!option) return;
  const card=byIndex.get(Number(option.dataset.synergySource)),row=option.closest('.synergy-row'),menu=option.closest('.synergy-source-menu'),button=row.querySelector('[data-synergy-source-toggle]');
  synergySourceSelections.set(Number(row.dataset.synergyGroup),card.index);
  row.dataset.synergy=card.index;
  const label=cardText(card).name+' — '+cardText(card).ability;
  button.querySelector('.synergy-source-label').textContent=label;button.title=label;
  for (const item of menu.children) {
    const selected=item===option;
    item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;
  }
  row.querySelector('.synergy-source-card').innerHTML=cardHTML(card);
  row.querySelector('.synergy-partners').setAttribute('aria-label',t('ui.synergyPartners',{name:cardText(card).name}));
  menu.hidePopover();button.focus({preventScroll:true});
});
$('synergies-card-list').addEventListener('beforetoggle',event=>{
  if (event.target.matches('.synergy-source-menu') && event.newState==='open') positionSynergySourceMenu(event.target);
},true);
$('synergies-card-list').addEventListener('toggle',event=>{
  const menu=event.target;
  if (!menu.matches('.synergy-source-menu')) return;
  const open=event.newState==='open';
  menu.closest('.synergy-source').querySelector('[data-synergy-source-toggle]').setAttribute('aria-expanded',String(open));
  if (open) menu.querySelector('[aria-selected=true]').focus({preventScroll:true});
},true);
$('synergies-card-list').addEventListener('keydown',event=>{
  const toggle=event.target.closest('[data-synergy-source-toggle]'),menu=event.target.closest('.synergy-source-menu');
  if (toggle && ['ArrowDown','ArrowUp'].includes(event.key)) { event.preventDefault();$(toggle.getAttribute('aria-controls')).showPopover();return; }
  if (!menu) return;
  const options=[...menu.children],index=options.indexOf(document.activeElement);
  let next;
  if (event.key==='ArrowDown') next=(index+1)%options.length;
  else if (event.key==='ArrowUp') next=(index+options.length-1)%options.length;
  else if (event.key==='Home') next=0;
  else if (event.key==='End') next=options.length-1;
  else if (event.key==='Tab') { menu.hidePopover();return; }
  else if (event.key==='Escape') { menu.hidePopover();menu.closest('.synergy-source').querySelector('[data-synergy-source-toggle]').focus({preventScroll:true});return; }
  else return;
  event.preventDefault();options[next].focus({preventScroll:true});
});
function positionSynergySourceMenu(menu) {
  const button=menu.closest('.synergy-source').querySelector('[data-synergy-source-toggle]'),probe=createMenuProbe(menu);
  const width=Math.min(Math.max(button.getBoundingClientRect().width,Math.ceil(probe.getBoundingClientRect().width)),innerWidth-20);
  probe.remove();positionPopover(button,menu,width);
}
function measureSynergySourceHeights(rows) {
  const container=document.createElement('div'),measurements=[];
  container.style.cssText='position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none;';
  for (const row of rows) {
    const group=synergyResultByKey.get(Number(row.dataset.synergyGroup)),width=row.querySelector('.game-card').getBoundingClientRect().width,cached=synergySourceHeightCache.get(group);
    if (cached && cached.width===width && cached.language===language) continue;
    const probes=group.sources.map(card=>{
      const probe=document.createElement('div'),info=row.querySelector('.card-info').cloneNode(true),text=cardText(card);
      probe.className='synergy-source';probe.style.width=width+'px';
      info.querySelector('.card-title').textContent=text.name;
      info.querySelector('.card-text > strong').textContent=text.ability;
      info.querySelector('.ability').innerHTML=formatDescription(card,1);
      probe.append(info);container.append(probe);return info;
    });
    measurements.push({group,width,probes,artHeight:row.querySelector('.card-main').getBoundingClientRect().height});
  }
  if (measurements.length) {
    document.body.append(container);
    for (const {group,width,probes,artHeight} of measurements) synergySourceHeightCache.set(group,{width,language,height:Math.ceil(artHeight+Math.max(...probes.map(info=>info.getBoundingClientRect().height)))});
    container.remove();
  }
}
let synergyLayoutFrame;
function scheduleSynergyLayout() {
  cancelAnimationFrame(synergyLayoutFrame);
  synergyLayoutFrame=requestAnimationFrame(()=>{
    if (mode!=='synergies') return;
    const rows=[...$('synergies-card-list').querySelectorAll('.synergy-row')];
    measureSynergySourceHeights(rows);
    // Measure before writing so each row keeps its natural content height.
    const sizes=rows.map(row=>{
      const items=row.querySelector('.synergy-partners').children;
      let firstTop,lastTop,bottom=0,rows=0;
      for (const item of items) {
        const top=item.offsetTop;
        if (top!==lastTop) { if (++rows>2) break;lastTop=top; }
        firstTop??=top;
        bottom=Math.max(bottom,top+item.offsetHeight);
      }
      const toggle=row.querySelector('.synergy-source-select');
      const sourceHeader=toggle?toggle.offsetHeight+parseFloat(getComputedStyle(row.querySelector('.synergy-source')).rowGap):0;
      const height=Math.ceil(bottom-(firstTop??0));
      const natural=synergySourceHeightCache.get(synergyResultByKey.get(Number(row.dataset.synergyGroup))).height;
      return [row,height,Math.max(natural,height-sourceHeader)];
    });
    for (const [row,height,sourceHeight] of sizes) {
      row.style.setProperty('--synergy-visible-height',height+'px');
      row.style.setProperty('--synergy-source-min-height',sourceHeight+'px');
    }
  });
}
// Deck previews and aggregate values.
function deckSlotsHTML(cards,showDetails=false,interactive=true) {
  return Array.from({length:10},(_,slot) => {
    const card=cards[slot];
    if (!card) return `<li class="deck-slot empty" aria-label="${t('ui.emptySlot',{slot:slot+1})}">${slot+1}</li>`;
    const name=cardText(card).name,level=deckLevel(card);
    if (!interactive) return `<li class="deck-slot"><span class="deck-open"><img src="${imagePath(card)}" alt="${esc(name)}"></span></li>`;
    return `<li class="deck-slot"><button class="deck-open" data-deck-open="${card.index}" title="${esc(t('ui.cardLevelTitle',{name,level,reference:cardReference(card)}))}"><img src="${imagePath(card)}" alt="${esc(name)}">${showDetails?`<span class="orb cost" title="${t('ui.cost')}">${card.energy_cost}</span><span class="orb chakra" title="${t('ui.baseChakra')}">${card.chakra}</span>`:''}</button>${showDetails?`<span class="slot-level">${t('ui.levelShort',{level})}</span>`:`<button class="remove" data-remove="${card.index}" aria-label="${esc(t('ui.removeNamedCard',{name}))}">×</button>`}</li>`;
  }).join('');
}
function deckAverages(cards,levelFor=deckLevel) {
  let cost=0,power=0,quality=0;
  for (const card of cards) {
    const result=computed(card,levelFor(card));
    // Costs use printed values; power and quality include effects.
    cost+=card.energy_cost;power+=result.value;quality+=result.quality;
  }
  const count=cards.length||1;
  return {cost:cost/count,power:power/count,quality:quality/count};
}
function renderDeck() {
  const field=deckOrder.sort==='chakra'?'chakra':'energy_cost',direction=deckOrder.direction==='desc'?-1:1;
  const cards = current.cards.map(i => byIndex.get(i)).sort((a,b)=>direction*(a[field]-b[field] || a.index-b.index)), n = cards.length;
  $('mobile-deck-count').textContent=n+'/10';
  $('auto-build').disabled=n===10;
  $('auto-build').title=t(n===10?'ui.autoFull':'ui.autoBuild');
  $('deck-sort').value=deckOrder.sort;
  setSortDirection($('deck-sort-direction'),deckOrder.direction);
  if (document.activeElement !== $('deck-name')) $('deck-name').value = current.name;
  $('deck-grid').innerHTML = deckSlotsHTML(cards);
  $('deck-dialog-grid').innerHTML = deckSlotsHTML(cards,true);
  const averages=deckAverages(cards);
  for (const prefix of ['', 'deck-dialog-']) {
    $(prefix+'avg-cost').textContent = n ? fmt(averages.cost) : '—';
    $(prefix+'avg-max').textContent = n ? fmt(averages.power) : '—';
    $(prefix+'avg-quality').textContent = n ? fmt(averages.quality) : '—';
  }
  const costs = cards.map(c => c.energy_cost);
  const counts = Array.from({length:9},(_,i) => costs.filter(cost => Math.min(cost,9) === i+1).length), peak = Math.max(1,...counts);
  const curveHTML=counts.map((num,i) => `<div class="bar-slot" title="${t('ui.curveBar',{cost:i+1,count:num})}"><span>${num || ''}</span><div class="bar" style="height:${num/peak*29}px"></div><small>${i+1}${i === 8 ? '+' : ''}</small></div>`).join('');
  $('curve').innerHTML=curveHTML;
  for (const button of document.querySelectorAll('[data-deck-action="clear"]')) button.disabled=n===0;
  renderDeckProposal();
}

// Collection import, bookmark synchronization and clipboard controls.
function renderCollectionUI() {
  if (collectionRestoreFailed) { collectionRestoreFailed=false;collectionStatus('collectionRestoreFailed',true); }
  const loaded=collectionCounts!==null,count=loaded?Object.keys(collectionCounts).length:0;
  $('collection-summary').textContent=t('ui.collectionSummary',{count,total:CARDS.length});
  $('collection-remove').disabled=!loaded;
  for (const check of document.querySelectorAll('[data-owned-only],#auto-owned-only')) {
    check.disabled=!loaded;
    if (!loaded) check.checked=false;
  }
  $('collection-bookmark').href=CARD_COLLECTION.bookmarklet({wrongSite:t('ui.collectionWrongSite'),signIn:t('ui.collectionSignIn'),failed:t('ui.collectionSyncFailed'),noConnection:t('ui.collectionSyncNoConnection')},location.protocol==='file:'?'file:':location.origin);
  $('collection-command').value=CARD_COLLECTION.url;
  renderCollectionCopyStatus();renderCollectionSyncStatus();
  if (collectionFeedback) collectionStatus(collectionFeedback.key,collectionFeedback.error,collectionFeedback.values);
}
function selectCollectionMethod(method) {
  collectionMethod=method;
  for (const key of ['sync','paste']) {
    const selected=key===method,tab=$('collection-tab-'+key),panel=$('collection-method-'+key);
    tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;
    panel.hidden=!selected;panel.inert=!selected;
  }
}
function renderCollectionSyncStatus() {
  const status=$('collection-sync-status');
  status.textContent=collectionSyncError?t('ui.'+collectionSyncError):'';
  status.classList.toggle('is-error',collectionSyncError!==null);
}
function setCollectionSyncStatus(key) {
  collectionSyncError=key;renderCollectionSyncStatus();
}
function stopCollectionSync() {
  clearTimeout(collectionSync?.timer);collectionSync=null;
}
function startCollectionSync() {
  stopCollectionSync();
  // Keep the opener relationship so the user's bookmark can return data to this exact window.
  const source=window.open(CARD_COLLECTION.officialOrigin+'/', '_blank');
  if (!source) { setCollectionSyncStatus('collectionSyncPopupBlocked');return; }
  const timer=setTimeout(()=>{stopCollectionSync();setCollectionSyncStatus('collectionSyncExpired');},600_000);
  collectionSync={source,timer,phase:'waiting',token:null};
  setCollectionSyncStatus(null);
}
function receiveCollectionSync(event) {
  const pending=collectionSync,data=event.data;
  if (!pending || event.origin!==CARD_COLLECTION.officialOrigin || event.source!==pending.source || !data || data.channel!==CARD_COLLECTION.syncChannel) return;
  if (data.type==='ready' && pending.phase==='waiting') {
    pending.token=Array.from(crypto.getRandomValues(new Uint8Array(16)),value=>value.toString(16).padStart(2,'0')).join('');
    pending.phase='fetching';setCollectionSyncStatus(null);
    event.source.postMessage({channel:CARD_COLLECTION.syncChannel,type:'request',token:pending.token},event.origin);return;
  }
  if (pending.phase!=='fetching' || data.token!==pending.token) return;
  if (data.type==='error') {
    pending.phase='waiting';pending.token=null;
    setCollectionSyncStatus(data.code==='signIn'?'collectionSignIn':'collectionSyncFailed');return;
  }
  if (data.type!=='result') return;
  let ok=false;
  try { importCollection(data.collection);ok=true; }
  catch { collectionStatus('collectionInvalid',true); }
  event.source.postMessage({channel:CARD_COLLECTION.syncChannel,type:'ack',token:pending.token,ok},event.origin);
  if (ok) {
    stopCollectionSync();setCollectionSyncStatus(null);
    setMode('collection');
  } else { pending.phase='waiting';pending.token=null;setCollectionSyncStatus('collectionSyncFailed'); }
}
function renderCollectionCopyStatus() {
  const status=$('collection-copy-status');
  status.textContent=collectionCopyState?t('ui.'+collectionCopyState):'';
  status.classList.toggle('is-error',collectionCopyState==='collectionCopyFailed');
  const bookmarkStatus=$('collection-bookmark-copy-status');
  bookmarkStatus.textContent=collectionBookmarkCopyState?t('ui.'+collectionBookmarkCopyState):'';
  bookmarkStatus.classList.toggle('is-error',collectionBookmarkCopyState==='collectionLinkCopyFailed');
}
async function copyCollectionText(value,input=null) {
  try { await navigator.clipboard.writeText(value);return true; } catch { /* Fall back when clipboard permissions are unavailable. */ }
  const previous=document.activeElement,temporary=!input;
  if (temporary) {
    input=document.createElement('textarea');input.value=value;
    input.style.cssText='position:fixed;left:-10000px;top:0;opacity:0';document.body.append(input);
  }
  input.focus({preventScroll:true});input.select();input.setSelectionRange(0,input.value.length);
  let copied=false;
  try { copied=document.execCommand('copy'); } catch { /* The address remains selectable for manual copying. */ }
  if (temporary) { input.remove();previous?.focus({preventScroll:true}); }
  return copied;
}
function collectionStatus(key=null,error=false,values={}) {
  collectionFeedback=key || values.ignored?{key,error,values}:null;
  const status=$('collection-status');
  status.textContent=key?t('ui.'+key,values):'';status.classList.toggle('is-error',error);
  if (values.ignored) status.textContent+=(status.textContent?' ':'')+t('ui.collectionIgnored',{count:values.ignored});
}
function refreshCollection() {
  // Selected cards retain their manual levels; other cards follow the latest collection.
  const selected=new Set(current.cards);
  for (const index of Object.keys(current.levels)) if (!selected.has(Number(index))) delete current.levels[index];
  renderCollectionUI();renderDeck();
  if (mode!=='collection') renderCatalog();
  if ($('card-dialog').open) renderDialog();
  if ($('auto-dialog').open) runAutoBuilder();
  scheduleSessionSave();
}
function importCollection(text) {
  const result=CARD_COLLECTION.parse(text);
  collectionCounts=result.counts;collectionRestoreFailed=false;
  let saved=true;try { CARD_COLLECTION.save(collectionCounts); } catch { saved=false; }
  $('collection-text').value='';refreshCollection();
  collectionStatus(saved?null:'collectionStorageUnavailable',!saved,{ignored:result.ignored});
}
function mountCollectionControls() {
  $('collection-open').onclick=startCollectionSync;
  $('collection-open-manual').onclick=()=>window.open(CARD_COLLECTION.officialOrigin+'/', '_blank','noopener');
  window.addEventListener('message',receiveCollectionSync);
  for (const method of ['sync','paste']) $('collection-tab-'+method).onclick=()=>selectCollectionMethod(method);
  document.querySelector('.collection-tabs').onkeydown=event=>{
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    selectCollectionMethod(event.key==='Home'?'sync':event.key==='End'?'paste':collectionMethod==='sync'?'paste':'sync');
    $('collection-tab-'+collectionMethod).focus();
  };
  for (const id of ['collection-copy','collection-copy-bookmark']) $(id).onclick=async event=>{
    const button=event.currentTarget,bookmark=id==='collection-copy-bookmark';button.disabled=true;
    const copied=await copyCollectionText(bookmark?$('collection-bookmark').getAttribute('href'):CARD_COLLECTION.url,bookmark?null:$('collection-command'));
    if (bookmark) collectionBookmarkCopyState=copied?'collectionLinkCopied':'collectionLinkCopyFailed';
    else collectionCopyState=copied?'collectionCopied':'collectionCopyFailed';
    renderCollectionCopyStatus();button.disabled=false;
  };
  $('collection-form').onsubmit=event=>{
    event.preventDefault();
    if (collectionMethod!=='paste') return;
    const button=$('collection-form').querySelector('[type=submit]');button.disabled=true;
    try {
      importCollection($('collection-text').value);stopCollectionSync();setCollectionSyncStatus(null);
    } catch { collectionStatus('collectionInvalid',true); }
    finally { button.disabled=false; }
  };
  $('collection-remove').onclick=()=>ask('ui.collectionRemoveConfirm',()=>{
    stopCollectionSync();setCollectionSyncStatus(null);
    collectionCounts=null;let saved=true;
    try { CARD_COLLECTION.save(null); } catch { saved=false; }
    refreshCollection();collectionStatus(saved?null:'collectionStorageUnavailable',!saved);
  });
  $('auto-owned-only').onchange=()=>{scheduleSessionSave();if ($('auto-dialog').open) runAutoBuilder();};
}
// Prebuilt decks and community proposals.
function deckPreviewHTML(indices,{levels={},locked=new Set(),showOwnership=false}={}) {
  return indices.map(index=>{
    const card=byIndex.get(index),text=cardText(card),level=levels[index]||1,missing=showOwnership && collectionCounts!==null && !ownsCard(card);
    return `<li><button class="deck-preview-card${locked.has(index)?' is-fixed':''}${missing?' is-missing':''}" data-preview-card="${index}" data-preview-level="${level}" type="button" title="${esc(text.ability+(missing?' · '+t('ui.collectionMissingCard'):''))}" aria-label="${esc(t('ui.openCard',{name:text.name,reference:cardReference(card)})+(missing?' · '+t('ui.collectionMissingCard'):''))}"><span class="mini-art"><img src="${imagePath(card)}" alt="" width="${CARD_ART.width}" height="${CARD_ART.height}" loading="lazy" decoding="async"><span class="orb cost">${card.energy_cost}</span><span class="orb chakra">${card.chakra}</span></span><strong>${esc(text.name)}</strong></button></li>`;
  }).join('');
}
function renderPresetLibrary() {
  const query=$('library-search').value.trim().toLocaleLowerCase(),words=query.split(/\s+/).filter(Boolean),selectedMode=$('library-mode').value;
  const ownedOnly=$('decks-owned-only').checked;
  const decks=PREBUILT_DECKS.filter(deck=>{
    if (ownedOnly && !deck.cards.every(key=>!!collectionCounts?.[key])) return false;
    if (selectedMode!=='all' && deck.mode!==selectedMode) return false;
    if (!words.length) return true;
    const text=(t('ui.preset_'+deck.id)+' '+deck.cards.map(key=>{const card=cardByKey.get(key),text=cardText(card);return cardReference(card)+' '+text.name+' '+text.ability+' '+text.descriptions.join(' ');}).join(' ')).toLocaleLowerCase();
    return words.every(word=>text.includes(word));
  });
  $('preset-list').innerHTML=decks.length?decks.map(deck=>`<article class="preset"><div class="preset-head"><h3>${t('ui.presetNumber',{number:fmt(Number(deck.id),0)})}</h3><span class="mode-label">${t(deck.mode==='boss'?'ui.bossDecks':'ui.standardDecks')}</span><button class="primary" data-load-preset="${deck.id}" type="button">${t('ui.useDeck')}</button></div><ol class="preset-cards">${deckPreviewHTML(deck.cards.map(key=>cardByKey.get(key).index),{showOwnership:true})}</ol><p class="preset-description">${formatTerms(t('ui.preset_'+deck.id))}</p></article>`).join(''):`<p class="empty-results">${t('ui.libraryEmpty')}</p>`;
  updateFilterCount('decks');
}
function renderDeckProposal() {
  $('proposal-deck-cards').innerHTML=deckSlotsHTML(current.cards.map(index=>byIndex.get(index)),false,false);
  updateDeckProposalValidation();
}
function updateDeckProposalValidation() {
  const count=current.cards.length;
  $('proposal-deck-incomplete').hidden=!deckProposalAttempted || count===0 || count===10;
  $('send-deck-proposal').disabled=count===0 || proposalSending;
}
function openDeckProposal() {
  setMode('decks');selectToolbarPanel('decks','proposal');
  if (mobileViewport.matches) openMobileTools('proposal');
}
async function sendProposal(event) {
  event.preventDefault();
  if (proposalSending) return;
  const isDeck=event.currentTarget.id==='deck-proposal-panel';
  if (isDeck) {
    deckProposalAttempted=true;updateDeckProposalValidation();
    if (current.cards.length!==10) return;
  }
  const input=$(isDeck?'deck-proposal-description':'synergy-proposal-description');
  if (!isDeck && !input.value.trim()) {input.setCustomValidity(t('ui.proposalDescriptionRequired'));input.reportValidity();return;}
  if (input.value.length>2000) return;
  const form=event.currentTarget,button=form.querySelector('[type=submit]'),status=form.querySelector('[role=status]');
  const draft=input.value.trim(),description=draft||(isDeck?t('ui.proposalNoDescription'):''),payload={type:isDeck?'deck':'synergy',description,language};
  if (isDeck) payload.deck={name:current.name.trim()||t('ui.defaultDeckName'),cards:current.cards.map(index=>byIndex.get(index).card_key)};
  proposalSending=true;button.disabled=true;form.setAttribute('aria-busy','true');
  status.classList.remove('is-error');
  status.dataset.i18n='ui.proposalSending';status.textContent=t(status.dataset.i18n);
  try {
    const response=await fetch('/api/proposals',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(15000)});
    const result=await response.json();
    if (!response.ok || result.ok!==true) throw Error(result.error||'send_failed');
    if (input.value.trim()===draft) input.value='';
    if (isDeck) {
      deckProposalAttempted=false;updateDeckProposalValidation();
    }
    scheduleSessionSave();delete status.dataset.i18n;status.textContent='';
    const key=isDeck?'ui.deckProposalFeedback':'ui.synergyProposalFeedback';
    $('proposal-feedback-message').dataset.i18n=key;
    $('proposal-feedback-message').textContent=t(key);
    $('proposal-feedback-dialog').showModal();
  } catch {
    status.dataset.i18n='ui.proposalFailed';status.textContent=t('ui.proposalFailed');status.classList.add('is-error');
  } finally {
    proposalSending=false;form.removeAttribute('aria-busy');
    button.disabled=isDeck && current.cards.length===0;
  }
}
function loadPreset(id) {
  const deck=presetById.get(id);
  if (!deck) return;
  const apply=()=>{
    const scenario={...current.scenario};
    current=emptyDeck();current.scenario=scenario;
    current.cards=deck.cards.map(key=>cardByKey.get(key).index);
    current.levels=Object.fromEntries(current.cards.map(index=>[index,collectionLevel(byIndex.get(index))||1]));
    current.cardOptions=Object.fromEntries(current.cards.map(index=>[index,{...scenario}]));
    current.name=t('ui.presetNumber',{number:Number(id)}).slice(0,15);useDefaultDeckName=false;
    setMode('builder');syncScenario();changed();selectToolbarPanel('builder','deck');
    if (mobileViewport.matches) openMobileTools('deck');
    toast(t('ui.presetLoaded'));
  };
  if (current.cards.length) ask('ui.replaceDeck',apply);else apply();
}
// Auto-builder proposals retain the user's selected cards and assumptions.
function autoDeckSnapshot() {
  return JSON.stringify({cards:current.cards,levels:current.levels,cardOptions:current.cardOptions,scenario:current.scenario,ownedOnly:$('auto-owned-only').checked,collection:collectionCounts});
}
function proposalMetrics(indices) {
  const averages=deckAverages(indices.map(index=>byIndex.get(index)),card=>autoLevels[card.index]);
  return `<div class="proposal-metrics">${[['averageCost',averages.cost],['averagePower',averages.power],['averageQuality',averages.quality]].map(([key,value])=>`<div class="metric"><b>${fmt(value,1)}</b><span>${t('ui.'+key)}</span></div>`).join('')}</div>`;
}
function renderAutoResults() {
  const locked=new Set(current.cards);
  $('auto-results').innerHTML=autoProposals.map((proposal,index)=>`<article class="auto-proposal"><h3>${t('ui.autoProfile_'+proposal.profile)}</h3><p class="proposal-explanation">${t('ui.autoExplain_'+proposal.profile)}</p><ol class="preset-cards">${deckPreviewHTML(proposal.indices,{levels:autoLevels,locked})}</ol>${proposalMetrics(proposal.indices)}<button class="primary" data-use-proposal="${index}" type="button">${t('ui.autoApply')}</button></article>`).join('');
}
async function runAutoBuilder() {
  if (current.cards.length>=10) return;
  autoController?.abort();
  const controller=new AbortController();autoController=controller;
  autoSnapshot=autoDeckSnapshot();autoLevels=Object.fromEntries(CARDS.map(card=>[card.index,deckLevel(card)]));autoProposals=[];
  $('auto-status').dataset.i18n='ui.autoBusy';$('auto-status').textContent=t('ui.autoBusy');$('auto-results').innerHTML='';
  if (!$('auto-dialog').open) $('auto-dialog').showModal();
  try {
    const eligibleIndices=$('auto-owned-only').checked?CARDS.filter(ownsCard).map(card=>card.index):null;
    if (eligibleIndices && new Set([...eligibleIndices,...current.cards]).size<10) {
      $('auto-status').dataset.i18n='ui.autoNotEnoughOwned';$('auto-status').textContent=t('ui.autoNotEnoughOwned');return;
    }
    const proposals=await DECK_AUTOBUILDER.generate({selected:current.cards,estimateCard:card=>estimate(card,autoLevels[card.index],scenarioFor(card)),signal:controller.signal,eligibleIndices});
    if (controller.signal.aborted || autoSnapshot!==autoDeckSnapshot()) return;
    autoProposals=proposals;delete $('auto-status').dataset.i18n;$('auto-status').textContent='';
    if (!proposals.length) { $('auto-status').dataset.i18n='ui.autoNoResults';$('auto-status').textContent=t('ui.autoNoResults'); }
    renderAutoResults();
  } catch {
    if (controller.signal.aborted) return;
    $('auto-status').dataset.i18n='ui.autoFailed';$('auto-status').textContent=t('ui.autoFailed');
  }
}
function applyAutoProposal(index) {
  const proposal=autoProposals[index];
  if (!proposal || autoSnapshot!==autoDeckSnapshot()) {toast(t('ui.autoFailed'),true);return;}
  const locked=new Set(current.cards);
  if (proposal.indices.length!==10 || new Set(proposal.indices).size!==10 || !current.cards.every(index=>proposal.indices.includes(index))) return;
  for (const index of proposal.indices) if (!locked.has(index)) {
    current.levels[index]=autoLevels[index];
    current.cardOptions[index]={...(current.cardOptions[index]||current.scenario)};
  }
  current.cards=[...proposal.indices];$('auto-dialog').close();changed();toast(t('ui.autoApplied'));
}
function handleDeckPreview(event) {
  const button=event.target.closest('[data-preview-card]');
  if (button) openCard(Number(button.dataset.previewCard),Number(button.dataset.previewLevel),true);
}
// Deck editing, section navigation and responsive toolbars.
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
  if (next===mode) return;
  rememberCatalogScroll();
  closeMobileTools();
  closeFilterMenus();
  mode = next;
  syncSections();
  renderCatalog();
  if (mode==='builder') renderDeck();
  restoreCatalogScroll();
  scheduleBackToTop();
}
function syncSections() {
  document.body.dataset.mode=mode;
  for (const area of sectionIds) {
    const selected=area===mode;
    $(area+'-area').classList.toggle('hidden',!selected);
    $('tab-'+area).setAttribute('aria-selected',String(selected));
    $('tab-'+area).tabIndex=selected?0:-1;
  }
}
let backToTopFrame;
function updateBackToTop() {
  $('back-to-top').hidden=!mobileViewport.matches || window.scrollY<400;
}
function scheduleBackToTop() {
  cancelAnimationFrame(backToTopFrame);
  backToTopFrame=requestAnimationFrame(updateBackToTop);
}
$('back-to-top').onclick=()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});
function renderToolbar(area) {
  const state=toolbarState[area],toggle=$(area+'-toolbox-toggle');
  const desktop=matchMedia('(min-width:701px)').matches;
  const sidebarKey=state.open?'ui.collapseSidebar':'ui.expandSidebar';
  $(area+'-toolbox').querySelector('.toolbox-tabs').setAttribute('aria-orientation',desktop && !state.open?'vertical':'horizontal');
  toggle.setAttribute('aria-expanded',String(state.open));
  toggle.setAttribute('aria-label',t(desktop?sidebarKey:state.open?'ui.collapseToolbar':'ui.expandToolbar'));
  toggle.querySelector('.sidebar-toggle-label').textContent=t(sidebarKey);
  toggle.title=toggle.getAttribute('aria-label');
  $(area+'-toolbox').classList.toggle('is-collapsed',!state.open);
  $(area+'-toolbox-body').hidden=!state.open;
  $(area+'-toolbox-body').inert=!state.open;
  for (const panel of toolbarPanels[area]) {
    const selected=panel.key===state.active,tab=$(area+'-toolbox-tab-'+panel.key);
    tab.setAttribute('aria-selected',String(selected));
    tab.tabIndex=selected?0:-1;
    tab.title=t('ui.'+panel.label);
    $(panel.id).hidden=!selected;
    $(panel.id).setAttribute('aria-hidden',String(!selected));
    $(panel.id).inert=!selected;
  }
  updateFilterCount(area);
  scheduleBackToTop();
}
function selectToolbarPanel(area,key) {
  closeFilterMenus();
  toolbarState[area]={active:key,open:true};
  renderToolbar(area);
  if (mobileToolsArea) {$('mobile-tools-host').scrollTop=0;syncMobileToolsLabels();}
  if (area==='decks' && key==='proposal') renderDeckProposal();
  scheduleSessionSave();
}
function mountToolbars() {
  for (const [area,panels] of Object.entries(toolbarPanels)) {
    const header=document.createElement('div');
    header.className='toolbox-header';
    const shortLabels={filters:'quickFilters',assumptions:'quickAssumptions',deck:'quickDeck',proposal:area==='decks'?'proposeDeck':'proposeSynergy'};
    header.innerHTML=`<button class="toolbox-toggle" id="${area}-toolbox-toggle" type="button" aria-controls="${area}-toolbox-body"><span class="toolbox-toggle-icon" aria-hidden="true"><span class="toolbox-chevron"></span></span><span class="sidebar-toggle-label"></span></button><div class="toolbox-tabs" role="tablist" data-i18n-aria-label="ui.toolbarModes">${panels.map(panel=>`<button class="toolbox-tab" id="${area}-toolbox-tab-${panel.key}" type="button" role="tab" aria-controls="${panel.id}" data-panel="${panel.key}"><svg class="toolbox-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${toolbarIcons[panel.key]}</svg><span class="toolbox-label" data-i18n="ui.${shortLabels[panel.key]}"></span>${panel.key==='filters'?'<span class="filter-count" hidden></span>':''}</button>`).join('')}</div>`;
    $(area+'-toolbox').prepend(header);
    for (const panel of panels) $(panel.id).setAttribute('aria-labelledby',area+'-toolbox-tab-'+panel.key);
    $(area+'-toolbox-toggle').onclick=()=>{
      closeFilterMenus();
      toolbarState[area].open=!toolbarState[area].open;
      renderToolbar(area);
      scheduleSessionSave();
    };
    const tabs=header.querySelector('.toolbox-tabs');
    const desktop=matchMedia('(min-width:701px)');
    tabs.onclick=event=>{
      const tab=event.target.closest('[data-panel]');
      if (tab) selectToolbarPanel(area,tab.dataset.panel);
    };
    tabs.onkeydown=event=>{
      const index=panels.findIndex(panel=>panel.key===toolbarState[area].active);
      let next;
      if (event.key==='ArrowRight' || desktop.matches && event.key==='ArrowDown') next=(index+1)%panels.length;
      else if (event.key==='ArrowLeft' || desktop.matches && event.key==='ArrowUp') next=(index+panels.length-1)%panels.length;
      else if (event.key==='Home') next=0;
      else if (event.key==='End') next=panels.length-1;
      else return;
      event.preventDefault();
      selectToolbarPanel(area,panels[next].key);
      $(area+'-toolbox-tab-'+panels[next].key).focus();
    };
  }
}
// The mobile sheet hosts the actual controls, so filters and deck settings have one source of truth.
function mountMobileNavigation() {
  for (const area of toolbarAreas) {
    const bar=document.createElement('div');
    bar.className='mobile-browse-bar';bar.id=area+'-browse-bar';
    bar.innerHTML=`<div class="mobile-search-host"></div><button class="mobile-filter-button" type="button" aria-haspopup="dialog" aria-controls="mobile-tools-dialog"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">${toolbarIcons.filters}</svg><span data-i18n="ui.quickFilters"></span><span class="filter-count" id="${area}-quick-filter-count" hidden></span></button>`;
    bar.querySelector('button').onclick=()=>openMobileTools('filters');
    if (toolbarPanels[area].some(panel=>panel.key==='assumptions')) {
      const button=document.createElement('button');button.className='mobile-assumptions-button';button.type='button';button.dataset.i18n='ui.quickAssumptions';
      button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls','mobile-tools-dialog');button.dataset.i18nAriaLabel='ui.assumptions';
      button.onclick=()=>openMobileTools('assumptions');bar.append(button);
    }
    if (toolbarPanels[area].some(panel=>panel.key==='proposal')) {
      const button=document.createElement('button');button.className='mobile-propose-button';button.type='button';button.dataset.i18n='ui.propose';
      button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-controls','mobile-tools-dialog');
      button.onclick=()=>{if (area==='decks') renderDeckProposal();openMobileTools('proposal');};
      bar.append(button);
    }
    $(area+'-area').prepend(bar);
  }
  $('mobile-deck-button').onclick=()=>openMobileTools('deck');
  $('mobile-tools-close').onclick=closeMobileTools;
  $('mobile-tools-done').onclick=closeMobileTools;
  $('mobile-tools-dialog').addEventListener('close',()=>{if (!$('mobile-tools-dialog').open) restoreMobileToolbox();});
  mobileViewport.addEventListener('change',()=>{
    closeMobileTools();syncMobileSearch();
    for (const area of toolbarAreas) renderToolbar(area);
    restoreCatalogScroll();scheduleViewportUpdate();
  });
  syncMobileSearch();
}
function mountMobileTapActivation() {
  const selector='button,[data-open],[data-deck-open]';
  let gesture=null,handled=null;
  const action=target=>target instanceof Element?target.closest(selector):null;
  const key=target=>target.id || ['toggle','open','deckOpen'].filter(name=>name in target.dataset).map(name=>name+':'+target.dataset[name]).join('|');
  const stopScroll=target=>{
    for (let element=target; element; element=element.parentElement) {
      if (/(auto|scroll)/.test(getComputedStyle(element).overflowY)) element.scrollTo({left:element.scrollLeft,top:element.scrollTop,behavior:'instant'});
    }
    window.scrollTo({left:window.scrollX,top:window.scrollY,behavior:'instant'});
  };
  document.addEventListener('touchstart',event=>{
    gesture=null;handled=null;
    if (!mobileViewport.matches || event.touches.length!==1 || performance.now()-lastMobileScrollAt>200) return;
    const target=action(event.target);
    if (!target || target.matches(':disabled')) return;
    const touch=event.touches[0];
    gesture={target,id:touch.identifier,x:touch.clientX,y:touch.clientY,time:performance.now(),moved:false};
    stopScroll(target);
  },{capture:true,passive:true});
  document.addEventListener('touchmove',event=>{
    if (!gesture) return;
    const touch=Array.from(event.touches).find(touch=>touch.identifier===gesture.id);
    if (!touch || Math.hypot(touch.clientX-gesture.x,touch.clientY-gesture.y)>8) gesture.moved=true;
  },{capture:true,passive:true});
  document.addEventListener('touchcancel',()=>{gesture=null;},{capture:true,passive:true});
  document.addEventListener('touchend',event=>{
    const tap=gesture;gesture=null;
    if (!tap || tap.moved || event.touches.length || performance.now()-tap.time>400 || !tap.target.isConnected) return;
    const touch=Array.from(event.changedTouches).find(touch=>touch.identifier===tap.id);
    if (!touch || Math.hypot(touch.clientX-tap.x,touch.clientY-tap.y)>8 || !tap.target.contains(document.elementFromPoint(touch.clientX,touch.clientY))) return;
    // A tap that stops momentum must also activate its target; drags retain native scrolling.
    if (event.cancelable) event.preventDefault();
    handled={target:tap.target,key:key(tap.target),time:performance.now()};
    tap.target.click();
  },{capture:true,passive:false});
  document.addEventListener('click',event=>{
    if (!event.isTrusted || !event.detail || (event.pointerType && event.pointerType!=='touch') || !handled || performance.now()-handled.time>450) return;
    const target=action(event.target);
    // Some browsers still send a compatibility click after the touch was handled.
    if (target && (target===handled.target || (handled.key && key(target)===handled.key))) {
      event.preventDefault();event.stopImmediatePropagation();handled=null;
    }
  },true);
}
function syncMobileSearch() {
  for (const area of toolbarAreas) {
    const input=$(area==='decks'?'library-search':area+'-f-text'),field=input.closest('.text-search');
    const host=mobileViewport.matches?$(area+'-browse-bar').querySelector('.mobile-search-host'):$(area+'-filter-host').querySelector('.filter-fields');
    if (field.parentElement!==host) host.prepend(field);
    input.dataset.i18nPlaceholder=area==='decks'?'ui.librarySearch':mobileViewport.matches?'ui.searchCards':'ui.searchPlaceholder';
    input.placeholder=t(input.dataset.i18nPlaceholder);
  }
}
function openMobileTools(kind) {
  if (!mobileViewport.matches || !toolbarPanels[mode]?.some(panel=>panel.key===kind)) return;
  closeFilterMenus();
  const dialog=$('mobile-tools-dialog');
  mobileToolsArea=mode;
  dialog.dataset.kind=kind;
  $('mobile-tools-host').append($(mode+'-toolbox'));
  toolbarState[mode]={active:kind,open:true};
  renderToolbar(mode);syncMobileToolsLabels();
  document.body.classList.add('mobile-tools-open');
  dialog.showModal();
  $('mobile-tools-close').focus({preventScroll:true});
  sizeFilterControls();
}
function syncMobileToolsLabels() {
  if (!mobileToolsArea) return;
  const active=toolbarPanels[mobileToolsArea].find(panel=>panel.key===toolbarState[mobileToolsArea].active),filters=active.key==='filters';
  $('mobile-tools-title').textContent=t('ui.'+(filters?'quickFilters':active.label));
  $('mobile-tools-done').dataset.i18n=filters?'ui.showResults':'ui.backToCards';
  $('mobile-tools-done').textContent=t($('mobile-tools-done').dataset.i18n);
}
function restoreMobileToolbox() {
  if (!mobileToolsArea) return;
  const area=mobileToolsArea;
  $(area+'-area').insertBefore($(area+'-toolbox'),$(area+'-area').querySelector('.workspace'));
  mobileToolsArea=null;
  document.body.classList.remove('mobile-tools-open');
  scheduleSessionSave();
}
function closeMobileTools() {
  closeFilterMenus();
  if ($('mobile-tools-dialog').open) $('mobile-tools-dialog').close();
  restoreMobileToolbox();
}
function rememberCatalogScroll() {
  if (scrollRestoreFrame!==null) return;
  catalogScroll[mode][mobileViewport.matches?'mobile':'desktop']=mobileViewport.matches?window.scrollY:$(mode+'-area').querySelector('.catalog').scrollTop;
}
function restoreCatalogScroll() {
  cancelAnimationFrame(scrollRestoreFrame);
  const area=mode,mobile=mobileViewport.matches,top=catalogScroll[area][mobile?'mobile':'desktop'];
  const restore=()=>{
    scrollRestoreFrame=null;
    if (area!==mode) return;
    if (area==='synergies' && synergyLoaded<synergyResults.length) {
      const catalog=$(area+'-area').querySelector('.catalog');
      const available=mobile?document.documentElement.scrollHeight-innerHeight:catalog.scrollHeight-catalog.clientHeight;
      if (top>available) { appendSynergies();scrollRestoreFrame=requestAnimationFrame(restore);return; }
    }
    if (mobile) window.scrollTo({top,behavior:'instant'});
    else $(area+'-area').querySelector('.catalog').scrollTop=top;
  };
  scrollRestoreFrame=requestAnimationFrame(restore);
}
// Card details and per-card calculation settings.
function openCard(index,level,readOnly=false) {
  dialogCard = byIndex.get(index); dialogLevel = level || levelOf(dialogCard);dialogReadOnly=readOnly;
  renderDialog(); $('card-dialog').showModal();
}
function calculationHTML(c,level,result=estimate(c,level)) {
  const ledger=[['baseChakra',c.chakra],['summonedChakra',result.summoned],['chakraBoosts',result.boosts],['friendlyDamage',-result.friendly],['enemyDamage',result.damage],['burn',result.burn],['heal',result.heal]];
  return `<div class="calculation-summary"><h4>${t('ui.powerComposition')}</h4><div class="ledger">${result.cost!==c.energy_cost?`<div class="ledger-row"><span>${formatTerms(t('ui.cost'))}</span><b>${fmt(result.cost)}</b></div>`:''}${ledger.filter((row,index)=>row[1]!==0||index===0).map(([key,value])=>`<div class="ledger-row ${value<0?'negative':''}"><span>${formatTerms(t('ui.'+key))}</span><b>${fmt(value)}</b></div>`).join('')}</div></div>
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
  return Object.keys(settingIds).filter(key => used.has(key));
}
function renderDialog() {
  const c = dialogCard, level = dialogLevel, build = mode === 'builder' && !dialogReadOnly;
  const scenario = build ? scenarioFor(c) : null, keys = build ? relevantSettings(c,level) : [];
  const text=cardText(c);
  $('dialog-title').innerHTML=`<span class="dialog-index">${cardReference(c)}</span> ${esc(text.name)}`;
  $('card-dialog').classList.toggle('compact',keys.length===0);
  const result=build?computed(c,level):null,selected=current.cards.includes(c.index);
  $('dialog-body').innerHTML=`<div class="dialog-layout"><div class="dialog-art-column"><div class="dialog-visual"><img class="dialog-art" src="${imagePath(c)}" alt="${esc(text.name)}"><span class="orb cost" title="${t('ui.cost')}">${c.energy_cost}</span><span class="orb chakra" title="${t('ui.baseChakra')}">${c.chakra}</span>${build?`<span class="card-level">${t('ui.levelShort',{level})}</span>`:''}</div></div>
    <div class="dialog-content"><div class="dialog-effect"><div class="ability-heading"><h3 class="ability-title">${esc(text.ability)}</h3><div class="tags">${c.skill_types_original.map(key=>`<span class="tag">${effectHTML(effectLabel(key),key)}</span>`).join('')}</div></div><p class="ability">${formatDescription(c,level)}</p></div>
    <div class="dialog-toolbar${build?'':' read-only'}"><button class="toolbar-cell level-cell" id="dialog-level" type="button" title="${t('ui.changeLevelTitle',{level:level===1?2:1})}" role="switch" aria-checked="${level===2}" aria-label="${t('ui.changeLevelAction',{level,next:level===1?2:1})}"><span>${t('ui.changeLevel')}</span><span class="level-value"><b>${level}</b>${LEVEL_CYCLE_ICON}</span></button>${build?`<div class="dialog-stats" aria-label="${t('ui.powerQuality')}"><div class="toolbar-cell"><span>${t('ui.power')}</span><b id="dialog-max">${fmt(result.value)}</b></div><div class="toolbar-cell"><span>${t('ui.quality')}</span><b id="dialog-quality">${fmt(result.quality)}</b></div></div><button class="${selected?'strong-danger':'primary'}" id="dialog-add" ${!selected&&current.cards.length>=10?'disabled':''}>${t(selected?'ui.removeFromDeck':'ui.addToDeck')}</button>`:''}</div></div>
    ${build?`<div class="dialog-workbench${keys.length?'':' calculation-only'}">${keys.length?`<section class="local-options"><div class="section-head"><h4>${t('ui.localAssumptions')}</h4><button class="small" id="reset-local">${t('ui.useStandard')}</button></div><p class="inline-note">${t('ui.localChanges')}</p><div class="local-grid">${keys.map(key=>`<div class="parameter"><label for="local-${key}">${formatTerms(t('ui.'+key))}</label><input id="local-${key}" data-local="${key}" type="text" inputmode="numeric" pattern="[0-9]*" data-integer min="0" max="99" required step="1" value="${scenario[key]}"></div>`).join('')}</div></section>`:''}<section id="dialog-calculation">${calculationHTML(c,level,result)}</section></div>`:''}</div>`;
  $('dialog-level').onclick = () => {
    dialogLevel = level===1 ? 2 : 1;
    if (build) { current.levels[c.index] = dialogLevel;changed(); }
    renderDialog(); $('dialog-level').focus();
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

// Deck file serialization and validation.
function serializeDeck() {
  return {format:'naruto-deck',name:current.name,
    cards:current.cards.map(index => ({index,level:deckLevel(byIndex.get(index))})),
    scenario:{...current.scenario},
    cardOptions:Object.fromEntries(current.cards.map(index => [index,scenarioFor(byIndex.get(index))]))
  };
}
function exportDeck() {
  const data=serializeDeck();
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
// Filter menus and responsive control measurements.
function createFilterDefinitions() {
  const labels=keys=>keys.map(([value,key])=>({value,label:t('ui.'+key)}));
  return {
    'f-rarity':{label:t('ui.rarity'),all:t('ui.allFeminine'),options:labels([['Common','common'],['Rare','rare'],['Epic','epic'],['Legendary','legendary']])},
    'f-season':{label:t('ui.season'),all:t('ui.allFeminine'),options:labels([['1','first'],['2','second'],['3','third']])},
    'f-skill':{label:t('ui.skillType'),all:t('ui.all'),options:[{value:'none',label:t('ui.none')},...Array.from(new Set(CARDS.flatMap(card=>card.skill_types_original))).sort((a,b)=>effectLabel(a).localeCompare(effectLabel(b),TRANSLATIONS[language].locale)).map(key=>({value:key,label:effectLabel(key),html:effectHTML(effectLabel(key),key)}))]},
    ...Object.fromEntries([['f-cost','cost','energy_cost'],['f-chakra','chakra','chakra']].map(([id,key,field])=>[id,{label:t('ui.'+key),all:t('ui.all'),options:Array.from(new Set(CARDS.map(card=>card[field]))).sort((a,b)=>a-b).map(value=>({value:String(value),label:String(value)}))}]))
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
function createMenuProbe(menu) {
  const probe=menu.cloneNode(true);
  probe.removeAttribute('id');probe.removeAttribute('popover');
  probe.style.cssText='position:fixed;left:-10000px;top:0;display:block;visibility:hidden;width:max-content;max-width:none;max-height:none;';
  document.body.append(probe);
  return probe;
}
function measureFilterMenu(menu) {
  // Reserve the full title, action, labels and scrollbar before the menu opens.
  const probe=createMenuProbe(menu);
  const action=probe.querySelector('[data-filter-clear]').getBoundingClientRect().width;
  probe.style.setProperty('--filter-action-width',action+'px');
  menu.style.setProperty('--filter-action-width',action+'px');
  const style=getComputedStyle(probe),border=parseFloat(style.borderLeftWidth)+parseFloat(style.borderRightWidth),padding=parseFloat(style.paddingLeft)+parseFloat(style.paddingRight);
  const gutter=probe.offsetWidth-probe.clientWidth-border;
  const content=Math.max(...[...probe.children].map(row=>{
    const rowStyle=getComputedStyle(row);
    return row.firstElementChild.getBoundingClientRect().width+action+parseFloat(rowStyle.columnGap)+parseFloat(rowStyle.paddingLeft)+parseFloat(rowStyle.paddingRight);
  }));
  probe.remove();
  return Math.ceil(content+padding+border+gutter+1);
}
function positionPopover(button,menu,width) {
  const r=button.getBoundingClientRect();
  const below = innerHeight-r.bottom-10, above = r.top-10, upward = below < 160 && above > below;
  menu.style.width = width+'px';
  menu.style.left = Math.max(10,Math.min(r.left,innerWidth-width-10))+'px';
  menu.style.top = upward ? 'auto' : r.bottom+4+'px';
  menu.style.bottom = upward ? innerHeight-r.top+4+'px' : 'auto';
  menu.style.maxHeight = Math.min(320,Math.max(80,upward ? above : below))+'px';
}
function positionFilterMenu(button,menu) {
  positionPopover(button,menu,Math.min(button.getBoundingClientRect().width,innerWidth-20));
}
function closeFilterMenus() {
  for (const menu of document.querySelectorAll('.filter-menu:popover-open')) menu.hidePopover();
}
function mountMultiFilter(area,id,config) {
  const button = $(area+'-'+id), menu = $(area+'-'+id+'-menu');
  button.dataset.filterKey=id;
  button.setAttribute('popovertarget',menu.id);
  button.setAttribute('aria-controls',menu.id);
  const selected=new Set(Array.from(menu.querySelectorAll('input:checked'),input=>input.value));
  menu.innerHTML = `<div class="filter-menu-head"><strong>${formatTerms(config.label)}</strong><button type="button" data-filter-clear>${config.all}</button></div>`+config.options.map(option => `<label class="filter-option-row"><span>${option.html || esc(option.label)}</span><input class="filter-option" type="checkbox" value="${esc(option.value)}" aria-label="${esc(option.label)}" ${selected.has(option.value)?'checked':''}></label>`).join('');
  menu.onbeforetoggle=event=>{if(event.newState==='open')positionFilterMenu(button,menu);};
  menu.ontoggle=event=>button.setAttribute('aria-expanded',String(event.newState==='open'));
  menu.onchange=()=>{updateMultiFilter(button,config);menu.hidePopover();renderCatalog();};
  menu.querySelector('[data-filter-clear]').onclick = () => {
    for (const input of menu.querySelectorAll('input')) input.checked = false;
    updateMultiFilter(button,config); renderCatalog();
  };
  updateMultiFilter(button,config);
}
function repositionMenus() {
  if ($('language-menu').matches(':popover-open')) positionLanguageMenu();
  for (const menu of document.querySelectorAll('.filter-menu:popover-open')) positionFilterMenu($(menu.id.replace(/-menu$/,'')),menu);
  for (const menu of document.querySelectorAll('.synergy-source-menu:popover-open')) positionSynergySourceMenu(menu);
}
function refreshViewportLayout() {
  sizeHeaderControls();sizeFilterControls();sizeAssumptionBoxes();
  repositionMenus();scheduleSynergyLayout();updateBackToTop();
}
function scheduleViewportUpdate() {
  if (viewportUpdateFrame!==null) return;
  viewportUpdateFrame=requestAnimationFrame(()=>{viewportUpdateFrame=null;refreshViewportLayout();});
}
function scheduleScrollUpdate() {
  if (mobileViewport.matches) lastMobileScrollAt=performance.now();
  scheduleSessionSave();
  if (scrollUpdateFrame!==null) return;
  scrollUpdateFrame=requestAnimationFrame(()=>{scrollUpdateFrame=null;repositionMenus();updateBackToTop();});
}

function sizeHeaderControls() {
  const context=document.createElement('canvas').getContext('2d');
  const measure=(text,style)=>{
    context.font=`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    return context.measureText(text).width+Math.max(0,text.length-1)*(parseFloat(style.letterSpacing)||0);
  };
  const frame=style=>['paddingLeft','paddingRight','borderLeftWidth','borderRightWidth'].reduce((sum,key)=>sum+(parseFloat(style[key])||0),0);
  for (const [area,key] of Object.entries(sections)) {
    const button=$('tab-'+area),style=getComputedStyle(button);
    const label=innerWidth<=1250?shortSectionLabels[area]:key;
    const icon=button.querySelector('.nav-icon').getBoundingClientRect().width;
    button.style.setProperty('--tab-width',Math.ceil(Math.max(...Object.values(TRANSLATIONS).map(catalog=>measure(catalog.ui[label],style)))+frame(style)+icon+8)+'px');
  }
  const button=$('language-select'),style=getComputedStyle(button),arrow=$('language-select').querySelector('.language-arrow');
  const names=Math.max(...Object.values(TRANSLATIONS).map(catalog=>measure(catalog.name,style)));
  const spacing=2*(parseFloat(style.columnGap)||0)+(parseFloat(getComputedStyle(arrow).marginLeft)||0);
  button.style.width=innerWidth<=1000?'auto':Math.ceil(names+$('language-flag').getBoundingClientRect().width+arrow.getBoundingClientRect().width+spacing+frame(style)+1)+'px';
  const title=document.querySelector('.brand h1');
  title.style.fontSize='';
  const titleStyle=getComputedStyle(title),fontSize=parseFloat(titleStyle.fontSize);
  const titleWidth=measure(title.textContent,titleStyle),available=title.parentElement.clientWidth;
  if (titleWidth>available) title.style.fontSize=Math.max(12,fontSize*available/titleWidth)+'px';
}
function sizeFilterControls() {
  // Reserve enough room for every possible selection count in the active language.
  const context=document.createElement('canvas').getContext('2d');
  for (const button of document.querySelectorAll('[data-multi-filter]')) {
    const config=filterDefinitions[button.dataset.filterKey];
    const style=getComputedStyle(button),arrow=getComputedStyle(button.querySelector('.filter-arrow'));
    context.font=`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    let textWidth=0;
    for (let count=2;count<=config.options.length;count++) textWidth=Math.max(textWidth,context.measureText(t('ui.selectedCount',{count})).width);
    context.font=`${arrow.fontWeight} ${arrow.fontSize} ${arrow.fontFamily}`;
    const arrowWidth=context.measureText('▾').width;
    const spacing=['paddingLeft','paddingRight','borderLeftWidth','borderRightWidth','columnGap'].reduce((sum,key)=>sum+(parseFloat(style[key])||0),0);
    const menu=$(button.getAttribute('aria-controls')),width=Math.min(innerWidth-20,Math.max(measureFilterMenu(menu),Math.ceil(textWidth+arrowWidth+spacing+2)));
    const field=button.closest('.field');
    field.style.width=width+'px';field.style.minWidth=width+'px';
    menu.style.width=width+'px';
  }
  for (const select of document.querySelectorAll('.filters-panel select,#deck-sort')) {
    const probe=select.cloneNode(true);
    probe.removeAttribute('id'); probe.removeAttribute('class');
    Object.assign(probe.style,{position:'fixed',left:'-9999px',visibility:'hidden',width:'auto',maxWidth:'none',fieldSizing:'fixed',font:getComputedStyle(select).font,fontWeight:'400'});
    document.body.append(probe);
    select.style.width = Math.ceil(probe.getBoundingClientRect().width)+10+'px';
    probe.remove();
  }
}
function sizeAssumptionBoxes() {
  const probe=document.createElement('div');
  probe.className='parameter';
  Object.assign(probe.style,{position:'fixed',left:'-9999px',visibility:'hidden',display:'block',width:'max-content'});
  for (const key of Object.keys(settingIds)) {
    const label=document.createElement('label');
    label.innerHTML=formatTerms(t('ui.'+key));
    Object.assign(label.style,{display:'block',width:'max-content'});
    probe.append(label);
  }
  document.body.append(probe);
  const longest=probe.getBoundingClientRect().width;
  const labelStyle=getComputedStyle(document.querySelector('.scenario-fields .parameter label'));
  const padding=(parseFloat(labelStyle.paddingLeft)||0)+(parseFloat(labelStyle.paddingRight)||0);
  document.documentElement.style.setProperty('--assumption-box-width',(longest+padding)+'px');
  probe.remove();
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
  if (collectionCounts!==null) for (const card of CARDS) if (!selected.has(card.index) && ownsCard(card)) current.levels[card.index]=level;
  setFilterLevel($('builder-f-level'),level);
}
function setSortDirection(button,direction) {
  const descending=direction==='desc';
  button.dataset.direction=descending?'desc':'asc';
  button.textContent=descending?'↓':'↑';
  button.title=t(descending?'ui.descending':'ui.ascending');
  button.setAttribute('aria-label',t(descending?'ui.descendingAction':'ui.ascendingAction'));
}
function mountFilters(area) {
  const fragment = $('filters-template').content.cloneNode(true);
  if (area!=='builder') fragment.querySelectorAll('.builder-only').forEach(el => el.remove());
  if (area==='synergies') fragment.querySelector('.level-field').remove();
  for (const el of fragment.querySelectorAll('[id]')) el.id = area+'-'+el.id;
  for (const el of fragment.querySelectorAll('label[for]')) el.htmlFor = area+'-'+el.htmlFor;
  $(area+'-filter-host').append(fragment);
  translateStatic($(area+'-filter-host'));
  if ($(area+'-f-level')) setFilterLevel($(area+'-f-level'),1);
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
    const button = $(area+'-sort-direction');
    setSortDirection(button,button.dataset.direction==='desc'?'asc':'desc');
    renderCatalog();
  };
  $(area+'-reset').onclick = () => {
    for (const id of filterIds) {
      const el = $(area+'-'+id); if (!el) continue;
      if (el.matches('[data-level-toggle]')) { if (area === 'builder') applyBuilderLevel(1); else setFilterLevel(el,1); }
      else el.value = '';
    }
    $(area+'-sort').value = 'index';
    setSortDirection($(area+'-sort-direction'),'asc');
    for (const [id,config] of Object.entries(filterDefinitions)) {
      for (const input of $(area+'-'+id+'-menu').querySelectorAll('input')) input.checked = false;
      updateMultiFilter($(area+'-'+id),config);
    }
    $(area+'-owned-only').checked=false;
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
  if (mode!=='collection') renderCollectionUI();
  filterDefinitions=createFilterDefinitions();
  for (const area of filterAreas) {
    for (const [id,config] of Object.entries(filterDefinitions)) mountMultiFilter(area,id,config);
    if ($(area+'-f-level')) setFilterLevel($(area+'-f-level'),Number($(area+'-f-level').value));
    const button=$(area+'-sort-direction');
    setSortDirection(button,button.dataset.direction);
  }
  syncLanguageControl();
  syncMobileSearch();syncMobileToolsLabels();
  for (const area of toolbarAreas) renderToolbar(area);
  sizeHeaderControls();sizeFilterControls();sizeAssumptionBoxes();renderDeck();renderCatalog();
  if ($('card-dialog').open) renderDialog();
  if ($('auto-dialog').open) renderAutoResults();
  if (confirmMessageKey) $('confirm-text').textContent=t(confirmMessageKey);
}
function setLanguage(code) {
  if (!Object.hasOwn(TRANSLATIONS,code)) return false;
  if ($('language-menu').matches(':popover-open')) $('language-menu').hidePopover();
  closeFilterMenus();language=code;
  if (useDefaultDeckName) current.name=t('ui.defaultDeckName');
  clearTimeout(toastTimer);$('toast').classList.add('hidden');
  applyLanguage();return true;
}

// Store data, not rendered HTML. Session storage is scoped to this origin and tab.
function captureFilters(area) {
  return {
    text:$(area+'-f-text').value,
    ownedOnly:$(area+'-owned-only').checked,
    ...($(area+'-f-level')?{level:Number($(area+'-f-level').value)}:{}),
    minimumPower:$(area+'-f-estimate')?.value ?? '',
    sort:$(area+'-sort').value,
    direction:$(area+'-sort-direction').dataset.direction,
    selected:Object.fromEntries(Object.keys(filterDefinitions).map(id => [id,
      Array.from($(area+'-'+id+'-menu').querySelectorAll('input:checked'),input => input.value)]))
  };
}
function restoreFilters(area,filter = {}) {
  $(area+'-f-text').value = typeof filter.text === 'string' ? filter.text : '';
  $(area+'-owned-only').checked=collectionCounts!==null && filter.ownedOnly===true;
  if ($(area+'-f-level')) setFilterLevel($(area+'-f-level'),filter.level === 2 ? 2 : 1);
  const minimum = $(area+'-f-estimate');
  if (minimum) minimum.value = typeof filter.minimumPower === 'string' && /^\d{0,3}$/.test(filter.minimumPower) ? filter.minimumPower : '';
  const sort = $(area+'-sort');
  sort.value = Array.from(sort.options).some(option => option.value === filter.sort) ? filter.sort : 'index';
  setSortDirection($(area+'-sort-direction'),filter.direction);
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
    rememberCatalogScroll();
    const text = JSON.stringify({
      language,mode,useDefaultDeckName,defaults,deck:current,
      toolbars:toolbarState,deckOrder,scroll:catalogScroll,autoOwnedOnly:$('auto-owned-only').checked,
      filters:Object.fromEntries(filterAreas.map(area=>[area,captureFilters(area)])),
      library:{query:$('library-search').value,mode:$('library-mode').value,ownedOnly:$('decks-owned-only').checked},
      proposalDrafts:{deck:$('deck-proposal-description').value,synergy:$('synergy-proposal-description').value},
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
    if (!saved || !Object.hasOwn(TRANSLATIONS,saved.language) || !sectionIds.includes(saved.mode) || typeof saved.useDefaultDeckName !== 'boolean') throw Error('Invalid session');
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
    for (const area of filterAreas) restoreFilters(area,saved.filters?.[area] || {});
    if (typeof saved.library?.query==='string') $('library-search').value=saved.library.query;
    if (['standard','boss','all'].includes(saved.library?.mode)) $('library-mode').value=saved.library.mode;
    $('decks-owned-only').checked=collectionCounts!==null && saved.library?.ownedOnly===true;
    $('auto-owned-only').checked=collectionCounts!==null && saved.autoOwnedOnly===true;
    for (const [key,id] of [['deck','deck-proposal-description'],['synergy','synergy-proposal-description']]) if (typeof saved.proposalDrafts?.[key]==='string') $(id).value=saved.proposalDrafts[key].slice(0,2000);
    for (const area of sectionIds) for (const viewport of ['mobile','desktop']) {
      const top=saved.scroll?.[area]?.[viewport];
      if (Number.isFinite(top) && top>=0) catalogScroll[area][viewport]=top;
    }
    return saved;
  } catch {
    try { sessionStorage.removeItem(SESSION_KEY); } catch { /* The app also works without browser storage. */ }
    return {warning:'ui.sessionInvalid'};
  }
}
// Mount controls before restoring their saved values.
mountLanguageMenu();

mountToolbars();
for (const area of filterAreas) mountFilters(area);
mountCollectionControls();
mountMobileNavigation();
mountMobileTapActivation();
for (const id of Object.values(settingIds)) $(id).addEventListener('input',() => {
  setStandardStatus('ui.standardPending');
});
$('apply-standard').onclick = applyWrittenStandard;
for (const area of sectionIds) $('tab-'+area).onclick = () => setMode(area);
document.querySelector('.tabs').onkeydown = event => {
  const index=sectionIds.indexOf(mode);
  let next;
  if (event.key==='ArrowRight') next=(index+1)%sectionIds.length;
  else if (event.key==='ArrowLeft') next=(index+sectionIds.length-1)%sectionIds.length;
  else if (event.key==='Home') next=0;
  else if (event.key==='End') next=sectionIds.length-1;
  else return;
  event.preventDefault();setMode(sectionIds[next]);$('tab-'+mode).focus();
};
for (const id of ['deck-grid','deck-dialog-grid']) $(id).onclick = event => {
  const remove = event.target.closest('[data-remove]'), open = event.target.closest('[data-deck-open]');
  if (remove) removeCard(Number(remove.dataset.remove));
  else if (open) { const c = byIndex.get(Number(open.dataset.deckOpen)); openCard(c.index,deckLevel(c)); }
};
$('view-deck').onclick = () => { renderDeck(); $('deck-dialog').showModal(); };
$('auto-build').onclick=runAutoBuilder;
$('close-auto').onclick=()=>$('auto-dialog').close();
$('auto-dialog').addEventListener('close',()=>{autoController?.abort();autoController=null;});
$('auto-results').onclick=event=>{
  const button=event.target.closest('[data-use-proposal]');
  if (button) applyAutoProposal(Number(button.dataset.useProposal));else handleDeckPreview(event);
};
$('preset-list').onclick=event=>{
  const button=event.target.closest('[data-load-preset]');
  if (button) loadPreset(button.dataset.loadPreset);else handleDeckPreview(event);
};
$('library-search').oninput=()=>{renderPresetLibrary();scheduleSessionSave();};
$('library-mode').onchange=()=>{renderPresetLibrary();scheduleSessionSave();};
$('decks-owned-only').onchange=()=>{renderPresetLibrary();scheduleSessionSave();};
$('reset-library-filters').onclick=()=>{$('library-search').value='';$('library-mode').value='all';$('decks-owned-only').checked=false;renderPresetLibrary();scheduleSessionSave();};
$('propose-deck').onclick=openDeckProposal;
for (const id of ['deck-proposal-panel','synergy-proposal-panel']) $(id).onsubmit=sendProposal;
for (const id of ['deck-proposal-description','synergy-proposal-description']) $(id).oninput=()=>$(id).setCustomValidity('');
$('close-proposal-feedback').onclick=()=>$('proposal-feedback-dialog').close();
$('deck-sort').onchange = () => { deckOrder.sort=$('deck-sort').value;renderDeck();scheduleSessionSave(); };
$('deck-sort-direction').onclick = () => { deckOrder.direction=deckOrder.direction==='asc'?'desc':'asc';renderDeck();scheduleSessionSave(); };
$('close-deck-dialog').onclick = () => $('deck-dialog').close();
$('deck-name').oninput = () => {
  const input = $('deck-name');
  useDefaultDeckName=false;
  current.name = input.value.slice(0,15);
  if (input.value !== current.name) input.value = current.name;
};
const deckActions={
  export:exportDeck,
  import:()=>$('import-file').click(),
  clear:()=>ask('ui.confirmClear',()=>{current.cards=[];current.levels={};changed();})
};
for (const button of document.querySelectorAll('[data-deck-action]')) button.onclick=deckActions[button.dataset.deckAction];
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
$('close-dialog').onclick = () => $('card-dialog').close();
$('calculation-info-button').onclick = () => $('calculation-info-dialog').showModal();
$('close-calculation-info').onclick = () => $('calculation-info-dialog').close();
for (const button of document.querySelectorAll('[data-deck-info]')) button.onclick = () => $('deck-info-dialog').showModal();
$('close-deck-info').onclick = () => $('deck-info-dialog').close();
$('confirm-no').onclick = () => { confirmAction = null; $('confirm-dialog').close(); };
$('confirm-yes').onclick = () => { const action = confirmAction; confirmAction = null; $('confirm-dialog').close(); action?.(); };
$('confirm-dialog').oncancel = () => { confirmAction = null; };
for (const dialog of document.querySelectorAll('dialog')) {
  dialog.setAttribute('closedby','any');
  let startedInside = false;
  const outside = event => { const r = dialog.getBoundingClientRect(); return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom; };
  dialog.addEventListener('pointerdown',event => { startedInside = !outside(event); });
  dialog.addEventListener('pointercancel',() => { startedInside = false; });
  dialog.addEventListener('click',event => { if (!startedInside && event.target === dialog && outside(event)) dialog.close(); startedInside = false; });
}

// Restore session state, then start responsive layout and persistence.
const restoredSession = restoreSession();
if (['cost','chakra'].includes(restoredSession.deckOrder?.sort) && ['asc','desc'].includes(restoredSession.deckOrder?.direction)) Object.assign(deckOrder,restoredSession.deckOrder);
for (const [area,panels] of Object.entries(toolbarPanels)) {
  const saved=restoredSession.toolbars?.[area];
  if (saved && panels.some(panel=>panel.key===saved.active) && typeof saved.open==='boolean') toolbarState[area]={active:saved.active,open:saved.open};
}
syncSections();syncScenario();applyLanguage();
let synergyListWidth;
new ResizeObserver(([entry])=>{
  const width=entry.contentRect.width;
  if (width!==synergyListWidth) { synergyListWidth=width;scheduleSynergyLayout(); }
}).observe($('synergies-card-list'));
window.addEventListener('resize',scheduleViewportUpdate,{passive:true});
window.addEventListener('scroll',scheduleScrollUpdate,{capture:true,passive:true});
window.addEventListener('pageshow',scheduleScrollUpdate);
document.fonts.ready.then(()=>{synergySourceHeightCache=new WeakMap();refreshViewportLayout();});
for (const [key,id] of Object.entries(settingIds)) {
  const draft = restoredSession.standardDraft?.[key];
  if (typeof draft === 'string' && /^\d{0,3}$/.test(draft)) $(id).value = draft;
}
if (['ui.standardApplied','ui.standardPending'].includes(restoredSession.standardStatus)) setStandardStatus(restoredSession.standardStatus);
sessionReady = true;
document.addEventListener('input',scheduleSessionSave);
document.addEventListener('change',scheduleSessionSave);
window.addEventListener('pagehide',saveSession);
document.addEventListener('visibilitychange',() => { if (document.visibilityState === 'hidden') saveSession(); });
restoreCatalogScroll();
requestAnimationFrame(saveSession);
if (restoredSession.warning) notifyStorageFailure(restoredSession.warning);
window.NarutoApp = {cards:CARDS,estimate,computed,deckLevel,defaults,exportDeck,parseDeck,getCurrent:() => structuredClone(current),setLanguage,getLanguage:()=>language};
