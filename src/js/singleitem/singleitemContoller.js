import SingleItem from "./singleitemModel";
import * as view from './singleitemView'

export default async function(state) {
    state.singleItem = new SingleItem(state.routeParams);

    await state.singleItem.getItem();

    view.render(state.singleItem.result);

    document.querySelector('.button-order').addEventListener('click', () => {
        view.showModal();
    });

    document.querySelector('.modal__close').addEventListener('click', () => {
        view.closeModal();
    });

    document.querySelector('.modal-wrapper').addEventListener('click', (event) => {
        if(!event.target.closest('.modal')) {
            view.closeModal();
        }
    });

    document.querySelector('.modal__form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = view.getInput();
        await state.singleItem.getFormData(formData);

        if(state.singleItem.response.message === 'Bid Created') {
            view.closeModal();
        }else if(state.singleItem.response.message === 'Bid Not Created') {
            alert(state.singleItem.response.errors);
        }
    });

    document.querySelector('#addToFavourite').addEventListener('click', () => {
        state.favourites.toggleFav(state.singleItem.id);
        
    })
}