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

// Получаем текущий путь страницы (URL без домена)
var currentPath = window.location.pathname;
console.log(currentPath);
// Находим все элементы списка навигации
var navItems = document.querySelectorAll('.header-nav-link');

// Проходимся по элементам списка и добавляем класс "current" тому элементу, у которого href соответствует текущему пути
navItems.forEach(function (item) {
  if (item.getAttribute('href').replace('.', '') === currentPath) {
    item.classList.add('current');
  } else {
    item.classList.remove('current');
  }
});
