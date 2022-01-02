//input: nums, int array
//output: int array, where all 0's are moved to the end
//and the relative order of the array has been preserved

//create a new array of size n, if a 0 is encountered,
//then place at end of array
//else, place at front of array
//T O(n) S O(n)

//keep two pointers, zeroPtr and nonZeroPtr
//if zero > non, swap, move zero to next zero, move non to next non
//non > zero, non moves to next non
//if non > end, end loop
//if zero > end, end loop
//if non == null, move non to next non
//if zero == null, move zero to next zero
//T O(n) S O(1)

//keep two pointers, nonZeroPtr = 0 and nextPtr = 0
//nums[nonZero] !== 0, nums[nextPtr] = nums[nonZero], nextPtr++
//nums[nonZero] === 0, do nothing
//nonZero > end, exit loop
//nextPtr until end should be filled with 0s


function moveZerosToEnd(nums) {
  if(nums == null) {
    return nums;
  }
  let next = 0;
  for(let num of nums) {
    if(num !== 0) {
      nums[next] = num;
      next++;
    }
  }
  while(next < nums.length) {
    nums[next] = 0;
    next++;
  }
  return nums;
}

console.log(moveZerosToEnd(null));
console.log(moveZerosToEnd([]));
console.log(moveZerosToEnd([1,2]));
console.log(moveZerosToEnd([0,0]));
console.log(moveZerosToEnd([0,1]));
console.log(moveZerosToEnd([0,2,0,3,0,1,0]));
