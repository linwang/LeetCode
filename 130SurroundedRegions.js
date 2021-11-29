//given a m*n board
//Return transformed board
// if a cell O is surrounded by cells X in all four directions
//then it is captured and needs to turn to X.

//dp, process each piece in board, after encountering an O piece,
//ask and store isSurrounded in each direction,
//true if X,
//false if null,
//ask if O.
//hash lookup ensures each question is evaluated once.
//hash lookup stores the answers to the questions for coordinates,
//key can be row# * row.length + column#

function updateCapturedOs(board) {
  if(board == null || board[0] == null) {
    return board;
  }
  const rowLength = board.length;
  const colLength = board[0].length;
  const dirs = {up:"up", down:"down", left:"left", right:"right"};
  let cache = {};
  const updateCache = function(row, col, dir, value) {
    if(cache[row] == null) {
      cache[row] = {};
    }
    if(cache[row][col] == null) {
      cache[row][col] = {};
    }
    cache[row][col][dir] = value;
  }
  const getCacheValue = function(row, col, dir) {
    if(cache[row] == null) {
      return null;
    }
    if(cache[row][col] == null) {
      return null;
    }
    return cache[row][col][dir];
  }
  const getCoordinate = {
    up:(row, col) => {return [row - 1, col]},
    down:(row, col) => {return [row + 1, col]},
    left:(row, col) => {return [row, col - 1]},
    right:(row, col) => {return [row, col + 1]}};
  const isValid = function(row, col) {
    return (row >= 0 && col >= 0 && row < rowLength && col < colLength);
  }
  const updateCapturedForDir = function(row, col, dir) {
    const [rowInDir , colInDir] = getCoordinate[dir](row, col);
    if(getCacheValue(row, col,dir) != null) {
      return getCacheValue(row, col,dir);
    }
    if(!isValid(rowInDir, colInDir)) {
        updateCache(row, col, dir, false);
        return getCacheValue(row, col, dir);
    }
    console.log(`checking row = ${rowInDir} col = ${colInDir} for dir = ${dir}`);

    if(board[rowInDir][colInDir] === 'X') {
      updateCache(row, col, dir, true);
    }
    else{
      let value = updateCapturedForDir(rowInDir, colInDir, dir);
      updateCache(row, col, dir, value);
    }

    return getCacheValue(row, col,dir);
  }

  const isCaptured = function(row, col) {
    for(let dir in dirs)
    {
      let value = getCacheValue(row, col, dir);
      if(value == null || value === false) {
        return false;
      }
    }
    return true;
  }
  for(let row = 0; row < rowLength; row++) {
    for(let col = 0; col < colLength; col++) {
      if(board[row][col] === 'O'){
        console.log(`O found at [${row}, ${col}]`);
        for(let dir in dirs) {
          if(board[row][col][dir] == null)
          {
            updateCapturedForDir(row, col, dir, board);
            console.log(`isCapturedIn${dir} = ${getCacheValue(row, col,dir)}`)
          }
        }
        if(isCaptured(row,col)) {
              board[row][col] = 'X';
        }
      }
    }
  }
  return board;
}
console.log(updateCapturedOs(null))
console.log(updateCapturedOs([]))
console.log(updateCapturedOs([['X', 'X'],['X','X']]))
console.log(updateCapturedOs([['X', 'O'],['X','X']]))
console.log(updateCapturedOs([['X', 'X', 'X'],['X', 'O', 'X'],['X','X','X']]))
console.log(updateCapturedOs([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))
