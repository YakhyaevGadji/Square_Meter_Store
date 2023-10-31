import Filter from './filterModel';
import * as view from './filterView';

export default async function(state) {
  
    if(!state.filter) state.filter = new Filter();
   
    await state.filter.getParams();

    view.render(state.filter.params);

    await state.filter.getResult();

    state.results = state.filter.result;

    view.changeButtonText(state.filter.result.length);


    const filterForm = document.querySelector('#filter-form');
    const filterPrice = document.querySelector('#sort-cards-by');
   
    filterForm.addEventListener('change', async (event) => {
        event.preventDefault();
        state.filter.query = view.getInput()
        await state.filter.getResult();
        state.results = state.filter.result;
        view.changeButtonText(state.filter.result.length);
    });

    filterForm.addEventListener('reset', async () => {
        state.filter.query = '';
        await state.filter.getResult();
        state.results = state.filter.result;
        view.changeButtonText(state.filter.result.length);
    });

    filterForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        state.filter.query = '';
        await state.filter.getResult();
        // view.changeButtonText(state.filter.result.length);

        state.emitter.emit('event:render-listing', {});
    });

    filterPrice.addEventListener('change', () => {
        const priceArr = [];

        state.results.forEach((item) => {
            const price = Number(item.price_total);
            priceArr.push(price)
        });

        const priceMax = priceArr.sort((a, b) => b - a);
        console.log(priceMax);
    });
}