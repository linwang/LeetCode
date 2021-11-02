//Assumptions: all sorts are from ascending (smallest to largest)
function mergeTwoSortedArrays(nums1, nums2)
{
  if((!nums1)||(nums1.length === 0)) return nums2;
  if((!nums2)||(nums2.length === 0)) return nums1;

  let merged = new Array(nums1.length + nums2.length);
  let iOne = 0, iTwo = 0;
  let numOne = 0, numTwo = 0;
  for(let i = 0; i < merged.length; i++)
  {
    numOne = (iOne < nums1.length) ? nums1[iOne] : Infinity;
    numTwo = (iTwo < nums2.length) ? nums2[iTwo] : Infinity;
    merged[i] = (numOne < numTwo) ? numOne : numTwo;
    if(numOne < numTwo)
    {
      merged[i] = numOne;
      iOne++;
    }
    else
    {
      merged[i] = numTwo;
      iTwo++;
    }
  }
  return merged;
}
function getMedian(nums)
{
  let median = new Median();
  if((!nums)||(nums.length === 0)) return median;

  if(isEven(nums.length))
  {
    median.index[1] = nums.length/2;
    median.index[0] = median.index[1] - 1;
    median.num = (nums[median.index[0]] + nums[median.index[1]])/2;
  }
  else
  {
      median.index[0] = Math.floor(nums.length/2);
      median.num = nums[median.index[0]];
  }
  return median;
}
function Median(indices, number)
{
  if(!indices) indices = [NaN, NaN];
  if(!number) number = 0;
  return {
    index:indices,
    num:number,
    toString: function()
    {
      return `Median: Index: [${this.index[0]},${this.index[1]}]; Number: ${this.num}; \r\n`;
    }
  };
}
function isEven(num)
{
  return (num%2 === 0);
}
Array.prototype.removeNaN = function()
{
  for(let i = 0; i < this.length; i++)
  {
    if(isNaN(this[i]))
      this.splice(i, 1);
  }
  return this;
}
Array.prototype.binarySearch = function(target)
{
  function find(arr, target, lBound, uBound)
  {
    if((uBound - lBound) <= 1)
    {
      if(arr[lBound] === target) return lBound;
      if(arr[uBound] === target) return uBound;
      return -1;
    }
    let index = Math.floor((uBound + lBound)/2);
    if(arr[index] === target) return index;
    else if(arr[index] > target) return find(arr, target, lBound, index);
    else return find(arr, target, index, uBound);
  }
  return find(this, target, 0, this.length - 1);
}
Object.prototype.Copy = function()
{
  return JSON.parse(JSON.stringify(this));
}
