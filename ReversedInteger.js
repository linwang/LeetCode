function buttonClick(){
  let integer = parseInt(input.value);
  let reversedInt = reverseInteger(integer);
  output.textContent = "Output: " + reversedInt;
}

  function reverseInteger(integer) {
    let isNegative;
    if(integer < 0)
    {
      isNegative = true;
      integer *= -1;
    }
    reversedInt = parseInt(integer.toString().reverse());
    if(isNegative) reversedInt *= -1;

    if(reversedInt < -2147483648) return 0;
    if(reversedInt > 2147483647) return 0;
    return reversedInt;
  };
  String.prototype.reverse = function()
  {
    return this.split("").reverse().join("");
  }
