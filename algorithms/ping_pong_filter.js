'use strict';

// TODO: Implement correct solution

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function pingPongFilter(arr) {

    if (arr.length === 1) {
        console.log("Length 1: ", arr);
        return arr;
    }

    let t = [];

    for (let i = 1; i < arr.length; i += 2) {
        t.push(arr[i]);
        console.log(i, arr.length, arr);
    }

    console.log("t: ", t);

    pingPongFilter(t.reverse());

}

let result = pingPongFilter(arr);
console.log(result);