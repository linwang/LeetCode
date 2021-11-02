//input: root of a binary tree
//output: maximum depth
function getMaxDepth(arr)
{
  if(!arr) return 0;
  if(arr.length === 0) return 0;
  let root = convertBT(arr);
  let helper = function(root, depth)
  {
    if(root === null) return depth - 1;
    let left = helper(root.left, depth + 1);
    let right = helper(root.right, depth + 1);
    return (left > right ? left : right);
  }
  return helper(root, 1);
}

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
