export function render() {
    const markup = `<div class="cards-wrapper">
        <div class="container p-0">
            <div class="row" id="card-container">
               
            </div>
        </div>
    </div>`;

    document.querySelector('#app').insertAdjacentHTML('beforeend', markup);
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