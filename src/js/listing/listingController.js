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

    const blockAndRow = document.querySelector('#renderRowOrBlock'); 

    blockAndRow.addEventListener('click', (event) => {
        if(event.target.dataset.filter === 'block') {
            view.clearHtmlCardList();
            view.renderCardsBlock();
        
            state.results.forEach((item) => {
                view.card(item, state.favourites.isFav(item.id));
            });

            addToFavsListener();
        }else if(event.target.dataset.filter === 'row') {
            view.cardContainer();
            view.renderCardsList();
            
            view.clearHtmlCardList();

            state.results.forEach((item) => {
                view.cardRow(item, state.favourites.isFav(item.id));
            });
        }
        addToFavsListenerRow();
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
    function addToFavsListenerRow() {
        Array.from(document.getElementsByClassName('panel__favourite-btn')).forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
    
                const currentId = event.target.closest('.panel').dataset.id;
                
                state.favourites.toggleFav(currentId);
    
                view.activeFavInLikeRow(event.target.closest('.panel__favourite-btn'), state.favourites.isFav(currentId));
            });
        });
    }
}
