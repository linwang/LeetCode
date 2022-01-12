//input: an integer n
//output: an array of parenthese
//requirements:
//* all possible combinations of n pairs of parenthese
function getAllPossibleParenthesesCombinations(n) {
  if(n == null || isNaN(n) || n < 1) {
    return [];
  }
  //e.g. n = 0, []; n = 1, ['()']; n = 2, ['()()', '(())']
  //n = 3, ['()()()', '(()())', '()(())', '(())()','((()))']
  //pattern?
  //base n = 1
  //progression: prevCombinations = getCombo(n - 1)
  //for each combination in prevCombinations, put a () in front,
  //behind (beware of duplicate) and outside
  function _getCombinationsRecursion(n) {
    if(n === 1) {
      return {'()': true};
    }
    let prev = _getCombinationsRecursion(n - 1);
    let cur = {};
    for(let combination in prev) {
      let newCombinations = [`()${combination}`, `(${combination})`, `${combination}()`];
      for(let newCombination of newCombinations)
      if(cur[newCombination] == null) {
          cur[`${newCombination}`] = true;
      }
    }
    return cur;
  }
  let combinations = _getCombinationsRecursion(n);

  return Object.keys(combinations);
}
console.log(getAllPossibleParenthesesCombinations(null))
console.log(getAllPossibleParenthesesCombinations(-1))
console.log(getAllPossibleParenthesesCombinations(0))
console.log(getAllPossibleParenthesesCombinations(1))
console.log(getAllPossibleParenthesesCombinations(2))
console.log(getAllPossibleParenthesesCombinations(3))
console.log(getAllPossibleParenthesesCombinations(4))
