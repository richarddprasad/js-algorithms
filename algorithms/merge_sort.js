// Merge sort algorithm
// TODO: Implement without using lists, i.e., Javascript Array objects

function mergeSort(arr) {
    // Base Case
    if(arr.length === 1) {
        return arr;
    }

    // General Case
    let left = [];
    let right = [];
    let mid = Math.floor(arr.length / 2);

    // Split arrays into two halves
    // for(let i = 0; i < arr.length; i++) {
    //     if(i < mid) {
    //         left.push(arr[i]);
    //     } else {
    //         right.push(arr[i]);
    //     }
    // }

    // Split using slice()
    left = arr.slice(0, mid);
    right = arr.slice(mid);

    // console.log("Left: ", left);
    // console.log("Right: ", right);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    let result = [];

    while(left.length > 0 && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while(left.length > 0) {
        result.push(left.shift());
    }
    while(right.length > 0) {
        result.push(right.shift());
    }
    
    return result;
}

const unsorted = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
let sorted = mergeSort(unsorted);

console.log("\nUnsorted: ", unsorted, " | size: ", unsorted.length);
console.log("Sorted: ", sorted, " | size: ", sorted.length, "\n");
