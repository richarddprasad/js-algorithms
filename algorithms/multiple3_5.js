// TODO: Redo shorter solution

'use strict';

function multiples3Or5(n) {
    let nums = [];

    for(let i = 1; i * 3 < n; i++) {
        nums.push(i * 3);
    }
    console.log(nums);

    for(let i = 1; i * 5 < n; i++) {
        if(!nums.some(el => el % (i * 5) === 0)) {
            nums.push(i * 5);
        }
    }

    console.log(nums);

    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
}

multiples3Or5(10);
multiples3Or5(20);
