//input: num, an int
//output: single digit sum

const INVALID_INPUT = -1;
function reduceToSingleDigit(num){
  if(num == null || isNaN(num) || num < 0)
    return INVALID_INPUT;

  //while num > 9, add up all digits of num
  //return num
  const MIN_DOUBLE = 10;
  function sumOfDigits(num){
    if(num < MIN_DOUBLE) {
      return num;
    }
    else {
      return sumOfDigits(Math.floor(num/MIN_DOUBLE)) + num%MIN_DOUBLE;
    }
  }
  let counter = 0;
  while(num >= MIN_DOUBLE) {
    num = sumOfDigits(num);
    console.log(`Iteration ${counter++}: sum = ${num}`);
  }
  return num;
}
console.log(reduceToSingleDigit(null));
console.log(reduceToSingleDigit('ab'));
console.log(reduceToSingleDigit(-1));

console.log(reduceToSingleDigit(0));
console.log(reduceToSingleDigit(9));
console.log(reduceToSingleDigit(10));
console.log(reduceToSingleDigit(38));
console.log(reduceToSingleDigit(2304987234987));
