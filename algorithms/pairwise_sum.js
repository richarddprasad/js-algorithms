// Finds element pairs whose sum equal the second argument "arg"
// and return the sum of their indices.

function pairwise(arr, arg) {
    let total = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === -1) {
            continue;
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === -1) {
                continue;
            }
            if (arr[i] + arr[j] === arg) {
                console.log(i, j, arr);
                total = total + i + j;
                arr[i] = -1;
                arr[j] = -1;
                break;
            }
        }
    }
    console.log("arr: ", arr);
    console.log("total: ", total);

    return total;
}


pairwise([1, 4, 2, 3, 0, 5], 7); //should return 11.
pairwise([1, 3, 2, 4], 4); //should return 1.
pairwise([1, 1, 1], 2); //should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1); //should return 10.
pairwise([], 100); //should return 0.