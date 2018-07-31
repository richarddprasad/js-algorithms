'use strict';

const { findObjects: findObjExt } = require('./helpers.js');

// const collection = [{ first: "Romeo", last: "Montague" },
// { first: "Mercutio", last: null },
// { first: "Tybalt", last: "Capulet" }
// ];

// const target = { last: "Capulet" };

const collection = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }];
const target = { "apple": 1, "cookie": 2 };

// Returns all objects from a1 that have matching keys
// and values with objects in a2
function findObjects(a1, a2) {
    console.log("a2 keys/values: ");
    let a2Keys = Object.keys(a2);
    let a2Values = Object.values(a2);
    a2Keys.forEach(key => console.log(key + ": " + a2[key]));

    let rv = [];
    // Map over each element in the array
    rv = a1.filter(obj => {


        // Are all the key-value pairs in a2 present in a1?
        let present = true;
        a2Keys.forEach(key2 => {
            if (obj[key2] !== a2[key2]) {
                present = false;
            }
        });
        return present;

    });

    console.log("Final result: ");
    //console.log(rv);

    return rv;
}

console.log(findObjects(collection, target));

console.log("\nTesting externally...");
console.log("Expecting: [{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1, \"bat\": 2, \"cookie\":2 }]");
const a1Test2 = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }];
const a2Test2 = { "apple": 1, "bat": 2 };

console.log("Final results: ");
console.log(findObjExt(a1Test2, a2Test2));
