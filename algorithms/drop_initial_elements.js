// Drops the initial set of elements that fail to satisfy
// the given test; when the first element that passes the test
// is found, it is retured, along with the remaining set of elements,
// which are not tested

function dropElements(arr, func) {
    // Find where we need to be
    let index = 0;
    while (!func(arr[index])) {
        index++;

        if(index >= arr.length) {
            break;
        }
    }

    console.log("arr: ", arr);
    console.log("index: ", index);
    //console.log(arr.slice(index));
    return index < arr.length - 1 ? arr.slice(index) : [];
}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })); //should return [3, 4].
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; })); //should return [1, 0, 1].
console.log(dropElements([1, 2, 3], function (n) { return n > 0; })); //should return [1, 2, 3].
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; })); //should return [].
console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })); //should return [7, 4].
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })); //should return [3, 9, 2].