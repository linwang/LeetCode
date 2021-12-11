//input: n, integer, steps to reach the top
//output: how many distinct ways can you climb to the top if your pace is
//1 or 2 steps

//n = 2, then can do [1,1] or [2]
//take n, can either subtract 1 or 2 from the steps, a path ends
//when the result = 0
//can use DP, ways for n = ways for n-1 + ways for n-2
//base case: n = 1 , return 1, n = 2, return 2
//cache: key = n, value = ways

function getWaysToClimb(n) {
  if(n == null || n <= 0) {
    return 0;
  }
  let cache = {};
  const getWaysToClimbRecursive = (steps) => {
    if(cache[steps] != null) {
      console.log(`using cache[${steps}]: ${cache[steps]}`);
      return cache[steps];
    }
    if(steps === 1) {
      return 1;
    }
    if(steps === 2) {
      return 2;
    }
    cache[steps] = getWaysToClimbRecursive(steps - 1) + getWaysToClimbRecursive(steps - 2);
    return cache[steps];
  }
  return getWaysToClimbRecursive(n);
}

console.log(getWaysToClimb(null));//0
console.log(getWaysToClimb(-1));//0
console.log(getWaysToClimb(0));//0
console.log(getWaysToClimb(1));//1
console.log(getWaysToClimb(2));//2
console.log(getWaysToClimb(3));//3
console.log(getWaysToClimb(5));//8
console.log(getWaysToClimb(7));//21
