import{a as h,S,i as m}from"./assets/vendor-f144e563.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();h.defaults.baseURL="https://pixabay.com/api/";const E="43833375-8d3f0c892462ae71a1cd36e3a",p=15,u=s=>{const e={q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:a};return h.get(`?key=${E}&`,{params:e})},f=s=>s.map(({webformatURL:e,largeImageURL:o,tags:n,likes:t,views:r,comments:l,downloads:v})=>`<div class="gallery-item">
    <div class="gallery-item-image">
      <a href="${o}">
        <img src="${e}" alt="${n}" />
      </a>
    </div>
    <div class="gallery-item-info">
      <ul class="gallery-item-info-items">
        <li class="gallery-item-info-item">
          <p class="title"><b>Likes</b></p>
          <p class="data">${t}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Views</b></p>
          <p class="data">${r}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Comments</b></p>
          <p class="data">${l}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Downloads</b></p>
          <p class="data">${v}</p>
        </li>
      </ul>
    </div>
    </div>`).join("");document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');const P=document.querySelector("#searchform"),c=document.querySelector(".gallery"),g=document.querySelector(".loader"),i=document.querySelector(".load-more");let y=new S(".gallery-item-image a"),L="",a=1,d=0;async function M(s){s.preventDefault();const e=s.target.elements.searchinput.value.trim();if(L=e,a=1,c.innerHTML="",g.classList.remove("is-hidden"),e===""){c.innerHTML="",s.target.reset(),m.error({title:"Error",message:"Sorry, input field can't be empty",position:"topRight"});return}const o=await u(e);console.log(o.data),d=Math.ceil(o.data.totalHits/p),console.log(d),o.data.hits.length===0&&(i.classList.add("is-hidden"),m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.innerHTML=f(o.data.hits),s.target.reset(),g.classList.add("is-hidden"),d>1&&i.classList.remove("is-hidden"),y.refresh(),a+=1}P.addEventListener("submit",M);const w=()=>{const s=document.querySelector(".gallery-item:last-child");console.log(s);const e=s.getBoundingClientRect().height;console.log(e);const o=e*2;window.scrollBy({top:o,behavior:"smooth"})};async function b(s){const e=await u(L);console.log(e.data),console.log(a),e.data.hits.length===0&&(i.classList.add("is-hidden"),m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.insertAdjacentHTML("beforeend",f(e.data.hits)),y.refresh(),a===d&&(i.classList.add("is-hidden"),i.removeEventListener("click",b),m.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),a+=1,w()}i.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
