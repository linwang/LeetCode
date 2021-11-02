function buttonClick()
{
  const inputs = input.value.split(',').map(x => parseInt(x));
  output.textContent = getMaxContainerArea(inputs);
}
function getMaxContainerArea(coordinates)
{
  if((coordinates === null)||(coordinates === undefined) || (coordinates.length === 0))
    return 0;
  let left = 0, right = coordinates.length - 1;
  let maxArea = 0, curArea = 0;
  while(left < right)
  {
    //calculate and select max area
    curArea = Math.min(coordinates[left], coordinates[right])*(right - left);
    maxArea = maxArea < curArea ? curArea : maxArea;

    if(coordinates[left+1] > coordinates[right-1])
      left++;
    else
      right--;
  }

  return maxArea;
}
