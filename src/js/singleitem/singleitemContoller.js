import SingleItem from "./singleitemModel";

export default function(state) {
    state.singleItem = new SingleItem(state.routeParams);

    state.singleItem.getItem();
}