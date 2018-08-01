// An algorithm that finds the missing letter in a subset
// of a sequence of the alphabet; returns undefined if
// no letter is missing

function findMissingLetter(str) {
    let missing;
    for(let i = 0; i < str.length - 1; i++) {
      if(str.charCodeAt(i+1) - str.charCodeAt(i) > 1) {
        missing = str.charCodeAt(i) + 1;
        break;
      }
    }
    console.log("missing: " + missing);
    return missing ? String.fromCharCode(missing) : missing;
  }
  
console.log("abce");
console.log(findMissingLetter("abce"));

console.log("abcde");
console.log(findMissingLetter("abcde"));

