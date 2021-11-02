//input string containing only digits, 0 <= digits.length <= 3000
//output all valid IP addresses from string in any order
//valid IP address: four ints, 0 <= int <= 255, separated by .
//  no leading 0. ie. 0.1.2.201 or 192.168.1.1
function getAllIPs(digits)
{
  console.log(`getAllIPs(${digits})`);
  //bruteforce is to try every possible at a current state
  //but since digits can only be separated into 4 digits and
  //each digit's length 1 to 3. Then really 4 <= digits.length <= 12
  const minIP = 4;
  const maxIP = 12;
  if(!digits) return null;
  if(digits.length < minIP) return null;
  if(digits.length > maxIP) return null;

  let isValidIPComponent = function(digits, iBeg, iEnd)
  {
    let ipC = digits.slice(iBeg, iEnd + 1);
    if((ipC.length > 1) && (ipC[0] === '0')) return false;
    ipC = parseInt(ipC);
    return ((ipC >= 0) && (ipC <= 255));
  }
  let getAllIPComponents = function(digits, iBeg, place)
  {
    //base case is 4th digit, either return [place] or [] if invalid

    let outputs = new Array();
    if(place === 4)
    {
      let iEnd = digits.length - 1;
      if(isValidIPComponent(digits, iBeg, iEnd))
      {
        outputs = [digits.slice(iBeg, iEnd + 1)];
      }
    }
    else
    {
      for(let size = 0; size < 3 && (iBeg + size) < digits.length - 4 + place; size++)
      {
        if(isValidIPComponent(digits, iBeg, iBeg + size))
        {
          output = getAllIPComponents(digits, iBeg + size + 1, place + 1);
          if(!output || output.length === 0) continue;
          output = output.map(x => `${digits.slice(iBeg, iBeg + size + 1)}.${x}`);
          outputs.push(...output);
        }
      }
    }
    console.log(`getAllIPComponents(${iBeg}, ${place}) returns ${outputs.toString()}`)
    return outputs;
  }

  return getAllIPComponents(digits, 0, 1);
}

console.log(getAllIPs('101023'));
Array.prototype.toString = function()
{
    return `[${this.join(',')}]`
}
