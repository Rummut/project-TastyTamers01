import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';

function resizePage() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1280) {
    return 'per_page=9&limit=9';
  }

  if (screenWidth >= 768 && screenWidth < 1280) {
    return 'per_page=8&limit=8';
  }

  if (screenWidth < 768) {
    return 'per_page=6&limit=6';
  }
}

export async function searchOnTitle(searchQuery, page, time = "", area = "", ingredient = "") {
  const apiUrl = `${BASE_URL}?title=${searchQuery}&page=${page}&${resizePage()}&time=${time}&area=${area}&ingredient=${ingredient}`;

  try {
    const { data } = await axios.get(apiUrl);
    return data;
  } catch (error) {
    throw new Error('An error occurred while fetching images.');
  }
}

export async function searchOnCategory(searchQuery, page) {
  const apiUrl = `${BASE_URL}?category=${searchQuery}&page=${page}&${resizePage()}`;

  try {
    const { data } = await axios.get(apiUrl);
    return data;
  } catch (error) {
    throw new Error('An error occurred while fetching images.');
  }
}
