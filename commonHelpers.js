import{a as g,S as v,i as d}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();g.defaults.baseURL="https://pixabay.com/api/";const S="43833375-8d3f0c892462ae71a1cd36e3a",p=15,u=r=>{const t={q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:l};return g.get(`?key=${S}&`,{params:t})},f=r=>r.map(({webformatURL:t,largeImageURL:i,tags:n,likes:e,views:s,comments:a,downloads:b})=>`<div class="gallery-item">
    <div class="gallery-item-image">
      <a href="${i}">
        <img src="${t}" alt="${n}" />
      </a>
    </div>
    <div class="gallery-item-info">
      <ul class="gallery-item-info-items">
        <li class="gallery-item-info-item">
          <p class="title"><b>Likes</b></p>
          <p class="data">${e}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Views</b></p>
          <p class="data">${s}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Comments</b></p>
          <p class="data">${a}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Downloads</b></p>
          <p class="data">${b}</p>
        </li>
      </ul>
    </div>
    </div>`).join("");document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');const E=document.querySelector("#searchform"),c=document.querySelector(".gallery"),m=document.querySelector(".loader"),o=document.querySelector(".load-more");let y=new v(".gallery-item-image a"),L="",l=1,h=0;async function P(r){r.preventDefault();const t=r.target.elements.searchinput.value.trim();if(L=t,l=1,c.innerHTML="",m.classList.remove("is-hidden"),t===""){c.innerHTML="",r.target.reset(),d.error({title:"Error",message:"Sorry, input field can't be empty",position:"topRight"}),m.classList.add("is-hidden");return}const i=await u(t);h=Math.ceil(i.data.totalHits/p),i.data.hits.length===0&&(o.classList.add("is-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.innerHTML=f(i.data.hits),r.target.reset(),m.classList.add("is-hidden"),h>1&&o.classList.remove("is-hidden"),y.refresh(),l+=1}E.addEventListener("submit",P);const M=()=>{const i=document.querySelector(".gallery-item:last-child").getBoundingClientRect().height*2;window.scrollBy({top:i,behavior:"smooth"})};async function w(r){const t=await u(L);t.data.hits.length===0&&(o.classList.add("is-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.insertAdjacentHTML("beforeend",f(t.data.hits)),y.refresh(),l===h&&(o.classList.add("is-hidden"),d.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),l+=1,M()}o.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
