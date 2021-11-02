function buttonClick()
{
  //inputs
  let values = input.value.split(',');
  let head = new Node(values[0]);
  let cur = head;
  for(let i = 1; i < values.length; i++)
  {
    cur.next = new Node(values[i]);
    cur = cur.next;
  }
  head = swapNodesInPairs(head);
  output.textContent = toString(head);
}

class Node
{
  constructor(value)
  {
    this.value = value;
    this.next = null;
  }
}
// swap every two adjacent nodes
//inputs: a linked list
//outputs: list's head
//constraints:
//  node swaps, not value swaps
// 0 <= n <= 100
// 0 <= node.value <= 100
// O(n/2)
function swapNodesInPairs(head)
{
  if((head === null) || (head.next === null)) return head;

  let swapTwoNodesAfter = function (bef)
  {
    if(bef === null) return false;

    let first = bef.next;
    if(first === null) return false;

    let second = first.next;
    if(second === null) return false;

    first.next = second.next;
    second.next = first;
    bef.next = second;
    return true;
  }


  //special case: swap first two nodes
  let bef = new Node(null);
  bef.next = head;
  if(!swapTwoNodesAfter(bef)) return head;
  let newHead = bef.next;

  while(bef)
  {
    bef = bef.next.next;
    if(!swapTwoNodesAfter(bef)) return newHead;
  }

  return newHead;
}

function toString(head)
{
  if(head === null) return '';
  let str = head.value.toString();
  let cur = head.next;
  while(cur)
  {
    str += ` , ${cur.value}`;
    cur = cur.next;
  }
  return str;
}
