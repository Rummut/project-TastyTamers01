import axios from "axios";
import {fetchArea, fetchIngredients, fetchSearchDishArea, fetchSearchDishIngrid, fetchSearchDish} from './API-request/filter- request'
const form = document.querySelector(".filter-form")
const searchEl = document.querySelector(".filter-input")
const searchElTime = document.querySelector(".filter-time")
const searchElArea = document.querySelector(".filter-area")
const searchElIng = document.querySelector(".filter-ingredients")
const galary = document.querySelector(".filter-list")
const btnResetFilter = document.querySelector(".filter-btn-reset")



const BASEURL = `https://tasty-treats-backend.p.goit.global/api/recipes`

let inputSearch = '';
let inputTime = '';
let inputArea = '';
let inputIngr = '';

searchEl.addEventListener('input', debounce(getDish, 300))

searchElArea.addEventListener('change', (event) => {
    inputArea = event.currentTarget.value
    fetchSearchDishArea(inputArea).then((data) => {createGallary(data)})
})
    
searchElIng.addEventListener('change', (event) => {
    inputIngr = event.currentTarget.value
    
    fetchSearchDishIngrid(inputIngr).then((data) => {createGallary(data)})
})
btnResetFilter.addEventListener('click', (event) => {
    inputSearch = '';
    inputTime = '';
    inputArea = '';
    inputIngr = '';
  form.reset();

})

fetchArea().then(areas => {
    areas.map(area => {
        const option = `<option value = "${area.name}">${area.name}</option>`
        searchElArea.insertAdjacentHTML("beforeend", option);
   })
}).catch(() => {
   
})
     


fetchIngredients().then(ingredients => {
    
    ingredients.map(ingredient => {
        const option = `<option value = "${ingredient._id}">${ingredient.name}</option>`
        searchElIng.insertAdjacentHTML("beforeend", option);
    
   })
  }).catch(() => {
    
})
     


function debounce(fn, wait) {
       let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn(...args), wait);
    }
    
}

function getDish(event) {
   
    inputSearch = event.target.value.trim()
     
    fetchSearchDish(inputSearch).then((data) => {
        
        if (data.length !== 0) {
            createGallary(data)
        } else {
            galary.insertAdjacentHTML('beforeend', `<div class="filter-answer-block"> 
            <img class="filter-answer-img" src="" alt=""> 
            <h3 class="filter-answer-text">Sorry! We didn't find anything.</h3> 
        </div>`)
        }
              
    }).catch(() => {
        
    })
}

function createGallary(answers) {
   galary.innerHTML = ""
    const galarys = answers.map(answer => {
    
        const image = answer.thumb
        const title = answer.title
        const rating = answer.rating
        const description = answer.description
        const ratingStar = Math.round(answer.rating)
        galary.insertAdjacentHTML("beforeend",
            `<li class="filter-item">
        <img class="filter-img" src="${image}" alt="${title}" />
        <button class="filter-btn-like">
          <svg class="filter-svg-like" width="22" height="22"></svg>
        </button>
        <div class="filter-info-block">
          <h4 class="filter-img-title">${title}</h4>
          <p class="filter-img-text">${description}</p>
          <div class="filter-info-reiting">
            <div class="filter-star-block">
              <p class="filter-reiting">${rating}</p>
              <svg class="filter-star" width="18" height="18"></svg>*${ratingStar}
              <svg class="filter-star" width="18" height="18"></svg>
              <svg class="filter-star" width="18" height="18"></svg>
              <svg class="filter-star" width="18" height="18"></svg>
              <svg class="filter-star" width="18" height="18"></svg>
            </div>
            <button type="button" class="filter-btn-see data-modal-open">See recipe</button>
          </div>
        </div>
      </li>`

        )
      })
}



export {inputSearch, inputTime, inputArea, inputIngr};



