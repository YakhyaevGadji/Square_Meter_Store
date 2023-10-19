export function render() {
    const markup = `<div class="cards-wrapper">
        <div class="container p-0">
            <div class="row">
                CARD TEST
            </div>
        </div>
    </div>`;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
}