export class BinaryTree
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
