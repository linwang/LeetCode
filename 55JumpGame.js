//starting at position 0 of nums, with each number representing max jump from
//current position,evaluate whether can reach last position
//input: an array of ints nums
//output: boolean of whether can reach end of array
//restrictions:
// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 10^5
function canReachEnd(nums)
{
  //O(n)
  let minStepsToEnd = 0;
  for(let i = nums.length - 2; i >= 0; i--)
  {
      minStepsToEnd++;
      if(nums[i] >= minStepsToEnd)
        minStepsToEnd = 0;
  }
  if(minStepsToEnd > 0) return false;
  return true;
}
