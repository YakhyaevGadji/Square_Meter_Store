export function render() {
    const markup = `<div class="cards-wrapper">
        <div class="container p-0">
            <div class="row" id="card-container">
               
            </div>
        </div>
    </div>`;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
}

export function cardContainer() {
    const markup = `<div class="panels-filter">
    <div
        class="panels-filter__element" style="width: 120px;">
        <div class="panels-filter__name no-filter">
            Артикул
        </div>
    </div>
    <div
        class="panels-filter__element" style="width: 160px;">
        <div class="panels-filter__name">ЖК</div>
    </div>
    <div
        class="panels-filter__element" style="width: 70px;">
        <div class="panels-filter__name no-filter">
            Корпус
        </div>
    </div>
    <div
        class="panels-filter__element" style="width: 70px;">
        <div class="panels-filter__name no-filter">
            Этаж
        </div>
    </div>
    <div
        class="panels-filter__element" style="width: 70px;">
        <div class="panels-filter__name">Комнат</div>
    </div>
    <div
        class="panels-filter__element" style="width: 80px;">
        <div class="panels-filter__name">Площадь</div>
    </div>
    <div
        class="panels-filter__element" style="width: 100px;">
        <div class="panels-filter__name">м2</div>
    </div>
    <div
        class="panels-filter__element" style="width: 100px;">
        <div class="panels-filter__name">Стоимость</div>
    </div>

    <div
        class="panels-filter__element" style="width: 100px;">
        <div class="panels-filter__name no-filter">
            Избранное
        </div>
    </div>
</div>`

    document.querySelector('#card-container').insertAdjacentHTML('beforeend', markup);
    
}

function formatNumber(num) {
    let numSplit, int, dec, newInt, resultNumber;
    
    num = Math.abs(num);
    
    num = num.toFixed(1); 

    numSplit = num.split("."); 
    
    int = numSplit[0]; 
    
    dec = numSplit[1]; 

    
    if ( int.length > 3) {
        newInt = "";

        for( var i = 0; i < int.length / 3; i++  ){
            newInt = "," + int.substring(int.length - 3 * (i + 1), int.length - 3 * i) + newInt;
        }

        if (newInt[0] === ",") {
            newInt = newInt.substring(1);
        }

    } else if ( int === "0") {
        newInt = "0";
    } else {
        newInt = int;
    }

    resultNumber = newInt + "." + dec;

    return resultNumber;
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
                    ${formatNumber(item.price_total)} ₽
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

export function cardRow(item, isFav) {
    const cardContainer = document.querySelector('#card-container');
    
    const markup = `
    <!-- panel -->
    <a href="#/item/${item.id}" class="panel" data-id="${item.id}">
        <div class="panel__artikul">ГЕН-112-42</div>
        <div class="panel__name">
            <div>ЖК ${item.scu}</div>
        </div>
        <div class="panel__block">${item.floors_total}</div>
        <div class="panel__floor">${item.floor}</div>
        <div class="panel__rooms">${item.rooms}</div>
        <div class="panel__sq">${item.square} м2</div>
        <div class="panel__price-per-m">${item.price_sq_m} ₽</div>
        <div class="panel__price">${item.price_total} ₽</div>
        <div class="panel__favourite">
            <button class="panel__favourite-btn ${isFav ? 'panel__favourite-btn--active' : 'panel__favourite-btn'}">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    </a>`;

    cardContainer.insertAdjacentHTML('beforeend', markup);
}

export function renderCardsList() {
    document.querySelector('#card-container').style.display = 'block';
}

export function renderCardsBlock() {
    document.querySelector('#card-container').style.display = 'flex';
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
export function activeFavInLikeRow(item, isFav) {
    if(isFav) {
        item.classList.add('panel__favourite-btn--active');
    }else {
        item.classList.remove('panel__favourite-btn--active');
    }
}