// import Swiper from 'swiper';

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
//     console.error('Error fetching master classes:', error);
//     return [];
//   }
// };
// // Виклик функцій для отримання даних
// const getData = async () => {
//   const masterClasses = await fetchMasterClasses();

//   // Тут ви можете використовувати отримані дані для відображення слайдера або зробити інші необхідні дії з ними
//   console.log('Master Classes:', masterClasses);
// };

// // Виклик функції для отримання даних
// getData();

import { fetchEvent } from '../../js/API_request/fechEvent';
import TemplateArticles from '../../templates/Hero-events.hbs';
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const parentContainer = document.querySelector('.events');

fetchEvent().then(data => {
  parentContainer.insertAdjacentHTML('beforeend', TemplateArticles(data));

  const swiper = new Swiper('.swiper', {
    modules: [Pagination, Navigation, Autoplay],
    allowSlideNext: true,
    pagination: {
      el: '.page',
      clickable: true,
    },
    autoplay: {
      delay: 1500,
    },
    speed: 800,
    loop: true,
  });
});
