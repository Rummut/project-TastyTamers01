import axios from 'axios';
import {
  fetchArea,
  fetchIngredients,
  fetchSearchDishArea,
  fetchSearchDishIngrid,
  fetchSearchDish,
  fetchSearchDishTime
} from './API-request/filter- request';
import star from '../img_header/svg/heart-star.svg'
// import { pagination } from './pagination';
import {openModal} from './modal-recipes';

const form = document.querySelector('.filter-form');
const searchEl = document.querySelector('.filter-input');
const searchElTime = document.querySelector('.filter-time');
const searchElArea = document.querySelector('.filter-area');
const searchElIng = document.querySelector('.filter-ingredients');
const galary = document.querySelector('.filter-list');
const btnResetFilter = document.querySelector('.filter-btn-reset');
const btnSearchClear = document.querySelector('.filter-input-btn');


const BASEURL = `https://tasty-treats-backend.p.goit.global/api/recipes`;

let inputSearch = '';
let inputTime = '';
let inputArea = '';
let inputIngr = '';
// const page = pagination.getCurrentPage()



getAllDish().then((answers) => {
     createGallary(answers);
  })


async function getAllDish() {
            try {
               const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}&limit=9`)
                             return response.data.results;
            }
          catch {
                
            }
}

searchEl.addEventListener('input', debounce(getDish, 300));

searchElArea.addEventListener('change', event => {
  inputArea = event.currentTarget.value;
  fetchSearchDishArea(inputArea).then(data => {
    createGallary(data);
  });
});

searchElIng.addEventListener('change', event => {
  inputIngr = event.currentTarget.value;

  fetchSearchDishIngrid(inputIngr).then(data => {
    createGallary(data);
  });
});

searchElTime.addEventListener('change', event => {
  inputTime = Number(event.target.value)
  
  fetchSearchDishTime(inputTime).then(data => {
     createGallary(data);
   })
    
 })
 btnSearchClear.addEventListener('click', (event) =>{
  event.preventDefault();
 searchEl.value = '';
  btnSearchClear.style.display = "none"
  
   }) 

btnResetFilter.addEventListener('click', event => {
  inputSearch = '';
  inputTime = '';
  inputArea = '';
  inputIngr = '';
  form.reset();
  galary.innerHTML = ""
  getAllDish().then((answers) => {
     createGallary(answers);
  })
});

fetchArea()
  .then(areas => {
    areas.map(area => {
      const option = `<option value = "${area.name}">${area.name}</option>`;
      searchElArea.insertAdjacentHTML('beforeend', option);
    });
  })
  .catch(() => {});

fetchIngredients()
  .then(ingredients => {
    ingredients.map(ingredient => {
      const option = `<option value = "${ingredient._id}">${ingredient.name}</option>`;
      searchElIng.insertAdjacentHTML('beforeend', option);
    });
  })
  .catch(() => {});

function debounce(fn, wait) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

function getDish(event) {
  inputSearch = event.target.value.trim();
  btnSearchClear.style.display = "flex"

  fetchSearchDish(inputSearch)
    .then(data => {
      if (data.length !== 0) {
        createGallary(data);
      } else {
        galary.innerHTML = "";
        galary.insertAdjacentHTML(
          'beforeend',
          `<div class="hero-favorite-content container">
  <svg class="hero-favorite-icon" width="68" height="58">
    <use href="../img_header/svg/favorite-icon.svg#icon-elements"></use>
  </svg>
  <p class="hero-favorite-text">
    Sorry! We didn't find anything.
  </p>
</div>`
        );
      }
    })
    .catch(() => {});
}

function createGallary(answers) {
  galary.innerHTML = '';
  const galarys = answers.map(answer => {

    const image = answer.thumb;
    const title = answer.title;
    const rating = answer.rating;
    const description = answer.description;
    const btnId = answer._id
    const ratingStar = Math.round(answer.rating);
    galary.insertAdjacentHTML(
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


const buttonModal = document.querySelector(".filter-listener")

buttonModal.addEventListener('click', event => {
     if (event.target.value) {
    openModal(event.target.value)
    }
    //  event.target.fiil = "red"
     const idEl = event.target.id
      fetchLocalStorage(idEl).then((data) => {
       addFavorite(data)
     })
       
 
})
async function fetchLocalStorage(idEl) {
  const rezult = await axios((`${BASEURL}/${idEl}`))
  
  return rezult.data;
}


function addFavorite(data){
  const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
  const inFavorites = favorites.filter(e => {
    
    if (e._id === data._id) {
      
      return e;
    }
  })
     if (inFavorites.length === 0) {
    const newFavorites = [...favorites]
    
    newFavorites.push(data);
   
       
    return localStorage.setItem('favorite', JSON.stringify(newFavorites));
     }
    const filteredFavorite = favorites.filter(e => {
    if (e._id !== data._id) {
      return e;
    }
   })

  
  return localStorage.setItem('favorite', JSON.stringify(filteredFavorite));
}



export { inputSearch, inputTime, inputArea, inputIngr,buttonModal,fetchLocalStorage, addFavorite };

  
const btnUp = {
  el: document.querySelector('.scroll-up'),
  show() {
    this.el.classList.remove('scroll-up_hide');
  },
  hide() {
    this.el.classList.add('scroll-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.scroll-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

