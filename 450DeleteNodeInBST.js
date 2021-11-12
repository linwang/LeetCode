//given root node and a key
//delete the node with with the key
//return root node of bst
//BST: left subtree < parent < right subtree

function deleteKey(root, key)
{
  console.log(`deleteKey(${key})`);
  //find node and delete it
  if(root.key === key)
  {
    /*
  	• Case 1: delete leaf, no children; delete node and  return null
  	• Case 2: delete node with 1 child; delete node and return node's child
  	• Case 3: delete node with 2 children; just return node but update the value to the largest from left subtree or right from right subtree; then it will delete the node with that value (recursion call, and only case 1 or 2 will be encountered)
  		○ The subroutine (getMaxValue(root)) will need to find the node with the biggest value
    */
    if(root.left == null &&  root.right == null)
    {
      return null;
    }
    if(root.left != null && root.right == null)
    {
      return root.left;
    }
    else if (root.right != null && root.right == null)
    {
      return root.right
    }
    else
    {
      let findMax = function(root)
      {
        if(root.right == null)
        {
          return root.key;
        }
        return findMax(root.right);
      }
      root.key = findMax(root.left);//ideally in balanced tree, would check level
      root.left = deleteKey(root.left, root.key);
      return root;
    }

  }
  else if(key < root.key && root.left != null)
  {
    root.left = deleteKey(root.left, key);
  }
  else if(key > root.key && root.right != null)
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
