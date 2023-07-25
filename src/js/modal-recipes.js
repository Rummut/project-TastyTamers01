import axios from "axios";

const BASE_URL = `https://tasty-treats-backend.p.goit.global/api/recipes/`

const videoRef = document.getElementById('video')
const titleRef = document.querySelector('.recipes-title')
const tagsMob = document.querySelector('.tags-mobile')
const tagsDesktop = document.querySelector('.tags-desktop')
const timeRef = document.querySelector('.time')
const addFavorite = document.querySelector('#btn-add')

let responseRecipe = null;


async function fetchModalRecipe(id){  
  try{
    const response =  await axios.get(`${BASE_URL}${id}`)

    console.log(response);

    return response.data;

  }catch(error){
    console.log('Sorry, there are no recipes')

  }
}
// video

function insertVideo(data){
  const url = data.youtube.split('/');

  videoRef.innerHTML = `<iframe 
  class="iframe-modal" 
  src="https://www.youtube.com/embed/${url[url.length - 1]}" 
  frameborder="0" 
  allowfullscreen>
</iframe>`
}

  function insertTitle(data){
   titleRef.innerHTML = data.title
  }

function insertTags(data){
  const murkupTags = data.tags.map(tag => {
    return `<li class="recipe-tag">#${tag}</li>`
  })
  tagsMob.innerHTML = murkupTags;
  tagsDesktop.innerHTML = murkupTags;
}

function insertTime(data){
  timeRef.innerHTML = `${data.time} min`
}


function addToFavorite(){
  const favorites = JSON.parse(localStorage.getItem("favorite"));
  if(!favorites) {
    const arr = []
    arr.push(responseRecipe);
    return localStorage.setItem('favorite', JSON.stringify(arr));
  }
  const inFavorite = favorites.filter(e => {
    if(e.id === responseRecipe.id){
      return e;
    }
  })

  console.log(inFavorite);

  if(inFavorite.length === 0) {
    const newFavorites = [...favorites];
    newFavorites.push(responseRecipe);
    return localStorage.setItem('favorite', JSON.stringify(newFavorites))
  }

  return console.log('Вже є такий рецепт');
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
addFavorite.addEventListener('click', addToFavorite)

async function openModal(id) {
  refs.modal.classList.remove("is-hidden");
   responseRecipe = await fetchModalRecipe('6462a8f74c3d0ddd28897fb9');
   console.log(responseRecipe);
  insertVideo(responseRecipe);
  insertTitle(responseRecipe)
  insertTags(responseRecipe)
  insertTime(responseRecipe)
}

function closeModal() {
  refs.modal.classList.add("is-hidden");
}
