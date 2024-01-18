import Company from "./company";
import Random from "./Random";
import EmployeesGenerator from "./employeeGenerator";
//import List from "./List";
import FormHandler from "./FormHandler";
import Navigator from "./Navigator";
import {TableCreator} from "./TableCreator";
import {table_col} from "./constants";

export const employers = new Company();
const random = new Random();
const gen = new EmployeesGenerator(random);
//const list = new List('ol');

const N_ORDER = 20;
new Navigator('.nav', ['#newEmployer','#listOfEmployers'])

const fHandler = new FormHandler('.form1');

const tabCreator = new TableCreator('#orders_tab', table_col);
fHandler.addHandler((employ) => {
    let res = employers.hire(employ);
    if (!res)
        tabCreator.fillRow(employ)
       // list.addItem('ol', JSON.stringify(employ))
    else
        alert(res);
    return res;
})


for (let i = 0; i < N_ORDER; i++) {
    let emp_new = gen.getRandomEmployee();
    employers.hire(emp_new);
    tabCreator.fillRow(emp_new);
}

employers.getAll().forEach(function (employer) {
    //list.addItem('ol', JSON.stringify(employer))
})
