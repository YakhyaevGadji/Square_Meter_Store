export default class Filter {
    constructor() {}


    
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
}