'use strict';

class ProgressiveList {
  constructor({host,render,batchSize=8}) {
    Object.assign(this,{host,render,batchSize});this.items=[];this.loaded=0;this.active=false;
    this.more=document.createElement('div');this.more.className='progressive-more';this.more.setAttribute('aria-hidden','true');host.after(this.more);
    this.observer=new IntersectionObserver(entries=>{if(this.active&&entries.some(entry=>entry.isIntersecting))this.append();},{rootMargin:'600px 0px'});
  }
  setItems(items){this.items=items;this.loaded=0;this.host.replaceChildren();this.append();}
  append(){
    const batch=this.items.slice(this.loaded,this.loaded+this.batchSize);
    this.host.insertAdjacentHTML('beforeend',batch.map(this.render).join(''));this.loaded+=batch.length;
    this.observer.disconnect();this.more.hidden=this.loaded>=this.items.length;
    if(this.active&&!this.more.hidden)this.observer.observe(this.more);
  }
  setActive(active){this.active=active;this.observer.disconnect();if(active&&!this.more.hidden)this.observer.observe(this.more);}
  ensureOffset(top){while(this.loaded<this.items.length&&this.host.getBoundingClientRect().height<top+innerHeight)this.append();}
}
