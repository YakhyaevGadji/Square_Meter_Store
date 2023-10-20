import * as view from './listingView';

view.render();

export default function(state) {

    state.results.forEach((item) => {
        view.card(item);
    });

    state.emitter.subscribe('event:render-listing', () => {
        view.clearHtmlCardList();
        
        state.results.forEach((item) => {
            view.card(item);
        });
    });
}
