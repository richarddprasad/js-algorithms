// Had to rewrite this code for submission

// Arrays "userChange", "cid", and "VALUES" are
// all put into the same order where appropriate
// to simplify the code

const STATES = {
    open: "OPEN",
    closed: "CLOSED",
    insufficient: "INSUFFICIENT_FUNDS"
};

// The most practical way to work with denomination values
// without resorting to a series of if-else statements
const VALUES = [
    ["ONE_HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
];

function checkCashRegister(price, cash, cid) {
    let state = undefined;

    console.log("Starting drawer contents: ");
    console.log(cid);

    let change = cash - price;
    console.log("Change Due: ", change);

    let drawerTotal = findDrawerTotal(cid);
    console.log("Drawer Total: ", drawerTotal);

    let userChange;

    // Case 1: Change and Drawer Total are equal
    if (change === drawerTotal) {
        state = STATES.closed;
        userChange = cid;
        console.log("Drawer out of change");
    }

    // Case 2: Change is greater than what's available in the drawer
    else if (change > drawerTotal) {
        state = STATES.insufficient;
        userChange = [];
        console.log("Drawer doesn't have enough money");
    }

    // Case 3A: Enough change in the drawer and can make change
    // Case 3B: Enough change in the drawer but cannot make change
    else {
        userChange = [
            ["ONE_HUNDRED", 0],
            ["TWENTY", 0],
            ["TEN", 0],
            ["FIVE", 0],
            ["ONE", 0],
            ["QUARTER", 0],
            ["DIME", 0],
            ["NICKEL", 0],
            ["PENNY", 0]
        ];
        state = pullChange(cid, change, userChange);

    }

    console.log("State: ", state);
    console.log("userChange: ");
    console.log(userChange);

    // If change couldn't be made even though
    // there was enough money in the drawer,
    // set userChange to an empty object
    // as per the test requirement
    if(state === STATES.insufficient) {
        userChange = [];
    }
    // Otherwise, we made the change and now
    // need to filter down the userChange object
    // as required per the test requirement
   else if(state === STATES.open) {
        userChange = userChange.filter(el => el[1] > 0);
   }

    let rv = {
        status: state,
        change: userChange
    };

    console.log("return value: ");
    console.log(rv);

    console.log("\n***********************\n");

    return rv;
}

function findDrawerTotal(cid) {
    return cid.reduce((acc, cur) => {
        acc += cur[1];
        return acc;
    }, 0);
}

function pullChange(cid, change, userChange) {
    // console.log("VALUES OBJECT: ");
    // console.log(VALUES);

    // cid array must be reversed to line up with userChange array
    // and satisfy test requirements
    cid = cid.reverse();
    // console.log("CID Reversed: ");
    // console.log(cid);

    for (let i = 0; i < cid.length; i++) {
        //console.log(cid[i][0], cid[i][1]);

        // If the denomination value is greater than the denomination value,
        // and the change amount is greater than the given
        // denomination...
        while (cid[i][1] >= VALUES[i][1] && change >= VALUES[i][1]) {

            userChange[i][1] += VALUES[i][1];
            cid[i][1] -= VALUES[i][1];
            change -= VALUES[i][1];

            // Deal with floating-point precision problems
            change = Math.round(change * 100) / 100;

            console.log("userChange Update: ")
            console.log(userChange);
            console.log("cid Update: ")
            console.log(cid);
        }

        // // While the change due is greater than the current denomination
        // while(change >= cid[i][1]) {
        //     // Remove currency of that denomination from the drawer
        //     if(!userChange[i]) {
        //         userChange.push([cid[i][0], 0.0]);
        //     }
        //     userChange[i][1] += cid[i][1];
        //     cid[i][1] -= 1;
        //     change -= 1;
        // }
    }

    console.log("FINAL CHANGE VALUE: ", (Math.round(change * 100) / 100));

    return change === 0 ? STATES.open : STATES.insufficient;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
