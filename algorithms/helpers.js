// @author: Richard D. Prasad
// @date: 30 Jul 2018
// @description: A series of helper functions to aid in writing and testing
//  JavaScript algorithms and data structures; all functions are written
//  such that they do not mutate the original arguments passed in

'use strict';

// TODO: Convert to ES6-style exports

// Returns an array of "count" random numbers, range [low, high]
module.exports.randomNumbers = (count, low, high) => {
    let rv = [];
    for (let i = 0; i < count; i++) {
        rv.push(Math.floor(Math.random() * (high - low + 1) + low));
    }
    return rv;
}

// Returns an array with all duplicates removed
module.exports.removeDuplicates = arr => {
    let arr2 = [];
    arr.map(el1 => {
        if (!arr2.some(el2 => el1 === el2)) {
            arr2.push(el1);
        }
    });
    return arr2;
}

// Returns a sorted array
module.exports.sortAscending = arr => {
    let rv = [];
    arr.map(el => rv.push(el));
    return rv.sort((a, b) => a - b);
}