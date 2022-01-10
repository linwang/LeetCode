//input: an array nums, an int k
//output: an array of ints representing k top elements in nums

const INVALID_INPUT = [];
function getTopElements(nums, k) {
  if(nums == null || k == null || k < 1) {
    return INVALID_INPUT;
  }
  //frequency map, key = num value = count
  //O(n) go through each number in nums and fill frequency
  //O(xlogx) x = number of unique elements, go through frequency
  //create a result list that's empty,
  //cases:
  //if result.length < k, add & sort frequency's [key,value] to result
  //..., else if value > last value, replace last value with value

  //if k << nums, O(n)
  //if k ~= nums, O(nlogn)

  let frequency = {};
  for(let num of nums){
    if(frequency[num] == null) {
      frequency[num] = 0;
    }
    frequency[num] += 1;
  }
  let keys = Object.keys(frequency);
  if(k > keys.length) {
    return INVALID_INPUT;
  }
  console.log(frequency);

  let result = new Array(0);
  for(let num of keys) {
    if(result.length < k){
      result.push(num);
    }
    else {
      result.sort((a, b) => {
        return frequency[b] - frequency[a];
      });
      if(frequency[num] > frequency[result[k - 1]]){
        result[k - 1] = num;
      }
    }
  }
  return result;
}

console.log(getTopElements(null, 2))
console.log(getTopElements([], null))
console.log(getTopElements([], 2))
console.log(getTopElements([1], 0))
console.log(getTopElements([1,2,1,2,3,1], 4))

console.log(getTopElements([3,1,2,3,2,3], 1))
console.log(getTopElements([3,1,2,3,2,3], 2))
console.log(getTopElements([3,1,2,3,2,3,4,4,4,4], 3))
