//input: k, number of digits (1-9) to use
//n, sum of the k numbers
//output: all of the combinations
//restriction: each digit can only be picked once
// 1 <= n <= 45

//brute force:
//for all numbers 1-min(9,n), choose 1, then next can choose 2 - min(9, n - 1)
//n controls the upper bound of the digit
//k controls the max number of nodes chosen
//for all possible nodes 1-n, do dfs on each, if 1 is chosen, then n = n - 1,
//k = k - 1
//keep going until k === 1, if already chosen #s <= n <= 9, return [n]; otherwise,
//return []

//dp: recalculation happens when choices like this happen {1,4} {2,3} caching
//can save the combinations for smaller n & k.
//since n only goes up to 45, i think no chaching is okay

function getAllCombinations(sum, count) {
  const notFound = [];
  if(sum === null || sum < 1 || sum > 45) {
    return notFound;
  }

  if(count === null || count < 1) {
    return notFound;
  }
  const getAllCombinationsRecursive = function(sum, count, min, max) {
    //console.log(`getAllCombinationsRecursive(${sum},${count},${min},${max})`)
    if(min > max || sum < min || count < 1) {
      return notFound;
    }

    if(count === 1) {
      if(sum >= min && sum <= max) {
        return [[sum]];
      }
      return notFound;
    }
    let allCombinations = [];
    for(let candidate = min; candidate <= max; candidate++) {
      let combinations = getAllCombinationsRecursive(sum - candidate, count - 1, candidate + 1, max);
      if(combinations !== notFound){
        combinations = combinations.map((value) => {return [candidate, ...value]});
        allCombinations.push(...combinations);
      }
    }
    return allCombinations;
  }
  return getAllCombinationsRecursive(sum, count, 1, 9);
}
console.log(getAllCombinations(45, 1));
console.log(getAllCombinations(-1, 1));
console.log(getAllCombinations(1, 0));

console.log(getAllCombinations(5, 1));
console.log(getAllCombinations(5, 2));
console.log(getAllCombinations(6, 3));

console.log(getAllCombinations(30, 6));
console.log(getAllCombinations(45, 9));
