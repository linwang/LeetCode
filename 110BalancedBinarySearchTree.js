//input: a binary tree
//output: is the tree balanced
//balanced means left and right subtreess of every node differ in height by <= 1
function isBalancedTree(tree)
{
  let depth = function(i, tree, level)
  {
    console.log(`isBalancedTree(${i}, ${level})`);
    if(i >= tree.length) return level - 1;
    if(tree[i] === null) return level - 1;

    let lLevel = depth(i*2 + 1, tree, level + 1);
    let rLevel = depth(i*2 + 2, tree, level + 1);
    return (lLevel > rLevel)? lLevel : rLevel;
  }
  let left = depth(1, tree, 2);
  let right = depth(2, tree, 2);
  return Math.abs(left - right) <= 1;
}
console.log(isBalancedTree([1,2,2,3,3,null,null,4,4]))
