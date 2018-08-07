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

    let userChange = [];

    let state = STATES.open;
    // console.log("Drawer State: ", state);
    
    // console.log("price: ", price);
    // console.log("cash: ", cash);
    // console.log("drawer: \n", cid);
    
    let change = cash - price;
    // console.log("\nChange due: ", change);

    //console.log("TEST: ", cid[0][0]);

    console.log("Change due is: ", change);
    console.log("Drawer starting with: ", cid);


    while(change > 0) {
        
        // console.log(cid);
        // console.log("Change before: ", change);

        if(change >= 100 && cid[DRAWER.ONE_HUNDRED][1] >= 100) {
            cid[DRAWER.ONE_HUNDRED][1] -= 100;
            change -= 100;
            continue;
        } else if(change >= 20 && cid[DRAWER.TWENTY][1] >= 20) {
            cid[DRAWER.TWENTY][1] -= 20;
            change -= 20;
            continue;
        } else if(change >= 10 && cid[DRAWER.TEN][1] >= 10) {
            cid[DRAWER.TEN][1] -= 10;
            change -= 10;
            continue;
        } else if(change >= 5 && cid[DRAWER.FIVE][1] >= 5) {
            cid[DRAWER.FIVE][1] -= 5;
            change -= 5;
            continue;
        } else if(change >= 1 && cid[DRAWER.ONE][1] >= 1) {
            cid[DRAWER.ONE][1] -= 1;
            change -= 1;
            continue;
        } else if(change >= 0.25 && cid[DRAWER.QUARTER][1] >= 0.25) {
            if(!userChange["QUARTER"]) {
                userChange["QUARTER"] = "QUARTER";
                userChange["QUARTER"][1] = 0.0;
            }
            userChange["QUARTER"][1] += 0.25;
            cid[DRAWER.QUARTER][1] -= 0.25;
            change -= 0.25;
            continue;
        } else if(change >= 0.1 && cid[DRAWER.DIME][1] >= 0.1) {
            cid[DRAWER.DIME][1] -= 0.1;
            change -= 0.1;
            continue;
        } else if(change >= 0.05 && cid[DRAWER.NICKEL][1] >= 0.05) {
            cid[DRAWER.NICKEL][1] -= 0.05;
            change -= 0.05;
            continue;
        } else if(change >= 0.009 && cid[DRAWER.PENNY][1] >= 0.01) {
            cid[DRAWER.PENNY][1] -= 0.01;
            change -= 0.01;
        } else {
            state = STATES.insufficient;
            console.log("CANNOT MAKE CHANGE");
            break;
        }
        
        // if(checkDrawer(cid)) {
        //     break;
        // }

        // console.log(cid);
        // console.log("Change after: ", change);
        

    }

    console.log("Change is now: ", change);
    console.log("Drawer is now: ", cid);
    console.log("State: ", state);
    console.log("User Change: ", userChange)
    console.log("*********************");
    


    return change;
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
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
