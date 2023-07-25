 import axios from "axios";
import {inputSearch, inputTime, inputArea, inputIngr} from "../filters"

const BASEURL = `https://tasty-treats-backend.p.goit.global/api/recipes`

async function fetchArea() {
    try {
const responseArea = await axios ( `https://tasty-treats-backend.p.goit.global/api/areas`)
        return responseArea.data
        
    }
    catch {
        
    }
}

async function fetchIngredients() {
    try {
        const responseIngredients = await axios ( `https://tasty-treats-backend.p.goit.global/api/ingredients`)
                return responseIngredients.data
        }
        catch { }
}
async function fetchSearchDishArea(inputArea) {
            try {
                       
                const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=15&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}`)
                         
                // &category=Beef
            
                
              return  response.data.results;
            }
          catch {
                
            }
}
     
async function fetchSearchDishTime(inputTime) {
            try {
                       
                const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=15&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}`)
                         
                // &category=Beef
            
                
              return  response.data.results;
            }
          catch {
                
            }
}
  

async function fetchSearchDishIngrid(inputIngr) {
            try {
                      
                const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=15&time=${inputTime}&area=${inputArea}&ingredient=${inputIngr}`)
                         
                // &category=Beef
            
                
              return  response.data.results;
            }
          catch {
                
            }
}
async function fetchSearchDish(inputSearch) {
            try {
               const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&limit=15&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}`)
                          
                // &category=Beef
            
               
              return response.data.results;
            }
          catch {
                
            }
}

export {fetchArea, fetchIngredients, fetchSearchDishArea, fetchSearchDishIngrid, fetchSearchDish, fetchSearchDishTime};
