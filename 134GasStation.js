//given an array of gas you can get
  //an array of gas used,
  //each index is a gas station.
//return gas station to start your trip (gas in your tank >= 0)
  //or -1 if trip cannot be made.

function getStationToStartTrip(gas, cost)
{
  const failToCompleteTrip = -1;

  if(gas == null || cost == null) {
    return failToCompleteTrip;
  }

  if(gas.length !== cost.length) {
    return failToCompleteTrip;
  }
  //go through both arrays at the same time to calculate deltaGas and totalGas,
  //if deltaGas is >=0, can be starting point, calculate totalGasFrom,
  //if totalGasFrom ever drops below 0, abandon and choose new startingPoint.
  //if at the end of processing totalGas >=0 and totalGasFrom>=0,
  //return startingPoint
  //otherwise return -1
  const noStation = -1;
  let totalGasTrip = 0, totalGasFrom = 0, start = noStation;
  for(let i = 0; i < gas.length; i ++) {
    let gasLeft = gas[i] - cost[i];

    if(start !== noStation) {
      totalGasFrom += gasLeft;
      //remove start station
      if(totalGasFrom < 0) {
        console.log(`remove old start station = ${start}`);
        start = noStation;
      }
    }
    //pick new station
    else if(gasLeft >= 0) {
      console.log(`set new start station = ${i}`);
      start = i;
      totalGasFrom = gasLeft;
    }

    totalGasTrip += gasLeft;
  }

  if(totalGasTrip >= 0  && totalGasFrom >= 0) {
    console.log(`final start station set to ${start}`);
    return start;
  }

  return noStation;
}

console.log(getStationToStartTrip([2,3,4],[3,4,3]));//-1
console.log(getStationToStartTrip([1,2,3,4,5],[3,4,5,1,2]));//3
console.log(getStationToStartTrip([2,3,3,4,5],[1,4,5,1,2]));//3
