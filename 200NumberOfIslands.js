//input: grid, a m*n binary grid, 1 = land, 0 = water
//output: the number of islands
//An island is surrounded by water and is formed by connecting adjacent lands
//horizontally or vertically. Assume edges of grid are surrounded by water.

//a set of 1's form an island when it is surrounded by 0s or off-grid "waters".
//scan through the grid, when I see a 0, I ask does this surround an island? when
//I see a 1, I ask is this surrounded by a 0 or off-grid "water", is this connected
//to an existing island, or is this a new island?
//When I finish scanning the grid, I should know the count of islands

//I can use visited to denote if I've already evaluated a node, so for 1's, if
//I encounter one, I can recursively find all the connected 1s and mark them as visited
//Do I mark 0s? I think no, because a 0 can border multiple islands.

function getCountOfIslands(grid) {
  if(grid == null || grid[0] == null) return 0;
  let visited = new Array(grid.length).fill(new Array(grid[0].length));

  const island = '1';
  let count = 0;
  const markConnectedIsland = function(r, c, grid, visited) {
    //console.log(`markConnectedIsland(${r},${c})`);
    if(r >= grid.length || r < 0) return;
    if(c >= grid[0].length || c < 0) return;
    if(grid[r][c] !== island) return;
    if(visited[r][c] != null) return;

    visited[r][c] = true;
    markConnectedIsland(r - 1, c, grid, visited);//up
    markConnectedIsland(r + 1, c, grid, visited);//down
    markConnectedIsland(r, c - 1, grid, visited);//left
    markConnectedIsland(r, c + 1, grid, visited);//right
    return;
  }
  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[r].length; c++) {
      if(grid[r][c] === island && visited[r][c] == null) {
        count++;
        markConnectedIsland(r, c, grid, visited);
      }
    }
  }
  return count;
}
console.log(getCountOfIslands(null));//0
console.log(getCountOfIslands([null]));//0
console.log(getCountOfIslands([[]]));//0

console.log(getCountOfIslands([['0']]));//0
console.log(getCountOfIslands([['1']]));//1

console.log(getCountOfIslands([['1','0','1'],['0','1','0']]));//3
console.log(getCountOfIslands([['1','1','1'],['0','1','0']]));//1

console.log(getCountOfIslands([["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]]));//1
console.log(getCountOfIslands([["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));//3
