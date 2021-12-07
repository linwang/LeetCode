//input: strings, an array of strings
//output: the longest common prefix;
//return '' if none is found

function getLongestCommonPrefix(strings) {
  //take the first string, for i = 0 to strings[0].length - 1,
  //check to see if it can be found in every string, s = 1 to strings.length - 1:
  // strings[0][i] === strings[s][i]
  //O(n*m), n = number of strings, m = number of characters
  //can optimize by binary search: take first string, start with strings[0].slice(0, mid),
  //if can find in every other string, then search right, if cannot find, then search left
  //stop when beg > end
  //O(nlogm)
  //instead of searching through all strings, search just the next one and th
  const NOT_FOUND = '';
  if(strings == null || strings.length === 0) {
    return NOT_FOUND;
  }
  if(strings.length === 1) {
    return strings[0];
  }
  console.log(`getLongestCommonPrefix(${strings})`);

  const isFoundInStrings = function(target) {
    for(let i = 0; i < strings.length; i++) {
      if(strings[i].indexOf(target) === -1) {
        return false;
      }
    }
    return true;
  }

  let beg = 0;
  let end = strings[0].length - 1;
  let target = '';
  while(beg <= end) {
    let mid = Math.floor((beg + end)/2);
    target = strings[0].slice(0, mid + 1);
    if(isFoundInStrings(target)) {
      beg = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }

  if(end < 0) {
    return NOT_FOUND;
  }
  return target;
}
console.log(getLongestCommonPrefix(null));
console.log(getLongestCommonPrefix([]));
console.log(getLongestCommonPrefix(['flower']));

console.log(getLongestCommonPrefix(['flower', 'flower']));
console.log(getLongestCommonPrefix(['flower', 'dog']));
console.log(getLongestCommonPrefix(['flower', 'flow', 'flat']));
console.log(getLongestCommonPrefix(['flower', 'flow', 'dog']));
