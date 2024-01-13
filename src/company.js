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

    fire = function (emloyer_id) {
        if (!this.data[emloyer_id])
            return false
        delete this.data[emloyer_id];
        return true
    }

    get = function (id) {
        return this.data[id]
    }

    getAll = function () {
        return Object.values(this.data);
    }

}