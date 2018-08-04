'use strict';

//console.log();

const { randomNumbers, removeDuplicates, sortAscending } = require('./helpers.js');
const MIN = 7;
const MAX = 12;

//let arr = sortAscending(removeDuplicates(randomNumbers(20, MIN, MAX)));
let arr = sortAscending(randomNumbers(20, MIN, MAX));
console.log("Array contents: ");
console.log(arr);

let toRemove = sortAscending(removeDuplicates(randomNumbers(5, MIN, MAX)));
console.log("Will remove: ");
console.log(toRemove);

// PRE: a1 set of elements to be filtered
//      a2: list of elements to filter out of a1
// POST: A new array with elements from a1 matching elements in a2 removed
function removeElements(a1, a2) {
    let rv = [];
    a1.forEach(el1 => {
        if(!a2.some(el2 => el1 === el2)) {
            rv.push(el1);
        }
    });
    return rv;
}

console.log("After removal:");
console.log(removeElements(arr, toRemove));

// *************************************************
// Let's test out the new function after we've added it to the helpers.js module
const { removeElements : re2 } = require('./helpers.js');

let test2Unfiltered = sortAscending(removeDuplicates(randomNumbers(20, 1, 5)));
let test2ToRemove = sortAscending(removeDuplicates(randomNumbers(3, 1, 5)));

console.log("Testing function from external module...");
console.log(test2Unfiltered);
console.log(test2ToRemove)
console.log(re2(test2Unfiltered, test2ToRemove));