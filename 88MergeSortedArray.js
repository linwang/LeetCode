//input: nums1, sorted array of length n + m, nums1 stores actual numbers up to n - 1
// n-1 to (n+m-1) store 0s;
//nums2, sorted array of length m
//output: nums1, where nums1 and nums2 merge and the result array is in nums1

//O(m + n)
//initialize: i = m - 1, j = n - 1;
//for k = n + m, k --
//compare result[i] to nums[j]
//cases:
// result[i] > nums[j] || j < 0, pick result[i], result[k] = result[i], i--
// result[i] <= nums[j] || i < 0, pick nums[j], result[k] = nums[j], j--


function mergeSortedArrays(result, nums, m, n){
  if(result == null || result.length !== m + n || m < 0 || n < 0) {
    return [];
  }
  if(nums == null || nums.length === 0) {
    return result;
  }
  for(let i = m - 1, j = n - 1, k = m + n - 1; k >= 0; k--) {
    if(nums[j] == null || result[i] > nums[j]) {
      result[k] = result[i];
      i--;
    }
    else {
      result[k] = nums[j];
      j--;
    }
  }
  return result;
}
console.log(mergeSortedArrays(null,[1], 0, 1));//[]
console.log(mergeSortedArrays([1],null, 1, 0));//[1]
console.log(mergeSortedArrays([1],[], 1, 0));//[1]
console.log(mergeSortedArrays([1,0],[2], 1, 1));//[1,2]
console.log(mergeSortedArrays([1,3,4,0,0,0],[0,2,5], 3, 3));//[0,1,2,3,4,5]
console.log(mergeSortedArrays([1,3,4,0],[0], 3, 1));//[0,1,3,4]
