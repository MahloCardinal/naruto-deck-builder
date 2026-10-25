'use strict';

// Curated mechanical links. Lane, timing, target and resource conditions still apply.
// Heal is not Chakra gain. Rush conversion is not Rush extension.
// Card keys are expanded into a symmetric graph of stable internal indices.
const SYNERGIES = (() => {
  const keys=(season,numbers)=>numbers.map(n=>`S${season}_${String(n).padStart(3,'0')}`);
  const s1=numbers=>keys(1,numbers),s2=numbers=>keys(2,numbers),s3=numbers=>keys(3,numbers);
  const byKey=new Map(CARDS.map(card=>[card.card_key,card]));
  const graph=new Map();
  const join=(...groups)=>[...new Set(groups.flat())];
  const without=(group,...excluded)=>group.filter(key=>!excluded.includes(key));
  const withSkill=skill=>CARDS.filter(card=>card.skill_types_original.includes(skill)).map(card=>card.card_key);
  function connect(sources,partners) {
    for (const source of sources) for (const partner of partners) {
      if (!byKey.has(source)||!byKey.has(partner)) throw Error(`Unknown synergy card: ${source}/${partner}`);
      if (source===partner) continue;
      for (const [a,b] of [[source,partner],[partner,source]]) {
        const index=byKey.get(a).index;
        if (!graph.has(index)) graph.set(index,new Set());
        graph.get(index).add(byKey.get(b).index);
      }
    }
  }
  const rushUnits=join(s1([9,18,25,26,34,39,40,41,65,78,84]),s2([4,5,13,14,21,23,35,42,43,44,45,50,51,54,57,75,79,91]),s3([2,7,8,12,13,15,16,21,23,25,30,36,38,50,51,57,59,61,63,64,77,80,91,92]));
  const chakraReactors=join(s1([1,75]),s2([55,97]),s3([52,63]));
  const chakraSupport=join(s1([7,10,11,16,19,21,22,24,27,38,41,52,58,62,73]),s2([6,15,36,44,45,56,70,100]),s3([18,39,60]));
  const enemyPin=join(s1([14,28,36,44,48,49,53,55,57,61,65,75]),s2([2,17,25,26,62,65,87,96]),s3([4,9,22,40,54,64,67,71,72,86,89,95,96]));
  const focusUnits=join(s1([60]),s2([38,58,64,94,98,99]),s3([35,80,81,84,86,90,94,99]));
  // Remove providers, observers and anti-Guard text that only mentions the keyword.
  const guardUnits=without(withSkill('Guard'),...s1([70]),...s2([12,36,49,74]),...s3([19,33,39,92]));
  const enemyWeaken=without(withSkill('Weaken'),...s1([20,58,82]),...s2([48,81,86]),...s3([29,36,55,60]));
  const enemyPush=without(withSkill('Push'),...s1([27]),...s2([22,33]));
  const enemySlow=join(s1([12,43,59]),s2([8,72,80,82,88,97]),s3([17,22,31,55,68,69,71]));
  const enemySwitch=join(s1([12,49,84]),s2([24,25,59,82]),s3([46]));
  const allySwitch=join(s1([51,75]),s2([6,28,51,66,75,85,93]),s3([12,16,38,41,42,57,73,83,88,96]));
  const teleportBehind=join(s1([23,48,65]),s3([4,64,67,68]));
  const burnSources=join(s2([89,97]),s3([83,84,85]));

  // Explicit Chakra gains activate Chakra reactors; healing-only cards are excluded.
  connect(chakraReactors,chakraSupport);
  // Advanced Training only accepts low-Chakra allies and also supplies Focus triggers.
  connect(s3([10]),chakraReactors.filter(key=>byKey.get(key).chakra<=3));
  connect(s3([10]),join(s2([78]),s3([29,56])));
  // Rush extenders and converters use distinct sets. Kimimaro S3_100 is immune to allies.
  connect(join(s1([37,50]),s2([44])),rushUnits);
  // Choji needs Rush to remain active. Itachi's Chakra-locked clones are excluded.
  connect(s2([31]),without(rushUnits,'S2_057'));
  // Jirocho converts remaining Rush at Mid Range, up to the stated cap.
  connect(s3([39]),without(rushUnits,'S2_057'));
  connect(s2([31]),join(s1([37]),s2([44]),s3([42,48])));

  // Reactive effects: enemy Pin, teleport, Focus, Guard and lane changes.
  connect(s3([82,95]),enemyPin);
  connect(s2([96]),without(enemyPin,'S2_096'));
  connect(s3([53]),teleportBehind);
  connect(join(s2([78]),s3([56])),focusUnits);
  connect(s2([78]),join(s1([7,28,61]),s2([15,27,56]),s3([6,26,54,67,71])));
  connect(s3([98]),guardUnits);
  connect(join(s2([81]),s1([82])),enemyWeaken);
  // Gaara also counts weakening allies.
  connect(s2([81]),join(s1([20,58]),s2([86]),s3([29,36])));
  connect(s1([76]),enemyPush);
  connect(s2([82,85]),enemySwitch);
  connect(s2([90]),allySwitch);
  connect(s3([55]),without(enemyWeaken,'S3_100'));

  // Extra Guard provides more opportunities for these explicit Guard-triggered abilities.
  const guardReactors=join(s2([51,60,61]),s3([16,58,65,70,76,77,78,93,98]));
  connect(join(s2([36]),s3([39])),guardReactors);
  connect(s2([12]),s2([60]));
  // Burn powers Jiraiya during Focus and supplies Gamabunta's detonation.
  connect(s3([84,85,2]),burnSources);
  // Longer Focus helps periodic/control effects, not charge-up completion abilities.
  connect(s3([29]),join(s2([58,64]),s3([35,81,84,86,94])));
  // Permanent Slow also prolongs drain and Hiruzen's explicit Chakra ticks.
  connect(s3([87]),join(enemySlow,s3([18])));
  // Tayuya buffs summons, except Itachi's clones which cannot gain Chakra.
  connect(s3([99]),join(s1([3,33,56,60,63,71,77]),s2([16,29,32,38,86]),s3([27,28])));
  // Healing after self-damage is separate from Chakra-gain triggers.
  connect(s3([60,62]),join(s1([58]),s2([94]),s3([44,82,83,95])));

  // Named-card and clan relationships are explicitly scoped by the supporting card.
  const sasuke=join(s1([5,49,66,81]),s2([3,74,92]),s3([2,52,76,77,91]));
  const hiruzen=join(s1([50,73]),s2([70,89,97,98]),s3([18]));
  const gaara=join(s2([10,60,80,81,96]),s3([78,94]));
  const orochimaru=join(s2([67,84,85,86]),s3([11,12,59]));
  const tsunade=s3([13,14,15,60,61,62,97]);
  const rockLee=join(s2([5,6,53,75,94]),s3([80]));
  const shikamaru=join(s1([28]),s2([78]),s3([7,54]));
  const hyuga=join(s1([31,32]),s2([7,21,22,23,54,55,59,76,95]),s3([6]));
  const uchiha=join(sasuke,s3([19,33,43,50,56,82,83,95,96]));
  const akamaru=join(s1([34]),s3([55]));
  const kiba=join(s1([33]),s2([77]),s3([79]));
  const frogs=join(s1([76]),s2([32,33,73]),s3([35,63,85]));
  connect(join(s1([33]),s2([77])),akamaru);
  connect(s3([79]),join(akamaru,kiba));
  connect(join(s1([56]),s2([35])),hiruzen);
  connect(s1([63]),s1([11,51,52,72]));
  connect(s2([11,12,41]),gaara);
  connect(s2([23]),s2([22]));
  connect(s2([22]),hyuga);
  connect(s2([9]),rockLee);
  connect(s2([46,47,48,49]),orochimaru);
  connect(s2([86]),s2([68,69]));
  connect(s2([18]),s2([19,20,64,65]));
  connect(s2([19]),s2([18,20,63,65]));
  connect(s2([20]),s2([18,19,63,64]));
  connect(join(s2([32,33,73,83]),s3([35])),frogs);
  connect(s3([27]),tsunade);
  connect(s3([28]),join(s1([34,37,61]),s3([55])));
  connect(s3([19,43]),sasuke);
  connect(s3([33]),uchiha);
  connect(s3([49]),shikamaru);
  connect(s3([1,32,45]),s3([1,32,45]));

  return [...graph].sort(([a],[b])=>a-b).map(([index,partners])=>({index,partners:[...partners].sort((a,b)=>a-b)}));
})();
