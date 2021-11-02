//input head of a sorted linked list
//do delete all nodes that have duplicate numbers
//output sorted and unique linked list
function removeDuplicates(head)
{
  if(!head) return;
  let prev = head;
  let cur = head.next;
  while(cur)
  {
    //remove when a value appears more than once (cur.value === prev.value)
    if(prev.value === cur.value)
    {
      prev.next = cur.next;
      cur = prev.next;
    }
    else
    {
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
}
class Node
{
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
  toString()
  {
    return this.value;
  }
}
function buildList(arr)
{
  if((!arr)||(arr.length === 0)) return null;
  let head = new Node(arr[0]);
  let cur = head;
  for(let i = 1; i < arr.length; i++)
  {
    cur.next = new Node(arr[i]);
    cur = cur.next;
  }
  return head;
}
function printList(head)
{
  let cur = head;
  let str = '[ ';
  while(cur)
  {
    str += `${cur} `;
    cur = cur.next;
  }
  str +=']';
  return str;
}
console.log(printList(removeDuplicates(buildList([0,0,1,1,2,2]))))
