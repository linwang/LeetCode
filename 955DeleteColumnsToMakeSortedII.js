//input: array of n strings strs;
  //all strs have the same length
//output: the minimum possible value of answer.length
//answer: a set of deletion indices that after deletions
// the final array has its elements in lexicographic order
//e.g. strs = ["ca", "bb", "ac"], if we choose deletion index
// to be 0, then resulting strs is [[a, b, c]].
// answer is delete 1, so answer.length = 1

//Check to see if strs is already sorted, if so return 0;
//successively deleting 0-(n-1)'s column and see if strs is sorted,
  //if so return sum of deletion;<- correct? no. eg: [xkjf, xskg]
  //answer should be {1}
//For each column, check to see if that column's characters are in order,
//if not, add the column to answers

//cases:
  //[i] < [i + 1] for all: answer can return what it has
  //[i] === [i + 1] for all:
  //[i] > [i + 1] for some: answer add this column and check the next column
function getCountOfIndicesToDelete(strs)
{
  console.log(`getCountOfIndicesToDelete(${strs})`);

  if(strs == null)
    return null;
  if(strs.length < 2)
    return 0;

  let countOfCharacters = strs[0].length;
  for(let str of strs)
  {
    if(str.length !== countOfCharacters)
    {
      console.log(`error: string = ${str} has a different length than expected = ${countOfCharacters}`);
      return null;
    }
  }
  let answer = [];
  console.log(`count of characters = ${countOfCharacters}`)
  for(let c = 0; c < countOfCharacters; c++)
  {
    for(let i = 0; i < strs.length - 1; i++)
    {
      let beg = answer.length === 0? 0 : answer[answer.length - 1] + 1;
      let count = c + 1 - beg;
      console.log(`Compare ${strs[i].substr(beg, count)} to ${strs[i + 1].substr(beg, count)}`);
      if(strs[i].substr(beg, count) > strs[i + 1].substr(beg, count))
      {
        answer.push(c);
        break;
      }
    }
  }
  console.log(`answer = ${answer}`);
  return answer.length;
}

console.log(getCountOfIndicesToDelete(null));
console.log(getCountOfIndicesToDelete(['a']));
console.log(getCountOfIndicesToDelete(['a','ab']));

console.log(getCountOfIndicesToDelete(['ab','bc']));
console.log(getCountOfIndicesToDelete(['ab','aa']));
console.log(getCountOfIndicesToDelete(['ba','ab']));
console.log(getCountOfIndicesToDelete(['acd','bbe']));
console.log(getCountOfIndicesToDelete(['abe','abc']));
console.log(getCountOfIndicesToDelete(["zyx","wvu","tsr"]));
console.log(getCountOfIndicesToDelete(["xc","yb","za"]));
console.log(getCountOfIndicesToDelete(["ca","bb","ac"]));
