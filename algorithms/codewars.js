// Printer Errors
function printerError(s) {
  let errors = s.match(/[^a-m]/ig);
  return `${errors !== null ? errors.length : 0}/${s.length}`;
}

/********************************************************/

// Mumbling
function accum(s) {
  return s.split("").map((el, idx) => {
    let t = el.repeat(idx + 1).toLowerCase();
    t = t[0].toUpperCase().concat(t.slice(1));

    if (idx < s.length - 1) {
      t = t.concat('-');
    }

    return t;
  }).join("");
}

/********************************************************/

// Two to One
function longest(s1, s2) {
  let t = s1.concat(s2);
  let rv = [];

  t.split("").forEach(el1 => {
    if (!rv.some(el2 => el1 === el2)) {
      rv.push(el1);
    }
  });

  return rv.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1
    } else {
      return 0;
    }
  }).join("");
}

// Clever solution
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

/********************************************************/

// Find The Parity Outlier
function findOutlier(integers){
  let evens = integers.filter(n => n % 2 == 0);
  let odds = integers.filter(n => n % 2 != 0);
  
  return evens.length == 1 ? evens[0] : odds[0];
}


/********************************************************/
// Replace with Alphabet Position
function alphabetPosition(text) {
  return text.toLowerCase().match(/[a-z]/g).map(c => c.charCodeAt(0) - 96).join(" ");
}

/********************************************************/

// INCORRECT SOLUTION: MISREAD PROBLEM; SEE NEXT
// Sum of Digits / Digital Root

function digital_root(n) {
  console.log("Passed in: ", n);
  
  
  let t = [];
  
  function isolateDigits(n) {
    // Base Case
    if(n < 10) {
      t.push(n);
      return n;
    }
    
    // General Case
    console.log("n: ", n);
    let m = n - 10 * isolateDigits(Math.floor(n/10));
    console.log("m: ", m);
    t.push(m);
    return n;
  }
  

  isolateDigits(n);
  
    console.log(n, t);
  
  return t.reduce((acc, cur) => acc + cur, 0);
}

/********************************************************/

// Sum of Digits / Digital Root

/********************************************************/

/********************************************************/
