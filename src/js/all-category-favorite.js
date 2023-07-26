
import {eventListFavorite} from '../modal-recipes';

document.addEventListener('DOMContentLoaded', function () {
  const renderCardsList = document.querySelector('.hero-fav-render-cards');
  console.log(renderCardsList);
  const favoriteBtnList = document.querySelector('.hero-favorite-categories');
  const heroFavoriteContent = document.querySelector('.hero-favorite-content');

  if (renderCardsList.children.length === 0) {
    heroFavoriteContent.style.display = 'none';
  } else {
    heroFavoriteContent.style.display = 'block';
  }
});
renderCards();

function renderCards () {
    renderCardsList.insertAdjacentHTML (
        'beforeend',
        `<li class="filter-item">
        <img class="filter-img" src="${image}" alt="${title}" />
        <button class="filter-btn-like">
            <svg class="filter-svg-like" width="22" height="22"><use href="./img_header/svg/heart-star.svg#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
            <h4 class="filter-img-title">${title}</h4>
            <p class="filter-img-text">${description}</p>
            <div class="filter-info-reiting">
            <div class="filter-star-block mark-${ratingStar}">
              <p class="filter-reiting">${rating}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`
    )
} 