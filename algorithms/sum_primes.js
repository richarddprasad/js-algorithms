// Returns the sum of all prime number up to and including num

// TODO: Massive code cleanup and add comments

function sumPrimes(num) {
  let primes = new Array(num + 1);
  primes[2] = 1;

  // Mark all evens after 2 as non-prime numbers;
  // assume all odd numbers are prime
  for (let i = 3; i < primes.length; i++) {
    if (i % 2 === 0) {
      primes[i] = 0;
    } else {
      primes[i] = 1;
    }
  }

  // Reduce the number of iterations the loops must run
  const max = Math.floor(Math.sqrt(num));

  // Find the remaining non-prime numbers, i.e.,
  // find non-prime odd numbers; what's left over
  // will be the prime numbers
  for (let i = 3; i <= max; i += 2) {
    for (let j = i; i*j <= num; j += 2) {
      //console.log("i, j, i*j: ", i, j, i * j);
      primes[i * j] = 0;
    }
  }

  // Now find the sum of all the prime numbers
  // from [2, num]
  let sum = 0;
  for (let i = 2; i < primes.length; i++) {
    if (primes[i] === 1)
      sum += i;
  }
  //console.log("num, sum: ", num, sum);
  return sum;
}

console.log("sumPrimes(10) = " + sumPrimes(10)); // should be 17
console.log("sumPrimes(977) = " + sumPrimes(977)); // should be 73156