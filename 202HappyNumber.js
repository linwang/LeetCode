//input: n, an integer
//output: bool, is n a happy number
//constraints:
//a happy number is when the sum of the square of the digits of the number is
//eventually equal to 1.

//cases:
//n is a happy number, return true
//while loop, if sum of digits === 1, return true
//n is not a happy number, cycle forever, need to detect cycle
//keep a cache of the digits, if there is a repeat, return false

function isHappy(num) {
  if(num == null || num < 1) {
    return false;
  }
  const getSumOfSquareOfDigits = function(num) {
    let nextDigits = Math.floor(num/10);
    let sum = Math.pow(num%10, 2);
    if(nextDigits > 0) {
     sum +=getSumOfSquareOfDigits(nextDigits);
    }
    return sum;
  }

  let cache = {};//cache of sums
  let sum = num;
  while(true) {
    sum = getSumOfSquareOfDigits(sum);
    console.log(`sum is ${sum}`);
    if(sum === 1) {
      return true;
    }

    if(cache[sum] != null) {
      return false;
    }

    cache[sum] = 1;
  }
}
console.log(isHappy(null));
console.log(isHappy(0));

console.log(isHappy(1));
console.log(isHappy(2));
console.log(isHappy(11));
console.log(isHappy(19));
console.log(isHappy(45));
console.log(isHappy(1000));
