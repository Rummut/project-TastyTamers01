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
searchEl.addEventListener('input', debounce(getDish, 300)

)

function debounce(fn, wait) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => fn(...args), wait);
    }
    
}

// _.debounce(() => 
    // {

    // } , 300)
    // )

function getDish(event) {
    
    // inputSearch += event.data
    console.log(event.target.value)
    fetchSearchDish(inputSearch).then(()=>{})
}

searchElArea.addEventListener('change', (event) => {
    inputArea = event.currentTarget.value
    fetchSearchDishArea(inputArea)
    console.log(inputArea)
})

async function fetchSearchDishArea(inputArea) {
    try {
        
        
        const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=6&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}`)
                  
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

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)
// );
