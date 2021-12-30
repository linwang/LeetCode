import {toBinaryTree} from './binarytree.js'
//input root of a binary tree
//output: an array of string paths, all root-to-leaf paths in any order
//eg: root = [1,2,3,null,5], output = [1->2->5, 1->3]

//starting from the root, walk down each branch to find the path
//cases:
// initial validation root is null: return []
//recursion
//base: root is a leaf: return [leaf.value]
//root -> left != null; recursion on root -> left;
//root -> right != null; recurse on root -> right;
//for all outputs, add 'root.value->' to each value, then return

function getAllPaths(list) {
  let head = toBinaryTree(list);
  if(head == null) {
    return [];
  }
  function getAllPathsRecursive(root) {
    //base:
    if(root.left == null && root.right == null) {
      return [`${root.value}`];
    }
    function walkBranch(branch) {
      if(branch != null) {
        return getAllPathsRecursive(branch);
      }
      return [];
    }
    let outputs = [];
    outputs.push(...walkBranch(root.left));
    outputs.push(...walkBranch(root.right));

    outputs = outputs.map((value) => {
      return `${root.value}->${value}`;
    })
    return outputs;
  }
  return getAllPathsRecursive(head);
}
console.log(getAllPaths(null));
console.log(getAllPaths([]));
console.log(getAllPaths([1]));
console.log(getAllPaths([1,2,3]));
console.log(getAllPaths([1,2,3,4,5,6,7]));
console.log(getAllPaths([1,2,3,4,null,null,7]));
console.log(getAllPaths([1,2,3,null,5]));
