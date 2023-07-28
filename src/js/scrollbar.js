import { fetchCategories, fetchCategory } from '../js/API-request/all-category';
import {inputSearch, inputTime, inputArea, inputIngr, createGallary, fetchSearchDish,resetGallary } from './filters'

const allcategories = document.querySelector('.scroll-content-select')
const allCategory = document.querySelector('.button-Allcategories')

let inputCategories = ''

fetchCategories()
  .then(areas => {
    console.log(areas)
    const recept = areas.map(area => {

      const option = `<button value = "${area.name}">${area.name}</button>`;
      allcategories.insertAdjacentHTML('beforeend', option);
    });
  })
  .catch(() => {});

  allcategories.addEventListener('click', event => {
    console.log(event.target.value)
    inputCategories = event.target.value;
    fetchCategory(inputCategories).then((answers) => {
      console.log(answers)
      createGallary(answers)
    })
  });

allCategory.addEventListener('click', event => {
  fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr).then((answers) => {
    resetGallary()
    createGallary(answers);
 })
})
