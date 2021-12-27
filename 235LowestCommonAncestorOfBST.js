import {BinaryNode, toBinaryTree} from './BinaryTree.js'
//input: head of bst, two nodes in bst
//output: node, lowest common ancester

//find node 1 in bst (log(n))
//find node 2 in bst (log(n))
//compare the two nodes' paths to get the node before they diverges (log(n))
//[3,2,1] 2,1; [3,2] [3,1] CLA = 3

//check both nodes as we navigate the tree
//keep going if they navigate the same path
//stop and return if they start to diverge
//O(logn)

//cases:
//if(root == null) return NOT_FOUND
//if(a > root.v && b > root.v) go right,
//  return if output === NOT_FOUND, return current node; else return output
//if(a < root.v && b < root.v) go left
//  return if output === NOT_FOUND, return current node; else return output
//other return root

//a and b must be in list
const NOT_FOUND = null;
function getLCA(list, a, b) {
  let bst = toBinaryTree(list);
  if(bst == null) {
    return NOT_FOUND;
  }

  function getLCARecursive(root) {
    if(root == null) {
      return NOT_FOUND;
    }

    let output = NOT_FOUND;
    if(a > root.value && b > root.value) {
      output = getLCARecursive(root.right);
    }
    else if(a < root.value && b < root.value) {
      output = getLCARecursive(root.left);
    }

    if(output === NOT_FOUND) {
      return root;
    }
    return output;
  }
  return getLCARecursive(bst);
}


console.log(getLCA([null], 1, 3));//null
console.log(getLCA(null, 1, 3));//null

console.log(getLCA([2,1], 2, 1));//2
console.log(getLCA([2,1,3], 1, 3));//2
console.log(getLCA([4,2,6,1,3,5,7], 1, 3));//2
console.log(getLCA([6,2,8,0,4,7,9,null,null,3,5], 2, 8));//6
console.log(getLCA([6,2,8,0,4,7,9,null,null,3,5], 3, 5));//4
console.log(getLCA([6,2,8,0,4,7,9,null,null,3,5], 2, 4));//2
