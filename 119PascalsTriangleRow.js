//input: rowNum
//output: nodes of that row in a pascal's triangle
//e.g.: rowNum = 2, output = [1,1]

//perform a DPS of each node in the row
//base case: if i === 0 || i === rowNum - 1, return 1
//progression: return getNodeValue(rowNum - 1, i - 1) + getNodeValue(rowNum -1, i);

function getPascalsTriangleForRow(rowNum) {
  if(rowNum == null || rowNum < 1) {
    return [0];
  }
  if(rowNum === 1) {
    return [1];
  }

  const cache = {};
  const getNodeValue = (rowNum, index) => {
    let key = `row${rowNum}i${index}`;
    if(cache[key] != null)
      return cache[key];

    if(index < 0 || index >= rowNum) {
      return 0;
    }
    if(index === 0 || index === rowNum - 1) {
      return 1;
    }
    cache[key] = getNodeValue(rowNum - 1, index - 1) + getNodeValue(rowNum - 1, index);
    return cache[key];
  }

  let row = new Array(rowNum);
  for(let i = 0; i < row.length/2; i++) {
    row[i] = getNodeValue(rowNum - 1, i - 1) + getNodeValue(rowNum - 1, i);
    row[rowNum - i - 1] = row[i];
  }
  return row;
}
console.log(getPascalsTriangleForRow(null));
console.log(getPascalsTriangleForRow(0));
console.log(getPascalsTriangleForRow(1));
console.log(getPascalsTriangleForRow(2));
console.log(getPascalsTriangleForRow(3));
console.log(getPascalsTriangleForRow(33));
