//input: prices, an int array, prices[i] = the price of stock on ith day
//output: max prices difference between two prices in array, buy day < sell day
//if max < 0, return 0
//e.g.: [0,1,2,3,4,5] 5 - 0 = 5. [3,2,1] 0. [3,4,5,0,1] 2 [1,2,0,3,4] 4

const NOT_FOUND = 0;
function getMaxProfit(prices) {
  if(prices == null) {
    return NOT_FOUND;
  }
  //have one tracking min and one tracking max. O(n)
  //since min has to happen before max
  //brute force: for each price in prices (i = 0), pick prices[i] for min
  //and check i + 1 to n - 1 for best max price
  //pick the max delta. O(n^2)
  //If I sort the array, then I can just pick the first (min) and last (max).
  //O(nlogn)
  //Can I do better? for each node, decisions are to include or not include:
  //[0,1,2,3,4,5] p[i] >= p[i-1]: max increases maxProfit += p[i] - p[i-1]
  //[1,2,0,3,4] p[i] < p[i - 1]:  max decreases, so don't pick it for global max
  //but remember for localMax = (0 or -1) = 0, max = (0 or 1) = 1
  //3 - 0 = 3; localMax = (0, 0 + 3) = 3, max = (3 or 1) = 3
  //4 - 3 = 1; localMax = (0, 4) = 4, max = (4 or 3) = 4

  let max = Infinity * - 1, localMax = Infinity * - 1;
  for(let i = 1; i < prices.length; i ++) {
    let delta = prices[i] - prices[i - 1];
    localMax = Math.max(delta, localMax + delta);
    max = Math.max(max, localMax);
  }
  if(max < 0) {
    return NOT_FOUND;
  }
  return max;
}

console.log(getMaxProfit(null));
console.log(getMaxProfit([]));
console.log(getMaxProfit([1]));

console.log(getMaxProfit([1,2]));//1
console.log(getMaxProfit([1,2,3]));//2
console.log(getMaxProfit([1,3,2]));//2
console.log(getMaxProfit([1,3,2,4]));//3
console.log(getMaxProfit([1,3,2,4,0,2]));//3
