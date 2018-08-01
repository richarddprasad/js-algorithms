'use strict';

// TODO: Rewrite, this is not practical using array helper methods;
//  use regex instead

const tests = [
    "This Is Spinal Tap",
    "thisIsSpinalTap",
    "The_Andy_Griffith_Show",
    "Teletubbies say Eh-oh",
    "AllThe-small Things"
];

function spinalCase(str) {
    // TODO: Use regex to do the split
    let s = str.split("");
    
}

function isUpperCase(c) {
    let charCode = c.charCodeAt(0);
    return charCode >= 65 && charCode <= 90;
}

tests.forEach(s => console.log(spinalCase(s)));