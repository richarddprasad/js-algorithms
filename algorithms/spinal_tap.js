'use strict';

// TODO: Rewrite, this is not practical using array helper methods

const tests = [
    "This Is Spinal Tap",
    "thisIsSpinalTap",
    "The_Andy_Griffith_Show",
    "Teletubbies say Eh-oh",
    "AllThe-small Things"
];

function spinalCase(str) {
    let s = str.split("");
    // First change an initial uppercase letter to lowercase
    if (isUpperCase(s[0])) {
        s[0] = s[0].toLowerCase();
    }
   
    return s.map(c => {
        
        // Is the character an uppercase letter?
        if (isUpperCase(c)) {
            c = String.fromCharCode(c.charCodeAt(0) + 32);
        }
   
        // Is the character a space?
        if(c === ' ') {
            c = '-';
        }

        return c;

    }).filter(c => c !== ' ' && c !== '_').join("");
}

function isUpperCase(c) {
    let charCode = c.charCodeAt(0);
    return charCode >= 65 && charCode <= 90;
}

tests.forEach(s => console.log(spinalCase(s)));