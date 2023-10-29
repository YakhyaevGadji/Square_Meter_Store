export function render() {
    const markup = `<div class="cards-wrapper">
        <div class="container p-0 pt-5">
            <div class="row" id="card-container">
               
            </div>
        </div>
    </div>`;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
}

export function card(item, isFav) {
    const cardContainer = document.querySelector('#card-container');
    
    const markup = `<article class="col-md-4">
        <!-- card -->
        <a href="#/item/${item.id}" class="card" data-id="${item.id}">
        <div class="card__header">
            <div class="card__title">
                ЖК ${item.complex_name}
            </div>
            <div class="card__like ${isFav ? 'card__like--active' : ''}">
                <i class="fas fa-heart"></i>
            </div>
        </div>
        <div class="card__img">
            <img src="${item.image}" alt="План квартиры" />
        </div>
        <div class="card__desc">
            <div class="card__price">
                <div class="card__price-total">
                    ${item.price_total} ₽
                </div>
                <div class="card__price-per-meter">
                    ${item.price_sq_m} ₽/м2
                </div>
            </div>

            <!-- card__params params -->
            <div class="card__params params">
                <div class="params__item">
                    <div class="params__definition">
                        Комнат
                    </div>
                    <div class="params__value">${item.rooms}</div>
                </div>
                <div class="params__item">
                    <div class="params__definition">
                        Площадь
                    </div>
                    <div class="params__value">${item.square}</div>
                </div>
            </div>
            <!-- //card__params params -->
        </div>
        <div class="card__footer">
            <div class="card__art">${item.scu}</div>
            <div class="card__floor">Этаж ${item.floor} из ${item.floors_total}</div>
        </div>
        </a>
        <!-- // card -->
    </article>`;

    cardContainer.insertAdjacentHTML('beforeend', markup);
}

export function clearHtmlCardList() {
    const cardContainer = document.querySelector('#card-container');
    cardContainer.innerHTML = '';
}

export function activeFavInLike(item, isFav) {
    if(isFav) {
        item.classList.add('card__like--active');
    }else {
        item.classList.remove('card__like--active');
    }
}