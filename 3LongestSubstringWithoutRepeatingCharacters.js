//input: string s
//output: length of the longest substring without repeating characters
//initial thoughts
//beg = 0; longestSubstr = 0
//scan through s, check if character exists in lastFound
//if so, if(i - beg > longestSubstr) {longestSubstr = i  - beg;} beg = i; lastFound = {};
//if not, lastFound = key
//end loop
//return longestSubstr;
//O(n)

function getLengthOfLongestSubstring(s) {
  if(s == null) {
    return 0;
  }

  if(s.length < 2) {
    return s.length;
  }

  let beg = 0;
  let longest = 0;
  let lastFound = {};

  for(let i = 0; i < s.length; i++) {
    let key = s[i];
    //case 1: repeating letter found within substring
    if(lastFound[key] != null && lastFound[key] >= beg) {
      let length = i - beg;
      if(length > longest) {
        longest = length;
      }
      beg = lastFound[key] + 1;
    }
    //case 2: end of string
    else if(i === s.length - 1) {
      console.log(`substr length = ${i - beg + 1} at end of string`);
      let length = i - beg + 1;
      if (length > longest) {
        longest = length;
      }
    }
    lastFound[key] = i;
  }

  return longestSubstr;
}
console.log(getLengthOfLongestSubstring(""))//0
console.log(getLengthOfLongestSubstring("a"))//1
console.log(getLengthOfLongestSubstring(null))//0
console.log(getLengthOfLongestSubstring())//0

console.log(getLengthOfLongestSubstring("ab"))//2
console.log(getLengthOfLongestSubstring("abb"))//2
console.log(getLengthOfLongestSubstring("abbca"))//3
console.log(getLengthOfLongestSubstring("abbcababcad"))//4
