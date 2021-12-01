//input: a numerator and a denominator
//output: a fraction in decimal form 1.666... => 1.(6)

function getDecimal(num, denom) {
  if(num == null || denom == null || denom === 0 || isNaN(num) || isNaN(denom)) {
    return null;
  }

  //decimal form: 20/3 = 6.(6)
  //first: num before period = Math.floor(num/denom), then remainder = num%denom,
  //output = `${numBeforePeriod}.`;
  let sign = num < 0? -1 : 1;
  sign *= denom < 0? -1 : 1;
  sign = sign === -1? '-':'';

  num = Math.abs(num);
  denom = Math.abs(denom);
  let numBeforePeriod = `${Math.floor(num/denom)}`;
  let remainder = num % denom;
  let hash = {};

  let numAfterPeriod = '';
  while(remainder !== 0) {
    if(hash[remainder] != null) {
      numAfterPeriod = `(${numAfterPeriod})`;
      break;
    }
    hash[remainder] = numAfterPeriod.length;
    let digit = Math.floor(remainder * 10 / denom);
    numAfterPeriod = `${numAfterPeriod}${digit}`;
    remainder = remainder * 10 % denom;
  }

  if(parseInt(numBeforePeriod) === 0 && numAfterPeriod.length === 0) {
    return numBeforePeriod;
  }
  if(numAfterPeriod.length === 0) {
    return `${sign}${numBeforePeriod}`;
  }

  return `${sign}${numBeforePeriod}.${numAfterPeriod}`;
}

console.log(getDecimal(0, 1));//0
console.log(getDecimal(10, 2));//5
console.log(getDecimal(11, 2));//5.5
console.log(getDecimal(2, 3));//0.(6)

console.log(getDecimal(0, -1));//0
console.log(getDecimal(-10, 2));//-5
console.log(getDecimal(11, -2));//-5.5
console.log(getDecimal(-2, 3));//-0.(6)
