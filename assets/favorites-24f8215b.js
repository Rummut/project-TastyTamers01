import{s as r}from"./heart-star-d779abad.js";const o=document.querySelector(".hero-fav-render-cards"),d=document.querySelector(".hero-favorite-categories"),f=document.querySelector(".hero-favorite-content"),u=document.querySelector(".hero-favorite-btn");console.log(u);u.addEventListener("click",v);let h=[];function v(e){h=[],console.log(e.target.id),c.filter(t=>{t.category===e.target.id&&(console.log(123),h.push(t))}),p(h)}function p(e){o.innerHTML="",e.map(t=>{const n=t.thumb,s=t.title,a=t.rating,l=t.description,i=t._id;console.log(i);const g=Math.round(t.rating);o.insertAdjacentHTML("beforeend",`<li class="filter-item">
        <img class="filter-img" src="${n}" alt="${s}" />
        <button  class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use id="${i}" href="./img_header/svg/heart-star.svg#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${s}</h4>
          <p class="filter-img-text">${l}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block mark-${g}">
              <p class="filter-reiting">${a}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use  href="${r}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${r}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${r}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${r}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${r}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" value=${i}  class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`)})}const c=JSON.parse(localStorage.getItem("favorite"));$(c);b(c);console.log(c);function $(e){e&&e.length>0?(f.style.display="none",o.innerHTML="",e.forEach(t=>{const n=t.thumb,s=t.title,a=t.rating,l=t.description,i=t._id;console.log(i);const g=Math.round(t.rating);o.insertAdjacentHTML("beforeend",`<li class="filter-item">
        <img class="filter-img" src="${n}" alt="${s}" />
        <button  class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use id="${i}" href="${r}#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${s}</h4>
          <p class="filter-img-text">${l}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block mark-${g}">
              <p class="filter-reiting">${a}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use  href="${r}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${r}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${r}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${r}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${r}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" value=${i}  class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`)})):(f.style.display="column",o.innerHTML="")}function b(e){if(d.innerHTML="",e&&e.length>0){console.log(e);const n=e.flatMap(s=>s.category).filter((s,a,l)=>l.indexOf(s)===a);console.log(n),n.forEach(s=>{d.insertAdjacentHTML("beforeend",`<li class="hero-fav-categ-list">
          <button class="hero-fav-categ-btn" id=${s}>${s}</button>
        </li>`)})}}
