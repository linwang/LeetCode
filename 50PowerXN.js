//get x^n
//intputs: x is base, n is power
//output: x to the power of n
//restrictions:
// n is integer, x is float
//  -100.0 < x < 100.0
// -2^31 <= n <= x31 - 1
// -10^4 <= x^n <= 10^4
//if n>0, x^n = x*x...n-times
//if n = 0 and x != 0, x^0 = 1; x===0, x^0 = 0
//if n < 0, x^n = 1/(x*x...n-times)
function power(x, n)
{
  //O(logn) going in, O(1) coming up; so O(logn)
  if(n === 0)
  {
    if(x === 0) return 0;
    return 1;
  }

  if(n < 0)
    return 1/power(x, n * -1);

  if(n === 1)
    return x;

  let mid = Math.floor(n/2);
  return power(x, mid) * power(x, n - mid);
}
