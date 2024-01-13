

export default class Navigator{
    constructor(navSelector, arrSelectors) {
        this.arrSelectors = arrSelectors;
        this.arrBtns = [];
        const nav = document.querySelector(navSelector);

        this.hideAll();
        this.arrSelectors.map((selector) =>{
            let btn = this.createBtn(selector);
            this.arrBtns.push(btn);
        })
        nav.append(...this.arrBtns);
    }

    hideAll = () => {
        this.arrSelectors.forEach(selector => {
            let temp = document.querySelector(selector);
            if(!temp.classList.contains('hide'))
                temp.classList.add('hide');
        })
    }

    createBtn = (selector) => {
        const btn = document.createElement('li');
        btn.className = 'nav-item';
        btn.innerHTML = `<label class="nav-link">${createDescr(selector)}</label>`;
        btn.onclick = () => {
            this.hideAll();
            document.querySelector(selector).classList.remove('hide');
            this.deactiveAllBtns();
            btn.classList.add('active');
        }
        return btn;
    }
}

function createDescr(string) {
    const words = string.split('');
    console.log(words);
    const newWords = words.map((word) => {
        if (!(word === '#')) {

            if (word.toUpperCase() === word) {
                return ` ${word.toLowerCase()}`;
            } else {
                return word;
            }
        }
    });
    return newWords.join("");

}