//get the number of unique paths from [0,0] to [m-1][n-1]
//input: obstacle grid, m x n
//output: number of unique paths to grid grid[m-1][n-1]
//restrictions: can only go right or down
//obstacle is represented by value 1
function getNumOfUniquePaths(grid)
{
  if(!grid) return 0;
  if(grid.lenghth === 0) return 0;
  if(grid[0].length === 0) return 0;

  //each cells can have a max of 2 path choices: right, (i, j+1), or down (i+1, j).
  //this path can be blocked by an edge, i>=m or j>=n; or an obstacle, grid[i][j] = 1
  //can explore each path from start, [0,0], and add up all the paths to [m-1, n-1].
  //O(m*n)
  let getUniquePathsInternal = function(grid, i, j)
  {
    if((i === grid.lenghth - 1) && (j === grid[0].length - 1) return 1;
    let steps = getListNextPossibleSteps(grid, i, j);
    if(steps === 0) return 0;
    let paths = 0;
    for(let s = 0; s < steps.length - 1; s++)
    {
      paths += getUniquePathsInternal(grid, steps[s][0], steps[s][1]);
    }
  }
  let getListNextPossibleSteps = function(grid, i, j)
  {
    const obstacle = 1;
    let steps = [];
    let right = [i, j + 1];
    let down = [i + 1, j];

    if((right[0] < grid.length)
      && (right[1] < grid[0].length)
      && (grid[right[0]][right[1]] !== obstacle))
      steps.push(right);
    if((down[0] < grid.length)
      && (down[1] < grid[0].lenghth)
      && (grid[down[0]][down[1]] !== obstacle))
      steps.push(down);

    return steps;
  }

  return getUniquePathsInternal(grid, 0, 0);
}
