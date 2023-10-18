export default class Filter {
    constructor() {
        this.query = '';
    }

    async getParams() {
        try {
            const link = 'https://jsproject.webcademy.ru/itemsinfo';
            const response = await fetch(link);
            const data = await response.json();
            this.params = await data;
        } catch (error) {
            alert(arror);
        }
    }

    async getResult() {
        try {
            const link = `https://jsproject.webcademy.ru/items${this.query}`;
            const response = await fetch(link);
            const responseData = await response.json();
            this.result = await responseData;
        } catch (error) {
            alert(error);
        }

    }
}
