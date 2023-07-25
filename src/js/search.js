import debounce from 'lodash.debounce';
import { searchOnTitle } from '../js/categorySearch';
import Notiflix, { Loading } from 'notiflix';
import { setActiveClass, onClickAllCategoriesButton } from '../js/scrollbar';
import { fetchAreaRecipes, fetchIngredientsRecipes } from '../js/API-request/all-category';