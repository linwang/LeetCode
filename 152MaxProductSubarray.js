//input: nums, integer array
//output: largest product of a contiguous non-empty subarray

//brute force?
//for each term, try i * i+1, i * i+1 * i+2...i === length - 1
//O(n^2)

//[3,-2,5,-1,0]

//3 32 325 325-1...
//2 25 25-1

//positive yes, p keeps on increasing, p === max
//0 no, cannot include 0
//[2,3,0,2,4]: max = 2; max = 6; 0, p = 0, max = 6; if p === 0, restart, p = 2; p = 8 > max; max = 8
//negative, possible? if two negatives, then result is positive.
//keep largest positive and largest negative
//[2,-2,3,-3,-5]; max = 2, min = 2; max = 2, min = -4; max = 3, min = -12; max = 36, min = -9; max = 45, min = -180
function getMaxProduct(nums) {
  if(nums == null || nums.length === 0) {
    return 0;
  }

  let localMax = nums[0], localMin = nums[0], max = nums[0];
  for(let i = 1; i < nums.length; i ++) {
    if(nums[i] < 0) {
    [localMax, localMin] = [localMin, localMax];
    }
    localMax = Math.max(localMax * nums[i], nums[i]);
    localMin = Math.min(localMin * nums[i], nums[i]);
    max = Math.max(max, localMax);
    console.log(`${localMax}, ${localMin}, ${max}`);
  }
  return max;
}
console.log(getMaxProduct([]));//0
console.log(getMaxProduct(null));//0
console.log(getMaxProduct([0]));//0

console.log(getMaxProduct([1,2,3]));//6

console.log(getMaxProduct([0,1]));//1
console.log(getMaxProduct([2,0,1]));//2
console.log(getMaxProduct([3,2,0,1,7]));//7

console.log(getMaxProduct([2,-2]));//2
console.log(getMaxProduct([2,-2, -3]));//12
console.log(getMaxProduct([2,-2,-3,-5]));//15
//2,2,2; 2,-2,-4;12,12,-3;

console.log(getMaxProduct([3,-2,0,-3,-2]));//6
