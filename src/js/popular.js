import TastyTreatsAPI from './API-request/popular-request';
import { openModal } from './modal-recipes';
const getRequest = new TastyTreatsAPI();
const refs = {
  list: document.querySelector('.popular-recipes-list'),
  list_mobile: document.querySelector('.popular-list.popular-recipes-mobile'),
  modal: document.querySelector('[data-modal]'),
};

refs.list.addEventListener('click', fetchModal);

async function fetchPopular() {
  const recipes = await getRequest.getRecipesData();
  console.log(recipes);
  const markup = recipes
    .map(el => {
      return `<li class="popular-recipes-item" data-id="${el._id}">
      <div class="popular-recipes-wraper">
        <img
          class="popular-recipes-img"
          src="${el.preview}"
          alt="${el.title}"
          loading="slow"
        />
      </div>
      <div class="popular-container-def">
        <h3 class="popular-recipes-title">${el.title}</h3>
        <p class="popular-recipes-description">${el.description}</p>
      </div>
    </li>`;
    })
    .join('');
  refs.list.insertAdjacentHTML('afterbegin', markup);
}
fetchPopular();

async function fetchModal() {
  const recipes = await getRequest.getRecipesData();
  console.log(recipes);
  const calls = recipes.map(el => {
    refs.list.addEventListener('click', openModal(`${el._id}`));
  });
}