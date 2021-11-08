//input a string
//output an integer represented by the string
//Rules:
//*first, all leading white spaces should be removed
//*second, +,- determins if int is positive or negative
//*third, the digits should be connected
//*fourth, once a non-digit is encountered, stop building the integer
//e.g. "hi 123" => 0 "   -123hi" => -123
function atoi(str)
{
  //there are four states: WhiteSpace, Sign, Number, NonInt
  //we start in WhiteSpace, transitions to sign if current character (char)
  //is '+'/'-', or Number if char === '<digit>', or NonInt if char === '<nonDigit>'
  //From sign or whitespace, we can transition to Number or NonInt
  //From Number, or sign or whitespace, we can transition to NonInt

  //There are four types of chars:
  //' ' <- white space, continue to next loop;
  //'+'/'-'<-Sign, set sign to -1 if '-';
  //'<digit>'<-Number, num = num*10 + digit;
  //<non-digit> <- NonInt, return num*sign;
  let whiteSpace = ' ';
  let positive = '+';
  let negative = '-';
  let integer = '0';

  let state = whiteSpace;
  let number = 0;
  let sign = 1;
  for(let i = 0; i < str.length; i++)
  {
      if(str[i] === whiteSpace){
        if(state !== whiteSpace){
          break;
        }
      } else if(str[i] === positive){
        if(state === whiteSpace){
            state = positive;
            sign = 1;
        }
        else{
          break;
        }
      } else if(str[i] === negative){
        if(state === whiteSpace)
        {
          state = negative;
          sign = -1;
        }
        else{
          break;
        }
      } else {
      let digit = parseInt(str[i]);
      if(isNaN(digit)){
        break;
      }
      else
      {
        state = integer;
        number = number * 10 + digit;
      }
    }
  }
    return number *= sign;
}
console.log(atoi('42'));
console.log(atoi('-42'));
console.log(atoi('hi 21'));
console.log(atoi('   +42 hi'));
console.log(atoi('-42 hi'))
console.log(atoi('42-hi'))
