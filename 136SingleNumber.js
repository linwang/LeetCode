//input: nums, array of ints
//output: integer, the only num which appears once in nums
//constraints: T = O(n) and S = O(1)

//sum? uniq + 2(rest of them) = sum of members in array
//
const INVALID_INPUT = 'INVALID_INPUT';
function getUniqueNumber(nums) {
  if(nums == null || nums.length === 0) {
    return INVALID_INPUT;
  }
  //use a hash of numbers, add when a num is first seen, remove
  //when a num is seen again
  //return the only number in the hash
  let unique = 0;
  for(let num of nums) {
    unique ^= num;
  }

  return unique;
}

console.log(getUniqueNumber(null));
console.log(getUniqueNumber([]));
console.log(getUniqueNumber([1,2]));
console.log(getUniqueNumber([1,1,2,2]));

console.log(getUniqueNumber([1]));
console.log(getUniqueNumber([1,1,2]));
console.log(getUniqueNumber([1,2,1]));
console.log(getUniqueNumber([1,2,2]));
