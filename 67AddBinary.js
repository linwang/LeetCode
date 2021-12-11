//input: a, b, binary string
//output binary string = a + b

const INVALID_INPUT = '0';
function getSum(a, b) {
  if(a == null || b == null) {
    return INVALID_INPUT;
  }
  //cases:
  //'1' + '1' => 'carrie' carrie = '1'; 2/2 = carrie, 2%2 = digit
  //'1' + '0' => '1' + 'carrie' carrie = '0'
  //'0' + '0' => '0' carrie = '0'
  //'0' or '1' + '' => '0' or '1'
  //'' + '' + carrie => carrie

  const sumLookup = {'111':['1','1'], '110':['1','0'], '101':['1','0'], '100':['0','1'], '011':['1','0'], '010':['0','1'], '001':['0','1'], '000':['0','0']};

  //see if should go with iA or iB?
  //scan from last digit i = max(a.length, b.length) - 1 (iA = a.length - 1, iB = b.length - 1) to first digit
  // (iA <= 0 || iB <= 0) of the longest string; initialization: carrie = 0, binarySum =
  //new Array(max(a.length, b.length)); progression: iA--, iB--
  //[sum, carrieNext] a[iA] + b[iB] + carrie = sum
  //binarySum[i] = sum%2, carrie = sum/2
  //endLoop
  //if carrie !== 0, add carrie to beginning of new array
  let carrie = '0', result = [];
  for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let left = a[i];
    if(i < 0){
      left = '0';
    }
    let right = b[j];
    if(j < 0) {
      right = '0';
    }
    let key = `${left}${right}${carrie}`;
    let sum = sumLookup[key];
    if(sum == null) {
      return INVALID_INPUT;
    }
    result.unshift(sum[1]);
    carrie = sum[0];
  }
  result.unshift(carrie);

  //remove leading 0's
  while(result[0] === '0' && result.length !== 1) {
      result.shift();
  }
  return result.join('');
}

console.log(getSum('',''));//0
console.log(getSum('0','0'));//0
console.log(getSum('0','1'));//1
console.log(getSum('1','0'));//1
console.log(getSum('1','1'));//10

console.log(getSum('10','1'));//11, diff lengths
console.log(getSum('0','11'));//11, diff lengths

console.log(getSum('11','1'));//100, leading carrie
console.log(getSum('010','1'));//11, leading zero

console.log(getSum('1010','1011'));//10101
