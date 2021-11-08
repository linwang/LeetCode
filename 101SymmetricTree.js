//input tree's root
//output is the tree symmetric
//draw a vertical line down the middle, fold
//and the nodes are all the same in structure and value
function isSymmetricTree(tree)
{
  let arr = tree.getInOrderTraversal();
  let left = 0, right = arr.length - 1;
  while(left < right)
  {
    if(arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}

let p = new Tree([1,2,2,3,4,4,3]);
let q = new Tree([1,2,2,null,3,null,3]);
console.log(p.getInOrderTraversal());
console.log(q.getInOrderTraversal());
console.log(isSymmetricTree(p));
console.log(isSymmetricTree(q));
