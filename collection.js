'use strict';

// Keep only collection identifiers and quantities; account metadata is never stored.
const CARD_COLLECTION = (() => {
  const storageKey='naruto-ninja-cards.collection';
  const url='https://api.narutoninjacards.com/v1/collection/me';
  const syncChannel='naruto-collection-sync';
  const officialOrigin='https://app.narutoninjacards.com';
  const known=new Set(CARDS.map(card=>card.card_key));
  const maxBytes=2_000_000;
  function parse(text) {
    if (typeof text!=='string' || new Blob([text]).size>maxBytes) throw Error('collectionInvalid');
    let data;
    try { data=JSON.parse(text.replace(/^\uFEFF/,'')); } catch { throw Error('collectionInvalid'); }
    if (!data || !Array.isArray(data.seasons) || data.seasons.length>100) throw Error('collectionInvalid');
    const counts={},ignored=new Set();
    let entries=0,total=0;
    for (const season of data.seasons) {
      if (!season || !/^S\d{1,2}$/.test(season.id) || !Array.isArray(season.cards)) throw Error('collectionInvalid');
      entries+=season.cards.length;
      if (entries>10_000) throw Error('collectionInvalid');
      for (const card of season.cards) {
        if (!card || typeof card.id!=='string' || !/^S\d{1,2}_\d{3}$/.test(card.id) || card.id.split('_')[0]!==season.id || !Number.isSafeInteger(card.count) || card.count<0) throw Error('collectionInvalid');
        if (!card.count) continue;
        total+=card.count;
        if (!Number.isSafeInteger(total)) throw Error('collectionInvalid');
        if (!known.has(card.id)) { ignored.add(card.id);continue; }
        // Each card subtotal is bounded by the validated, nonnegative total.
        counts[card.id]=(counts[card.id]||0)+card.count;
      }
    }
    return {counts,ignored:ignored.size};
  }
  function restore() {
    const raw=localStorage.getItem(storageKey);
    if (raw===null) return null;
    const counts=JSON.parse(raw);
    if (!counts || Array.isArray(counts) || typeof counts!=='object' || Object.entries(counts).some(([key,count])=>!known.has(key) || !Number.isSafeInteger(count) || count<1)) throw Error('collectionInvalid');
    return counts;
  }
  function save(counts) {
    if (counts===null) localStorage.removeItem(storageKey);
    else localStorage.setItem(storageKey,JSON.stringify(counts));
  }
  function bookmarklet(messages,builderOrigin) {
    // This runs only when the user activates the bookmark on the official app.
    async function synchronize(messages,endpoint,channel,builderOrigin) {
      function showError(message) {
        document.getElementById('nnc-collection-feedback')?.dismiss?.();
        const notice=document.createElement('div');notice.id='nnc-collection-feedback';notice.setAttribute('role','alert');
        notice.textContent=String(message).trimEnd().replace(/[.]+$/,'');
        notice.style.cssText='all:initial;position:fixed;right:12px;bottom:12px;z-index:2147483647;box-sizing:border-box;max-width:calc(100vw - 24px);padding:12px 16px;border:1px solid #aa4942;border-radius:0;background:#fff;color:#aa4942;font:14px/1.4 system-ui,sans-serif;box-shadow:0 4px 16px #0002';
        const created=performance.now();
        const dismiss=()=>{if(performance.now()-created>=3000)notice.dismiss();};
        const timer=setTimeout(()=>notice.dismiss(),10000);
        notice.dismiss=()=>{clearTimeout(timer);document.removeEventListener('click',dismiss,true);notice.remove();};
        (document.body||document.documentElement).append(notice);document.addEventListener('click',dismiss,true);
      }
      if (location.origin!=='https://app.narutoninjacards.com') {
        const bookmark=document.getElementById('collection-bookmark');
        const onBuilder=builderOrigin==='file:'?location.protocol==='file:':location.origin===builderOrigin;
        if (onBuilder && typeof bookmark?.onclick==='function') bookmark.click();else showError(messages.wrongSite);
        return;
      }
      const builder=window.opener,fileBuilder=builderOrigin==='file:',targetOrigin=fileBuilder?'*':builderOrigin;
      if (!builder || builder.closed) { showError(messages.noConnection);return; }
      if (window.__narutoCollectionSyncRunning) return;
      window.__narutoCollectionSyncRunning=true;
      let token,errorCode='failed';
      function waitFor(type,expectedToken) {
        return new Promise((resolve,reject)=>{
          const timer=setTimeout(()=>{window.removeEventListener('message',receive);reject(Error(messages.noConnection));},12_000);
          function receive(event) {
            const data=event.data;
            const matchingOrigin=fileBuilder?['null','file://'].includes(event.origin):event.origin===builderOrigin;
            if (event.source!==builder || !matchingOrigin || !data || data.channel!==channel || data.type!==type || !/^[a-f0-9]{32}$/.test(data.token) || (expectedToken && data.token!==expectedToken)) return;
            clearTimeout(timer);window.removeEventListener('message',receive);resolve(data);
          }
          window.addEventListener('message',receive);
        });
      }
      try {
        const request=waitFor('request');builder.postMessage({channel,type:'ready'},targetOrigin);
        token=(await request).token;
        const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20_000);
        let response;
        try { response=await fetch(endpoint,{credentials:'include',cache:'no-store',signal:controller.signal}); }
        finally { clearTimeout(timer); }
        if (response.status===401) { errorCode='signIn';throw Error(messages.signIn); }
        if (!response.ok) throw Error(messages.failed);
        const data=await response.json();
        if (!Array.isArray(data.seasons)) throw Error(messages.failed);
        const collection={seasons:data.seasons.map(season=>({id:season.id,cards:season.cards.map(card=>({id:card.id,count:card.count}))}))};
        const confirmation=waitFor('ack',token);
        builder.postMessage({channel,type:'result',token,collection:JSON.stringify(collection)},targetOrigin);
        if (!(await confirmation).ok) throw Error(messages.failed);
        builder.focus();window.close();
      } catch(error) {
        if (token) builder.postMessage({channel,type:'error',token,code:errorCode},targetOrigin);
        showError([messages.noConnection,messages.signIn,messages.failed].includes(error.message)?error.message:messages.failed);
      } finally { delete window.__narutoCollectionSyncRunning; }
    }
    return 'javascript:'+encodeURIComponent(`void (${synchronize.toString()})(${JSON.stringify(messages)},${JSON.stringify(url)},${JSON.stringify(syncChannel)},${JSON.stringify(builderOrigin)})`);
  }
  return {parse,restore,save,bookmarklet,url,syncChannel,officialOrigin};
})();
