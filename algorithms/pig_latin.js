'use strict';

const tests = [
    "california",
    "paragraphs",
    "glove",
    "algorithm",
    "eight"
];

function translatePigLatin(str) {
    let sArr = str.split("");
    
    // Case 1: Starts with vowel
    if(isVowel(sArr[0])) {
      return sArr.join("").concat("way");
    }

    // Case 2: Starts with a consonant or consonant cluster
    
    // How long is the consonant cluster?
    let size = 1;
    for(let i = 1; i < sArr.length; i++) {
        if(!isVowel(sArr[i]))
        {
            size++;
        }
        else {
            break;
        }
    }

    // Build the new string
    let temp = sArr.splice(0, size).join("");
    return sArr.join("").concat(temp).concat("ay");
  }
  
  function isVowel(s) {
    let rv;
    switch(s) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        rv = true;
        break;
  
      default:
        rv = false;
    }
    return rv;
  }

  tests.forEach(s => console.log(translatePigLatin(s)));