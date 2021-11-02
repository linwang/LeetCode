//given an m*n matrix where the numbers are sorted
//find if target is a member
function canFind(matrix, num)
{
  if(!matrix) return false;
  if(matrix.length === 0) return false;
  if(matrix[0].length === 0) return false;
  let left = 0, right = matrix.length * matrix[0].length - 1;
  while(left <=  right)
  {
    let mid = Math.floor((left + right)/2);
    let i = Math.floor(mid/matrix[0].length);
    let j = mid%matrix[0].length;
    console.log(`checking ${mid}, matrix[${i}][${j}] = ${matrix[i][j]}`);
    if(num === matrix[i][j])
    {
      return true;
    }
    if(num < matrix[i][j])
    {
      right = mid - 1;
    }
    else
    {
      left = mid + 1;
    }
  }
  return false;
}
console.log(canFind([[1,3,5,7],[10,11,16,20]],8))
