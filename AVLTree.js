//requirements
//left < root < right
// |left tree level - right tree level| < 2

//node:
//left child
//right child
//value
//level to root?

//constructor(arr)
//insert
//delete
//_rotateLeft
//_rotateRight

class Node {
  constructor(value, left, right, level){
    this.value = value;
    this.left = left;
    this.right = right;
    this.level = level;
  }
}
class AVL {
  constructor() {    
    this.head = null;
  }

  _fixLevel(root) {
    if(root == null) {
      return;
    }    
    let left = root.left == null ? 0 : root.left.level;
    let right = root.right == null ? 0 : root.right.level;
    root.level = Math.max(left, right) + 1;
  }

  _rotateRight(root) {
    console.log(`rotateRight(${root.value})`);
    let newRoot = root.left;
    root.left = newRoot.right;
    newRoot.right = root;
    this._fixLevel(root);
    this._fixLevel(newRoot);
    return newRoot;
  }

  _rotateLeft(root) {
    console.log(`rotateLeft(${root.value})`);    
    let newRoot = root.right;
    root.right = newRoot.left;
    newRoot.left = root;
    this._fixLevel(root);
    this._fixLevel(newRoot);
    return newRoot;
  }

  _rotate(root) {
    if(root == null) {
      return root;
    }

    let leftLevel = root.left == null? 0 : root.left.level;
    let rightLevel = root.right == null? 0 : root.right.level;
    let difference = leftLevel - rightLevel;

     if(difference > 1) {
       root = this._rotateRight(root);
     }
     else if(difference < -1) {
       root = this._rotateLeft(root);
     }

    return root;
  }

  _insertRecursive(root, value) {
    if(root == null) {
        root = new Node();
        root.value = value;
    }
    else if(value < root.value) {
      root.left = this._insertRecursive(root.left, value);
    }
    else {
      root.right = this._insertRecursive(root.right, value);
    }
    root = this._rotate(root);
    this._fixLevel(root);
    return root;
  } 

  //returns the value of the right most node
  _retrieveRightMost(root) {
    if(root == null) {
      return null;
    }

    if(root.right != null) {
      return this._retrieveRightMost(root.right);
    }
    return root.value;
  }

  //returns the value of the right most node
  _retrieveLeftMost(root) {
    if(root == null) {
      return null;
    }
    if(root.left != null) {
      return this._retrieveLeftMost(root.left);
    }
    return root.value;
  }

  _deleteRecursive(root, value) {
    if(root == null) {
      return root;
    }

    if(root.value === value) {
      //cases:
      //root has no children: delete root and return null
      //root has only left child: return root's left child
      //root has only right child: return root's right child
      //root has both children: go down the right subtree, and retrieve and delete the left most child
      let newRoot = null;
      if(root.left != null && root.right == null) {
        newRoot = root.left;
      }
      else if(root.left == null && root.right != null){
        newRoot = root.right;
      }
      else if(root.left != null && root.right != null) {
        let value = this._retrieveLeftMost(root.right);
        newRoot = this._deleteRecursive(root, value);//because of rotation, newRoot can be != root
        root.value = value;
      }
      root = newRoot;      
    }
    else if(value < root.value) {
      root.left = this._deleteRecursive(root.left, value);
    }
    else {
      root.right = this._deleteRecursive(root.right, value);
    }
    root = this._rotate(root);
    this._fixLevel(root);
    return root;
  }
  _traverseInOrder(root, nodes) {
    if(root == null){
      return;
    }

    this._traverseInOrder(root.left, nodes);
    nodes.push(`[${[root.value, root.level]}]`);
    this._traverseInOrder(root.right, nodes);
  }
  _traversePreOrder(root, nodes) {

    if(root == null){
      return;
    }

    nodes.push(`[${[root.value, root.level]}]`);
    this._traversePreOrder(root.left, nodes);
    this._traversePreOrder(root.right, nodes);
  }

  _traversePostOrder(root, nodes) {
    if(root == null){
      return;
    }

    this._traversePostOrder(root.left, nodes);
    this._traversePostOrder(root.right, nodes);
    nodes.push(`[${[root.value, root.level]}]`);
  }

  insert(value){
    console.log(`insert(${value})`);
    if(value == null) {
      return;
    }
    this.head = this._insertRecursive(this.head, value);
  }

  delete(value) {
    console.log(`delete(${value})`);
    if(value == null) {
      return;
    }
    this.head = this._deleteRecursive(this.head, value);
  }

  toString() {
    let nodes = [];
    this._traversePostOrder(this.head, nodes);
    return `[${nodes.join(', ')}]`;
  }
}
let tree = new AVL();
let logTree = (tree) => {
  console.log(tree.toString());
}
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
logTree(tree);
tree.delete(7);
logTree(tree);
tree.delete(5);
logTree(tree);
tree.delete(6);
logTree(tree);
tree.delete(2);
logTree(tree);