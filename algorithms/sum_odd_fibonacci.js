// Sums all odd fibonacci sequence numbers up to
// and including "num"

function sumFibs(num) {
    if(num === 1) {
      return 1;
    }
    
    let sum = 2;
    let temp;
  
    for(let i = 1, j = 1; j <= num; ) {
      let t = i + j;
      if(t % 2 !== 0 && t <= num) {
        sum += t;
      }  
      
      temp = i;
      i = j;
      j += temp;
    }
    
    console.log("num, sum: ", num, sum);
  
    return sum;
  }
  
sumFibs(1000); //should return 1785.
sumFibs(4000000); //should return 4613732.
sumFibs(4); //should return 5.
sumFibs(75024); //should return 60696.
sumFibs(75025); //should return 135721.