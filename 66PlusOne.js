//input: digits, an int array representing a large integer, no leading 0s
//output: increment the integer by 1 and return the resulting array of digits

const INVALID_INPUT = -1;
function increaseByOne(digits) {
  if(digits == null || digits.length === 0) {
    return INVALID_INPUT;
  }
  //cases:
  //last digit is 0 to 8, digits[i] +=1 only affects last digit
  //last digit is 9, 9+1 = 10, digits[i] = 0 and digits[i-1] += 1
  //i < 0, then need to add a digit to front of digits (unshift) and initialize
  //to 1
  //from i = digits.length - 1 to i = -1, i--
  //if(i === - 1) digits.unshift(1), return digits;
  //if(digits[i] < 9), digits[i] += 1, return digits
  //if(digits[i] === 9), digits[i] = 0

  for(let i = digits.length - 1; i >= -1; i--) {
    if(i === -1) {
      digits.unshift(1);
      return digits;
    }

    if(digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    if(digits[i] === 9) {
      digits[i] = 0;
      continue;
    }

    return INVALID_INPUT;
  }
  return INVALID_INPUT;
}

console.log(increaseByOne(null));//-1
console.log(increaseByOne([]));//-1
console.log(increaseByOne([15]));//-1

console.log(increaseByOne([8]));//9
console.log(increaseByOne([9]));//10

console.log(increaseByOne([9,9,9]));//1000
console.log(increaseByOne([9,9,1]));//992
console.log(increaseByOne([1,0,9]));//110

console.log(increaseByOne([4,3,2,1]));//4322
