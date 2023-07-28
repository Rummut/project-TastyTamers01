import{s}from"./heart-star-6dce26b9.js";const n=document.querySelector(".hero-fav-render-cards"),d=document.querySelector(".hero-favorite-categories"),f=document.querySelector(".hero-favorite-content"),u=document.querySelector(".hero-favorite-btn");console.log(u);u.addEventListener("click",v);let h=[];function v(e){h=[],console.log(e.target.id),l.filter(t=>{t.category===e.target.id&&(console.log(123),h.push(t))}),p(h)}function p(e){n.innerHTML="",e.map(t=>{const r=t.thumb,a=t.title,o=t.rating,c=t.description,i=t._id;console.log(i);const g=Math.round(t.rating);n.insertAdjacentHTML("beforeend",`<li class="filter-item">
        <img class="filter-img" src="${r}" alt="${a}" />
        <button  class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use id="${i}" href="./img_header/svg/heart-star.svg#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${a}</h4>
          <p class="filter-img-text">${c}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block mark-${g}">
              <p class="filter-reiting">${o}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use  href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" value=${i}  class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`)})}const l=JSON.parse(localStorage.getItem("favorite"));b(l);$(l);console.log(l);function b(e){e&&e.length>0?(f.style.display="none",n.innerHTML="",e.forEach(t=>{const r=t.thumb,a=t.title,o=t.rating,c=t.description,i=t._id;console.log(i);const g=Math.round(t.rating);n.insertAdjacentHTML("beforeend",`<li class="filter-item">
        <img class="filter-img" src="${r}" alt="${a}" />
        <button  class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use id="${i}" href="${s}#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${a}</h4>
          <p class="filter-img-text">${c}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block mark-${g}">
              <p class="filter-reiting">${o}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use  href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" value=${i}  class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`)})):(f.style.display="column",n.innerHTML="")}function $(e){d.innerHTML="",e&&e.length>0&&e.forEach(t=>{const r=t.category;console.log(r),d.insertAdjacentHTML("beforeend",`<li class="hero-fav-categ-list">
          <button class="hero-fav-categ-btn" id=${r}>${r}</button>
        </li>`)})}
