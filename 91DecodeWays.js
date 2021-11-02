//encoding mapping: A => 1...Z => 26
//decoding e.g.: 11106 => 1,1,10,6; 11,10,6
//input a string s of only digits
//output # of ways to decode interval
function getNumWaysToDecode(digits)
{
  //if single digit: 1-9
  //if double digits: 10-26
  //# of ways depends on sum = (1-iEnd) and (2-iEnd);
  //basecases are:
  //((iEnd - iStart) === 0) return  1<=digits<=9 ? 1 : 0;
  // ((iEnd - iStart) === 1) return
  //  (10<=parseInt(digits[iBeg - iEnd]) <= 26 ? 1 : 0) +
  // getWays(digits, iBeg + 1, iEnd);
  //Progression: ways = 0;
  // if([iBeg] between 1-9) ways += 1 + getWays(iBeg + 1);
  // if(10<=parseInt(digits[iBeg - iBeg+1]) ways += 1 + getWays(iBeg + 2);
  if(!digits || digits.length === 0) return 0;
  
  let getWays = function(digits, iBeg)
  {
    if(iBeg >= digits.length) return 0;
    let ways = 0;
    let num = parseInt(digits[iBeg]);
    if((num <= 9) && (num >= 1))
      ways += 1 + getWays(digits, iBeg + 1);
    if(iBeg + 1 < digits.length)
    {
      num = parseInt(digits.slice(iBeg, iBeg + 1));
      if((num <= 26) && (num >= 10))
        ways += 1 + getWays(digits, iBeg + 2);
    }
    return ways;
  }
  return getWays(digits, 0);
}
console.log(getNumWaysToDecode('12'))
