import Swiper from 'swiper/bundle';
import '../../node_modules/swiper/swiper-bundle.min.css';
import '../css/swiper.css';

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },

  spaceBetween: 10,

  autoplay: {
    delay: 5000,

    disableOnInteraction: false,
  },

  grabCursor: true,

  loop: true,

  mousewheel: {
    invert: true,
  },

  slidesPerView: 1,

  slidesPerGroup: 1,
});
