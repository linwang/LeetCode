//input integer n; 1 <= n <= 19
//output the number of structurally unique BST which has exactly n
//nodes of unique values from 1 to n
function getCountBSTs(n)
{
  //recursively calculate number of BSTs for each sized n
  //record results
  let calcBSTs = function (n, lookup)
  {
    if(n < 0)
    {
      return;
    }

    if(!lookup) return;
    //base cases
    if(n <= 1)
    {
      lookup[n] = n;
      return;
    }

    //for n = 3, try 1, 2 or 3 being roots, then take max of the two
    //children's BSTs
    let total = 0;
    for(let root = 1; root <= n; root++)
    {
      let leftChildren = root - 1;
      if(!lookup[leftChildren])
        calcBSTs(leftChildren, lookup);
      let rightChildren = n - root;
      if(!lookup[rightChildren])
        calcBSTs(rightChildren, lookup);
      total += Math.max(lookup[leftChildren], lookup[rightChildren]);
    }
    lookup[n] = total;
    console.log(`calcBSTs(${n}) = ${lookup}`);
  }
  let lookup = new Array(n + 1);
  calcBSTs(n, lookup);
  return lookup[n];
}
console.log(getCountBSTs(16))
