//input: a triangle array [[1member][2][3][...][n]]
//output: the smallest sum from root to leaf
//parent [r][i] => left [r+1][i] right [r+1][i+1]

function getSmallestSum(triangle) {
  if(triangle == null || triangle.length === 0) {
    return 0;
  }
  const left = (i) => {return i};
  const right = (i) => {return i + 1};
  const getKey = (row, i) => {return (row + 1)*row/2 + i};
  let sumLookup = {};

  //brute force: starting from root (r===0, i===0), calculate sum to every leaf
  //O(v+e)
  //dp: note that some paths overlap: parent i & parent i+1 share the same right/left
  //child path; can store the least sum in a hashTable. Key = row*(row + 1) + i;
  //calculating [r][i]'s least sum = value + min(left and right subtree's least sum);
  //base case: leaf should return its own value, a leaf is when row === (n - 1)
  //row = 0 to n-1
  //i = 0 to (row + 1)
  //parent [r][i] => left [r+1][i] right [r+1][i+1]
  //Key = row*(row + 1) + i;
  //root => (row, i, triangle)
  const getSmallestSumRecursive = function(row, i) {
    console.log(`getSmallestSumRecursive(${row},${i})`)
     if(row >= triangle.length || i >= triangle[row].length) {
      return 0;
    }

    const key = getKey(row, i);
    if(sumLookup[key] != null) {
      console.log(`found hash entry ${sumLookup[key]} at ${key}`)
      return sumLookup[key];
    }
    //base case:
    if(row === triangle.length - 1) {
      return triangle[row][i];
    }
    //progression:
    const leftSum = getSmallestSumRecursive(row + 1, left(i));
    const rightSum = getSmallestSumRecursive(row + 1, right(i));
    let smallest = triangle[row][i] + Math.min(leftSum, rightSum);
    sumLookup[key] = smallest;
    return sumLookup[key];
  }
  return getSmallestSumRecursive(0,0);
}
console.log(getSmallestSum(null));//0
console.log(getSmallestSum([]));//0
console.log(getSmallestSum([[]]));//0
console.log(getSmallestSum([[1]]));//1
console.log(getSmallestSum([[1],[2,3]]));//3
console.log(getSmallestSum([[1],[2,3],[6,4,5]]));//7
console.log(getSmallestSum([[1],[2,3],[6,4,5],[1,1,1,1]]));//8
console.log(getSmallestSum([[1],[2,3],[6,4,5],[1,1,1,1], [1,1,1,1,1]]));//9
console.log(getSmallestSum([[1],[2,3],[6,4,5],[1,1,1,1], [1,1,1,1,1], [1,-1,1,1,1,1]]));//8
