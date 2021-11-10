//input an array of time points
//output the min time between two time points
//a time point:
//  HH:MM;
//  HH 00-23, MM max 00-59;
//  23:59 -> 00:00 when max reached, next is min
// difference between two time points:
// a day has 24 hours = 24 * 60 = 1440 minutes
// a - b: a = 23:59, b = 00:00
// diff =  (23 - 00)*60 + (59 - 00) = 1439 min > (1440 - 1439  = 1), return 1;
// a = 12:30 b = 11:35, diff = (12 - 11)*60 + (30 - 35) = 55 min < (1440 - 55), return 55
// a = 8:30 b = 9:30, diff = Math.abs((8-9)*60 + (30-30)) = 60 min...
// min diff in an array of time points:
// brute force, for each item, subtract from rest and track min T O(n^2) S O(1)
// sort time points in the array then calculate time difference
// between each pair of consective time points nlogn
function getMinTimeDifference(arr)
{
  let isValidTime = function(t){
    if(t == null || t.length === 0)
    {
      return false;
    }
    let time = t.split(':').map(x => parseInt(x));
    if(time[0] < 0 || time[0] > 23)
    {
      return false;
    }
    if(time[0] < 0 || time[1] > 59)
    {
      return false;
    }
    return true;
  }
  let timeDiff = function(a, b)
  {
    if(!isValidTime(a)) return Infinity;
    if(!isValidTime(b)) return Infinity;
    const minutesPerDay = 1440;
    let aTime = a.split(':').map(x => parseInt(x));
    let bTime = b.split(':').map(x => parseInt(x));
    let diff = Math.abs((aTime[0] - bTime[0])*60 + (aTime[1] - bTime[1]));
    if(diff > (minutesPerDay - diff))
    {
      diff = minutesPerDay - diff;
    }
    return diff;
  }
  let sorted = arr.sort();
  let min = Infinity;
  for(let i = 0; i < arr.length; i++)
  {
    if(i === arr.length - 1)
    {
        b = sorted[0];
    }
    else
    {
        b = sorted[i + 1];
    }
    let diff = timeDiff(sorted[i], b);
    min = diff < min ? diff : min;
  }
  return min;
}
console.log(getMinTimeDifference(["23:45","22:59","13:30", "12:30"]));
