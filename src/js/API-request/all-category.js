import axios from 'axios';

export async function fetchCategories() {
  try {
    const response = await axios.get(
      'https://tasty-treats-backend.p.goit.global/api/categories'
    );
    return response.data;
  } catch (error) {
    console.error('Помилка під час отримання категорій:', error);
    return [];
  }
}
