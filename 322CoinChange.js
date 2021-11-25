//inputs:
//  coins, int array, coins of diff denominations
//  amount, int, total amount of $
//output: the fewest number of coins that you need to make up that amount

function getLeastCoins(coins, amount) {
  const intNotFound = -1;
  if(coins == null || amount == null) {
    return intNotFound;
  }

  //[1,5,10,25] 48 1=>25, 2 =>10, 3 =>1 GREEDY? No
  //backtracking decision tree? available decisions are coins, shortest path
  //to add to amount is the answer
  //shortest path is BFS, but BFS's worst case is DFS and BFS is not recursive, so
  //cannot use DP. So use DFS + Dynamic programming
  //DP recursion + memory
  let lookup = {};//key = amount, value = fewest coins
  const getLeastCoinsRecursive = function(coins, amount, lookup) {
    if(lookup[amount] != null) {
      //console.log(`lookup[${amount}] = ${lookup[amount]}`);
      return lookup[amount];
    }
    //base case:
      if(amount === 0) {
        return 0;
      }
      if(amount < 0) {
        return intNotFound;
      }
      if(coins.length === 0) {
        return intNotFound;
      }
    let minCoins = Infinity;
    for(let coin of coins) {
      let coinsNeeded = getLeastCoinsRecursive(coins, amount - coin, lookup);
      //console.log(`coinsNeeded for ${amount-coin} = ${coinsNeeded}`);
      if(coinsNeeded !== intNotFound) {
        coinsNeeded++;
        minCoins = (minCoins > coinsNeeded) ? coinsNeeded : minCoins;
      }
    }
    lookup[amount] = minCoins;
    return lookup[amount];
  }
  return getLeastCoinsRecursive(coins, amount, lookup);
}

console.log(getLeastCoins(null, 1));//-1
console.log(getLeastCoins([1,2,3], null));//-1
console.log(getLeastCoins([], 1));//-1
console.log(getLeastCoins([], 0));//0
console.log(getLeastCoins([], -1));//-1

console.log(getLeastCoins([1,2,3,4], 6));//2
console.log(getLeastCoins([1,2,3,4], 42));//11
