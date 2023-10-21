export default class SingleItem {
    constructor(id) {
        this.id = id
    }
    
    async getItem() {
        try {
            const link = `https://jsproject.webcademy.ru/items/${this.id}`;
            const response = await fetch(link);
            const data = await response.json();
            this.relult = await data;
        } catch(error) {
            alert(error);
        }
    }
}