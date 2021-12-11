//input: x, integer
//output: integer, square root of x, decimal digits are truncated (Math.floor())

//binary search for largest z, where z * z < x.
//O(x),
//beg = 0, end = x, while (beg < end)
//mid = Math.floor((beg + end)/2),
//if mid * mid > x, end = mid - 1; if mid * mid < x, beg = mid + 1;
//endLoop
//return beg

function sqrt(x) {
  if(x < 0) {
    return -1;
  }

  let beg = 0;
  let end = x;
  while(beg <= end) {
    let mid = Math.floor((beg + end)/2);
    let square = mid * mid;
    if(square === x) {
      return mid;
    }
    if(square > x) {
      end = mid - 1;
    }
    else {
      beg = mid + 1;
    }
  }
  return end;//lower bound of the approximation for sqrt
}

console.log(sqrt(-1));
console.log(sqrt(0));
console.log(sqrt(1));
console.log(sqrt(2));
console.log(sqrt(8));

console.log(sqrt(4));
console.log(sqrt(9));
console.log(sqrt(16));
console.log(sqrt(25));
