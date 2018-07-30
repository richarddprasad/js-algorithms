'use strict';

function randomNumbers(count, high, low) {
    let rv = [];
    for(let i = 0; i < count; i++) {
        rv.push(Math.floor(Math.random() * (high-low + 1) + low));
    }
    return rv;
}

let test1 = randomNumbers(10, 9, 2);
console.log(test1);