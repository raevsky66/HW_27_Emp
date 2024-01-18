export default class Company {
    constructor() {
        this.data = {};
    }

    hire = function (emloyer) {
        if (!emloyer.id)
            throw new Error('Emloyer mast have id')
        if (this.data[emloyer.id])
            return 'Emloyer with id ' + emloyer.id + "already exist"
        this.data[emloyer.id] = emloyer;
        return false;
    }

    fire = function (employer_id) {
        if (!this.data[employer_id])
            return false
        delete this.data[employer_id];
        return true
    }

    // employer = function (id) {
    //     return this.data[id]
    // }

    getAll = function () {
        return Object.values(this.data);
    }

}