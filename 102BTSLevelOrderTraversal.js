//input root of binary tree
//output level order traversal (left to right, level by level)
//ie root = [3,9,20,null,null,15,7]; output = [[3], [9,20],[15,7]]
function getLevelOrderTraversal(root)
{
  if(!root || root.length === 0) return [];

  root = root.map(x => parseInt(x))
  let output = [[root[0]]];

  let leftParent = 0;
  let rightParent = 0;
  while(true)
  {
    let left = 2*leftParent + 1;
    let right = 2*rightParent + 2;
    if(left >= root.length) break;
    if(right >= root.length) right = root.length - 1;
    output.push(root.slice(left, right + 1).filter(x => !isNaN(x)));
    leftParent = left;
    rightParent = right;
  }
return output;
}
console.log(getLevelOrderTraversal([3,9,20,null,null,15,7,null,null,6,7,8,9]))
