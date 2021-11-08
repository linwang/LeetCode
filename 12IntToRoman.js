function buttonClick()
{
  let num = parseInt(input.value);
  output.textContent = convertIntToRoman(num);
}

function convertIntToRoman(num)
{
  const lookUp = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM']
  ];

  function convert(num, power)
  {

    //num: 4321 - > 432 -> 43 -> 4;
    //power: 0 -> 1 -> 2 -> 3;
    //digit: 1 -> 2 -> 3 -> 4;
    if(num/10 < 1)//at the highest power
      return lookUp[power][num];

    return convert(Math.floor(num/10), power+1) + lookUp[power][num%10];
  };

  return convert(num, 0);
}
