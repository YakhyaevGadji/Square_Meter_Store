import Filter from './filterModel';
import * as view from './filterView';

export default async function(state) {
  
    if(!state.filter) state.filter = new Filter();
   
    await state.filter.getParams();

    view.render(state.filter.params);

    await state.filter.getResult();

    view.changeButtonText(state.filter.result.length);


    const filterForm = document.querySelector('#filter-form');
   
    filterForm.addEventListener('change', async (event) => {
        event.preventDefault();
        state.filter.query = view.getInput()
        await state.filter.getResult();
        view.changeButtonText(state.filter.result.length);
    });
}