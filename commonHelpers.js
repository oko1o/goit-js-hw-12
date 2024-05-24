import{a as p,S as E,i as m}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();p.defaults.baseURL="https://pixabay.com/api/";const S="43833375-8d3f0c892462ae71a1cd36e3a",u=15,f=s=>{const t={q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l};return p.get(`?key=${S}&`,{params:t})},h=s=>s.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:n,downloads:v})=>`<div class="gallery-item">
    <div class="gallery-item-image">
      <a href="${i}">
        <img src="${t}" alt="${o}" />
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
          <p class="data">${n}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Downloads</b></p>
          <p class="data">${v}</p>
        </li>
      </ul>
    </div>
    </div>`).join("");document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');const P=document.querySelector("#searchform"),c=document.querySelector(".gallery"),g=document.querySelector(".loader"),a=document.querySelector(".load-more");let y=new E(".gallery-item-image a"),L="",l=1,d=0;async function M(s){s.preventDefault();const t=s.target.elements.searchinput.value.trim();if(L=t,l=1,c.innerHTML="",g.classList.remove("is-hidden"),t===""){c.innerHTML="",s.target.reset(),m.error({title:"Error",message:"Sorry, input field can't be empty",position:"topRight"});return}const i=await f(t);console.log(i.data),d=Math.ceil(i.data.totalHits/u),console.log(d),i.data.hits.length===0&&(a.classList.add("is-hidden"),m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.innerHTML=h(i.data.hits);const o=document.querySelector(".gallery-item:last-child");console.log(o);let e=o.getBoundingClientRect();console.log(e),s.target.reset(),g.classList.add("is-hidden"),d>1&&a.classList.remove("is-hidden"),y.refresh(),l+=1}P.addEventListener("submit",M);async function b(s){const t=await f(L);console.log(t.data),console.log(l),t.data.hits.length===0&&(a.classList.add("is-hidden"),m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.insertAdjacentHTML("beforeend",h(t.data.hits)),y.refresh(),l===d&&(a.classList.add("is-hidden"),a.removeEventListener("click",b),m.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),l+=1}a.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map
