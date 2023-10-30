import FavouritesCards from "./favouritesCardsModel.js";
import * as view from './favouritesCardsView.js';

export default async function(state) {
    const favsList = state.favourites.favs;
   
    const favoritesModel = new FavouritesCards(favsList);
    
    await favoritesModel.getFavs();

    view.renderCards(favoritesModel.cards);

    addToFavsListener();

    function addToFavsListener() {
        Array.from(document.getElementsByClassName('card__like')).forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
    
                const currentId = event.target.closest('.card').dataset.id;
                
                state.favourites.toggleFav(currentId);
    
                view.activeFavInLike(event.target.closest('.card__like'), state.favourites.isFav(currentId));
            });
        });
    }
}