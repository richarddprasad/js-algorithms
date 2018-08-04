'use strict';

let arr = [];

// Generate some random numbers
for (let i = 0; i < 30; i++) {
    arr.push(Math.floor(Math.random() * 5) + 1);
}

console.log("Before removing duplicates:");
console.log(arr);

// The algorithm
let arr2 = [];
arr.forEach(el1 => {
    if (!arr2.some(el2 => el1 === el2)) {
        arr2.push(el1);
    }
});

console.log("After removing duplicates:");
console.log(arr2);

// Mark for garbage collection
arr = null;

// Sort final result to make it easier to examine
arr2.sort((a, b) => a - b);
console.log("Sorted results:");
console.log(arr2);
