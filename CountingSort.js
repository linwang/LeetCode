const input = document.querySelector('#input');
const button = document.querySelector('#run');
const output = document.querySelector('#output');
button.onclick = function(){
    let nums = input.value.split(',').map(x=>parseInt(x));
    const uBound = nums.pop();
    const lBound = nums.pop();
    let sorted = countingSort(nums, lBound, uBound);
    output.textContent = "Output:" + sorted;
}
function countingSort(nums, lBound, uBound)
{
  let countArr = new Array(uBound - lBound + 1);
  countArr.fill(0);
  let iCount = 0;
  let iUnsorted = 0;
  for(iUnsorted = 0; iUnsorted < nums.length; iUnsorted++)
  {
      iCount = nums[iUnsorted] - lBound;
      countArr[iCount]++;
  }
  for(iCount = 1; iCount < countArr.length; iCount++)
  {
    countArr[iCount] += countArr[iCount - 1];
  }
  countArr.unshift(0);
  countArr.pop();
  let sorted = new Array(nums.length);
  let iSorted = 0;
  for(iUnsorted = 0; iUnsorted < nums.length; iUnsorted++)
  {
    iCount = nums[iUnsorted] - lBound;
    iSorted = countArr[iCount];
    countArr[iCount]++;
    sorted[iSorted] = nums[iUnsorted];
  }
  return sorted;
}
