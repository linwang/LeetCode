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

function moveZerosToEnd(nums) {
  if(nums == null) {
    return nums;
  }

  function getNext(condition, array, i) {
    if(i == null) {
      i = 0;
    }
    else {
      i++;
    }
    while(true) {
      if(condition(array, i)) {
        return i;
      }
      i++;
    }
  }
  function getNextZero(index) {
    return getNext((nums, index) => {
      return (index >= nums.length || nums[index] === 0);
    }, nums, index);
  }
  function getNextNon(index) {
    return getNext((nums, index) => {
      return (index >= nums.length || nums[index] !== 0);
    }, nums, index);
  }
  const end = nums.length - 1;
  let non, zero;
  for(let i = 0; i < end; i++) {

      if(zero == null) {
        zero = getNextZero(zero);
      }
      if(non == null || non < zero) {
        non = getNextNon(non);
      }

      if(zero > end) {
        break;
      }
      if(non > end) {
        break;
      }

      if(zero < non) {
        [nums[non], nums[zero]] = [nums[zero], nums[non]];
        zero = getNextZero(zero);
        non = getNextNon(non);
      }
  }
  return nums;
}

console.log(moveZerosToEnd(null));
console.log(moveZerosToEnd([]));
console.log(moveZerosToEnd([1,2]));
console.log(moveZerosToEnd([0,0]));
console.log(moveZerosToEnd([0,1]));
console.log(moveZerosToEnd([0,2,0,3,0,1,0]));
