function updateInventory(arr1, arr2) {
    console.log("OLD INVENTORY");
    console.log(arr1);

    arr2.forEach(newItem => {
        if (!arr1.some(oldItem => oldItem[1] === newItem[1])) {
            console.log(newItem[1] + " not found in old inventory");
            arr1.push(newItem);
        } else {
            let oldItem;
            
            // Find the item to update
            for(let i = 0; i < arr1.length; i++) {
                if (arr1[i][1] === newItem[1]) {
                    oldItem = arr1[i];
                    break;
                }
            }

            oldItem[0] += newItem[0];
        }        
    });

    // To pass the test, inventory must be sorted
    arr1.sort((a, b) => {
        if(a[1] < b[1]) {
            return -1;
        }
        else if(a[1] > b[1]) {
            return 1;
        }
        else {
            return 0;
        }
    });

    console.log("NEW INVENTORY");
    console.log(arr1);
    console.log("\n************************\n");
    
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); //should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); //should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []); //should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]); //should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]); //should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].