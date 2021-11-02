function buttonClick()
{
  let values = input.value.split(';');
  let arr = values[0].split(',');
  let target = values[1];
  const index = arr.binarySearch(target);
  output.textContent = `${target} is found at ${index} inside ${arr}.`;
}
