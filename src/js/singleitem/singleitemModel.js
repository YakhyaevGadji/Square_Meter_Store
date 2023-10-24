export default class SingleItem {
    constructor(id) {
        this.id = id
    }
    
    async getItem() {
        try {
            const link = `https://jsproject.webcademy.ru/items/${this.id}`;
            const response = await fetch(link);
            const data = await response.json();
            this.result = await data;
        } catch(error) {
            alert(error);
        }
    }

    async getFormData(formData) {
        const queryString = 'https://jsproject.webcademy.ru/bidnew';
        const dataJson = await fetch(queryString, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charser=UTF=8'
            },
            body: JSON.stringify(formData)
        });

        const data = await dataJson.json();
        this.response = data;
    }
}