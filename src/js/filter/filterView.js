import 'url-search-params-polyfill';

const elements = {
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    filterRooms: document.getElementsByClassName('rooms__checkbox')
}

export function render(params) {

    let complexNames = ''
    params.complexNames.forEach((name) => {
        complexNames += `<option value="${name}">ЖК ${name}</option>`;
    });
    
    let roomValues = '';
    params.roomValues.forEach((name) => {
        roomValues += `<input name="rooms" type="checkbox" id="rooms_${name}" class="rooms__checkbox"
        value="${name}"/><label for="rooms_${name}" class="rooms__btn">${name}</label>`;
    });

    const markup = `<!-- Filter -->
    <form method="GET" class="container p-0" id="filter-form">
        <div class="heading-1">Выбор квартир:</div>
        <div class="filter">
            <div class="filter__col">
                <div class="filter__label">Выбор проекта:</div>
                <select name="complex" id="" class="filter__dropdown">
                    <option value="all">Все проекты</option>
                    ${complexNames}
                </select>
            </div>
            <div class="filter__col rooms">
                <div class="filter__label">Комнат:</div>
                <div class="rooms__wrapper">
                    ${roomValues}
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Площадь:</div>
                <div class="range__wrapper">
                    <label class="range">
                        <div for="" class="range__label">от</div>
                        <input
                            name="sqmin"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMin}"
                            value="${params.squareMin}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                    <label class="range">
                        <div for="" class="range__label">до</div>
                        <input
                            name="sqmax"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMax}"
                            value="${params.squareMax}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Стоимость:</div>
                <div class="range__wrapper">
                    <div class="range">
                        <label for="" class="range__label">от</label>
                        <input
                            type="number"
                            name="pricemin"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${params.priceMin}"
                            value="${params.priceMin}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                    <div class="range">
                        <label for="" class="range__label">до</label>
                        <input
                            type="number"
                            name="pricemax"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${params.priceMax}"
                            value="${params.priceMax}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter__buttons">
            <button class="filter__show">Показать объектов</button>
            <button class="filter__reset">Сбросить фильтр</button>
        </div>
    </form>
    <!-- // Filter -->`;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);

}

export function changeButtonText(number) {
    document.getElementsByClassName('filter__show')[0].innerText = `Показать ${number} объектов`;
}

export function getInput() {
    const searchParams = new URLSearchParams();

    if(elements.filterSelect[0].value !== 'all') {
        searchParams.append(elements.filterSelect[0].name, elements.filterSelect[0].value);
    }

    const rooms = [];

    Array.from(elements.filterRooms).forEach((checkbox) => {
        if(checkbox.value !== '' && checkbox.checked) {
            rooms.push(checkbox.value);
        }
    });

    const roomsString = rooms.join(',');
   
    if(roomsString !== '') {
        searchParams.append('rooms', roomsString);
    }
   
    const queryString = searchParams.toString();
    console.log(queryString);
}