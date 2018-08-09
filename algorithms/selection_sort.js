// Selection sort algorithm, does not mutate original dataset

// Helper function
function swap(a, b, arr) {
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}

function selectionSort(arr) {
    let temp = arr.map(el => el);

    for (let i = 0; i < temp.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < temp.length; j++) {
            if (temp[j] < temp[min]) {
                min = j;
            }
        } // end inner for

        if (min !== i) {
            swap(i, min, temp);
        }
    } // end outer for
    return temp;
}

const testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log("Unsorted: ", testArr, " | size: ", testArr.length);
let sorted = selectionSort(testArr);
console.log("Sorted:   ", sorted, " | size: ", sorted.length);