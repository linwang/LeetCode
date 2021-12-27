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

export class BinaryNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function toBinaryTree(list) {
  function createBinaryTreeRecursive(i) {
    if(list == null || i >= list.length || list[i] == null) {
      return null;
    }
    let  root = new BinaryNode(list[i]);
    root.left = createBinaryTreeRecursive(i * 2 + 1);
    root.right = createBinaryTreeRecursive(i * 2 + 2);
    return root;
  }
  return createBinaryTreeRecursive(0);
}
console.log(toBinaryTree(null));
console.log(toBinaryTree([1]).toString());
console.log(toBinaryTree([6,2,8,0,4,7,9,null,null,3,5]).toString());
