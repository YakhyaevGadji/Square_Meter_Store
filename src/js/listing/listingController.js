import * as view from './listingView';

export default function(state) {

    view.render();

    state.results.forEach((item) => {
        view.card(item, state.favourites.isFav(item.id));
    });

    addToFavsListener();

    state.emitter.subscribe('event:render-listing', () => {
        view.clearHtmlCardList();
        
        state.results.forEach((item) => {
            view.card(item, state.favourites.isFav(item.id));
        });

        addToFavsListener();
    });

    

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
