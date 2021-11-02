function buttonClick()
{
  let inputs = input.value.split(',');
  let target = parseInt(inputs[1]);
  let nums = inputs[0].split('').map(x => parseInt(x));
  output.textContent = GetRangeOfTarget(nums, target);
}

//
//input: an array of integers sorted in ascending order; a target number
//output: the starting and ending position of target in nums;
//i.e.: [5,7,8,8,10],8 returns [2,3]
function GetRangeOfTarget(nums, target)
{
  //divide and conquer: start from middle of nums, go left if target > nums[i],
  //go right if target < nums[i], until step size is 0. O(logn) when target === nums[i],
  //a hit is found, go left and right until target !== nums[i]. O(n)
  let output = [-1, -1];
  if((!nums) || (target === undefined)) return output;
  //can we optimize finding the left and right boundaries? instead of incremental
  //scanning, also use binary search scanning?
  let beg = 0, end = nums.length - 1;
  while(beg <= end)
  {
    mid = Math.floor((beg + end)/2);
    if(target <= nums[mid])
      end = mid - 1;
    else
      beg = mid + 1;
  }
  if(nums[beg] !== target) return output;
  output[0] = beg;

  end = nums.length - 1;
  while(beg <= end)
  {
    mid = Math.floor((beg + end)/2);
    if(target < nums[mid])
      end = mid - 1;
    else
      beg = mid + 1;
  }
  if(nums[end] !== target) return output;
  output[1] = end;

  return output;
}
