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
                       
                const response = await axios(`${BASEURL}?title=${inputSearch}&page=${page}&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}&limit=9`)
                         
                // &category=Beef
            
                
              return  response.data.results;
            }
          catch {
                
            }
}
     
async function fetchSearchDishTime(inputTime) {
            try {
                       
                const response = await axios(`${BASEURL}?title=${inputSearch}&page=${page}&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}&limit=9`)
                         
                // &category=Beef
            
                
              return  response.data.results;
            }
          catch {
                
            }
}
  

async function fetchSearchDishIngrid(inputIngr) {
            try {
                      
                const response = await axios(`${BASEURL}?title=${inputSearch}&page=${page}&time=${inputTime}&area=${inputArea}&ingredient=${inputIngr}&limit=9`)
                         
                // &category=Beef
            
                
              return  response.data.results;
            }
          catch {
                
            }
}
async function fetchSearchDish(inputSearch) {
            try {
               const response = await axios(`${BASEURL}?title=${inputSearch}&page=${page}&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}&limit=9`)
                          
                // &category=Beef
            
               
              return response.data.results;
            }
          catch {
                
            }
}

export {fetchArea, fetchIngredients, fetchSearchDishArea, fetchSearchDishIngrid, fetchSearchDish, fetchSearchDishTime};
