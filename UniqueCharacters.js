function buttonClick()
{
  let cUnique = countUniqueCharacters(input.value);
  output.textContent = cUnique;
}
function countUniqueCharacters(s)
{
  let uniqueChars = new Array(95);
  uniqueChars.fill(0);
  let cUnique = 0, iUnique = 0;
  for(let iString = 0; iString < s.length; iString++)
  {
    iUnique = s.charCodeAt(iString) - 32;
    uniqueChars[iUnique]++;
  }
  for(iUnique = 0; iUnique < uniqueChars.length; iUnique++)
  {
    if(uniqueChars[iUnique] > 0)
      cUnique++;
  }
  return cUnique;
}
