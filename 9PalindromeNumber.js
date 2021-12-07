//input: x, integer
//output: bool, is x a palindrome
//palindrome: the number reads the same backward as forward

function isPalindrome(x) {
  if(x == null || isNaN(x)) {
    return false;
  }
  const str = x.toString();
  const iEnd = str.length - 1;

  for(let i = 0; i < iEnd - i; i++) {
    if(str[i] !== str[iEnd - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(null))//f
console.log(isPalindrome('a1'));//false
console.log(isPalindrome(1));//true
console.log(isPalindrome(12));//false
console.log(isPalindrome(121));//true
console.log(isPalindrome(1221));//true
console.log(isPalindrome(-1221));//false
