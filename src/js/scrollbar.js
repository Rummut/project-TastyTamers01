import SmoothScrollbar from 'smooth-scrollbar';
import { fetchCategories } from '../js/API-request/all-category';

function createCategoryButton(category, onClick) {
  const button = document.createElement('button');
  button.textContent = category;
  button.classList.add('button-category');
  button.addEventListener('click', onClick);
  return button;
}

async function createCategoriesBlock() {
  const categoriesContainer = document.getElementById('categoriesContainer');
  const scrollContent = categoriesContainer.querySelector('.scroll-content');
  // Clear conteiner
  scrollContent.innerHTML = '';
  // Get category list from backend
  const categories = await fetchCategories();
  // Saving links to category buttons
  const categoryButtons = [];

  // Creating category buttons and adding them to the container
  categories.forEach(category => {
    const button = createCategoryButton(category.name, () => {
      setSearchQueryName(category.name);
      recipeContainer.innerHTML = '';
      searchImagesAndDisplay(1, searchOnCategory);

      const prevBtns = document.querySelectorAll('.isUse');
      prevBtns.forEach(button => {
        button.classList.remove('isUse');
        return;
      });

      button.classList.add('isUse');
    });

    categoryButtons.push(button);
    scrollContent.appendChild(button);
  });

  // Scrollbar initialization
  const scrollbar = SmoothScrollbar.init(categoriesContainer, {
    alwaysShowTracks: true,
  });
}

// Creating a block with a list of categories
const categoriesContainer = document.getElementById('categoriesContainer');
const scrollContent = document.createElement('div');
scrollContent.className = 'scroll-content';
categoriesContainer.appendChild(scrollContent);

// // Adding functionality to the button "All categories"
const allCategoriesButton = document.getElementById('allCategoriesButton');
allCategoriesButton.addEventListener('click', onClickAllCategoriesButton);
export function onClickAllCategoriesButton ({target}) {
  // Make a request to the backend to receive recipes of all categories
  setActiveClass(target);
  setSearchQueryName();
  recipeContainer.innerHTML = '';
  searchImagesAndDisplay(1, searchOnCategory);
  // Remove styling from all category buttons
  const categoryButtons = Array.from(
    document.querySelectorAll('.scroll-content button')
  );
  categoryButtons.forEach(button => {
    button.classList.remove('isUse');
  });
};

// Creating a block with a list of categories
createCategoriesBlock();

// Export Func
export function setActiveClass(btn = allCategoriesButton) {
  const prevBtns = document.querySelectorAll('.isUse');
  prevBtns.forEach(el => el.classList.remove('isUse'));
  btn.classList.add('isUse');
}
