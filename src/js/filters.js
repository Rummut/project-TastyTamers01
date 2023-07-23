import axios from "axios";
const searchEl = document.querySelector(".input-form")
const searchElTime = document.querySelector(".stail-tex-form")
const searchElArea = document.querySelector(".area-select")
const searchElIng = document.querySelector(".ingredients-select")


const BASEURL = `https://tasty-treats-backend.p.goit.global/api/recipes`
// console.log(searchEl)
// console.log(searchElTime)
// console.log(searchElArea)
// console.log(searchElIng)
let inputSearch = '';
let inputTime = '';
let inputArea = '';
let inputIngr = ''

searchEl.addEventListener('input', debounce(getDish, 300))

searchElArea.addEventListener('change', (event) => {
    inputArea = event.currentTarget.value
    console.log(event)
    fetchSearchDishArea(inputArea)
})
    
searchElIng.addEventListener('change', (event) => {
    inputIngr = event.currentTarget.value
    console.log(event.currentTarget.value)
    fetchSearchDishIngrid(inputIngr)
})

fetchArea().then(areas => {
    areas.map(area => {
        const option = `<option value = "${area.name}">${area.name}</option>`
        searchElArea.insertAdjacentHTML("beforeend", option);
   })
}).catch(() => {
    // error.style.display = 'block'
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
    // error.style.display = 'block'
})
     
async function fetchIngredients() {
    try {
const responseIngredients = await axios ( `https://tasty-treats-backend.p.goit.global/api/ingredients`)
        // console.log(responseIngredients.data.name)
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
    console.log(inputSearch)
    fetchSearchDish(inputSearch).then(()=>{})
}



async function fetchSearchDishArea(inputArea) {
    try {
               console.log(inputArea)
        const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=6&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}`)
                 
        // &category=Beef
    
        console.log(response)
    //   return response.data;
    }
  catch {
        
    }
};

async function fetchSearchDishIngrid(inputIngr) {
    try {
               console.log(inputIngr)
        const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=6&time=${inputTime}&area=${inputArea}&ingredient=${inputIngr}`)
                 
        // &category=Beef
    
        console.log(response)
    //   return response.data;
    }
  catch {
        
    }
};
async function fetchSearchDish(inputSearch) {
    try {
        
        
        const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=6&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}`)
                  
        // &category=Beef
    
        console.log(response)
    //   return response.data;
    }
  catch {
        
    }
};



// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)
// );


