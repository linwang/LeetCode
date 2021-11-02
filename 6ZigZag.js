function buttonClick()
{
  const inputs = input.value.split(',');
  if((!inputs) || (inputs.length < 2)) return;
  const s = inputs[0];
  const numRows = parseInt(inputs[1]);
  output.textContent = convertToZigZag(s, numRows);
}
function convertToZigZag(s, numRows)
{
  if((numRows === 1) || (numRows >= s.length)) return s;
  let rows = new Array(numRows);
  let i, r, delta;
  for(i = 0, r = 0; i < s.length; i++)
  {
    if(rows[r] === undefined) rows[r] = new Array();
    rows[r].push(s[i]);
    if(r === 0) delta = 1;
    if(r === numRows - 1) delta = -1;
    r += delta;
  }
  const output = [].concat(...rows);
  return output.toString();
}
