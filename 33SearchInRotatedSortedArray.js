//input: nums with possible rotation at unknown pivot; target
//out: index of target in nums
//return -1 if target is not found
//[0,1,2,4,5,6,7] rotated at pivot index 3 is [4,5,6,-1,0,1,2]

//check each number and return index when target is found
//in sorted array, do binary search and return when target is found
//in pivoted array, do binary search
//cases:
//while beg <= end
//target < [current]
  //target > [beg], search left
  //[target] < [beg], search right
//target > current;
  //[end] > [target], search right
  //[end] < [target], search left
//target == current, return
//after all searched, return -1
const NOT_FOUND = -1;
function findIndex(nums, target) {
  console.log(`findIndex(${nums}, ${target})`);
  if(nums == null || target == null) {
    return NOT_FOUND;
  }
  let beg = 0, end = nums.length - 1;
  function _searchLeft(end, mid){
    end = mid - 1;
    return end;
  }
  function _searchRight(beg, mid) {
    beg = mid + 1;
    return beg;
  }
  while(beg <= end) {
    let mid = Math.floor((beg + end)/2);
    if(nums[mid] === target) {
      return mid;
    }
    else if(target < nums[mid]) {
      if(nums[mid] < nums[end] || target >= nums[beg]) {
        end = _searchLeft(end, mid);
      }
      else {
        beg = _searchRight(beg, mid);
      }
    }
    else {
      if(nums[beg] < nums[mid] || target <= nums[end]) {
          beg = _searchRight(beg, mid);
      }
      else{
        end = _searchLeft(end, mid);
      }
    }
  }
  return NOT_FOUND;
}
console.log(findIndex(null, 1));
console.log(findIndex([], null));
console.log(findIndex([], 1));

console.log(findIndex([0,1,2], 0));
console.log(findIndex([0,1,2], 2));
console.log(findIndex([0,1,2], 3));

console.log(findIndex([3,4,5,6,7,0,1,2], 7));
console.log(findIndex([3,4,5,6,7,0,1,2], 0));
console.log(findIndex([3,4,5,6,7,0,1,2], 3));
console.log(findIndex([3,4,5,6,7,0,1,2], 5));
console.log(findIndex([3,4,5,6,7,0,1,2], -1));
console.log(findIndex([3,4,5,6,7,0,1,2], 8));

console.log(findIndex([5,6,7,0,1,2,3,4], 7));
console.log(findIndex([5,6,7,0,1,2,3,4], 5));
console.log(findIndex([5,6,7,0,1,2,3,4], 3));
console.log(findIndex([5,6,7,0,1,2,3,4], 4));
console.log(findIndex([5,6,7,0,1,2,3,4], -1));
console.log(findIndex([5,6,7,0,1,2,3,4], 8));
