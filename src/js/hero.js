import axios from 'axios';
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

const renderMasterClasses = masterClasses => {
  const masterClassListElement = document.getElementById('masterClassList');
  masterClassListElement.innerHTML = ''; // Очищаємо вміст перед додаванням нових слайдів

  masterClasses.forEach(masterClass => {
    if (masterClass.imageUrl && masterClass.title && masterClass.description) {
      const slideItem = document.createElement('div');
      slideItem.classList.add('swiper-slide');

      // Тут ви можете створити HTML-структуру для кожного майстер-класу
      // Наприклад:
      slideItem.innerHTML = `
        <div class="slider-item">
          <img src="${masterClass.imageUrl}" alt="${masterClass.title}">
          <h3>${masterClass.title}</h3>
          <p>${masterClass.description}</p>
        </div>
      `;

      masterClassListElement.appendChild(slideItem);
    }
  });
};

const initSlider = async () => {
  try {
    const masterClasses = await fetchMasterClasses();
    renderMasterClasses(masterClasses);

    new Swiper('.swiper-container', {
      // Налаштування Swiper.js (за бажанням)
      // Наприклад, якщо вам потрібні пагінація та навігація:
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } catch (error) {
    console.error('Error initializing slider:', error);
  }
};

// Виклик функції для ініціалізації слайдера
initSlider();
// document.addEventListener('DOMContentLoaded', () => {
//   initSlider();
// });
