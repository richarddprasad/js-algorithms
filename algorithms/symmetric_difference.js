// Finds the symmetric difference between multiple sets of numbers
// TODO: Check out more advanced solutions other people did:
//  https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-symmetric-difference/16086/37

function sym(args) {
    let data = [];
    for (let i = 0; i < arguments.length; i++) {
        data.push(arguments[i]);
    }
    console.log("Arguments Provided: ");
    console.log(data);

    // First, find the symmetric difference
    let rv = data[0];
    for (let i = 1; i < data.length; i++) {
        // What do we keep from the first array?
        let temp1 = rv.filter(el1 => !data[i].some(el2 => el1 === el2));
        console.log("temp1: ");
        console.log(temp1);

        // What do we keep from the next array?
        let temp2 = data[i].filter(el1 => !rv.some(el2 => el1 === el2));
        console.log("temp2: ");
        console.log(temp2);

        // Merged retained values
        rv = temp1.concat(temp2);
        console.log("rv current state: ");
        console.log(rv);
    }

    // Now, let's remove duplicates
    let temp = [];
    rv.forEach(el1 => {
        if (!temp.some(el2 => el1 === el2)) {
            temp.push(el1);
        }
    });
    rv = temp;

    // Finally, let's sort the output
    rv = rv.sort((a, b) => a - b);

    console.log("Return Value: ", rv.length);
    console.log(rv);

    console.log("\n*******************************\n");


    return rv;
}

sym([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5].
sym([1, 2, 3, 3], [5, 2, 1, 4]); //should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4, 5]); //should return [3, 4, 5].
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should return [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should return [1, 4, 5].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should return [1, 2, 4, 5, 6, 7, 8, 9].
