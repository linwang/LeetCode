//ugly num is a positive int whose prime factors are limited to 2, 3, and 5
//eg: 1, 2, 3, 5 are all ugly

function isUgly(num) {
  //validity of input
  //num must be a positive number
  if(num == null || num < 1 || isNaN(num)) {
    return false;
  }

  //try to divide num by 2, 3 or 5: if num% factor of factors [2, 3, 5] is 0, then it is a prime factor
  //isUgly(num/factor), try this until num is 1.
  //base case:
  //num === 1, return true;
  //num % 2 === 0, isUgly(num/2)
  //..%3 and % 5
  //num is not divisible by 2, 3, or 5, return false
  function isUglyRecursive(n) {
      if(n === 1) {
        return true;
      }
      const factors = [2, 3, 5];
      for(let factor of factors) {
        if(n%factor === 0){
          return isUglyRecursive(n/factor);
        }
      }
      return false;
  }

  return isUglyRecursive(num);
}

console.log(isUgly(null));
console.log(isUgly('a'));
console.log(isUgly(0));
console.log(isUgly(7));
console.log(isUgly(14));

console.log(isUgly(1));
console.log(isUgly(2));
console.log(isUgly(6));
console.log(isUgly(30));
console.log(isUgly(8));
console.log(isUgly(25));
