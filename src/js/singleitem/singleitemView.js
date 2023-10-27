export function render(state, isFav) {
    const appContainer = document.querySelector('#app');
    appContainer.innerHTML = '';

    const markup = `<div class="container p-0">
    <div class="heading-1">
        ${state.title}, ${state.square} м2 за ${state.price_total} ₽
    </div>

    <!-- object -->
    <div class="object">
        <!-- object__photo -->
        <div class="object__photo">
            <div class="object__photo-wrapper">
                <img src="${state.image}" alt="" />
            </div>
        </div>
        <!-- // object__photo -->

        <!-- object__desc -->
        <div class="object__desc">
            <div class="object__desc-sector">
                ЖК ${state.complex_name}
            </div>

            <div class="object__desc-name">
                <div class="object__desc-title">
                    ${state.title}
                </div>
                <div class="object__desc-art">${state.scu}</div>

                <!-- Добавить в избранное -->
                <button class="button-favourite ${isFav ? 'button-favourite--active' : ''}" id="addToFavourite">
                    <i class="fas fa-heart"></i> <span>${isFav ? 'В избранном' : 'В избранное'}</span>
                </button>

               

            </div>

            <div class="object__desc-details">
                <!-- params -->
                <div class="params">
                    <div class="params__item">
                        <div class="params__definition">Корпус</div>
                        <div class="params__value">${state.building}</div>
                    </div>
                    <div class="params__item">
                        <div class="params__definition">Этаж</div>
                        <div class="params__value">${state.floor}</div>
                    </div>
                    <div class="params__item">
                        <div class="params__definition">Номер</div>
                        <div class="params__value">${state.flat_number}</div>
                    </div>
                    <div class="params__item">
                        <div class="params__definition">Комнат</div>
                        <div class="params__value">${state.rooms}</div>
                    </div>
                </div>
                <!-- // params -->
            </div>

            <div class="details">
                <div class="details__row">
                    <div class="details__name">Стоимость</div>
                    <div
                        class="details__value details__value--price"
                    >
                        ${state.price_total} ₽
                    </div>
                </div>
                <div class="details__row">
                    <div class="details__name">Цена за м2</div>
                    <div class="details__value">${state.price_sq_m} ₽/м2</div>
                </div>
                <div class="details__row">
                    <div class="details__name">Площадь</div>
                    <div class="details__value">${state.square} м2</div>
                </div>
            </div>

            <button class="button-order">Забронировать</button>
            <!-- <button class="button-preview">Записаться на просмотр</button> -->
        </div>
        <!-- // object__desc -->
    </div>
    <!-- // object -->
    </div>

        <div class="container">
        <a href="index.html" class="back-to-results"
            >← Вернуться к результатам поиска</a
        >
    </div>`;

    const markupModel = `<div class="modal-wrapper none">
    <div class="modal">
        <div class="modal__header">
            <div class="modal__title">
                Заявка на бронирование
            </div>
            <div class="modal__details">
                Квартира <span>96</span> в Первом квартале Дом 5
                <div class="modal__details-art">${state.scu}</div>
            </div>
        </div>

        <form class="modal__form">
            <div class="modal__form-content">
                <!-- formgroup -->
                <div class="formgroup">
                    <label
                        class="modal__form-input-label"
                        for="form-phone"
                    >
                        Имя
                    </label>
                    <input
                        type="text"
                        id="form-name"
                        class="modal__form-input"
                        placeholder="Введите имя"
                    />
                </div>
                <!-- // formgroup -->
                <!-- formgroup -->
                <div class="formgroup">
                    <label
                        class="modal__form-input-label"
                        for="form-phone"
                    >
                        Телефон
                    </label>
                    <input
                        type="text"
                        id="form-phone"
                        class="modal__form-input"
                        placeholder="+7 (XXX) XXX-XX-XX"
                    />
                </div>
                <!-- // formgroup -->

                <div class="formgroup formgroup--checkbox">
                    <input type="checkbox" id="policy" checked />
                    <label class="policy-text" for="policy"
                        >Я согласен на обработку моих персональных
                        данных. С Политикой в отношении обработки
                        персональных данных ознакомлен и
                        согласен.</label
                    >
                </div>
            </div>
            <input
                class="modal__submit"
                type="submit"
                value="Отправить заявку"
            />
        </form>
        <button class="modal__close">
            Закрыть
        </button>
        </div>
    </div>`

    appContainer.insertAdjacentHTML('beforeend', markup);
    appContainer.insertAdjacentHTML('beforeend', markupModel);
}


export function showModal() {
    document.querySelector('.modal-wrapper').classList.remove('none');
}

export function closeModal() {
    document.querySelector('.modal-wrapper').classList.add('none');
}

export function getInput() {
    const formData = {};

    formData.name = document.querySelector('#form-name').value;
    formData.phone = document.querySelector('#form-phone').value;
    
    return formData;
}

export function toggleActiveFav(isFav) {
    const btn = document.querySelector('#addToFavourite');

    if(isFav) {
        
        btn.classList.add('button-favourite--active');
        btn.querySelector('span').textContent = 'В избранном';
    }else {
        btn.classList.remove('button-favourite--active');
        btn.querySelector('span').textContent = 'В избранное';
    }
}