//input: pattern, s string
//output: bool, does s follow the pattern
//What's a pattern?
//each letter in pattern represent a word in s
//so "abba" can correspond to "dog cat cat dog"
//letter in pattern has a one to one mapping to word in s?

//split s into words, if s.length !== pattern.length, return false
//cache key = letter in pattern, value = word in s
function _getNextWord(s, i) {
  //check each letter from i to s.length - 1
  //if(letter !== ' ' && beg == null) beg = i
  //if(letter == ' ' && beg != null) return s.slice(beg, i);
  //outside the loop
  //if(beg != null) return s.slice(beg, s.length)
  let beg;
  for(; i < s.length; i++){
    if(s[i] !== ' ' && beg == null) {
      beg = i;
    }
    else if(s[i] == ' ' && beg != null) {
      break;
    }
  }
  if(beg != null) {
    return [i, s.slice(beg, i)];
  }
  return [i, null];
}
function isMatching(s, pattern) {
  if(s == null || pattern == null) {
    return false;
  }
  if(s.length === 0 && pattern.length === 0) {
    return true;
  }
  let cache = {};
  let iWord = 0
  for(let i = 0; i < pattern.length; i++){
    let key = pattern[i];
    let value;
    [iWord , value] = _getNextWord(s, iWord);
    if(value == null) {
      return false;
    }
    if(cache[key] == null) {
      cache[key] = value;
    }
    else if(cache[key] !== value) {
      return false;
    }
  }
  if(_getNextWord(s, iWord)[1] != null) {
    return false;
  }
  return true;
}

console.log(_getNextWord(' one  two two one', 0));
console.log(_getNextWord(' one  two two one', 4));
console.log(_getNextWord(' one  two two one ', 13));
console.log(_getNextWord(' ', 0));
console.log(_getNextWord('one ', 0));
console.log(_getNextWord('one ', 3));

console.log(isMatching(null, 'a'));
console.log(isMatching('one', null));
console.log(isMatching('one two three', 'ab'));
console.log(isMatching('one two two one', 'abab'));
console.log(isMatching(' one two two one', 'abab'));
console.log(isMatching(' one  two two one', 'abab'));

console.log(isMatching('', ''));
console.log(isMatching('one', 'a'));
console.log(isMatching('one two one two', 'abab'));
