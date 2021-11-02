//Insert newInterval into intervals such that intervals remain sorted by startI
// and overlapping lapping intervals are merged
//inputs:
//* an array of non-overlapping intervals where intervals[i] = [startI, endI],
//  sorted in ascending order
//* newInterval = [start, end]
//outputs: intervals after insertion
//constraints:
//Q: is the input clear of overlapping intervals? Yes
function addInterval(intervals, interval)
{
  console.log(`adding ${interval} to ${intervals}`);

  //o(logn)
  if((!intervals) || (intervals.length === 0)) return [interval];

  const iBeg = 0;
  const iEnd = intervals.length - 1;

  //find leftmost index to delete;
  let goLeftBeg = function(b)
  {
    if(interval[0] <= b[1]) return true;
    return false;
  }

  let leftIndex = findPosition(goLeftBeg, intervals) + 1;
  if(leftIndex < iBeg) leftIndex = iBeg;

  console.log(`leftIndex = ${leftIndex}`);

  //find rightmost index to delete
  let goLeftEnd = function(b)
  {
    if(interval[1] >= b[0]) return false;
    return true;
  }
  let rightIndex = findPosition(goLeftEnd, intervals)
  if(rightIndex > iEnd) rightIndex = iEnd;
  console.log(`rightIndex = ${rightIndex}`);

  //delete nodes and add new interval
  let cDelete = rightIndex - leftIndex + 1;
  if((rightIndex < iBeg) || (leftIndex > iEnd)) cDelete = 0;
  console.log(`delete ${cDelete} items from ${leftIndex}`)
  if(cDelete > 0)
  {
    interval[0] = Math.min(interval[0], intervals[leftIndex][0]);
    interval[1] = Math.max(interval[1], intervals[rightIndex][1])
    intervals.splice(leftIndex, cDelete);
  }
  intervals.splice(leftIndex, 0, interval);
  return intervals;
}

//returns last index where goLeft is false
function findPosition(goLeft, array)
{
  let left = 0, right = array.length - 1, mid = 0;

  while(left <= right)
  {
    mid = Math.floor((left + right)/2);

    if(goLeft(array[mid]))
    {
        right = mid - 1;
    }
    else
    {
        left = mid + 1;
    }
  }
  return right;
}

console.log(addInterval([[1,2],[3,5],[6,7],[8,10],[12,16]],[3,6]));
