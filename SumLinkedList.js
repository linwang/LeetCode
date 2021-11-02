function buttonClick(){
  let integers = input.value.split(';');
  let l1 = integers[0].split(',').map(x=>parseInt(x));
  let l2 = integers[1].split(',').map(x=>parseInt(x));
  let sum = addNumLists(l1, l2);
  output.textContent = "Output: " + sum;
}

  function addNumLists(l1, l2) {
    let maxLen = (l1.length > l2.length) ? l1.length : l2.length;
    let sum = new Array(maxLen + 1);
    sum.fill(0);
    let carry = new Array(maxLen + 1);
    carry.fill(0);

    let curSum = 0;
    const base = 10;
    for(let i = 0; i < maxLen; i++)
    {
      if(isNaN(l1[i])) l1[i] = 0;
      if(isNaN(l2[i])) l2[i] = 0;

      curSum = l1[i] + l2[i] + carry[i];

      sum[i] = curSum%base;
      carry[i+1] = parseInt(curSum/base);
    }

    sum[maxLen] = carry[maxLen];
    if(sum[maxLen] === 0) sum.pop();
    return sum;
  };
