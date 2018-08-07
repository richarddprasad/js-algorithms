// Nonfunctional; solution is telephone_validator2.js

function telephoneCheck(str) {
    let regex = /[0-9]+/g;
    let s = str.match(regex);
    let isValid;

    console.log("Input: " + str);
    console.log("Extracted: " + s);

    if (s.length === 1) {
        console.log("LENGTH = 1: " + str);

        let splitNum = s[0].split("");
        let size = splitNum.length;
        console.log("SIZE: " + size);
        if (size === 10 && splitNum.every(d => parseInt(d) >= 1 && parseInt(d) <= 9)) {
            console.log(size + " digits encountered in " + s);
            isValid = true;
        } else {
            isValid = false;
        }

    } else if (s.length === 3) {
        if (is3DigitNum(parseInt(s[0])) &&
            is3DigitNum(parseInt(s[1])) &&
            is4DigitNum(parseInt(s[2]))) {
            isValid = true;
        } else {
            isValid = false;
        }
    } else if (s.length === 4) {
        if (parseInt(s[0]) === 1 &&
            is3DigitNum(parseInt(s[1])) &&
            is3DigitNum(parseInt(s[2])) &&
            is4DigitNum(parseInt(s[3]))) {
            isValid = true;
        } else {
            isValid = false;
        }
    } else {
        isValid = false;
    }

    console.log(str + " | isValid: " + isValid);

    return isValid;
}

function is3DigitNum(n) {
    return n >= 100 && n <= 999;
}

function is4DigitNum(n) {
    return n >= 1000 && n <= 9999;
}

console.log(telephoneCheck("1 555-555-5555")); //should return true.
console.log(telephoneCheck("1 (555) 555-5555")); //should return true.
console.log(telephoneCheck("5555555555")); //should return true.
console.log(telephoneCheck("555-555-5555")); //should return true.
console.log(telephoneCheck("(555)555-5555")); //should return true.
console.log(telephoneCheck("1(555)555-5555")); //should return true.
console.log(telephoneCheck("555-5555")); //should return false.
console.log(telephoneCheck("5555555")); //should return false.

// FAILED  
console.log(telephoneCheck("1 555)555-5555")); //should return false.



console.log(telephoneCheck("1 555 555 5555")); //should return true.
console.log(telephoneCheck("1 456 789 4444")); //should return true.
console.log(telephoneCheck("123**&!!asdf#")); // return false.
console.log(telephoneCheck("55555555")); //should return false.

// Returns false, which is correct, but that is just a fluke; the code
// is returning false because of the zero (605...); must correct for
// this deficiency
console.log(telephoneCheck("(6054756961)")); //should return false


console.log(telephoneCheck("2 (757) 622-7382")); //should return false.
console.log(telephoneCheck("0 (757) 622-7382")); // should return false.

// FAILED
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false


console.log(telephoneCheck("2 757 622-7382")); //should return false.
console.log(telephoneCheck("10 (757) 622-7382")); //should return false.
console.log(telephoneCheck("27576227382")); //should return false.
console.log(telephoneCheck("(275)76227382")); //should return false.
console.log(telephoneCheck("2(757)6227382")); //should return false.
console.log(telephoneCheck("2(757)622-7382")); //should return false.

// FAILED
console.log(telephoneCheck("555)-555-5555")); //should return false.

// FAILED
console.log(telephoneCheck("(555-555-5555")); //should return false.


console.log(telephoneCheck("(555)5(55?)-5555")); //should return false.