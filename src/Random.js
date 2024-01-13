export default class Random {

    // Random number in Range
    getRandomNumber = function (min, max) {
        if (min >= max)
            throw new Error('Max must be greater than min');
        return min + Math.round(Math.random() * (max - min));
    }

    //Random element from array
    getRandomValue = function (array) {
        return array[this.getRandomNumber(0, array.length - 1)]
    }

}