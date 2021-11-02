//given a non-decreasing array nums where each member can repeat max_repeats
//output k, size of new array, and nums needs to be modified such that all
//nums repeating > max_repeats are removed. Extra spacing is filled with '_'
//eg 0111222333 -> 0112233___, k = 7
function removeDuplicates(nums)
{
  let k = 0;
  for(let i = 0; i < nums.length; i++)
  {
    if((i < 2) || (nums[i] > nums[k-2]))
    {
      nums[k++] = nums[i];
    }
  }
  nums.fill('_', k);
  return k;
}
let nums = [0,1,1,1,2,2,2,3,3,3]
console.log(removeDuplicates(nums))
console.log(nums)
