import {employers} from "./main";

export class TableCreator{
  //  #count = 1;
    constructor(selector, arrHeaders) {
        this.headers = arrHeaders;

        const tab = document.createElement('table');
        tab.className = 'w-100';
        this.tHeader = document.createElement('thead');
        this.tabBody = document.createElement('tbody');
        this.fillHeader();
        tab.append(this.tHeader,this.tabBody);
        document.querySelector(selector).append(tab);

    }

    fillHeader =  () => {
        const tRow = document.createElement('tr');
        tRow.className = 'row';

        this.headers.map(header =>{
            const temp = document.createElement('th');
            temp.className = 'col';
            temp.textContent = header;
            return temp;
        }).forEach(th => tRow.append(th));
        //-------insert cell for fire employer-----
        const del_cell = document.createElement('th');
        del_cell.className = 'col';
        del_cell.textContent = '';
        tRow.append(del_cell);

        this.tHeader.append(tRow);

    }

    fillRow = (data) => {
        const tRow = document.createElement('tr');
        tRow.className = 'row';
        //-------insert cell for employer number-----
        // const num_cell = document.createElement('td');
        // num_cell.className = 'col';
        // num_cell.textContent = this.#count.toString();
        // tRow.append(num_cell);
        // num_cell.onclick = () => {
        //     tRow.classList.add('table-success');
        // }

        this.headers.map(header => {
            const temp = document.createElement('td');
            temp.className = 'col';
            temp.textContent = data[header.toLowerCase()];
            return temp;
        }).forEach(td => tRow.append(td));
        //-------insert cell for remove btn number-----
        const del_cell = document.createElement('td');
        del_cell.className = 'col';
        //del_cell.innerHTML = 'X';
        del_cell.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
        del_cell.onclick = () => {
            tRow.remove();
            console.log(data)
            console.log(employers.getAll());
            employers.fire(data.id);
            console.log(employers.getAll());
        }
        tRow.append(del_cell);

        this.tabBody.append(tRow);

        // this.#count++;

        }
}