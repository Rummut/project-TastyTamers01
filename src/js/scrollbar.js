import { fetchCategories, fetchCategory } from '../js/API-request/all-category';
import {inputSearch, inputTime, inputArea, inputIngr, createGallary, fetchSearchDish,resetGallary } from './filters'

const allcategories = document.querySelector('.scroll-content-select')

const allCategory = document.querySelector('.button-Allcategories')

let inputCategories = ''

fetchCategories()
  .then(areas => {
    console.log(areas)
    const recept = areas.map(area => {

      const option = `<option value = "${area.name}">${area.name}</option>`;
      allcategories.insertAdjacentHTML('beforeend', option);
    });
  })
  .catch(() => {});

  allcategories.addEventListener('change', event => {
    console.log(event.currentTarget.value)
    inputCategories = event.currentTarget.value;
    fetchCategory(inputCategories).then((answers) => {
      console.log(answers)
      createGallary(answers)
    })
    
  });

allCategory.addEventListener('click', event => {
  fetchSearchDish(inputSearch, inputTime, inputArea, inputIngr).then((answers) => {
    // resetGallary()
    createGallary(answers);
 })
})

  
  
  
  
  // function createCategories(answers) {
  //   galary.innerHTML = '';
  //   console.log(answers)
  //   const galarys = answers.map (answer => {
  
  //     console.log(answer)
  //     const image = answer.thumb;
  //     const title = answer.title;
  //     const rating = answer.rating;
  //     const description = answer.description;
  //     const btnId = answer._id
  //     const ratingStar = Math.round(answer.rating);
  //     galary.insertAdjacentHTML(
  //       'beforeend',
  //       `<li class="filter-item">
  //         <img class="filter-img" src="${image}" alt="${title}" />
  //         <button  class="filter-btn-like">
  //           <svg class="filter-svg-like" width="22" height="22"><use id="${btnId}" href="./img_header/svg/heart-star.svg#icon-heart-transparent"></use></svg>
  //         </button>
  //         <div class="filter-info-block">
  //           <h4 class="filter-img-title">${title}</h4>
  //           <p class="filter-img-text">${description}</p>
  //           <div class="filter-info-reiting">
  //             <div class="filter-star-block mark-${ratingStar}">
  //               <p class="filter-reiting">${rating}</p>
  //               <svg class="filter-star star star-1" width="18" height="18"><use  href="${star}#icon-Star-transparent"></use></svg>
  //               <svg class="filter-star star star-2" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
  //               <svg class="filter-star star star-3" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
  //               <svg class="filter-star star star-4" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
  //               <svg class="filter-star star star-5" width="18" height="18"><use href="${star}#icon-Star-transparent"></use></svg>
  //             </div>
  //             <button type="button" value=${btnId}  class="filter-btn-see" data-modal-open>See recipe</button>
  //           </div>
  //         </div>
  //       </li>`   
  //     );
     
  //   });
   
  // }






// function createCategoryButton(category, onClick) {
//   const button = document.createElement('button');
//   button.textContent = category;
//   button.classList.add('button-category');
//   button.addEventListener('click', onClick);
//   return button;
// }

// async function createCategoriesBlock() {
//   const categoriesContainer = document.getElementById('categoriesContainer');
//   const scrollContent = categoriesContainer.querySelector('.scroll-content');
//   // Clear conteiner
//   scrollContent.innerHTML = '';
//   // Get category list from backend
//   const categories = await fetchCategories();
//   // Saving links to category buttons
//   const categoryButtons = [];

//   // Creating category buttons and adding them to the container
//   categories.forEach(category => {
//     const button = createCategoryButton(category.name, () => {
//       setSearchQueryName(category.name);
//       recipeContainer.innerHTML = '';
//       searchImagesAndDisplay(1, searchOnCategory);

//       const prevBtns = document.querySelectorAll('.isUse');
//       prevBtns.forEach(button => {
//         button.classList.remove('isUse');
//         return;
//       });

//       button.classList.add('isUse');
//     });

//     categoryButtons.push(button);
//     scrollContent.appendChild(button);
//   });

//   // Scrollbar initialization
//   const scrollbar = SmoothScrollbar.init(categoriesContainer, {
//     alwaysShowTracks: true,
//   });
// }

// // Creating a block with a list of categories
// const categoriesContainer = document.getElementById('categoriesContainer');
// const scrollContent = document.createElement('div');
// scrollContent.className = 'scroll-content';
// categoriesContainer.appendChild(scrollContent);

// // // Adding functionality to the button "All categories"
// const allCategoriesButton = document.getElementById('allCategoriesButton');
// allCategoriesButton.addEventListener('click', onClickAllCategoriesButton);
// export function onClickAllCategoriesButton ({target}) {
//   // Make a request to the backend to receive recipes of all categories
//   setActiveClass(target);
//   setSearchQueryName();
//   recipeContainer.innerHTML = '';
//   searchImagesAndDisplay(1, searchOnCategory);
//   // Remove styling from all category buttons
//   const categoryButtons = Array.from(
//     document.querySelectorAll('.scroll-content button')
//   );
//   categoryButtons.forEach(button => {
//     button.classList.remove('isUse');
//   });
// };

// // Creating a block with a list of categories
// createCategoriesBlock();

// // Export Func
// export function setActiveClass(btn = allCategoriesButton) {
//   const prevBtns = document.querySelectorAll('.isUse');
//   prevBtns.forEach(el => el.classList.remove('isUse'));
//   btn.classList.add('isUse');
// }

