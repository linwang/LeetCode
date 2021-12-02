//input: n, an integer
//output: count of prime numbers that are < n
//prime number: a natural number > 1 that is not a product
//of two smaller natural numbers.

//Brute force: O(n^2)
//for every integer 2 to n - 1, check to see if it is a prime number. O(n)
//to check if a number x is a prime number, see if x can be % by a number (2 - that num/2)
// and the remainder is 0, but / by such a number !== 1, if so then not prime O(n)
//an example: given n = 10, check 2, 3, 4, 5, 6, 7, 8, 9
//when checking 2, try 2 (2*1, yes prime)

//once a number is decided to be prime, mark its products < n in notPrimeCache
//as I go from 2 to up, I will successively mark all nonPrimes in cache, so checking 
//for isPrime is simply checking to see if it's in the notPrimeCache.

function getCountOfPrimes(n) {
  if(n == null || n < 3) return 0;
  let count = 0;
  let notPrimeCache = {};
  for(let num = 2; num < n; num++) {
    if(notPrimeCache[num] == null) {
      count++;
      for(let i = 2; i < n/num; i++) {
        notPrimeCache[num * i] = true;
      }
    }
  }
  return count;
}
console.log(getCountOfPrimes(null));//0
console.log(getCountOfPrimes(2));//0

console.log(getCountOfPrimes(3));//1
console.log(getCountOfPrimes(6));//3

console.log(getCountOfPrimes(11));//2,3,5,7
