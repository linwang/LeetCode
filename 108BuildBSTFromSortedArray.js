//input a sorted array
//output a balanced binary search tree
function buildBTS(arr)
{
  let bst = [];
  let buildBTSRecursion = function (i, bst, beg, end, arr)
  {
    console.log(`buildBTSRecursion(${i}, ${beg}, ${end})`);

    let length = end - beg + 1;
    if(length === 0)
    {
      bst[i] = null;
      return;
    }
    if(length === 1)
    {
      bst[i] = arr[beg];
      return;
    }

    let iArr = beg + Math.floor(length/2);
    bst[i] = arr[iArr];

    let left = i * 2 + 1;
    buildBTSRecursion(left, bst, beg, iArr - 1, arr);

    let right = i * 2 + 2;
    buildBTSRecursion(right, bst, iArr + 1, end, arr);
  }
  buildBTSRecursion(0, bst, 0, arr.length - 1, arr);
  return bst;
}
console.log(buildBTS([1,3]))
