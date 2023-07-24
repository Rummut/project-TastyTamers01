import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  masterClassListElement.innerHTML = '';
  masterClasses.forEach(masterClass => {
    if (masterClass.imageUrl && masterClass.title && masterClass.description) {
      const slideItem = document.createElement('div');
      slideItem.classList.add('swiper-slide');

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

    const swiper = new Swiper('.swiper-container', {
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

initSlider();
