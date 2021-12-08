//input: haystack, string; needle, string
//output: int, index of the first occurrence of needle in haystack
//NOT_FOUND = -1
function strStr(haystack, needle) {
  const NOT_FOUND = -1;
  const INVALID_NEEDLE = 0;
  if(needle == null || needle.length === 0) {
    return INVALID_NEEDLE;
  }
  if(haystack == null || haystack.length === 0) {
    return NOT_FOUND;
  }
  //check each substring of haystack and see if needle can be found
  //'abcde' 'cd'
  //i = 0, i + needle.length; until haystack.length - 1 - needle.length;

  for(let i = 0; i <= haystack.length - needle.length; i++) {
    if(haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return NOT_FOUND;
}

console.log(strStr(null, null));//0
console.log(strStr('a', ''));//0
console.log(strStr(null, 'a'));//-1
console.log(strStr('', 'a'));//-1

console.log(strStr('a', 'a'));//0
console.log(strStr('abcde', 'ab'));//0
console.log(strStr('abcde', 'cd'));//2
console.log(strStr('abcde', 'de'));//3

console.log(strStr('hello', 'll'));//2
console.log(strStr('aaaaa', 'bba'));//-1
