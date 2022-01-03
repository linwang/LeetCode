//input: n, int
//output: array, ans of length n + 1
//for each i, ans[i] = sum of 1's
//in the binary representation of i

//ans = new Array(n+1)
//i = 0, i <= n, i++
//convert i to binary (i.toString(2))
//count = 0, for each char in binary, if 1, count++;

//since any call to function can use previous' call's results
//we can cache the result

//DP: 000 001 010 011 100 101 110 111
//pattern
//if i is even, then count = i >> 1 + 0
//if i is odd, then count = i >> 1 + 1

const INVALID_INPUT = -1;
let BitsCounter = (function() {
  let cache = [0 , 1];
  return (function(n){
    if(n == null || isNaN(n)) {
      return INVALID_INPUT;
    }

    if(cache.length > n) {
      return cache.slice(0, n + 1);
    }

    for(let i = cache.length; i <= n; i++) {
      let count = cache[i >> 1] + (i%2 === 0? 0: 1);
      cache.push(count);
    }
    return cache.slice(0, cache.length);
  });
})();

console.log(BitsCounter(5));
//memoized
console.time('countingBits');
BitsCounter(100000);
console.timeEnd('countingBits');
console.time('countingBits');
BitsCounter(100000);
console.timeEnd('countingBits');
//immutable
let a = BitsCounter(10);
a[5] = 10;
let b = BitsCounter(10);
console.log(a);
console.log(b);

let x = 1;
console.log(x >> 1);
