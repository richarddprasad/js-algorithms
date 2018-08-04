// Returns the sum of all prime number up to and including num

// TODO: Massive code cleanup and add comments

function sumPrimes(num) {
    let primes = new Array(num + 1);
    primes[2] = 1;
  
    // Assume all odd numbers are prime
    for(let i = 3; i < primes.length; i++) {
      if(i % 2 === 0) {
        primes[i] = 0;
      } else {
        primes[i] = 1;
      }
    }
    console.log("*************1**************");
  
    // for(let i = 2; i < primes.length; i++) {
    //   if(primes[i] === 1) {
    //     console.log(i);
    //   }
    // }
  console.log("*************2**************");
    
    const max = Math.floor(Math.sqrt(num));
  
  console.log("*************3**************");
    
    console.log("num, max: " + num + ", " + max);
    
    console.log("*************4**************");
    
    for(let i = 3; i <= max; i += 2) {
      for(let j = i; j <= num; j += 2) {
        // console.log("i, j, i*j: ", i, j, i*j);
        primes[i*j] = 0;
      }
    //   console.log("i = " + i);
    }
  
  console.log("*************5**************");
    
    // for(let i = 2; i < primes.length; i++) {
    //   if(primes[i] === 1) {
    //     console.log(i);
    //   }
    // }
  
    let sum = 0;
    for(let i = 2; i < primes.length; i++) {
      if(primes[i] === 1) 
      sum += i;
    }
    console.log("num, sum: ", num, sum);
    return sum;
  }
  
  sumPrimes(10);
  sumPrimes(977);