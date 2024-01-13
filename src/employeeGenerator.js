import {emloyersName, genders} from "./constants";

export default class EmployeesGenerator {
    constructor(random) {
        this.random = random;
    }


    getRandomEmployee = function () {
        return {
            id: this.random.getRandomNumber(1, 1000),
            name: this.random.getRandomValue(emloyersName),
            salary: this.random.getRandomNumber(10000, 20000),
            gender: this.random.getRandomValue(genders)
        }

    }
}

