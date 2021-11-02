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
class Tree
{
  #tree = null;
  #inorderTraversal = null;
  constructor(arr)
  {
    this.#tree = arr;
  }
  getRoot()
  {
    return 0;
  }
  getValue(i)
  {
    return this.#tree[i];
  }
  getLeft(i)
  {
//    console.log(`getLeft ${i}`);
    const left = i*2 + 1;
    if(!this.isValid(left)) return null;
    return left;
  }
  getRight(i)
  {
    const right = i*2 + 2;
    if(!this.isValid(right)) return null;
    return right;
  }
  isValid(i)
  {
    return (i >= 0 && i < this.#tree.length);
  }
  getInOrderTraversal()
  {
  //  console.log(`getInorderTraversal`);
    if(this.#inorderTraversal !== null) return this.#inorderTraversal;

    let helper = function(tree, root)
    {
    //  console.log(`helper ${root}`)
      let traversal = [];
      if(tree.getLeft(root) !== null){
        traversal.push(...helper(tree, tree.getLeft(root)));
      }
      traversal.push(tree.getValue(root));
      if(tree.getRight(root) !== null){
        traversal.push(...helper(tree, tree.getRight(root)));
      }
      return traversal;
    }
    this.#inorderTraversal = helper(this, this.getRoot());
    return this.#inorderTraversal;
  }
}
let p = new Tree([1,2,2,3,4,4,3]);
let q = new Tree([1,2,2,null,3,null,3]);
console.log(p.getInOrderTraversal());
console.log(q.getInOrderTraversal());
console.log(isSymmetricTree(p));
console.log(isSymmetricTree(q));
