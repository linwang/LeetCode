function rotateList(arr, k)
{
  if(!arr) return;
  if(arr.length === 0) return;

  //populate list
  const iEnd = arr.length - 1;
  let head = new Node(arr[iEnd]);
  let node;
  for(let i = iEnd - 1; i >= 0; i--)
  {
    node = new Node(arr[i]);
    node.next = head;
    head = node;
  }

  //insert at head o(1)
  //traverse to end o(n)
  //rotate n: traverse to n%k, o(n)
  //total: o(n)
  let end = head;
  while(end.next)
  {
    end = end.next;
  }

  end.next = head;
  console.log(`end: ${end}`);
  for(let steps = arr.length - k%arr.length; steps > 0; steps --)
  {
    head = head.next;
    end = end.next;
  }

  end.next = null;

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
console.log(rotateList([0,1,2], 4))
