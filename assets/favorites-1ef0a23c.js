import{s}from"./heart-star-7c0f9ea5.js";const a=document.querySelector(".hero-fav-render-cards"),l=document.querySelector(".hero-favorite-categories"),c=document.querySelector(".hero-favorite-content"),o=JSON.parse(localStorage.getItem("favorite"));f(o);u(o);function f(e){e&&e.length>0?(c.style.display="none",a.innerHTML="",e.forEach(t=>{const r=t.thumb,i=t.title,g=t.rating,h=t.description,n=t._id,d=Math.round(t.rating);a.insertAdjacentHTML("beforeend",`<li class="filter-item">
        <img class="filter-img" src="${r}" alt="${i}" />
        <button  class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use id="${n}" href="./img_header/svg/heart-star.svg#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${i}</h4>
          <p class="filter-img-text">${h}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block mark-${d}">
              <p class="filter-reiting">${g}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use  href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${s}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" value=${n}  class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`)})):(c.style.display="column",a.innerHTML="")}function u(e){l.innerHTML="",e&&e.length>0&&e.forEach(t=>{const r=t.category;console.log(r),l.insertAdjacentHTML("beforeend",`<li class="hero-fav-categ-list">
          <button class="hero-fav-categ-btn">${r}</button>
        </li>`)})}
