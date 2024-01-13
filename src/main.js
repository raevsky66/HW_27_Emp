import Company from "./company";
import Random from "./Random";
import EmployeesGenerator from "./employeeGenerator";
import List from "./List";
import FormHandler from "./FormHandler";
import Navigator from "./Navigator";

const employers = new Company();
const random = new Random();
const gen = new EmployeesGenerator(random);
const list = new List('ol');

const N_ORDER = 20;
new Navigator('.nav', ['#newEmployer','#listOfEmployers'])

const fHandler = new FormHandler('.form1');

fHandler.addHandler((employ) => {
    let res = employers.hire(employ);
    if (!res)
        list.addItem('ol', JSON.stringify(employ))
    else
        alert(res);
    return res;
})


for (let i = 0; i < N_ORDER; i++) {
    console.log(gen.getRandomEmployee())
    employers.hire(gen.getRandomEmployee());
}

employers.getAll().forEach(function (employer) {
    list.addItem('ol', JSON.stringify(employer))
})
