const input = document.querySelector('#input');
const button = document.querySelector('#run');
const output = document.querySelector('#output');
button.onclick = function(){
  let nums = input.value.split(',').map(x=>parseInt(x));
  nums = radixSort(nums);
  output.textContent = "Output: " + nums;
}

    //input = an array of numbers
    //method = from the least significant digit to the highest significant digit of the numbers in the Array
    //stable sort according to the digit. The result is a sorted Array
    //questions =
    // *What is the largest number of digits in the array of numbers? find the max. A maxHeap can produce the highest numbers in O(nlogn)
    // Can also just keep on sorting until all digits in a certain significant are 0... O(n), or just track the largest
    // and go through each number in the array, O(n)
    // *What is a good stable sort? Counting sort
    // *If a number does not have a high significant, what gets output? probably undefined
    //What is the upper and lower bound? -9 to 9
  function radixSort(nums) {
    //find max number in numbers
    const max = findMax(nums);
    //find number of digits
    const maxSign = max.toString().length;

    let curNum = 0;//current number of current significant place
    //Stable sort each significant from least to most
    for(let sign = 0; sign < maxSign; sign++)
      nums = countingSort(nums, sign);
    return nums;
  };

  function findMax(nums)
  {
    let max = nums[0];
    for(let i = 1; i < nums.length; i++)
      if(max < nums[i])
        max = nums[i];
    console.log("max is " + max);
    return max;
  }
  //Special Counting Sort that only sorts according to specified significant
  //supports positive and negative ints
  function countingSort(nums, sign)
  {
    function getSignificant(num, sign)
    {
      const base = 10;
      let curNum = parseInt(num/base**sign)%base;
      return curNum;
    }

    const lBound = -9;
    const uBound = 9;
    let countArr = new Array(uBound - lBound + 1);
    countArr.fill(0);
    let iCount = 0;
    let iUnsorted = 0;
    let curNum = 0;
    //Count # of occurances of each digit in nums at sign
    for(iUnsorted = 0; iUnsorted < nums.length; iUnsorted++)
    {
        curNum = getSignificant(nums[iUnsorted], sign);
        iCount = curNum - lBound;
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
      curNum = getSignificant(nums[iUnsorted], sign);
      iCount = curNum - lBound;
      iSorted = countArr[iCount];
      countArr[iCount]++;
      sorted[iSorted] = nums[iUnsorted];
    }
    return sorted;
  }
