export function render(state) {
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
                <button class="button-favourite">
                    <i class="fas fa-heart"></i> <span>В избранное</span>
                </button>

                <!-- В Избранном -->
                <button class="button-favourite button-favourite--active">
                    <i class="fas fa-heart"></i> <span>В избранном</span>
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

    console.log(state);

    appContainer.insertAdjacentHTML('beforeend', markup);
}