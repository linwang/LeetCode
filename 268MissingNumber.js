//input: an array of nums of n distinct numbers [0,n]
//output: int, missing number in array

//requirements:
//nums have to be unique
//only 1 missing num in range
// 0 <= num <= n
// n >= 1

const INVALID_INPUT = -1;
function getMissingNumber(nums) {
  if(nums == null || nums.length === 0) {
    return INVALID_INPUT;
  }
  //traverse each number in nums
  //what number are in nums?
  //save the numbers in an array[num]
  //traverse array[num] and find the one with undefined value
  //T O(n) S O(n)
  //I can caluculate the sum of 0 to n; n * (n + 1)/2
  //then subtract every number I encounter and final result is the
  //missing number
  //T O(n) S O(1)

  let sum = nums.length * (nums.length + 1)/2;
  for(let num of nums) {
    if(isNaN(num)) {
      return INVALID_INPUT;
    }
    if(sum < 0) {
      return INVALID_INPUT;
    }
    sum -= num;
  }
  return sum;
}

console.log(getMissingNumber(null));
console.log(getMissingNumber([]));
console.log(getMissingNumber([2]));
console.log(getMissingNumber([1,'a']));

console.log(getMissingNumber([1]));
console.log(getMissingNumber([0,1]));
console.log(getMissingNumber([1,0,3,4]));
console.log(getMissingNumber([9,6,4,2,3,5,7,0,1]));
