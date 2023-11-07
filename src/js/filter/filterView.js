import 'url-search-params-polyfill';

const elements = {
    filterSelect: document.getElementsByClassName('filter__dropdown'),
    filterRooms: document.getElementsByClassName('rooms__checkbox'),
    filterFaild: document.getElementsByClassName('range__input'),
    filterSubmit: document.getElementsByClassName('filter__show')
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
            <button class="filter__reset" type="reset">Сбросить фильтр</button>
        </div>
        <div class="view-options-wrapper">
                <div class="container">
                    <!-- view-options -->
                    <div class="view-options">
                        <div class="view-options__sort">
                            <label
                                for="sort-cards-by"
                                class="view-options__label"
                                >Сортировать</label
                            >
                            <select
                                id="sort-cards-by"
                                name="sortby"
                                id=""
                                class="view-options__select"
                            >
                                <option value="priceASC">по цене ↑</option>
                                <option value="priceDESC">по цене ↓</option>
                                <option value="squareASC">по площади ↑</option>
                                <option value="squareDESC">по площади ↓</option>
                            </select>
                        </div>
                        <div class="view-options__type" id="renderRowOrBlock">
                            <!-- Cards -->
                            <input
                                type="radio"
                                class="view-options__radio"
                                name="displayType"
                                id="displayCards"
                                value="cards"
                                data-filter="cards"
                                checked
                            />
                            <label
                                for="displayCards"
                                class="view-options__type-item"
                            >
                                <i class="fas fa-th-large" data-filter="block"></i>
                            </label>
                            <!-- List -->
                            <input
                                type="radio"
                                class="view-options__radio"
                                name="displayType"
                                id="displayList"
                                value="list"
                                data-filter="row"
                            />
                            <label
                                for="displayList"
                                class="view-options__type-item"
                            >
                                <i class="fas fa-bars"></i>
                            </label>
                        </div>
                    </div>
                    <!-- // view-options -->
                </div>
            </div>
    </form>

    
    <!-- // Filter -->`;

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);

}

export function changeButtonText(number) {
    let messeg;

    if(number > 0) {
        messeg = `Показать ${number} объектов`;
    }else {
        messeg = 'Объекты не найдены, измените условия поиска';
    }

    elements.filterSubmit[0].innerText = messeg;

    if(number === 0) {
        elements.filterSubmit[0].disabled = true;
    }else {
        elements.filterSubmit[0].disabled = false
    }
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

    Array.from(elements.filterFaild).forEach((item) => {
        if(item.value !== '') {
            searchParams.append(item.name, item.value);
        }
    });
   
    const queryString = searchParams.toString();

    if(queryString) {
        return '?' + queryString;
    }else {
        return '';
    }
}