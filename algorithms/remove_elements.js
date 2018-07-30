'use strict';

const { randomNumbers, removeDuplicates, sortAscending } = require('./helpers.js');
const MIN = 7;
const MAX = 12;

let arr = sortAscending(removeDuplicates(randomNumbers(20, MIN, MAX)));
console.log("Array contents: ");
console.log(arr);

let toRemove = sortAscending(removeDuplicates(randomNumbers(5, MIN, MAX)));
console.log("Will remove: ");
console.log(toRemove);
