//Input: nums, an array of distinct integers
//Output: return all the possible permutations, in any order
//permutation: [1,2,3] 123 132 213 231 312 321

//Dynamic approach: n's output is based on n-1's output; varies
// 1 [23 32] => add 1 to every location of the array from 0 to length
// 123 213 231
//O(n!*n)

//backtrack: forming a decision tree and return every decision O(n!)
//make a copy of the original

function getAllPermutations(ints) {
  if(ints == null || ints.length === 0) return [];

  const getPermutationsRecursive = function(integers){
    if(integers.length === 0){
      return [[]];
    }
    let size = integers.length;
    let permutations = [];
    while(size > 0) {
      let node = integers.shift();
      let prevPermutations = getPermutationsRecursive(integers);
      for(permutation of prevPermutations)
      {
        permutation.unshift(node);
      }
      permutations.push(...prevPermutations);
      integers.push(node);

      size --;
    }
    return permutations;
  }

  return getPermutationsRecursive(ints);
}

console.log(getAllPermutations([1,2,3]));
console.log(getAllPermutations([]));
console.log(getAllPermutations(null));

console.log(getAllPermutations([1]));
console.log(getAllPermutations([3,-2]));
console.log(getAllPermutations([3,-2,5,1]));
