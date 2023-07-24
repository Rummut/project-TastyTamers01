import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = document.querySelector('.swiper-container');
console.log(swiper);

fetchMasterClasses().then(answers => {
  console.log(answers);
  const serchElement = answers.map(answer => {
    const image = answer.cook.imgUrl;
    const imgDish = answer.topic.imgUrl;
    const area = answer.topic.area;
    const name = answer.topic.name;
    swiper.insertAdjacentHTML(
      'beforeend',
      ` <div class="slider-item">
//           <img class="slider-cook" src="${image}" alt="mastershef">
 <img class="slider-dish" src="${imgDish}" alt="dish">
//           <h3 class="slider-name">${name}</h3>
//           <p class="slider-area">${area}</p>
//         </div>`
    );
    // console.log(image);
    // console.log(imgDish);
    // console.log(area);
    // console.log(name);
  });
});

async function fetchMasterClasses() {
  const responce = await axios(
    `https://tasty-treats-backend.p.goit.global/api/events`
  );
  console.log(responce.data);
  return responce.data;
}

// const fetchMasterClasses = async () => {
//   try {
//     const response = await fetch(
//       'https://tasty-treats-backend.p.goit.global/api/events'
//     );
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
// //     console.error('Error fetching master classes:', error);
// //     return [];
// //   }
// // };

// const renderMasterClasses = masterClasses => {
//   const masterClassListElement = document.getElementById('masterClassList');
//   masterClassListElement.innerHTML = '';
//   masterClasses.forEach(masterClass => {
//     if (masterClass.imageUrl && masterClass.title && masterClass.description) {
//       const slideItem = document.createElement('div');
//       slideItem.classList.add('swiper-slide');

//       slideItem.innerHTML = `
//         <div class="slider-item">
//           <img src="${masterClass.imageUrl}" alt="${masterClass.title}">
//           <h3>${masterClass.title}</h3>
//           <p>${masterClass.description}</p>
//         </div>
//       `;

//       masterClassListElement.appendChild(slideItem);
//     }
//   });
// };

// const initSlider = async () => {
//   try {
//     const masterClasses = await fetchMasterClasses();
//     renderMasterClasses(masterClasses);

//     const swiper = new Swiper('.swiper-container', {
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   } catch (error) {
//     console.error('Error initializing slider:', error);
//   }
// };

// initSlider();
