'use strict';

// Formula tokens are language-independent. Translation is applied only to explanations.
// E/A are configurable target groups; eN/aN cap an explicit maximum to available targets.
// N is the total number of repeated effect activations. Initial effects stay separate.
// Summons add Chakra without adding energy cost.
function estimate(card, level, options = scenarioFor(card), dependencies = null) {
  const scenario = cleanScenario(options);
  const numbers = card.effect_values[level - 1];
  const rule = RULES[card.card_key];
  let review = !!rule?.review;
  let note = getTranslation('ruleNotes.' + card.card_key) ? t('ruleNotes.' + card.card_key, scenario) : '';
  let expression = Array.isArray(rule?.expr) ? rule.expr[level - 1] : rule?.expr;
  let parts = [];

  if (!expression) {
    expression = '0';
    if (Object.values(numbers).some(values => values.length)) {
      review = true;
      note = t('calculation.unquantified');
    }
  }
  if (expression === 'auto' || expression === 'encounter') {
    const repeated = card.repeats[level - 1];
    const times = expression === 'encounter' && repeated ? 'N' : '1';
    if (expression === 'encounter') note = t(repeated ? 'calculation.repeated' : 'calculation.once', scenario);
    expression = ['C', 'W', 'H', 'B'].flatMap(key => numbers[key].map((_, index) =>
      `${key}${index}${key === 'W' ? '*e1' : ''}*${times}`
    )).join('+') || '0';
  }

  function product(term, negative = false) {
    let amount = 1, kind = 'damage', burnCount = null;
    const labels = [];
    const usesAllyDamage = negative && card.card_key !== 'S1_058' && /(?:^|\*)a(?:\d+)?(?:$|\*)|(?:^|\*)A(?:$|\*)/.test(term);
    const use = key => dependencies?.add(key);
    const label = (key, value) => labels.push(t('calculation.' + key, {value: fmt(value)}));

    for (const factor of term.split('*')) {
      const effect = /^([CWHBK])(\d+)$/.exec(factor);
      const target = /^([ea])(\d+)$/.exec(factor);
      const cap = /^min(\d+)$/.exec(factor);
      const drain = /^drain(\d+)$/.exec(factor);
      let value;
      if (effect) {
        const key = effect[1];
        value = numbers[key][Number(effect[2])];
        if (!Number.isFinite(value)) throw Error(t('errors.invalidRule', {id: card.card_key, level, factor}));
        kind = key === 'C' ? 'boost' : key === 'K' ? 'summon' : key === 'H' ? 'heal' : key === 'B' ? 'burn' : 'damage';
        if (key === 'B') { use('enemyChakra'); value = Math.min(value, scenario.enemyChakra); }
        if (key === 'W' && usesAllyDamage) { use('allyChakra'); value = Math.min(value, scenario.allyChakra); }
        labels.push(t('calculation.amount', {value: fmt(value), effect: t('calculation.effect' + key)}));
      } else if (factor === 'burnTotal') {
        use('enemyChakra');
        value = Math.min(numbers.B.reduce((sum, duration) => sum + duration, 0), scenario.enemyChakra);
        kind = 'burn'; label('burnTotal', value);
      } else if (factor === 'base') {
        value = card.chakra; kind = 'summon'; label('copy', value);
      } else if (factor === 'restoreBase') {
        value = Math.max(0, card.chakra - 1); kind = 'heal'; label('restore', value);
      } else if (factor === 'rushChakra') {
        value = Math.min(3, card.rush[level - 1]); kind = 'boost'; label('rush', value);
      } else if (factor === 'E') {
        use('enemies'); value = scenario.enemies; label('enemies', value);
      } else if (factor === 'otherE') {
        use('enemies'); value = Math.max(0, scenario.enemies - 1); label('otherEnemies', value);
      } else if (factor === 'A') {
        use('allies'); value = scenario.allies; label('allies', value);
      } else if (factor === 'N' || factor === 'first' || factor === 'remaining') {
        use('activations');
        value = factor === 'first' ? Number(scenario.activations > 0) : factor === 'remaining' ? Math.max(0,scenario.activations - 1) : scenario.activations;
        label(factor === 'N' ? 'activations' : factor,value);
      } else if (factor === 'Q') {
        use('enemyChakra'); value = scenario.enemyChakra; label('enemyChakra', value);
      } else if (factor === 'burnAll' || factor === 'burnOne') {
        if (factor === 'burnAll') use('enemies');
        value = factor === 'burnOne' ? 1 : scenario.enemies; burnCount = value; label('targets', value);
      } else if (target) {
        const key = target[1] === 'e' ? 'enemies' : 'allies';
        if (Number(target[2]) > 1) use(key);
        value = Math.min(Number(target[2]), scenario[key]); label(key, value);
      } else if (drain) {
        use('enemyChakra'); value = Math.min(Number(drain[1]), Math.max(0, scenario.enemyChakra - 1)); label('drain', value);
      } else if (cap) {
        use('enemyChakra'); value = Math.min(Number(cap[1]), scenario.enemyChakra); label('removable', value);
      } else if (/^\d+(?:\.\d+)?$/.test(factor)) {
        value = Number(factor);
        if (usesAllyDamage && labels.length === 0) { use('allyChakra'); value = Math.min(value, scenario.allyChakra); }
        labels.push(fmt(value));
      } else {
        throw Error(t('errors.invalidFactor', {factor}));
      }
      amount *= value;
    }
    return {value: amount, kind, label: labels.join(' × '), burnCount};
  }

  const branch = /^max\(([^|]+)\|([^|]+)\)$/.exec(expression);
  if (branch) {
    parts = [product(branch[1]), product(branch[2])].sort((a, b) => b.value - a.value).slice(0, 1);
    parts[0].label = t('calculation.bestBranch', {label: parts[0].label});
  } else {
    for (const match of expression.matchAll(/([+-]?)([^+-]+)/g)) {
      const part = product(match[2], match[1] === '-');
      if (match[1] === '-') { part.value = -part.value; part.kind = 'friendly'; }
      parts.push(part);
    }
  }

  const sum = kind => parts.filter(part => part.kind === kind).reduce((total, part) => total + part.value, 0);
  const boosts = sum('boost'), summoned = sum('summon'), friendly = -sum('friendly');
  const damage = sum('damage'), burn = sum('burn'), heal = sum('heal');
  const chakra = card.chakra + boosts + summoned - friendly;
  const value = chakra + damage + burn + heal;

  if (card.conditional[level - 1]) { review = true; if (!note) note = t('calculation.favourable'); }
  if (!rule && !note) note = t('calculation.tactical');
  if (card.card_key === 'S2_054') note = t('calculation.halving');
  if (card.card_key === 'S3_083' || numbers.B.length) note = t('calculation.burnNote');
  if (['S1_083', 'S2_040', 'S2_072', 'S2_080', 'S3_069'].includes(card.card_key)) note = t('calculation.allCards', scenario);
  if (card.card_key === 'S1_058') note = t('calculation.ebisu');
  if (/(?:^|[^\w])(?:N|first|remaining)(?:$|[^\w])/.test(expression)) note = '';
  return {value, quality: value / card.energy_cost, chakra, base: card.chakra, boosts, summoned, friendly,
    damage, burn, heal, parts: parts.filter(part => part.value !== 0), review, note, level, scenario};
}
