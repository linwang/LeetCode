//input: nums, an int array
//output: integer, the element in nums that occur > n/2 times
//constraints: * T O(n) S O(1)

//brute force:
//check each element in nums and count the number of times of each num occurs (store in counts).
//go through counts and pick the one > n/2
//T O(n) S O(n)

//Boyer-Moore Majority Vote Algorithm
const NOT_FOUND = null;
function getMajorityElement(nums) {
  if(nums == null || nums.length === 0) {
    return NOT_FOUND;
  }

  let count = 0, majority;
  for(let i = 0; i < nums.length; i++) {
    if(count === 0) {
      majority = nums[i];
    }
    if(majority === nums[i]) {
      count++;
    }
    else {
      count--;
    }
  }

  return majority;
}

console.log(getMajorityElement(null));
console.log(getMajorityElement([]));

console.log(getMajorityElement([1]));
console.log(getMajorityElement([1,2,1]));
console.log(getMajorityElement([1,1,2,1,3]));
