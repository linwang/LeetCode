//input: number of dice d, faces per die f, target
//output: the number of possible ways for the dice's sum to be target
//*f<= 30 and 1<=d
//*f^d number of ways to roll the dice
//e.g. {1,6,3} => 1 way {2,6,3} => 1 way

//base cases:
  // f < target: return 0
  // d === 1: return 1
  //dice > 1, for each possible value (v) of dice [1,2...f],
  //canRollTarget(d - 1, f, target - v)
  //O(d^f) @_@
  //does order matter? yes
  //if we remember the # of times each targetX is for diceX, then
  //O(d*t) <= much better

function getPossibleWays(nDice, faces, target)
{
  console.log(`getPossibleWays(${nDice}, ${faces}, ${target})`);

  if(nDice < 1) return 0;

  let hashLookup = new Array(nDice + 1);
  let ways = _getPossibleWaysRecursive(nDice, faces, target, hashLookup);
  return [ways, hashLookup];  
}

let lookUps = 0;
let calculations = 0;
function _getPossibleWaysRecursive(nDice, faces, target, hashLookup)
{
  if(hashLookup[nDice] == null) {
    hashLookup[nDice] = {};
  }
  if(hashLookup[nDice][target] != null) {
    lookUps++;
    return hashLookup[nDice][target];
  }

//  console.log(`Calculating possible ways for ${nDice} dice, ${faces} faces and ${target} target.`);
  calculations++;

  if(nDice < 1) return 0;

  if(nDice === 1){
    hashLookup[nDice][target] = (faces >= target) ? 1 : 0;
    return hashLookup[nDice][target];
  }
  //cases:
  //min < 1 <= max needs to be smaller, min = 1
  //min >= 1 <= min is valid
  //min > faces <= cannot reach target
  //max > faces <= min needs to be bigger, max = faces
  //max <= faces <= max is valid
  //max < 1 <= cannot reach target
  let min = target - (nDice - 1) * faces;
  min = min < 1 ? 1 : min;
  let max = target - (nDice - 1)*min;
  max = max > faces ? faces : max;
 // console.log(`{min:${min}, max:${max}}`);

  let ways = 0;
  for(; min <= max; min++)
  {
    ways += _getPossibleWaysRecursive(nDice - 1, faces, target - min, hashLookup);
  }

  hashLookup[nDice][target] = ways%1000000007;
  return hashLookup[nDice][target];
}

console.log(getPossibleWays(0,1,2));//0

console.log(getPossibleWays(1, 5, 4));//1
console.log(getPossibleWays(1, 4, 4));//1
console.log(getPossibleWays(1, 3, 4));//0

console.log(getPossibleWays(2, 3, 7));//0
console.log(getPossibleWays(2, 3, 1));//0
console.log(getPossibleWays(2, 3, 6));//1
console.log(getPossibleWays(2, 3, 5));//2
console.log(getPossibleWays(30, 30, 500));//222616187
console.log(lookUps);
console.log(calculations);
