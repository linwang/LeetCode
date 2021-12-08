//input: s, string containing words separated by unknown # of spaces
//output: int, length of last word in s

function getLengthOfLastWord(s){
  if(s == null || s.length === 0) {
    return 0;
  }
  //start from the last index, i = s.length - 1, traverse towards 0
  //if a non-space is encountered, then start counting (wordLength = 0)
  //stop counting and return when a space is encountered or endOfLoop reached
  //cases:
  //s[i] is space && not counting yet, do nothing
  //s[i] is space && counting already, end count, return wordLength
  //s[i] is not space, wordLength ++, counting = true
  let wordLength = 0;
  let isCounting = false;
  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === ' ' && isCounting) {
      return wordLength;
    }
    if(s[i] !== ' ') {
      wordLength ++;
      isCounting = true;
    }
  }
  return wordLength;
}
console.log(getLengthOfLastWord(null));//0
console.log(getLengthOfLastWord(''));//0

console.log(getLengthOfLastWord('a'));//1
console.log(getLengthOfLastWord('a '));//1
console.log(getLengthOfLastWord(' a '));//1

console.log(getLengthOfLastWord(' abc '));//3
console.log(getLengthOfLastWord(' abc def'));//3

console.log(getLengthOfLastWord('Hello World'));//5
console.log(getLengthOfLastWord('   fly me   to   the moon  '));//4
console.log(getLengthOfLastWord('luffy is still joyboy'));//6
