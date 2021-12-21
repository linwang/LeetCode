//input: s, t, strings
//output: boolean, isIsomorphic
//constraints:
//* same length
//* same pattern (same mapping)
//* one to one mapping

//if s.length !== t.length, return false
//for each character of s and t, if map[s[i]] == null, then map[s[i]] = t[i],
//else, if map[s[i]] !== t[i], return false
//endLoop
//return true

function isIsomorphic(s, t) {
  if( s == null || t == null || s.length !== t.length || s.length === 0) {
    return false;
  }

  let sToT = {}, tToS = {};
  for(let i = 0; i < s.length; i ++) {
    if(sToT[s[i]] != null && sToT[s[i]] !== t[i]) {
      return false;
    }
    if(tToS[t[i]] != null && tToS[t[i]] !== s[i]) {
      return false;
    }

    sToT[s[i]] = t[i];
    tToS[t[i]] = s[i];
  }
  return true;
}

console.log(isIsomorphic(null,'a'));
console.log(isIsomorphic('a',null));
console.log(isIsomorphic('','a'));
console.log(isIsomorphic('',''));


console.log(isIsomorphic('b','a'));
console.log(isIsomorphic('egg','add'));
console.log(isIsomorphic('paper','title'));

console.log(isIsomorphic('foo','bar'));
console.log(isIsomorphic('sister','brother'));
console.log(isIsomorphic('aacaa','bbbbb'));
console.log(isIsomorphic('aaaaa','bbcbb'));
