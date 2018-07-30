// @author: Richard D. Prasad
// @date: 30 Jul 2018
// @description: 

// TODO: Learn more about JS and Node modules to make this work

'use strict';

class NumberArray {
    constructor(count, low, high) {
        this.values = this.randomNumbers(count, low, high);
    }

    randomNumbers(count, low, high) {
        let rv = [];
        for (let i = 0; i < count; i++) {
            rv.push(Math.floor(Math.random() * (high - low + 1) + low));
        }
        return rv;
    }

    log() {
        console.log(this.values);
    }
}

module.exports.NumberArray = NumberArray;