function convertToRoman(num) {
    console.log("Converting " + num);

    let rv = [];
    while(num > 0) {
        if(num >= 1000) {
            rv.push('M');
            num -= 1000;
            continue;
        }
        else if(num > 900) {
            rv.push('CM');
            num -= 900;
            continue;
        }
        else if(num >= 500) {
            rv.push('D');
            num -= 500;
            continue;
        } else if(num >= 400) {
            rv.push('CD');
            num -= 400;
            continue;
        } else if(num >= 100) {
            rv.push('C');
            num -= 100;
            continue;
        } else if(num >= 90) {
            rv.push('XC');
            num -= 90;
            continue;
        } else if(num >= 50) {
            rv.push('L');
            num -= 50;
            continue;
        } else if(num >= 40) {
            rv.push('XL');
            num -= 40;
            continue;
        } else if(num >= 10) {
            rv.push('X');
            num -= 10;
            continue;
        } else if(num === 9) {
            rv.push('IX');
            num -= 9;
            continue;
        } else if(num >= 5) {
            rv.push('V');
            num -= 5;
            continue;
        } else if(num === 4) {
            rv.push('IV');
            num -= 4;
            continue;
        } else {
            rv.push('I');
            num -= 1;
            continue;
        } 
    }

    console.log("Result: " + rv.join("") + "\n");
    
    return rv.join("");
}

convertToRoman(36);
convertToRoman(2); //should return "II".
convertToRoman(3); //should return "III".
convertToRoman(4); //should return "IV".
convertToRoman(5); //should return "V".
convertToRoman(9); //should return "IX".
convertToRoman(12); //should return "XII".
convertToRoman(16); //should return "XVI".
convertToRoman(29); //should return "XXIX".
convertToRoman(44); //should return "XLIV".
convertToRoman(45); //should return "XLV"
convertToRoman(68); //should return "LXVIII"
convertToRoman(83); //should return "LXXXIII"
convertToRoman(97); //should return "XCVII"
convertToRoman(99); //should return "XCIX"
convertToRoman(400); //should return "CD"
convertToRoman(500); //should return "D"
convertToRoman(501); //should return "DI"
convertToRoman(649); //should return "DCXLIX"
convertToRoman(798); //should return "DCCXCVIII"
convertToRoman(891); //should return "DCCCXCI"
convertToRoman(1000); //should return "M"
convertToRoman(1004); //should return "MIV"
convertToRoman(1006); //should return "MVI"
convertToRoman(1023); //should return "MXXIII"
convertToRoman(2014); //should return "MMXIV"
convertToRoman(3999); //should return "MMMCMXCIX"
convertToRoman(10);