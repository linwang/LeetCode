//input root of a binary tree, n is [1, 10^4], n.value is [-2^31, 2^31 - 1]
//output is it a binary search tree?
//a valid binary search tree: * left < parent < right
function isBinarySearchTree(arr)
{
  if(!arr)  return true;
  arr = arr.map(x => parseInt(x));
  console.log(`isBinarySearchTree(${arr})`)

  let isValidIndex = function(arr, index)
  {
    return ((index >=0) && (index <= arr.length - 1));
  }
  let isBST = function (arr, i)
  {
    let leftI = i*2 + 1;
    let rightI = i*2 + 2;
    if((isValidIndex(arr, leftI)) && (arr[leftI] !== NaN))
    {
      if(arr[leftI] > arr[i])
        return false;
      else if(!isBST(arr, leftI))
        return false;
    }
    if((isValidIndex(arr, rightI))&& (arr[rightI] !== NaN))
     {
      if(arr[rightI] < arr[i])
        return false;
      else if(!isBST(arr, rightI))
        return false;
     }
    return true;
  }
  return isBST(arr, 0);
}
console.log(isBinarySearchTree([5,1,5,null,null,3,6]))
