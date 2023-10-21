import SingleItem from "./singleitemModel";
import * as view from './singleitemView'

export default async function(state) {
    state.singleItem = new SingleItem(state.routeParams);

    await state.singleItem.getItem();

    view.render(state.singleItem.result);
}