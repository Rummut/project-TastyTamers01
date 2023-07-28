import axios from "axios";
 import { pagination } from '../pagination';
import {inputSearch, inputTime, inputArea, inputIngr, createGallary} from "../filters"
import { after } from "lodash";

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
// async function fetchSearchDishArea(inputSearch, inputTime, inputArea, inputIngr) {
//             try {
                       
//                 const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}&limit=9`)
                         
//                 // &category=Beef
            
                
//               return  response.data.results;
//             }
//           catch {
                
//             }
// }
     
// async function fetchSearchDishTime(inputTime) {
//             try {
                       
//                 const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&time=${inputTime}&area=${inputArea}&ingredients=${inputIngr}&limit=9`)
                         
//                 // &category=Beef
            
                
//               return  response.data.results;
//             }
//           catch {
                
//             }
// }
  

// async function fetchSearchDishIngrid(inputIngr) {
//             try {
                      
//                 const response = await axios(`${BASEURL}?title=${inputSearch}&page=1&time=${inputTime}&area=${inputArea}&ingredient=${inputIngr}&limit=9`)
                         
//                 // &category=Beef
            
                
//               return  response.data.results;
//             }
//           catch {
                
//             }
// }
// let currentPage = ''
const page = pagination.getCurrentPage()
async function fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr) {
            // currentPage = ""
  try {
               const {data:{results, totalPages}} = await axios(`${BASEURL}?title=${inputSearch}&page=${page}&time=${inputTime}&area=${inputArea}&ingredient=${inputIngr}&limit=9`)
               pagination.reset(totalPages)   
               createGallary(results);
              
            }
          catch {
                
            }
}
async function getAllPagin(event) {
           const currentPage = event.page
  try {
               const {data:{results}} = await axios(`${BASEURL}?title=${inputSearch}&page=${currentPage}&time=${inputTime}&area=${inputArea}&ingredient=${inputIngr}&limit=9`)  
               createGallary(results);
              
            }
          catch {
                
            }
}

pagination.on('afterMove', getAllPagin)

export {fetchArea, fetchIngredients, fetchSearchDish, createGallary, getAllPagin};
