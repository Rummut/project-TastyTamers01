import axios from 'axios';
import {
  fetchArea,
  fetchIngredients,
  getAllPagin,
  
  fetchSearchDish,
  
} from './API-request/filter- request';
import heart from '../img_header/svg/heart-star.svg'
import { pagination } from './pagination';
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



fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr)


// async function getAllDish() {
//             try {
//                const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}&limit=9`)
//                              return response.data.results;
//             }
//           catch {
                
//             }
// }




searchEl.addEventListener('input', debounce(getDish, 300));

searchElArea.addEventListener('change', event => {
  // pagination.on('afterMove', getAllPagin)
  inputArea = event.currentTarget.value;
    fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr)
});

searchElIng.addEventListener('change', event => {
  inputIngr = event.currentTarget.value;
  // pagination.off('afterMove', getAllPagin)
pagination.on('afterMove', getAllPagin)
 fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr)
});

searchElTime.addEventListener('change', event => {
  inputTime = Number(event.target.value)
  // pagination.on('afterMove', getAllPagin)
  fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr)
    
 })
 btnSearchClear.addEventListener('click', (event) =>{
  event.preventDefault();
 searchEl.value = '';
  btnSearchClear.style.display = "none"
  
   }) 

btnResetFilter.addEventListener('click', resetGallary);

function resetGallary() {
  inputSearch = '';
  inputTime = '';
  inputArea = '';
  inputIngr = '';
  form.reset();
  galary.innerHTML = ""
  fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr)
}



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
pagination.off('afterMove', getAllPagin)
  fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr)
    .then(data => {
      if (data.length !== 0) {
        createGallary(data);
      } else {
        galary.innerHTML = "";
        galary.insertAdjacentHTML(
          'beforeend',
          `<div class="hero-favorite-content container">
  <svg class="hero-favorite-icon" width="68" height="58">
    <use href="./img_header/svg/favorite-icon.svg#icon-elements"></use>
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
  console.log(answers)
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
 
}


const buttonModal = document.querySelector(".filter-listener")

buttonModal.addEventListener('click', event => {
  
     if (event.target.value) {
    openModal(event.target.value)
  } if (event.target.id) {
    const idEl = event.target.id
      fetchLocalStorage(idEl).then((data) => {
       addFavorite(data)
      })
  }
  else {
    return
  }
      
 
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
       console.log(newFavorites)
       
   
       
    return localStorage.setItem('favorite', JSON.stringify(newFavorites));
     }
    const filteredFavorite = favorites.filter(e => {
    if (e._id !== data._id) {
      return e;
    }
   })

  
  return localStorage.setItem('favorite', JSON.stringify(filteredFavorite));
}



export { inputSearch, inputTime, inputArea, inputIngr,buttonModal,fetchLocalStorage, addFavorite, createGallary, galary, fetchSearchDish, resetGallary };

  
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

// async function displayDataForPage(pageNumber) {
//   try {
//     const response = await axios(`${BASEURL}?title=${inputSearch}&page=${pageNumber}&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}&limit=9`);
//     const data = response.data.results;
//     createGallary(data); // Update the displayed data using your existing createGallary function
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// Handle the 'afterMove' event of the tui-pagination to fetch and display data for the selected page
// pagination.on('afterMove', event => {
//   const currentPage = event.page;
//   displayDataForPage(currentPage);
// });

// Display data for the initial page (page 1)
// displayDataForPage(1);
