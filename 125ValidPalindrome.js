//input: s, a string
//output: boolean, after removing all non-alphanumeric characters of s, is s' a
//palindrome

//first remove all non-alphanumeric characters from s and convert all uppercase
//to lower case
//compare the [i] and [n-1-i]'s characters until i >= [n-1-i]
//can I do this without actually changing s?
//yes, instead comparing i to n-1-i, look from left the next valid
//character to compare and look from right the next valid character to compare

function isPalindrome(s) {
  if(s == null) {
    return false;
  }
  const isAlphaNumeric = (char) => {
    const alphaNumeric = {a:'a',b:'b',c:'c',d:'d',e:'e',f:'f',
    g:'g',h:'h',i:'i',j:'j',k:'k',l:'l',m:'m',n:'n',o:'o',p:'p',q:'q',
    r:'r',s:'s',t:'t',u:'u',v:'v',w:'w',x:'x',y:'y',z:'z'};
    if(!isNaN(char)) {
      return true;
    }
    const lower = char.toLowerCase();
    if(alphaNumeric[lower] != null) {
      return true;
    }
    return false;
  }

  for(let left = 0, right = s.length - 1; left < right;left++, right--) {
    while(left < s.length && !isAlphaNumeric(s[left])) {
      left ++;
    }
    if(left === s.length) {
      break;
    }
    while(right > 0 && !isAlphaNumeric(s[right])) {
      right --;
    }
    if(right === 0) {
      break;
    }
    if(s[left].toLowerCase() !== s[right].toLowerCase()){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(null));//false
console.log(isPalindrome('This is a test'));

console.log(isPalindrome(''));//true
console.log(isPalindrome(' '));
console.log(isPalindrome('a'));
console.log(isPalindrome('A1 isI 1a'));
console.log(isPalindrome('1jJ%)(*1'));
