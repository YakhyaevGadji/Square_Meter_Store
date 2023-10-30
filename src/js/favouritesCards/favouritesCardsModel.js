export default class FavouritesCards {
    constructor(favsList) {
        this.favsList = favsList
    }

    async getFavs() {
        const chengLink = this.favsList.toString();
        const queryString = `https://jsproject.webcademy.ru/items?ids=${chengLink}`;
        const response = await fetch(queryString);
        const dataJson = await response.json();
        const data = await dataJson;
        this.cards = data;
    }
}