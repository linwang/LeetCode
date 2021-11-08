function buttonClick()
{
  const digits = input.value;
  output.textContent = getAllLetterCombinations(digits);
}

function getAllLetterCombinations(digits)
{
  if((digits === null) || (digits === undefined) || (digits.length === 0))
  return '';

  const lookup = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  let combinations;
  for(let i = digits.length - 1; i >= 0; i--)
  {
    let curDigit = parseInt(digits[i]);
    if((!curDigit) || (curDigit < 2))
      continue;//skip invalid inputs

    if(!combinations)
    {
      combinations = lookup[curDigit].split('');
      continue;
    }

    //use a static copy since combinations's length changes inside the loop
    let combinationsCount = combinations.length;
    for(let c = 0; c < combinationsCount; c++)
    {
      //remove item from front of combinations
      let combination = combinations.shift();
      //get letters for digit via lookup
      //each letter + current item
      let letters = lookup[curDigit].split('');
      let newCombinations = letters.map(x => x.concat(combination));
      //add items in newCombinations to end of combinations
      combinations.push(...newCombinations);
    }
  }
  return combinations;
}
