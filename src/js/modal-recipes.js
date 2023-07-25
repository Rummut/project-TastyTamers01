
import axios from 'axios';


const BASE_URL = `https://tasty-treats-backend.p.goit.global/api/recipes/`

const videoRef = document.getElementById('video')
const titleRef = document.querySelector('.recipes-title')
const tagsMob = document.querySelector('.tags-mobile')
const tagsDesktop = document.querySelector('.tags-desktop')
const timeRef = document.querySelector('.time')
const toggleFavoriteBtn = document.querySelector('#btn-toggle-favorite')
const ingridientsRef = document.querySelector('.recipe-ingriidients')
const cookingRecipes = document.querySelector('.cooking-recipes')
const ratingRef = document.querySelector('.rating-number')


let responseRecipe = null;

// const buttonModal = document.querySelector(".filter-listener")
// buttonModal.addEventListener('click', event => {
//   console.log(event.target.id
//   )
//     })
// console.log(buttonModal)
     

async function fetchModalRecipe(id) {
  try {
    const response = await axios.get(`${BASE_URL}${id}`)

    console.log(response);

    return response.data;

  } catch (error) {
    console.log('Sorry, there are no recipes')

  }
}
// video


function getKeyYouTybe(url) {
  let indexLast = url.split('').length;

  let key = url.split('').splice(32, indexLast).join('');
  return key;
}

function insertVideo(data) {
  if(!data.youtube){
    const markUp = `<iframe
                width="100%"
                height="290"
                src="https://www.youtube.com/embed/${getKeyYouTybe(
    data.youtube
  )}?origin=https://Ben-cod.github.io"

              title = "YouTube video player"
              frameborder = "0"
              allow = "accelerometer; autoplay; clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture; web-share"
              allowfullscreen
                ></iframe >
              `;
  videoRef.innerHTML = markUp;
  }
  
}






function insertTitle(data) {
  titleRef.innerHTML = data.title
}

function insertTags(data) {
  const murkupTags = data.tags.map(tag => {
    return `<li class="recipe-tag">#${tag}</li>`
  })
  tagsMob.innerHTML = murkupTags;
  tagsDesktop.innerHTML = murkupTags;
}


function insertTime(data) {
  timeRef.innerHTML = `${data.time} min`
}


function insertIngridients(data) {
  const murkupIngridients = data.ingredients.map(ingredient => {
    return `<li class="recipe-ingriidient">
    <p>${ingredient.name}</p>
    <p class="text-grey">${ingredient.measure}</p>
</li>`
  });
  ingridientsRef.innerHTML = murkupIngridients
}

function insertRating(data) {
  ratingRef.innerHTML = data.rating
}


function insertCookingRecipe(data) {
  cookingRecipes.innerHTML = data.instructions
}



function toggleFavorite() {
  const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
  const inFavorites = favorites.filter(e => {
    if (e._id === responseRecipe._id) {
      return e;
    }
  })
  if (inFavorites.length === 0) {
    const newFavorites = [...favorites]
    newFavorites.push(responseRecipe);
    toggleFavoriteBtn.textContent = 'Remove from favorite'
    return localStorage.setItem('favorite', JSON.stringify(newFavorites));
  }
  const filteredFavorite = favorites.filter(e => {
    if (e._id !== responseRecipe._id) {
      return e;
    }
  })

  toggleFavoriteBtn.textContent = 'Add to favorite'

  return localStorage.setItem('favorite', JSON.stringify(filteredFavorite));
}



// Modal open

const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backDrop: document.querySelector(".backdrop"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);
refs.backDrop.addEventListener("click", closeModal);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

async function openModal(id) {
  refs.modal.classList.remove("is-hidden");
  // 6462a8f74c3d0ddd28897fbc
  // 6462a8f74c3d0ddd28897fbb
  responseRecipe = await fetchModalRecipe('6462a8f74c3d0ddd28897fbb');
  const favorites = JSON.parse(localStorage.getItem('favorite')) || [];

  const inFavorites = favorites.filter(e => {
    if(e._id === responseRecipe._id){
      return e;
    }
  })
  if(inFavorites.length > 0){
    toggleFavoriteBtn.textContent = 'Remove from favorite'
  }else{
    toggleFavoriteBtn.textContent = 'Add to favorite'
  }



  insertVideo(responseRecipe);
  insertTitle(responseRecipe)
  insertTags(responseRecipe)
  insertTime(responseRecipe)
  insertIngridients(responseRecipe)
  insertCookingRecipe(responseRecipe)
  insertRating(responseRecipe)
}

function closeModal() {
  refs.modal.classList.add("is-hidden");
}
export {openModal, refs};