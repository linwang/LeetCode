function buttonClick()
{
  output.textContent = "";
  error.textContent = "";
  const nums = input.value.split(',').map(x=>parseFloat(x));
  const lBound = 0;//inclusive
  const uBound = 1;//exclusive
  for(let i = 0; i < nums.length;)
  {
    if((nums[i] < lBound) ||(nums[i] >= uBound))
    {
        error.textContent += `${nums[i]} not within [${lBound},${uBound}). Removing...; `;
        nums.splice(i,1);
    }
    else
      i++;
  }
  output.textContent = bucketSort(nums, lBound, uBound);

}
function bucketSort(nums)
{
  const numBuckets = 10;
  const base = 10;
  let buckets = new Array(numBuckets);
  let curBucket = 0;

  //place numbers into buckets
  for(let i = 0; i < nums.length; i++ )
  {
      curBucket = parseInt(nums[i]*base);
      if(curBucket < buckets.length)
      {
        if(!buckets[curBucket]){
          buckets[curBucket] = [nums[i]];
        }
        else
          buckets[curBucket].push(nums[i]);
      }
  }

  //sort each bucket of numbers
  for(let b = 0; b < buckets.length; b++)
  {
    buckets[b] = insertionSort(buckets[b]);
  }

  //copy numbers in buckets to sorted array
  let iOfDestination = 0;
  for(let b = 0; b < buckets.length; b++)
  {
    if(buckets[b])
      {
        for(let iOfOrigin = 0; i < buckets[b].length; iOfOrigin++, iOfDestination++)
        {
          nums[iOfDestination] = buckets[b][iOfOrigin];
        }
      }
  }
  return nums;
}
function insertionSort(nums)
{
  if(!nums) return;
  //initially sorted portion of nums is the first element (iLastSorted = 0)
  //starting from iFirstUnsorted = (iLastSorted + 1) to nums.length
  //insert nums[iLastSorted + 1] into the sorted portion of the array
  //sorted array grows by 1 (iLastSorted ++)

  //sort from first unsorted number to last unsorted number
  let temp = 0;
  for(let iFirstUnsorted = 1; iFirstUnsorted < nums.length; iFirstUnsorted++)
  {
    //insert unsorted number into sorted portion of array
    for(let i = 0; i < iFirstUnsorted; i++)
    {
    //if unsorted number is less than the current number
    //then insert the number and remove from original
      if(nums[iFirstUnsorted] < nums[i])
      {
        nums.insertAndRemove(i, iFirstUnsorted);
      }
    }
  }
  return nums;
}
Array.prototype.insertAndRemove = function(iInsert, iRemove)
{
    const temp = this[iRemove];
    this.splice(iRemove, 1);
    this.splice(iInsert, 0, temp);
}
