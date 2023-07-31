const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
});

// const currentPath = window.location.href ;


const navItemsHome =document.querySelector(".home")
const navItemsFavorite = document.querySelector('.favorites');

navItemsHome.addEventListener("click", handleClickBtnHome) 
navItemsFavorite.addEventListener("click", handleClickBtnFavorite)

function handleClickBtnHome() {
navItemsHome.classList.add("current");
}

function handleClickBtnFavorite() {
  navItemsFavorite.classList.add("current");
  navItemsHome.classList.remove("current");
}

// navItemsHome.forEach(function (item) {
//   if (currentPath.includes("index")) {
    // item.classList.add('current');
//   } else {
//     item.classList.remove('current');
//   }
// });