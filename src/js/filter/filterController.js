import Filter from './filterModel';
import * as view from './filterView';

export default function(state) {
    // view.render();


    console.log(state);

    if(!state.filter) state.filter = new Filter();
   
   console.log(state.filter.getParams());
}