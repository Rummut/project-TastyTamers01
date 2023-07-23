import axios from "axios";
const searchEl = document.querySelector(".filter-input")
const searchElTime = document.querySelector(".filter-time")
const searchElArea = document.querySelector(".filter-area")
const searchElIng = document.querySelector(".filter-ingredients")
const galary = document.querySelector(".filter-list")


const BASEURL = `https://tasty-treats-backend.p.goit.global/api/recipes`

let inputSearch = '';
let inputTime = '';
let inputArea = '';
let inputIngr = ''

searchEl.addEventListener('input', debounce(getDish, 300))

searchElArea.addEventListener('change', (event) => {
    inputArea = event.currentTarget.value
    fetchSearchDishArea(inputArea).then((data) => {createGallary(data)})
})
    
searchElIng.addEventListener('change', (event) => {
    inputIngr = event.currentTarget.value
    console.log(event.currentTarget.value)
    fetchSearchDishIngrid(inputIngr).then((data) => {createGallary(data)})
})

fetchArea().then(areas => {
    areas.map(area => {
        const option = `<option value = "${area.name}">${area.name}</option>`
        searchElArea.insertAdjacentHTML("beforeend", option);
   })
}).catch(() => {
   
})
     
async function fetchArea() {
    try {
const responseArea = await axios ( `https://tasty-treats-backend.p.goit.global/api/areas`)
        return responseArea.data
        
    }
    catch {
        
    }
    }

fetchIngredients().then(ingredients => {
    console.log(ingredients)
    ingredients.map(ingredient => {
        const option = `<option value = "${ingredient._id}">${ingredient.name}</option>`
        searchElIng.insertAdjacentHTML("beforeend", option);
    
   })
}).catch(() => {
    
})
     
async function fetchIngredients() {
    try {
const responseIngredients = await axios ( `https://tasty-treats-backend.p.goit.global/api/ingredients`)
            return responseIngredients.data
            }
    catch {
        
    }
    
    }

function debounce(fn, wait) {
       let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn(...args), wait);
    }
    
}

function getDish(event) {
    
    inputSearch = event.target.value
    
    fetchSearchDish(inputSearch).then((data) => {
        
        if (data.length !== 0) {
            createGallary(data)
        } else {
            
        }
              
    }).catch(() => {
        console.log(123)
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
            <button class="filter-btn-see data-modal-open">See recipe</button>
          </div>
        </div>
      </li>`

        )
      })
}

async function fetchSearchDishArea(inputArea) {
    try {
               console.log(inputArea)
        const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=15&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}`)
                 
        // &category=Beef
    
        
      return  response.data.results;
    }
  catch {
        
    }
};

async function fetchSearchDishIngrid(inputIngr) {
    try {
               console.log(inputIngr)
        const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=15&time=${inputTime}&area=${inputArea}&ingredient=${inputIngr}`)
                 
        // &category=Beef
    
        
      return  response.data.results;
    }
  catch {
        
    }
};
async function fetchSearchDish(inputSearch) {
    try {
        
        const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=15&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}`)
                  
        // &category=Beef
    
       
      return response.data.results;
    }
  catch {
        
    }
};





