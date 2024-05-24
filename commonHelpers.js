import{a as g,i as d,S as b}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();g.defaults.baseURL="https://pixabay.com/api/";const v="43833375-8d3f0c892462ae71a1cd36e3a",f=18,u=r=>{const t={q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:l};return g.get(`?key=${v}&`,{params:t})},h=r=>r.map(({webformatURL:t,largeImageURL:a,tags:n,likes:e,views:s,comments:i,downloads:L})=>`<div class="gallery-item">
    <div class="gallery-item-image">
      <a href="${a}">
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
          <p class="data">${i}</p>
        </li>
        <li class="gallery-item-info-item">
          <p class="title"><b>Downloads</b></p>
          <p class="data">${L}</p>
        </li>
      </ul>
    </div>
    </div>`).join("");document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');const S=document.querySelector("#searchform"),c=document.querySelector(".gallery"),p=document.querySelector(".loader"),o=document.querySelector(".load-more");let y="",l=1,m=0;async function E(r){r.preventDefault();const t=r.target.elements.searchinput.value.trim();if(y=t,c.innerHTML="",p.classList.remove("is-hidden"),t===""){c.innerHTML="",r.target.reset(),d.error({title:"Error",message:"Sorry, input field can't be empty",position:"topRight"});return}const a=await u(t);console.log(a.data),m=Math.ceil(a.data.totalHits/f),console.log(m),a.data.hits.length===0&&(o.classList.add("is-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.innerHTML=h(a.data.hits),r.target.reset(),p.classList.add("is-hidden"),o.classList.remove("is-hidden"),new b(".gallery-item-image a"),l+=1}S.addEventListener("submit",E);o.addEventListener("click",async r=>{const t=await u(y);console.log(t.data),console.log(l),t.data.hits.length===0&&(o.classList.add("is-hidden"),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),c.insertAdjacentHTML("beforeend",h(t.data.hits)),l+=1,(l=m)&&o.classList.add("is-hidden")});
//# sourceMappingURL=commonHelpers.js.map
