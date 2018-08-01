// An algorithm that replaces a given word in a string
// with another, preserving the case of the original

'use strict';

const tests = [
    ["Let us go to the store", "store", "mall"],
    ["He is Sleeping on the couch", "Sleeping", "sitting"],
    ["This has a spellngi error", "spellngi", "spelling"],
    ["His name is Tom", "Tom", "john"],
    ["Let us get back to more Coding", "Coding", "algorithms"]
];

function searchAndReplace(str, before, after) {
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

function isUppercase(c) {
    return c >= 65 && c <= 90;
}

tests.forEach(el => {
    console.log(searchAndReplace(el[0], el[1], el[2]));
});