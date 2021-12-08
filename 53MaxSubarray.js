//input: nums, an int array
//output: int, largest sum of contiguous subarray of nums
function getMaxSum(nums) {
  if(nums == null || nums.length === 0) {
    return 0;
  }
  //brute force: for each valid subarray of nums, check their sums
  //compare the sums and return the largest 1 O(n!)
  //positive makes sum bigger
  //negative makes sum smaller
  //0 does not affect sum
  //-1,2,0,3,-2,6
  //global max = Max(max, localMax)
  //local max = Max(localMax + nums[i], nums[i]); 9
  //nums[i] = 6
  //i = 0 => nums.length - 1, globalMax = 0, localMax = 0
  //localMax = max(nums[i] + localMax, nums[i])
  //globalMax = max(globalMax, localMax);
  //endLoop
  //return globalMax
  let globalMax = Infinity*-1, localMax = Infinity*-1;
  for(let i = 0; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    globalMax = Math.max(localMax, globalMax);
  }
  return globalMax;
}

console.log(getMaxSum(null));//0
console.log(getMaxSum([]));//0
console.log(getMaxSum([1]));//1
console.log(getMaxSum([-1]));//-1
console.log(getMaxSum([1,2,3]));//6
console.log(getMaxSum([1,-2,3]));//3
console.log(getMaxSum([-1,2,3]));//5
console.log(getMaxSum([1,2,-3]));//3
console.log(getMaxSum([-1,2,-3,0]));//2
