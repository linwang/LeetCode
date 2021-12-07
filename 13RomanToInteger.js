//input: roman, a roman numeral
//output: integer
/*Symbol       Value
I             1
IV            4
V             5
IX            9
X             10
XL            40
L             50
XC            90
C             100
CD            400
D             500
CM            900
M             1000*/
//I can be placed before V (5) and X (10) to make 4 and 9.
//X can be placed before L (50) and C (100) to make 40 and 90.
//C can be placed before D (500) and M (1000) to make 400 and 900.

function getInteger(roman) {
  const INVALID = -1
  if(roman == null) {
    return INVALID;
  }
  let sum = 0;
  const dictionary = {'I':1, 'IV':4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50,
    'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000};

  for(let i = 0; i < roman.length; i++) {
    if(i + 1 < roman.length) {
      let key = roman.slice(i, i + 2);
      if(dictionary[key] != null) {
        sum += dictionary[key];
        i++;
        continue;
      }
    }

    let key = roman.slice(i, i + 1);
    if(dictionary[key] == null) {
      console.log(`Invalid roman numeral '${key}'`)
      return INVALID;
    }
    sum += dictionary[key];
  }
  return sum;
}

console.log(getInteger(null));//-1
console.log(getInteger(''));//0
console.log(getInteger('IVe'));//4
console.log(getInteger('III'));//3
console.log(getInteger('IV'));//4
console.log(getInteger('CMCDXCXLIXIV'));//900+400+90+40+9+4 = 1443
console.log(getInteger('CMCDXCXLIXIVI'));//1444
console.log(getInteger('MCDXCXLIXIVI'));//1544
