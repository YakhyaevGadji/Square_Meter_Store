export default class Filter {
    constructor() {}


    async getParams() {
        const link = 'https://jsproject.webcademy.ru/itemsinfo';
        const response = await fetch(link);
        const data = await response.json();
        this.params = await data;
        console.log(this.params);
    }
}