// A series of Bubble Sort algorithms

// Helper function
function swap(a, b, arr) {
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
    delete t;
}

// arr: An array of values
function simplestBubbleSort(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                swap(i, j, arr);
            }
        }
    }
    return arr;
}

const test = [4, 8, 73, 12, 11, 14, 98, 29, 43, 42, 1, 2];
console.log("Unsorted: ", test, ", size: ", test.length);
let test1 = simplestBubbleSort(test);
console.log("Sorted: ", test1, ", size: ", test1.length);
