import Random from "./Random";

export default class FormHandler {
    constructor(selector) {
        this.formElement = document.querySelector(selector)
    }

    addHandler = (func) => {
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            let objData = {};
            const random = new Random();
            objData.id = random.getRandomNumber(1,1000);
            // console.log("Random!!!"+objData.id);
            // console.log(this.formElement);
            // console.log(this.formElement.elements);
            const data = Array.from(this.formElement.elements);
            // console.log(data);
            // console.log(data.filter(item => item.name))
            data.filter(item => item.name)
                .map(element => {
                    const {name, value} = element;
                    objData[name] = value;
                })
            console.log(objData)
            let res = func(objData);
            if (!res) e.target.reset();
        })

    }
}