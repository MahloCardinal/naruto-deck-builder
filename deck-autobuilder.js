'use strict';

// Recommendations are heuristics, not simulated matches or predicted win rates.
const DECK_AUTOBUILDER = (() => {
  const byIndex=new Map(CARDS.map(card=>[card.index,card]));
  const byKey=new Map(CARDS.map(card=>[card.card_key,card.index]));
  const templates=PREBUILT_DECKS.filter(deck=>deck.mode==='standard').map(deck=>({
    id:deck.id,cards:deck.cards.map(key=>byKey.get(key)),core:deck.core.map(key=>byKey.get(key)),
    average:deck.cards.reduce((sum,key)=>sum+byIndex.get(byKey.get(key)).energy_cost,0)/10
  }));
  for (const deck of PREBUILT_DECKS) {
    if (deck.cards.length!==10 || new Set(deck.cards).size!==10 || deck.cards.some(key=>!byKey.has(key)) || deck.core.some(key=>!deck.cards.includes(key))) throw Error('Invalid prebuilt deck: '+deck.id);
  }
  const pairRules=new Map();
  const kindWeights={trigger:1,amplify:.9,extend:.65,convert:.75,summon:1.1,recover:.55,protect:.65,'named-support':1.05,'shared-plan':.4,mitigate:.55,tradeoff:-.35};
  for (const rule of SYNERGY_RULES) for (const enabler of rule.enablers) for (const beneficiary of rule.beneficiaries) {
    if (enabler===beneficiary) continue;
    const a=byKey.get(enabler),b=byKey.get(beneficiary),key=a<b?a+':'+b:b+':'+a;
    if (!pairRules.has(key)) pairRules.set(key,[]);
    pairRules.get(key).push({rule,enabler,beneficiary,requires:rule.requiresAny.map(key=>byKey.get(key))});
  }
  const profiles={balanced:[.4,.3,.2,.1],synergy:[.55,.2,.15,.1],reference:[.3,.5,.15,.05]};
  const clamp=value=>Math.max(0,Math.min(1,value));
  function pairValue(a,b,chosen) {
    const records=pairRules.get(a<b?a+':'+b:b+':'+a)||[];
    let best=0,penalty=0,kind=null;
    for (const entry of records) {
      const {rule,enabler,beneficiary}=entry;
      if (entry.requires.length && !entry.requires.some(index=>chosen.has(index))) continue;
      // Permanent Guard needs no extra charges. Immunity also blocks allied buffs.
      if (rule.id==='extra-guard-reactions' && beneficiary==='S2_093') continue;
      if (beneficiary==='S3_100' && ['amplify','extend','recover','named-support'].includes(rule.kind)) continue;
      let value=kindWeights[rule.kind]||.5;
      if (rule.kind==='tradeoff') { penalty=Math.min(penalty,value);continue; }
      value*=rule.strength==='strategic'?.45:rule.strength==='conditional'?.75:1;
      // Broad providers must not outrank every more specific interaction just by degree.
      value/=1+Math.log2(1+rule.beneficiaries.length)/6;
      if (rule.id==='training-focus-reactions' && ![...chosen].some(index=>index!==byKey.get(enabler)&&byIndex.get(index).chakra<=3)) value*=.3;
      if (value>best) {best=value;kind=rule.kind;}
    }
    return {value:best+penalty,kind:best>0?kind:null};
  }
  function ranks(values) {
    const sorted=[...values].sort((a,b)=>a[1]-b[1]||a[0]-b[0]);
    const result=new Map();
    for (let start=0;start<sorted.length;) {
      let end=start+1;while(end<sorted.length&&sorted[end][1]===sorted[start][1])end++;
      const rank=(start+end-1)/2/Math.max(1,sorted.length-1);
      for(let i=start;i<end;i++)result.set(sorted[i][0],rank);
      start=end;
    }
    return result;
  }
  async function generate({selected,estimateCard,signal}) {
    const locked=[...selected],lockedSet=new Set(locked);
    if (locked.length>10 || lockedSet.size!==locked.length || locked.some(index=>!byIndex.has(index))) throw Error('Invalid locked cards');
    if (locked.length===10) return [];
    const values=CARDS.map(card=>{const value=estimateCard(card);return [card.index,Number.isFinite(value.quality)?value.quality:0];});
    const qualityRank=ranks(values);
    const matched=templates.map(template=>{
      const overlap=locked.filter(index=>template.cards.includes(index)).length;
      const core=locked.filter(index=>template.core.includes(index)).length;
      return {...template,affinity:locked.length ? .4+.4*overlap/locked.length+.2*Math.min(1,core) : 1};
    }).sort((a,b)=>b.affinity-a.affinity||a.id.localeCompare(b.id));
    const targetAverage=matched.slice(0,4).reduce((sum,deck)=>sum+deck.average,0)/Math.min(4,matched.length);
    const cache=new Map();
    function components(indices) {
      const key=indices.join(',');
      if(cache.has(key))return cache.get(key);
      const chosen=new Set(indices),covered=new Set(),coveredLocked=new Set();
      let total=0,lockedValue=0,links=0;
      for(let i=0;i<indices.length;i++)for(let j=i+1;j<indices.length;j++){
        const pair=pairValue(indices[i],indices[j],chosen);total+=pair.value;
        if(pair.kind){
          links++;covered.add(indices[i]);covered.add(indices[j]);
          if(lockedSet.has(indices[i]))coveredLocked.add(indices[i]);
          if(lockedSet.has(indices[j]))coveredLocked.add(indices[j]);
        }
        if(lockedSet.has(indices[i])||lockedSet.has(indices[j]))lockedValue+=pair.value;
      }
      const count=indices.length,cards=indices.map(index=>byIndex.get(index));
      const globalSynergy=.65*(1-Math.exp(-Math.max(0,total)/(count*.55)))+.35*covered.size/count;
      const synergy=clamp(locked.length ? .5*globalSynergy+.35*coveredLocked.size/locked.length+.15*(1-Math.exp(-Math.max(0,lockedValue)/locked.length)) : globalSynergy);
      let reference=0,templateId=null,templateOverlap=0;
      for(const template of matched){
        const overlap=indices.filter(index=>template.cards.includes(index)).length;
        const core=template.core.filter(index=>chosen.has(index)).length/template.core.length;
        const value=(.75*overlap/count+.25*core)*template.affinity;
        if(value>reference){reference=value;templateId=template.id;templateOverlap=overlap;}
      }
      const average=cards.reduce((sum,card)=>sum+card.energy_cost,0)/count;
      const cheap=cards.filter(card=>card.energy_cost<=3).length/count;
      const expensive=cards.filter(card=>card.energy_cost>=6).length/count;
      const defense=cards.filter(card=>card.skill_types_original.some(type=>['Guard','Pin','Weaken','Push','Slow'].includes(type))).length/count;
      const pressure=cards.filter(card=>card.chakra>=5||card.skill_types_original.some(type=>['Rush','Summon'].includes(type))).length/count;
      const rotation=clamp(1-Math.abs(average-targetAverage)/2.5);
      const balance=.35*rotation+.25*clamp(cheap/.3)+.2*clamp(defense/.3)+.2*clamp(pressure/.2)-Math.max(0,expensive-.4);
      const quality=indices.reduce((sum,index)=>sum+qualityRank.get(index),0)/count;
      const result={synergy,reference,balance:clamp(balance),quality,links,templateId,templateOverlap};
      cache.set(key,result);return result;
    }
    const score=(indices,weights)=>{const c=components(indices);return c.synergy*weights[0]+c.reference*weights[1]+c.balance*weights[2]+c.quality*weights[3];};
    const initial=[...locked].sort((a,b)=>a-b),completed=[];
    for(const [profile,weights]of Object.entries(profiles)){
      if(signal?.aborted)return [];
      const candidates=CARDS.filter(card=>!lockedSet.has(card.index)).map(card=>({index:card.index,score:score([...initial,card.index].sort((a,b)=>a-b),weights)})).sort((a,b)=>b.score-a.score||a.index-b.index);
      const required=new Set(matched.slice(0,5).flatMap(template=>template.core).filter(index=>!lockedSet.has(index)));
      const pool=[...required,...candidates.filter(candidate=>!required.has(candidate.index)).slice(0,80-required.size).map(candidate=>candidate.index)];
      let beam=[{indices:initial,score:0}];
      for(let size=locked.length;size<10;size++){
        await new Promise(resolve=>setTimeout(resolve,0));
        if(signal?.aborted)return [];
        const next=new Map();
        for(const state of beam)for(const index of pool){
          if(state.indices.includes(index))continue;
          const indices=[...state.indices,index].sort((a,b)=>a-b),key=indices.join(',');
          if(!next.has(key))next.set(key,{indices,score:score(indices,weights)});
        }
        beam=[...next.values()].sort((a,b)=>b.score-a.score||a.indices.join(',').localeCompare(b.indices.join(','))).slice(0,20);
      }
      completed.push(...beam.map(state=>({...state,profile,...components(state.indices)})));
    }
    const results=[],seen=new Set();
    for(const profile of Object.keys(profiles)){
      const candidates=completed.filter(candidate=>candidate.profile===profile).sort((a,b)=>b.score-a.score);
      const chosen=candidates.find(candidate=>!seen.has(candidate.indices.join(','))&&results.every(other=>{
        const additions=candidate.indices.filter(index=>!lockedSet.has(index));
        return additions.filter(index=>other.indices.includes(index)).length/Math.max(1,additions.length)<.85;
      }))||candidates.find(candidate=>!seen.has(candidate.indices.join(',')));
      if(!chosen)continue;
      seen.add(chosen.indices.join(','));
      results.push({...chosen,indices:[...locked,...chosen.indices.filter(index=>!lockedSet.has(index))]});
    }
    return results;
  }
  return {generate};
})();
