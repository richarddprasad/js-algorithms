// Decodes a string encoded using a Caesar Ciper;
// each character was shifted by 13

function rot13(str) { // LBH QVQ VG!
  
    let rv = str.split("").map(character => {
      if(isLetter(character)) {
        character = convertLetter(character);
      }
      return character;
    }).join("");
  
    console.log("Coded String: " + str);
    console.log("Decoded String: " + rv);
  
    return rv;
  }
  
  function isLetter(c) {
    let t = c.charCodeAt(0);
    return t >= 65 && t <= 90;
  }
  
  function convertLetter(c) {
    let t = c.charCodeAt(0);
    t -= 13;
    t = (t < 65) ? t + 26 : t;
    return String.fromCharCode(t);
  }
  
console.log(rot13("SERR PBQR PNZC")); //should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); //should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?")); //should decode to FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.