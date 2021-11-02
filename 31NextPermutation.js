function buttonClick()
{
let nums = input.value.split('').map(x => parseInt(x));
output.textContent = sortByPermutation(nums);
}

//summary: given a list of number, rearranges them into the lexicographically
//  next greater permutation of numbers, and sorted from the least to most
//input: an array of numbers in any order
//output: an array of numbers sorted by permutation
//rules and constraints:
//a permutation is a way to arrange a set, all permutations of a set arranged
//in a lexicographically greater order is as such:
//123,132,213,231,312,321
//if the max permutation is reached, next permutation should return the min permutation
function sortByPermutation(nums)
{
  //incremental: O(n)
  //from right to left, divide the list of numbers into 3 sets, ie. nums = 231;
  //set1 = '31'(subset that has reached max permutation) <= maxPIndex
  //set2 = '2' (num before maxP set) <= targetIndex
  //set3 = '' (non-moving set) <= no need to track
  //the next permutation involves, compare set2 to each number in set1 starting from the right
  //swap with first set1 > set2; 231 -> 321
  //sort set1 from descending order to ascending order 231 <= 213
  let swap = function(arr, a, b)
  {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  let sortFromDescendingToAscending = function(arr, a, b)
  {
    while(a < b)
    {
      swap(arr, a, b);
      a++;
      b--;
    }
  }

  let last = nums.length - 1;
  for(let i = last; i >= 0; i--)
  {
    if(nums[i] > nums[i-1])
    {
      //swap nums[i-1] with a number in nums[i - last] that's the smallest number
      //that is begger than nums[i-1]
      for(let b = last; b >= i; b--)
      {
        if(nums[b] > nums[i-1])
        {
          swap(nums, b, i - 1);
          break;
        }
      }
      sortFromDescendingToAscending(nums, i, last);
      return nums;
    }

    if(i === 0)
    {
        sortFromDescendingToAscending(nums, i, last);
        return nums;
    }
  }
}
