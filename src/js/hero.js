import Swiper from 'swiper';

const fetchMasterClasses = async () => {
  try {
    const response = await fetch(
      'https://tasty-treats-backend.p.goit.global/api/events'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching master classes:', error);
    return [];
  }
};

const createSlides = masterClassData => {
  const swiperWrapper = document.getElementById('masterClassList');
  masterClassData.forEach(masterClass => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    // Тут ви можете додати контент для кожного слайда, наприклад, назву майстер-класу
    slide.textContent = masterClass.title;
    swiperWrapper.appendChild(slide);
  });
};

const initializeSwiper = () => {
  new Swiper('.swiper-container', {
    // Налаштування Swiper.js
    slidesPerView: 3, // Кількість видимих слайдів одночасно
    spaceBetween: 20, // Відстань між слайдами
    loop: true, // Перемотка слайдів у безкінечному режимі
    pagination: {
      el: '.swiper-pagination', // Елемент, в якому буде відображатись пагінація
      clickable: true, // Дозволити клікати на пагінації для перемикання слайдів
    },
  });
};

const getData = async () => {
  const masterClasses = await fetchMasterClasses();
  createSlides(masterClasses);
  initializeSwiper();
};

getData();
