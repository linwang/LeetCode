//input a binary tree
//output the minimum depth
//the minimum depth is the shortest path from root to leaf
//root is level 1
function getMinDepth(root)
{
  let helper = function(root, level)
  {
    if(root === null) return level - 1;
    if(root.left === null && root.right === null)
    {
      return level;
    }
    let minL = helper(root.left, level + 1);
    let minR = helper(root.right, level + 1);
    return minL < minR ? minL : minR;
  }
  return helper(root, 1);
}
let root = convertBT([3,9,20,null,null,15,7]);
console.log(getMinDepth(root));
class Node
{
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function convertBT(arr)
{
  let getLeft = function(index)
  {
    return index * 2 + 1;
  };
  let getRight = function(index)
  {
    return index*2 + 2;
  };

  let helper = function(index, arr)
  {
    console.log(`convertRecursion(${index})`);

    if(arr[index] === null) return null;
    let root = new Node(arr[index]);
    let left = getLeft(index);
    if(left < arr.length) {
      root.left = helper(left, arr);
    }
    let right = getRight(index);
    if(right < arr.length) {
      root.right = helper(right, arr);
    }
    return root;
  }
  return helper(0, arr);
}

console.log(getMaxDepth([]))
