(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n={list:document.querySelector(".popular-recipes-list"),list_mobile:document.querySelector(".popular-list.popular-recipes-mobile")};async function a(){return await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json()}function c(o){const t=o.map(({title:i,description:s,preview:e,_id:r})=>`
        
         <li class="popular-recipes-item" data-id="${r}">
      <div class="popular-recipes-wraper">
        <img
          class="popular-recipes-img"
          src="${e}"
          alt="${i}"
          loading="slow"
          height="64"
          width="64"
        />
      </div>
      <div class="popular-containet-def">
        <h3 class="popular-recipes-title">${i}</h3>
        <p class="popular-recipes-description">${s}</p>
      </div>
    </li>`).join("");n.list.insertAdjacentHTML("beforeend",t),n.list_mobile.insertAdjacentHTML("beforeend",t)}async function p(){const o=await a();c(o)}p();
