import axios from 'axios';
import heart from '../img_header/svg/heart-star.svg'
import star from '../img_header/svg/heart-star.svg';
// import { buttonModal } from './filters';
// import { openModal } from './modal-recipes';



const renderCardsList = document.querySelector('.hero-fav-render-cards');
const favoriteBtnList = document.querySelector('.hero-favorite-categories');
const heroFavoriteContent = document.querySelector('.hero-favorite-content');
const heroFavoriteBnt = document.querySelector('.hero-favorite-btn');
console.log(heroFavoriteBnt)
heroFavoriteBnt.addEventListener('click', filtrBtn)
let filterCategori = []
function filtrBtn(event) {
  filterCategori =[]
    console.log(event.target.id)

  const btnFiltr = favorites.filter(e => {
    if (e.category === event.target.id) {
      console.log(123)
      filterCategori.push(e)
    }
  })
filtrBtnCat(filterCategori)

}
function filtrBtnCat(filterCategori) {
  renderCardsList.innerHTML = '';
const bild = filterCategori.map(favorite => {

    const image = favorite.thumb;
    const title = favorite.title;
    const rating = favorite.rating;
    const description = favorite.description;
  const btnId = favorite._id;
  console.log(btnId)
    const ratingStar = Math.round(favorite.rating);
    renderCardsList.insertAdjacentHTML(
      'beforeend',
      `<li class="filter-item">
        <img class="filter-img" src="${image}" alt="${title}" />
        <button  class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use id="${btnId}" href="./img_header/svg/heart-star.svg#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${title}</h4>
          <p class="filter-img-text">${description}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block mark-${ratingStar}">
              <p class="filter-reiting">${rating}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use  href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" value=${btnId}  class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`   
    );
    
  });
}



const favorites = JSON.parse(localStorage.getItem("favorite"));
  
renderCards(favorites);
favoriteBtn(favorites);
console.log(favorites)
function renderCards(favorites) {
  if (favorites && favorites.length > 0) {
  
heroFavoriteContent.style.display = 'none';
  renderCardsList.innerHTML = '';

favorites.forEach(favorite => {

    const image = favorite.thumb;
    const title = favorite.title;
    const rating = favorite.rating;
    const description = favorite.description;
  const btnId = favorite._id;
  console.log(btnId)
    const ratingStar = Math.round(favorite.rating);
    renderCardsList.insertAdjacentHTML(
      'beforeend',
      `<li class="filter-item">
        <img class="filter-img" src="${image}" alt="${title}" />
        <button  class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"><use id="${btnId}" href="${heart}#icon-heart-transparent"></use></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${title}</h4>
          <p class="filter-img-text">${description}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block mark-${ratingStar}">
              <p class="filter-reiting">${rating}</p>
              <svg class="filter-star star star-1" width="18" height="18"><use  href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-2" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-3" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-4" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
              <svg class="filter-star star star-5" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
            </div>
            <button type="button" value=${btnId}  class="filter-btn-see" data-modal-open>See recipe</button>
          </div>
        </div>
      </li>`   
    );
    
  });
  } else {
    heroFavoriteContent.style.display = 'column';
    renderCardsList.innerHTML = '';
  }
  
}

function favoriteBtn(favorites) {
  favoriteBtnList.innerHTML = '';
  if (favorites && favorites.length > 0) {
favorites.forEach(favorite => {
    const category = favorite.category;
    console.log(category);
  favoriteBtnList.insertAdjacentHTML('beforeend', `<li class="hero-fav-categ-list">
          <button class="hero-fav-categ-btn" id=${category}>${category}</button>
        </li>`);
  });
  }
}




// renderCardsList.addEventListener('click', event => {
  
//      if (event.target.value) {
//     openModal(event.target.value)
//   } if (event.target.id) {
//     const idEl = event.target.id
//       fetchLocalStorage(idEl).then((data) => {
//        addFavorite(data)
//       })
//   }
//   else {
//     return
//   }
       
// })


// async function fetchLocalStorage(idEl) {
//   const rezult = await axios((`${BASEURL}/${idEl}`))
  
//   return rezult.data;
// }


// function addFavorite(data){
//   const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
//   const inFavorites = favorites.filter(e => {
    
//     if (e._id === data._id) {
      
//       return e;
//     }
//   })
//      if (inFavorites.length === 0) {
//     const newFavorites = [...favorites]
    
//     newFavorites.push(data);
   
       
//     return localStorage.setItem('favorite', JSON.stringify(newFavorites));
//      }
//     const filteredFavorite = favorites.filter(e => {
//     if (e._id !== data._id) {
//       return e;
//     }
//    })

  
//   return localStorage.setItem('favorite', JSON.stringify(filteredFavorite));
// }
