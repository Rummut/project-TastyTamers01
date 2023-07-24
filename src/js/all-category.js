// import axios from 'axios';

// const categoriesList = document.querySelector('.categories-list');

// const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/categories';

// export async function getCategories() {
//   try {
//     const response = await axios.get(BASE_URL);
//     const markUp = createMarkUp(response.data);
//     if (categoriesList) {
//       categoriesList.innerHTML = markUp;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// getCategories();

// function createMarkUp(data) {
//   return data
//     .map(
//       ({ name }) => `<li class="category-item">
//               <p class="category-name">${name}</p>
//             </li>`
//     )
//     .join('');
// }