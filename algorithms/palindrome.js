// Tests whether or not a given string is a palindrome

function palindrome(str) {
  
    // Remove non-alphanumeric characters
    let regex = /[a-z0-9]+/ig;
    let s = (str.match(regex)).join("");
    
    // Convert string to lowercase
    s = s.toLowerCase();
    
    let isPalindrome = true;
    for(let start = 0, end = s.length-1; start < end; start++, end--) {
      if(s[start] !== s[end]) {
        isPalindrome = false;
        break;
      }
    }
    console.log("\nOriginal string: " + str);
    console.log("\"" + s + "\"" + " is a palindrome? " + isPalindrome);
  
    return isPalindrome;
  }
  
  
  
console.log(palindrome("eye")); //should return a boolean.
console.log(palindrome("eye")); //should return true.
console.log(palindrome("_eye")); //should return true.
console.log(palindrome("race car")); //should return true.
console.log(palindrome("not a palindrome")); //should return false.
console.log(palindrome("A man, a plan, a canal. Panama")); //should return true.
console.log(palindrome("never odd or even")); //should return true.
console.log(palindrome("nope")); //should return false.
console.log(palindrome("almostomla")); //should return false.
console.log(palindrome("My age is 0, 0 si ega ym.")); //should return true.
console.log(palindrome("1 eye for of 1 eye.")); //should return false.
console.log(palindrome("0_0 (: /-\ :) 0-0")); //should return true.
console.log(palindrome("five|\_/|four")); //should return false.