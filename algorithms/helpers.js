// @author: Richard D. Prasad
// @date: 30 Jul 2018
// @description: A series of helper functions to aid in writing and testing
//  JavaScript algorithms and data structures; all functions are written
//  such that they do not mutate the original arguments passed in

'use strict';

// TODO: Add proper annotations and comments to functions
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
    arr.forEach(el1 => {
        if (!arr2.some(el2 => el1 === el2)) {
            arr2.push(el1);
        }
    });
    return arr2;
}

// Returns a sorted array
module.exports.sortAscending = arr => {
    let rv = [];
    arr.forEach(el => rv.push(el));
    return rv.sort((a, b) => a - b);
}

// Returns an array with elements from a2 filtered out of a1
module.exports.removeElements = (a1, a2) => {
    let rv = [];
    a1.forEach(el1 => {
        if(!a2.some(el2 => el1 === el2)) {
            rv.push(el1);
        }
    });
    return rv;
}

// Returns an array containing objects from a1 with
// matching key-value pairs from object a2
module.exports.findObjects = (a1, a2) => {
    let a2Keys = Object.keys(a2);
    let rv = [];
    
    // Map over each element in the array a1
    rv = a1.filter(obj => {
        // Are all the key-value pairs in a2 present in a1?
        let present = true;
        a2Keys.forEach(key => {
            if(obj[key] !== a2[key]) {
                present = false;
            }
        });
        return present;
    });

    return rv;
}

// An algorithm that replaces a given word in a string
// with another, preserving the case of the original
// Note: This algorithm only takes into account the case in which
// the "before" word starts with an uppercase letter and the "after"
// word is assumed to start with a lowercase letter
// TODO: Take into account "before" being lowercase and 
//  "after" starting with uppercase (needing to be changed to lowercase)
module.exports.searchAndReplace = function(str, before, after) {
    // First, change the replacement word ("after")
    // to match the case of the original ("before")
    let temp;
    if (isUppercase(before.charCodeAt(0))) {
        temp = (String.fromCharCode(after.charCodeAt(0) - 32)).concat(after.slice(1));
    } else {
        temp = after;
    }
    //console.log(before, temp);

    return str.replace(before, temp);
}

// 65 = 'A', 90 = 'Z'
function isUppercase(c) {
    return c >= 65 && c <= 90;
}

module.exports.isUppercase = isUppercase;