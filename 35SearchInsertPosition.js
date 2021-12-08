//input: ints, sorted array of distinct integers
//target, int
//output: int, index of target in ints
//O(logn)
//binary search

function getTargetIndex(ints, target) {
  const NOT_FOUND = -1;

  if(ints == null || ints.length === 0 || target == null) {
    return NOT_FOUND;
  }

  let beg = 0;
  let end = ints.length - 1;
  while(beg <= end) {
    let mid = Math.floor((beg + end) / 2);
    if(target === ints[mid]) {
      return mid;
    }
    if(target < ints[mid])
    {
      end = mid - 1;
    }
    else {
      beg = mid + 1;
    }
  }
  return NOT_FOUND;
}
console.log(getTargetIndex(null, 1));//-1
console.log(getTargetIndex([], 1));//-1
console.log(getTargetIndex([], null));//-1

console.log(getTargetIndex([1], 1));//0
console.log(getTargetIndex([1,2,3], 1));//0
console.log(getTargetIndex([1,2,3], 2));//1
console.log(getTargetIndex([1,2,3], 3));//2

console.log(getTargetIndex([1,2,3], 4));//-1
console.log(getTargetIndex([1,2,3], 0));//-1
console.log(getTargetIndex([1,2,4], 3));//-1
