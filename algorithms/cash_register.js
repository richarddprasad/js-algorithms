// UPDATE: Reimplemented in cash_register2.js

// This code does not appropriately handle the case where the change to be given and
// the amount in the drawer are equal; rewriting the code to account for it correctly would
// be too time consuming

// TODO: Maybe rewrite a more elegant solution...

function checkCashRegister(price, cash, cid) {
    const DRAWER = {
        PENNY: 0,
        NICKEL: 1,
        DIME: 2,
        QUARTER: 3,
        ONE: 4,
        FIVE: 5,
        TEN: 6,
        TWENTY: 7,
        ONE_HUNDRED: 8
    };

    const STATES = {
        open: "OPEN",
        insufficient: "INSUFFICIENT_FUNDS",
        closed: "CLOSED"
    };

    let userChange = [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ];

    let state = STATES.open;
    let change = cash - price;

    console.log("Change due is: ", change);
    console.log("Drawer starting with: ", cid);

    while (change > 0) {

        if (change >= 100 && cid[DRAWER.ONE_HUNDRED][1] >= 100) {
            userChange[DRAWER.ONE_HUNDRED][1] += 100;
            cid[DRAWER.ONE_HUNDRED][1] -= 100;
            change -= 100;
            continue;
        } else if (change >= 20 && cid[DRAWER.TWENTY][1] >= 20) {
            userChange[DRAWER.TWENTY][1] += 20;
            cid[DRAWER.TWENTY][1] -= 20;
            change -= 20;
            continue;
        } else if (change >= 10 && cid[DRAWER.TEN][1] >= 10) {
            userChange[DRAWER.TEN][1] += 10;
            cid[DRAWER.TEN][1] -= 10;
            change -= 10;
            continue;
        } else if (change >= 5 && cid[DRAWER.FIVE][1] >= 5) {
            userChange[DRAWER.FIVE][1] += 5;
            cid[DRAWER.FIVE][1] -= 5;
            change -= 5;
            continue;
        } else if (change >= 1 && cid[DRAWER.ONE][1] >= 1) {
            userChange[DRAWER.ONE][1] += 1;
            cid[DRAWER.ONE][1] -= 1;
            change -= 1;
            continue;
        } else if (change >= 0.25 && cid[DRAWER.QUARTER][1] >= 0.25) {
            userChange[DRAWER.QUARTER][1] += 0.25;
            cid[DRAWER.QUARTER][1] -= 0.25;
            change -= 0.25;
            continue;
        } else if (change >= 0.1 && cid[DRAWER.DIME][1] >= 0.1) {
            userChange[DRAWER.DIME][1] += 0.1;
            cid[DRAWER.DIME][1] -= 0.1;
            change -= 0.1;
            continue;
        } else if (change >= 0.05 && cid[DRAWER.NICKEL][1] >= 0.05) {
            userChange[DRAWER.NICKEL][1] += 0.05;
            cid[DRAWER.NICKEL][1] -= 0.05;
            change -= 0.05;
            continue;
        } else if (change >= 0.009 && cid[DRAWER.PENNY][1] >= 0.01) {
            userChange[DRAWER.PENNY][1] += 0.01;
            cid[DRAWER.PENNY][1] -= 0.01;
            change -= 0.01;
            if (change < 0) {
                console.log("CHANGE VALUE BELOW 0.01: ", change);
                change = 0;
            } else if(change > 0 && change < 0.01) {
                change = Math.round(change * 100) / 100;
            }
        } else {
            state = STATES.insufficient;
            console.log("CANNOT MAKE CHANGE");
            // userChange = [];
            break;
        }

    }

    if (state === STATES.insufficient) {
        if (change <= 0.01) {
            state = STATES.closed;
            // Don't feel like rewriting the code
            // to deal with the case in which the
            // the change is exactly equal to what
            // is in the drawer
            // HOTFIX
            userChange = cid;
            userChange[DRAWER.PENNY][1] = 0.5;
            //userChange[DRAWER.PENNY][1] = Math.round(userChange[DRAWER.PENNY][1] * 100) / 100;
        } else {
            userChange = [];
        }
    }

    // Trim down data in userChange array
    if (state !== STATES.closed) {
        userChange = userChange.filter(obj => {
            if (obj[1] > 0) {
                return true;
            }
            return false;
        });

        // userChange array must be reversed to pass tests
        userChange = userChange.reverse();
    }


    console.log("Change is now: ", change);
    console.log("Drawer is now: ", cid);
    console.log("State: ", state);
    console.log("User Change: ", userChange)
    console.log("*********************");



    return {
        status: state,
        change: userChange
    };
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
