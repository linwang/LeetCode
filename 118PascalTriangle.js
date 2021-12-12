//input: numRows, integer
//output: first numRows of Pascal's triangle
//pascal's triangle:
//a triangle with a root === 1 and any node (row[r][i]) in subsequent rows =
//sum of two nodes above (row[r-1][i - 1] and row[r-1][i]);

//to construct [numRows - 1] row of triangle, it needs to know the [numRows - 1 - 1]
//row of the triangle, until [numRows - numRows] row, which is [1].
//upon return, nodes of the row are calculated as follows, number of nodes = rowIndex + 1;
//nodes[i] = nodes[r-1][i-1] + nodes[r-1][i]; if either nodes return undefined, replace with 0;
//add current row to the end of triangle (array of arrays);
//endLoop

const INVALID_INPUT = [];
function getPascalsTriangle(numRows) {
  if(numRows == null || numRows < 1) {
    return INVALID_INPUT;
  }
  const getPascalsTriangleRecursive = (rowCount) => {
    if(rowCount === 1) {
      return [[1]];
    }
    let triangle = getPascalsTriangleRecursive(rowCount - 1);
    let nodes = new Array(rowCount);
    for(let i = 0; i < nodes.length; i++) {
      let leftP = triangle[rowCount - 2][i - 1];
      if(leftP == null) {
        leftP = 0;
      }
      let rightP = triangle[rowCount - 2][i];
      if(rightP == null) {
        rightP = 0;
      }
      nodes[i] = leftP + rightP;
    }
    triangle.push(nodes);
    return triangle;
  }
  return getPascalsTriangleRecursive(numRows);
}
console.log(getPascalsTriangle(null));//[]
console.log(getPascalsTriangle(0));//[]
console.log(getPascalsTriangle(1));//[[1]]
console.log(getPascalsTriangle(2));//[[1],[1,1]]
console.log(getPascalsTriangle(5));//[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
