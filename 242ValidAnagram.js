//input: s, t
//output: bool
//s and t need to have the same number and same kind of letters
//ie Anagram and magrana

//Should we ignore non-letters? Yes
//Should upper and lower case letters be treated the same? Yes


function isAnagram(s, t){
  if(s == null || t == null)
    return false;

  function isLowerLetter(c) {
    const letters = {a:'a', b:'b', c:'c', d:'d', e:'e', f:'f', g:'g', h:'h',
    i:'i',j:'j', k:'k', l:'l', m:'m', n:'n', o:'o', p:'p', q:'q', r:'r', s:'s',
    t:'t', u:'u', v:'v', w:'w', x:'x', y:'y', z:'z'};
    if(letters[c] == null) {
      return false;
    }
    return true;
  }

  let hash = {};
  s = s.toLowerCase();
  t = t.toLowerCase();

  //scan through s, add letters to a hash where key = lower case letter and
  //value = count
  //cases:
  //key == null, key = letter, count = 1
  //key found, count++
  for(let char of s) {
    if(!isLowerLetter(char)) {
      continue;
    }
    if(hash[char] == null) {
      hash[char] = 1;
    }
    else {
      hash[char]++;
    }
  }
  //scan through t, find letters in hash
  //cases:
  //key == null, return false
  //key found, if count === 1, delete key,
  //  if count > 1, count--

  for(let char of t) {
    if(!isLowerLetter(char)) {
      continue;
    }

    if(hash[char] == null) {
      return false;
    }
    if(hash[char] > 1) {
      hash[char]--;
    }
    else {
      delete hash[char];
    }
  }
  
  //check hash's key count
  //cases:
  //key count > 0 return false
  //return true
  if(Object.keys(hash) > 0) {
    return false;
  }
  return true;
}
console.log(isAnagram(null, 'a'));
console.log(isAnagram('a',null));
console.log(isAnagram('a','b'));
console.log(isAnagram('abc','cbb'));

console.log(isAnagram('a','a'));
console.log(isAnagram('a','A'));
console.log(isAnagram('ab','BA'));
console.log(isAnagram('ab1','B2A'));
console.log(isAnagram('anagram','aaangrm'));
