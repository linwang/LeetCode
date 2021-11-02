//input: roots of two binary trees: p, q
//output: are these two trees the same
//Two trees are the same if they're structurally the same
// and each node's value is also the same
function isSameTree(pTree, qTree)
{
  let helper = function(p, q, pTree, qTree){
    //console.log(`checking nodes ${p} and ${q}`);
    if(p !== q) return false;
    if(p !== null)
    {
      if(pTree.getValue(p) !== qTree.getValue(q)) return false;
      if(!helper(pTree.getLeft(p), qTree.getLeft(q), pTree, qTree)) return false;
      if(!helper(pTree.getRight(p), qTree.getRight(q), pTree, qTree)) return false;
    }
    return true;
  }
  return helper(pTree.getRoot(), qTree.getRoot(), pTree, qTree);
}


console.log(isSameTree(new Tree([1,2,4]), new Tree([1,2,4])));
console.log(isSameTree(new Tree([1,2]), new Tree([1,2,4])));
console.log(isSameTree(new Tree([1,2,4]), new Tree([1,3,4])));
console.log(isSameTree(new Tree([1,3,4,null,5]), new Tree([1,3,4,null,5])));
