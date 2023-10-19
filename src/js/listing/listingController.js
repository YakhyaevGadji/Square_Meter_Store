import * as view from './listingView';

view.render();

export default function(state) {
    state.emitter.subscribe('event:render-listing', () => {
        console.log('Emitter Start!!');
        console.log(state.results);
    });
}