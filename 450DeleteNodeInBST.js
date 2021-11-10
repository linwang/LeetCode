//given root node and a key
//delete the node with with the key
//return root node of bst
//BST: left < parent < right
function deleteKey(root, key)
{
  console.log(`deleteKey(${key})`);
  //find node and delete it
  if(root.key === key)
  {
    if(root.left !== null)
    {
      root.key = root.left.key;
      root.left = deleteKey(root.left, root.left.key);
    }
    else if (root.right !== null)
    {
      root.key = root.right.key;
      root.right = deleteKey(root.right, root.right.key);
    }
    else
      return null;
  }
  else if(key < root.key && root.left !== null)
  {
    root.left = deleteKey(root.left, key);
  }
  else if(key > root.key && root.right !== null)
  {
    root.right = deleteKey(root.right, key);
  }
   return root;
}
function convertToBST(arr)
{
  console.log(`convertToBST(${arr})`);
  let addToBST = function(root, key)
  {
    if(root === null)
    {
      root = new Node(key);
      return root;
    }
    if(key < root.key)
    {
      root.left = addToBST(root.left, key);
    }
    else
    {
      root.right = addToBST(root.right, key);
    }
    return root;
  }
  let root = null;
  for(let v of arr)
  {
    root = addToBST(root, v);
  }
  return root;
}
class Node {
  constructor(key)
  {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
let bst = convertToBST([3,4,2,1,5,6]);
console.log(bst);
console.log(deleteKey(bst, 3));
console.log(deleteKey(bst, 6));
console.log(deleteKey(bst, 1));
console.log(deleteKey(bst, 7));
