function telephoneCheck(str) {
    //const regex = /1?\s?[(]?(\d{3})[)]?[-|\s]?\1[-|\s]?\d{4}/;
    //const regex = /[1]?\s?[(](?=\d{3}[)])\d{3}[)]?[-|\s]?\d{3}[-|\s]?\d{4}/;
    //const regex = /1?[\s]?[(]?\d{3}[)]?[-]?[\s]?\d{3}[-|\s]?\d{4}/;
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s|-]?\d{3}[\s|-]?\d{4}$/;
    let result = str.match(regex);
    let isValid = regex.test(str);

    console.log(str, " | ", result, " | ", isValid);

    return isValid;
}

// Tests that should pass
console.log("TESTS THAT SHOULD PASS");
console.log(telephoneCheck("1 555-555-5555")); //should return true.
console.log(telephoneCheck("1 (555) 555-5555")); //should return true.
console.log(telephoneCheck("5555555555")); //should return true.
console.log(telephoneCheck("555-555-5555")); //should return true.
console.log(telephoneCheck("(555)555-5555")); //should return true.
console.log(telephoneCheck("1(555)555-5555")); //should return true.
console.log(telephoneCheck("1 555 555 5555")); //should return true.
console.log(telephoneCheck("1 456 789 4444")); //should return true.
console.log("**********************************************");

// Tests that should fail
console.log("TESTS THAT SHOULD FAIL");
console.log(telephoneCheck("555-5555")); //should return false.
console.log(telephoneCheck("5555555")); //should return false.
console.log(telephoneCheck("1 555)555-5555")); //should return false.
console.log(telephoneCheck("123**&!!asdf#")); // return false.
console.log(telephoneCheck("55555555")); //should return false.
console.log(telephoneCheck("(6054756961)")); //should return false
console.log(telephoneCheck("2 (757) 622-7382")); //should return false.
console.log(telephoneCheck("0 (757) 622-7382")); // should return false.
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false
console.log(telephoneCheck("2 757 622-7382")); //should return false.
console.log(telephoneCheck("10 (757) 622-7382")); //should return false.
console.log(telephoneCheck("27576227382")); //should return false.
console.log(telephoneCheck("(275)76227382")); //should return false.
console.log(telephoneCheck("2(757)6227382")); //should return false.
console.log(telephoneCheck("2(757)622-7382")); //should return false.
console.log(telephoneCheck("555)-555-5555")); //should return false.
console.log(telephoneCheck("(555-555-5555")); //should return false.
console.log(telephoneCheck("(555)5(55?)-5555")); //should return false.