//given string s
//output score of s
//score rules:
//"()" has a score of 1 <= base case
//"AB" has a score of A + B,
  //so "()()" = 2; score = score(A) + score (B)
//"(A)" has a score of 2*A, so "(()())" = 4,
  //score = score(A)*2

  //given string s
  //output score of s
  //score rules:
  //"()" has a score of 1 <= base case
  //"AB" has a score of A + B,
    //so "()()" = 2; score = score(A) + score (B)
  //"(A)" has a score of 2*A, so "(()())" = 4,
    //score = score(A)*2

function getScoreOf(s)
{
  if(s == null || s.length < 2) return 0;
  //How to find the matching parenthesis? 'A ( always has )'
  //(()()) <= I will scan from left, I see an (, then I will need to see a ) next.
  //If I see a ( instead, then I need to see two )).
  //Can I build a hashLookup that look like this? key = beg('s position and value = end)'s position?
  //Can I use a stack? See a (, add to stack, see a ), add ()'s positions to hashLookup

  let hashLookup = buildHash(s);

  if(hashLookup == null)
    return 0;
  //After having the hashLookup, I can go through s again to calculate the scores:
  //score(leftI, rightI, s)
  //O(n)
  return getScoreFrom(s, 0, s.length - 1, hashLookup);
}

function buildHash(s)
{
  let stack = [];
  let hashLookup = {};
  for(let i = 0; i < s.length; i++)
  {
    if(s[i] === '(')
    {
      stack.push(i);
    }
    if(s[i] === ')')
    {
      let beg = stack.pop();
      hashLookup[beg] = i;//i = end
    }
  }

  if(stack.length > 0)
  {
    console.assert(`${stack} should be empty. Mal-formed input`);
    return null;
  }

  return hashLookup;
}

function getScoreFrom(s, beg, end, hashLookup)
{
  console.log(`getScoreFrom ${beg} to ${end}`);
  if(s == null || beg == null || end == null || hashLookup == null)
  {
    console.assert(`getScoreFrom should not be null or undefined`);
    return 0;
  }
  if(beg > end)
  {
    console.assert(`beg ${beg} should not be greater than end ${end}`);
    return 0;
  }

  if(end === beg + 1 && s.substr(beg, 2) === '()')//()
    return 1;
  let right = hashLookup[beg];
  if(right === end)//(A)
  {
    return getScoreFrom(s, beg + 1, end - 1, hashLookup) * 2;
  }
  return getScoreFrom(s, beg, right, hashLookup) + getScoreFrom(s, right + 1, end, hashLookup);
}

console.log(getScoreOf('()()'));
console.log(getScoreOf('(())'));
console.log(getScoreOf("(()(()))"));
console.log(getScoreOf('(()'));
console.log(getScoreOf(''));
console.log(getScoreOf(null));
