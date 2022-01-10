//input: an array of integers, nums
//output: an array of triplets where
//requirements:
// nums[i] + nums[j] + nums[k] == 0
// i != j != k

const INVALID_INPUT = [];
function getThreeSumToZero(nums) {
  //invalid: nums == null, isNaN(nums[i])
  if(nums == null) {
    return INVALID_INPUT;
  }
  //go through nums, pick the first number nums[i], then
  //go through nums again, pick nums[j], then finally
  //go through nums again to pick nums[k]: if
  //sum is 0, then add to list of outputs
  //T O(n^3) S O(1)
  //can produce duplicate sets, i == j == k
  //To fix, make sure k > j > i

  //save nums to a map (key = number, value = index), then the search for k would be O(1)
  //if nums[k] exists and k > i and j, add to list
  // T O(n^2) S O(n)
  let results = [];
  let map = {};
  const sum = 0;
  for(let i = 0; i < nums.length; i++){
    if(isNaN(nums[i])) {
      return INVALID_INPUT;
    }
    map[nums[i]] = i;
  }
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      let target = sum - nums[i] - nums[j];
      let k = map[target];
      if(k != null && k > i && k > j) {
        results.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
  return results;
}

console.log(getThreeSumToZero(null));
console.log(getThreeSumToZero([]));
console.log(getThreeSumToZero([1,2]));
console.log(getThreeSumToZero([1,2,-3]));//1 set
console.log(getThreeSumToZero([-1,0,-2,1,2,-3]));//2+ sets
console.log(getThreeSumToZero([-1,0,-2,1,-1,2,-3]));//duplicate
