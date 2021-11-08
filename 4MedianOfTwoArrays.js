function buttonClick()
{
  output.setAttribute('style', 'white-space: pre;');
  let twoArrays = input.value.split(';');
  let nums1 = twoArrays[0].split(',').map(x=>parseInt(x)).removeNaN();
  let nums2 = twoArrays[1].split(',').map(x=>parseInt(x)).removeNaN();
  let merged = mergeTwoSortedArrays(nums1, nums2);
  output.textContent = `Merged array: ${merged};\r\n`;
  let median = getMedian(merged);
  output.textContent += median.toString();
  median = getMedianOfTwoArrays(nums1, nums2);
  output.textContent += median.toString();
}
function getMedianOfTwoArrays(nums1, nums2)
{
  if((!nums1) || (nums1.length === 0)) return getMedian(nums2);
  if((!nums2)||(nums2.length === 0)) return getMedian(nums1);

  if(nums1[nums1.length - 1] <= nums2[0]) return getMedian(nums1.concat(nums2));
  if(nums2[nums2.length - 1] <= nums1[0]) return getMedian(nums2.concat(nums1));

  const full = nums1.length + nums2.length;
  const half = Math.floor(full/2);
  function getMedianOfTwoArrays(nums1, lBound, uBound, nums2)
  {

      let i1 = Math.floor((lBound + uBound)/2);
      let i2 = half - (i1 + 1) - 1;
      if(nums1[i1] > nums2[i2+1]) return getMedianOfTwoArrays(nums1, lBound, i1 - 1, nums2);
      if(nums2[i2] > nums1[i1+1]) return getMedianOfTwoArrays(nums1, i1 + 1, uBound, nums2);

      let maxOfFirst = nums1[i1] > nums2[i2] ? nums1[i1] : nums2[i2];
      let minOfSecond = nums1[i1+1] < nums2[i2+1] ? nums1[i1+1] : nums2[i2+1];
      if(full%2 === 0)
        return new Median([NaN, NaN], (maxOfFirst+minOfSecond)/2);
      else return new Median([NaN, NaN], minOfSecond);
  }
  return getMedianOfTwoArrays(nums1, 0, nums1.length - 1, nums2);
}
