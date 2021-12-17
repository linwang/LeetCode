//input: nums, int sorted non-decreasing array, 1-indexed
//target, int
//output: int array, indexes of two numbers in nums whose sums = target
//constraint:
// *cannot use the same element twice
// *only one solution exist (unique set of numbers)

//brute force: for each number in nums, num1 = nums[i], num2 = target - num1,
//find num2 in nums
//O(nlogn)
//since nums is sorted, num1 keeps increasing and target num2 keeps decreasing
//start at beg = 0 and end = n - 1
//while(beg < end)
//cases:
//num1 = nums[beg]
//num2 = target - num1
//if(num2 === nums[end]) return beg end
//nums2 < nums[end] end--
//num2 > nums[end] beg++

function getTwoIndexesThatAddToTarget(target, nums) {
    if(target == null || nums == null || nums.length < 2) {
      return [];
    }
    let beg = 0, end = nums.length - 1;
    while(beg < end) {
      let num2 = target - nums[beg];
      if(num2 === nums[end]) {
        return [beg, end];
      }
      else if(num2 < nums[end]) {
        end--;
      }
      else {
        beg++;
      }
    }
    return [];
}

console.log(getTwoIndexesThatAddToTarget(3, [0,1,2]));
console.log(getTwoIndexesThatAddToTarget(2, [0,1,2]));
console.log(getTwoIndexesThatAddToTarget(1, [0,1,2]));
console.log(getTwoIndexesThatAddToTarget(9, [2,7,11,15]));
console.log(getTwoIndexesThatAddToTarget(18, [2,7,11,15]));
console.log(getTwoIndexesThatAddToTarget(22, [2,7,11,15]));
console.log(getTwoIndexesThatAddToTarget(9, [-2,7,11,15]));
