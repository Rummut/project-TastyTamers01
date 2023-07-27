import{s as e}from"./heart-star-8fac490a.js";const s=document.querySelector(".hero-fav-render-cards"),d=document.querySelector(".hero-favorite-categories"),r=document.querySelector(".hero-favorite-content");console.log(s);console.log(d);console.log(r);const l=JSON.parse(localStorage.getItem("favorite"));console.log(l);f(l);function f(i){i?(r.style.display="none",s.innerHTML="",i.map(t=>{const o=t.thumb,a=t.title,c=t.rating,g=t.description,n=t._id,h=Math.round(t.rating);s.insertAdjacentHTML("beforeend",`<li class="filter-item">
        <img class="filter-img" src="${o}" alt="${a}" />
        <button  class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use id="${n}" href="./img_header/svg/heart-star.svg#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${a}</h4>
          <p class="filter-img-text">${g}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block mark-${h}">
              <p class="filter-reiting">${c}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use  href="${e}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${e}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${e}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${e}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${e}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" value=${n}  class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`)})):r.style.display="blok"}
