function buttonClick()
{
  let matrix = input.value.split(';');
  for(let i = 0; i < matrix.length; i++)
  {
    matrix[i] = matrix[i].split(',');
  }
  rotateImage(matrix);
  output.textContent = matrix;
}
//Rotate input by 90 degrees clockwise
//input: nxn 2D matrix
//output: same nxn 2D matrix
//restrictions:
// rotate in-place
// 1 <= n <=200
// -1000 <= matrix[i][j] <= 1000
function rotateImage(matrix)
{
  //what does it mean to rotate by 90 degrees?
  //3x3
  //0,0 -> 2,0; 1,0 -> 2,1; 2,0 -> 2,2 <= newI =  j, newJ = i, newI = end - newI
  //0,1 -> 1,0; 1,1 -> 1,1; 2,1 -> 1,2 <= holds
  //0,2 -> 0,0; 1,2 -> 0,1; 2,2 -> 0,2 <= holds

  //outer layer is beg - end), next layer is (beg+1, end-1), stop when beg === end
  const n = matrix.length;
  let beg = 0, end = n - 1;
  let rotate90ByLayer = function(matrix, beg, end)
  {
    if(beg >= end) return;
    rotate90ByLayer(matrix, beg+1, end-1);
    //rotate current layer
    let temp;//temporay for swapping
    for(let i = beg; i < end; i++)
    {
      //rotate the number four times
      let moves = 4;
      let curI = i, curJ = beg;
      let numberToSwapIn = matrix[curI][curJ];
      while(moves > 0)
      {
        temp = curJ;
        curJ = end - curI;
        curI = temp;

        temp = matrix[curI][curJ];
        matrix[curI][curJ] = numberToSwapIn;
        numberToSwapIn = temp;

        moves--;
      }
    }
  }
  rotate90ByLayer(matrix, beg, end);
}
