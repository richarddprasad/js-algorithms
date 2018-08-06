'use strict';

const tests = [
    "This Is Spinal Tap",
    "thisIsSpinalTap",
    "The_Andy_Griffith_Show",
    "Teletubbies say Eh-oh",
    "AllThe-small Things"
];

function spinalCase(str) {
    
    return str.split("").reduce((acc, cur) => {
        
        // Convert uppercase to lowercase
        if(isUpperCase(cur)) {
            cur = String.fromCharCode(cur.charCodeAt(0) + 32);

            // Prepend dash if necessary
            if(acc.length > 1 && acc[acc.length-1] !== '-') {
                cur = '-' + cur;
            }

        } else if(cur === ' ' || cur === '_') {
            cur = '-';
        }
        acc.push(cur);
        return acc;
    }, []).join("");
    
}

function isUpperCase(c) {
    let charCode = c.charCodeAt(0);
    return charCode >= 65 && charCode <= 90;
}

tests.forEach(s => console.log(s));
console.log("\n");
tests.forEach(s => console.log(spinalCase(s)));