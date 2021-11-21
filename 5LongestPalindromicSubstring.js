//input a string s
//output the longest palindromic substring of s
//what's a palindrom? aba, a. string is equal to reverse of itself

function getLongestPalindrome(s)
{

  //any letter can be a palindrom
  //two letters can form a palindrom if the first and second letters are the same
  //three letters: first and last are the same
  //four+ letters: first[0] === last[length - 1]; [0+1] === [length - 1 - 1];
  //from i=0 to when i === (length - 1 - i), i++; [i] === [length - 1 - i];

  //a string can have many palindroms, only the longest palindromic substring
  //brute force way is to find every palindrom in a string, then sort them according to length
  //return the longest one
  //abacb => a b a c b; ab ba ac cb; aba bac acb; abac bacb; abacb
  // <= (5 + 1)*5/2 = 15 for 5 characters; as n => infinity,
  //n^2 substrings and n comparison per substring; O(n^3)

  //can we do better?
  //abacb, find the middle, compare to left, or right, or the two items beside itself

  if(s == null || s.length === 0) {
    return '';
  }

  let longestPalindrome = s[0];
  const left = (i) => {return _isValid(i - 1, s)? i - 1 : null};
  const right = (i) => {return _isValid(i + 1, s)? i + 1 : null};
  for(let i = 0; i < s.length; i++) {

    //even center
    let l = i;
    let r = right(i);
    longestPalindrome = _getLongestPalindromeFromCenter(l, r, s, longestPalindrome);

    //odd center
     l = left(i);
     r = right(i);
     longestPalindrome = _getLongestPalindromeFromCenter(l, r, s, longestPalindrome);
  }
  return longestPalindrome;
}
function _isValid(i, s)
{
  return (-1 < i && i < s.length);
}
function _getPalindromeFromCenters(l, r, s)
{
  console.log(`_getPalindromeFromCenters(${l}, ${r}, ${s})`);
    while(_isValid(l, s) && _isValid(r, s))
    {
      if(s[l] !== s[r])
      {
        break;
      }
      l--;
      r++;
    }
    l++;
    r--;
    return s.substr(l, r - l + 1);
}
function _getLongestPalindromeFromCenter(l, r, s, longestPalindrome){
  let palindrome = "";
  if(l != null && r != null) {
      palindrome = _getPalindromeFromCenters(l, r, s);
      if(palindrome.length > longestPalindrome.length) {
        return palindrome;
      }
  }
  return longestPalindrome;
}

console.log(getLongestPalindrome('a'))//a
console.log(getLongestPalindrome('ab'))//a
console.log(getLongestPalindrome('aba'))//aba
console.log(getLongestPalindrome('cbababd'))//babab
console.log(getLongestPalindrome('cbbd'))//bb
