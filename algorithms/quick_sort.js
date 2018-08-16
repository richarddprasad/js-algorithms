// TODO: Implement algorithm
// TODO: Test algorithm
// TODO: Sort and return copy instead of mutating original

// Quick sort algorithm using ??? partition scheme

// Helper function
function swap(a, b, arr) {
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}

function quickSort(arr, lo, hi) {
    let index;

    if (arr.length > 1) {
        index = partition(arr, lo, hi);
        console.log("index: ", index);

        if (lo < index - 1) {
            quickSort(arr, lo, index - 1);
        }

        if (index < hi) {
            quickSort(arr, index, hi);
        }
    }

    return arr;
}

function partition(arr, lo, hi) {
    let pivot = arr[Math.floor((hi + lo) / 2)];
    let i = lo, j = hi;

    while (i <= j) {

        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(i, j, arr);
            i++;
            j--;
        }

        return i;
    }
}

const unsorted = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
let sorted = quickSort(unsorted, 0, unsorted.length - 1);

console.log("\nUnsorted: ", unsorted, " | size: ", unsorted.length);
console.log("Sorted: ", sorted, " | size: ", sorted.length, "\n");

