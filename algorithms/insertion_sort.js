// Insertion sort algorithm; does not mutate original dataset

// Helper function
function swap(a, b, arr) {
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
    delete t;
}

// Returns a sorted copy of the array
function insertionSort(arr) {
    let temp = arr.map(el => el);

    for(let i = 1; i < temp.length; i++) {
        let j = i;
        while(j >= 0 && temp[j-1] > temp[j]) {
            swap(j-1, j, temp);
            --j;
        }
    }
    return temp;
  }
  
  
  const testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

  console.log("Unsorted: ", testArr, " | size: ", testArr.length);
  let sorted = insertionSort(testArr);
  console.log("Sorted:   ", sorted, " | size: ", sorted.length);