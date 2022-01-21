//given: an array of distinct positive integers, target
//output: a list of all unique combinations of the candidates where the chosen
//  numbers sum to target
//requirements:
//can choose the same number unlimited number of times
//output is <=150 items
//two combinations are unique if the frequency of at least one
//of the chosen numbers is different

//eg
//[2,3,6,7], target = 7
//[[7],[2,2,3]]

//for each candidate in the list
//target' = target - candidate, recursively find target'
//base cases
// if target' === 0, return [[]];
// if target' === -1, return null;
//on return of recursion:
//add candidate to results' if results' is not null

//target' = 7 - 2
//target' = 5 - 2;
//target' = 3 - 2; 3 - 3, [[3]]; 3 - 6; 3 - 7
//target' === 1 - 2, return null; target' === 0, return [[]];

//might repeat?
const NOT_FOUND = [];
function getUniqueCombinations(nums, target) {
  if(nums == null || target == null) {
    return NOT_FOUND;
  }
  function _getUniqueCombinationsRecursive(nums, target, startIndex){
    if(target < 0) {
      return NOT_FOUND;
    }
    if(target === 0) {
      return [[]];
    }
    let combinations = [];
    for(let i = startIndex; i < nums.length; i++){
      let difference = target - nums[i];
      let subCombinations = _getUniqueCombinationsRecursive(nums, difference, i);
      if(subCombinations != NOT_FOUND){
        subCombinations = subCombinations.map((a) => {
          a.unshift(nums[i]);
          return a;
        })
        combinations = combinations.concat(subCombinations);
      }
    }
    return combinations;
  }
  return _getUniqueCombinationsRecursive(nums, target, 0);
}

console.log(getUniqueCombinations(null, 7));
console.log(getUniqueCombinations([2], null));
console.log(getUniqueCombinations([], 1));
console.log(getUniqueCombinations([2,3,6,7], 1));

console.log(getUniqueCombinations([2,3,6,7], 7));
console.log(getUniqueCombinations([2,7,6,3], 8));
console.log(getUniqueCombinations([6,3,2,7], 9));
