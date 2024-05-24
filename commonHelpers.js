import{a as g,S,i as d}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();g.defaults.baseURL="https://pixabay.com/api/";const E="43833375-8d3f0c892462ae71a1cd36e3a",p=15,u=s=>{const t={q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:l};return g.get(`?key=${E}&`,{params:t})},f=s=>s.map(({webformatURL:t,largeImageURL:i,tags:n,likes:e,views:r,comments:o,downloads:v})=>`<div class="gallery-item">
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
          <p class="data">${r}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Comments</b></p>
          <p class="data">${o}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Downloads</b></p>
          <p class="data">${v}</p>
        </li>
      </ul>
    </div>
    </div>`).join("");document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');const P=document.querySelector("#searchform"),c=document.querySelector(".gallery"),h=document.querySelector(".loader"),a=document.querySelector(".load-more");let y=new S(".gallery-item-image a"),L="",l=1,m=0;async function M(s){s.preventDefault();const t=s.target.elements.searchinput.value.trim();if(L=t,l=1,c.innerHTML="",h.classList.remove("is-hidden"),t===""){c.innerHTML="",s.target.reset(),d.error({title:"Error",message:"Sorry, input field can't be empty",position:"topRight"});return}const i=await u(t);m=Math.ceil(i.data.totalHits/p),i.data.hits.length===0&&(a.classList.add("is-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.innerHTML=f(i.data.hits),s.target.reset(),h.classList.add("is-hidden"),m>1&&a.classList.remove("is-hidden"),y.refresh(),l+=1}P.addEventListener("submit",M);const w=()=>{const i=document.querySelector(".gallery-item:last-child").getBoundingClientRect().height*2;window.scrollBy({top:i,behavior:"smooth"})};async function b(s){const t=await u(L);t.data.hits.length===0&&(a.classList.add("is-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.insertAdjacentHTML("beforeend",f(t.data.hits)),y.refresh(),l===m&&(a.classList.add("is-hidden"),a.removeEventListener("click",b),d.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),l+=1,w()}a.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
