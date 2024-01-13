
 export default class List {
        constructor(selector) {

            this.listElements = document.querySelector(selector)
        }

        addItem = function (selector, string) {
            const listElements = document.querySelector(selector);
            let element = document.createElement('li');
            element.textContent = string;
            this.listElements.append(element);
        }
    }