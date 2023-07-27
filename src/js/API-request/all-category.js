import axios from 'axios';

async function fetchCategories() {
  try {
    const response = await axios(
      'https://tasty-treats-backend.p.goit.global/api/categories'
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
async function fetchCategory(inputCategories) {
  try {
    const response = await axios(
      `https://tasty-treats-backend.p.goit.global/api/recipes?category=${inputCategories}`
    );
    const answers = response.data.results
    return answers;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export {fetchCategories, fetchCategory}