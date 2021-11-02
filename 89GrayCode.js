//input: an integer n (1<= n <= 16)
//output a valid n-bit gray code sequence
//an n-bit gray code sequence:
//2^n ints
//[0, 2^n - 1]
//first int = 0
//all integers are unique
//binary representation of adjacent ints differ by one bit
//first and last integers differ by 1 bit
//e.g. n = 2, out [0,1,3,2] => [00,01,11,10]
function getGrayCodeSequence(n)
{
  //if n = 2; 2 bits and 4 ints;
  //00 01 10 11
  //build grayCodeSequence(n) via (n-1)
  //(n)= [(n-1), add leading bit 1 to reverse(n-1)]
  //base(1), return [0,1]
  if((n < 1) || (n > 16)) return [];
  if(n === 1) return [0,1];
  let firstHalf = getGrayCodeSequence(n-1);
  let final = [].concat(firstHalf);
  const leadingBit = 1 << (n-1);
  let secondHalf = firstHalf.reverse().map(x => leadingBit + x);
  return final.concat(secondHalf);
}
Array.prototype.toString = function()
{
  str = '';
  for(let i = 0; i < this.length; i++)
    {
      str += `${this[i].toString(2)}${i === this.length - 1?'':','}`;
    }
  return str;
}
