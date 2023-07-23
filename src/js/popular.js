import TastyTreatsAPI from './tasty-treats-api';
const getRequest = new TastyTreatsAPI();
const refs = {
    list: document.querySelector('.popular-recipes-list'),
    list_mobile: document.querySelector('.popular-list.popular-recipes-mobile'),
}

async function fetchPopular() {
    let r = await fetch('https://tasty-treats-backend.p.goit.global/api/recipes/popular');
    let arrayResp = await r.json();
    return arrayResp;
}

function renderPopular(arrayResp) {
    const markup = arrayResp.map(({ title, description, preview, _id }) => {
        return `
        
         <li class="popular-recipes-item" data-id="${_id}">
      <div class="popular-recipes-wraper">
        <img
          class="popular-recipes-img"
          src="${preview}"
          alt="${title}"
          loading="slow"
          height="64"
          width="64"
        />
      </div>
      <div class="popular-containet-def">
        <h3 class="popular-recipes-title">${title}</h3>
        <p class="popular-recipes-description">${description}</p>
      </div>
    </li>`;

    }).join('');

    refs.list.insertAdjacentHTML('beforeend', markup);
    refs.list_mobile.insertAdjacentHTML('beforeend', markup);
}

async function popularFetchAndRender() {
    const data = await fetchPopular();
    renderPopular(data);
}

popularFetchAndRender();


// no add event listener !!!!!!!