//input: nums, int array, sorted in non-decreasing order
//output:
//*nums, remove any duplicates, resultant array in first part of nums,
//second part of nums filled with _
//*k, the length of the unique array

function removeDuplicates(nums) {
  if(nums == null) {
    return -1;
  }
  if(nums.length === 0) {
    return 0;
  }
  //k = nums.length
  //traverse nums from i = 1 to nums.length - 1,
  //track prev number (initialized to nums[0])
  //if current number === prev number, then a duplicate is found
  //if a duplicate is found, then shift all numbers left 1 and change last
  //letter to _, k --; endIf
  //else preNum = nums[i]
  //endLoop
  //O(n^2)
  //instead just mark every duplicate _ without shifting, then O(n)
  //go through the list again and do the shift smartly, then another O(n)
  //how to do the shift smartly?
  //[1,_,2] if I see a _, then I look forward to find first number, swap
  // i = 0, second = 1, [0,_,1,_,_,2,_,3,_,4] => [0,1,_,_,_,2,_,3,_,4] i = 1, second = 1=>2
  //=> [0,1,2,_,_,_,_,3,_,4] i = 2, second = 2 => 5; => [0,1,2,3,_,_,_,_,_,4] i = 3, second = 5 => 7
  //I should keep track of my second pointer (second), can stop when second is at iEnd
  //second should always be >= i. so if second < i, second = i.
  //endLoop

  //Can I combine two loops into 1 loop?
  //_ = when nums[i] === prevNum
  //second can stop looking when nums[second] !== prevNum
  //[1,1,2,3] => prev = 1, i = 1, nums[1] = 1, trigger nums[i] <= prev 1 <= 1, second = i if (second < i) = 1 => 2
  //swap  [1,2,1,3], prev = nums[i] = 2; prev = 2, i = 2, nums[2] = 1, trigger 1 <= 2, second = 2 => 3,
  //swap [1,2,3,1], prev = nums[i] = 3; prev = 3, i = 3, nums[3] = 1, trigger 1 <= 3, if(second === end), then nums[i] = _
  //[1,2,3,_]
  console.log(`removeDuplicates(${nums})`);
  let prev = nums[0];
  let k = nums.length;
  const iEnd = nums.length - 1;
  for(let first = 1, second = first; first < nums.length;first++) {
      //if current number <= previous number, then array is not in increasing order, need to swap to maintain or set to _
      if(nums[first] <= prev) {
        //look for number to swap
          while(nums[second] <= prev) {
            if(second === iEnd) {
              break;
            }
            second ++;
          }
          //found number to swap
          if(nums[second] > prev)
          {
            let tmp = nums[first];
            nums[first] = nums[second];
            nums[second] =  tmp;
          }
          else
          {
            nums[first] = '_';
            k--;
          }
      }
      //continue to search unless we're at the second part of array searching
      if(nums[first] !== '_') {
        prev = nums[first];
      }
  }
  console.log(`nums = ${nums}`);
  return k;
}

console.log(removeDuplicates(null));//-1
console.log(removeDuplicates([]));//0
console.log(removeDuplicates([1]));//1
console.log(removeDuplicates([1,2,3]));//3
console.log(removeDuplicates([1,1]));//1
console.log(removeDuplicates([1,1,1]));//1
console.log(removeDuplicates([1,1,2]));//2
console.log(removeDuplicates([1,1,2,2,3]));//3
console.log(removeDuplicates([1,2,2,2,3]));//3
