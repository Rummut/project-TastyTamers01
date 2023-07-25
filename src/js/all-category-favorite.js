
import favoriteCards from '../filters';

const renderCardsList = document.querySelector('.hero-fav-render-cards');
const favoriteBtnList = document.querySelector('.hero-favorite-categories');
const heroFavoriteContent = document.querySelector('.hero-favorite-content');

if(renderCardsList.children.length === 0) {
    heroFavoriteContent.style.display = 'none';
} else {
    heroFavoriteContent.style.display = 'block';
}
