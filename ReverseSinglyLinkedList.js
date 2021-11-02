function buttonClick()
{
  //process Input
  let values = input.value.split(';');
  let numList = values[0].split(',').map(x=>parseInt(x));
  let k = values[1];
  let nodeList = new NodeList()
  nodeList.parseList(numList);
  //process Output
  let reversedList = reverseListByGroupK(nodeList, k);
  output.textContent = reversedList;
}

class Node
{
  constructor(v, n = null)
  {
    this.value = v;
    this.next = n;
  }
  toString()
  {
    return this.value;
  }
}

class NodeList
{
  constructor()
  {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addNodeToStart(node)
  {
    if(node === null) return;
    node.next = this.head;
    this.head = node;
    this.length++;
    if(this.tail === null) this.tail = this.head;
  }
  removeNodeFromBeg()
  {
    if(this.length === 0) return;
    let tmp = this.head;
    this.head = this.head.next;
    tmp.next = null;
    this.length--;
    if(this.length === 0)
      this.tail = null;
    return tmp;
  }
  parseList(list)
  {
    if(!list || list.length === 0) return null;
    let node;
    for(let i = list.length - 1; i >= 0; i--)
    {
      node = new Node(list[i]);
      this.addNodeToStart(node);
    }
  }
  toString()
  {
    let str = '{';
    let cur = this.head;
    while(cur)
    {
      str += ' '+ cur;
      cur = cur.next;
    }
    str += '}';
    return str;
  }
  concat(nodeList)
  {
    if(!nodeList) return;
    if(!this.tail)
    {
      this.head = nodeList.head;
      this.tail = nodeList.tail;
      this.length = nodeList.length;
    }
    else
    {
      this.tail.next = nodeList.head;
      this.length += nodeList.length;
    }
  }
}

function reverseListByGroupK(nodeList, k, numOfTimes = -1)
{
  if(k < 2) return nodeList;

  if(numOfTimes < 0)
    numOfTimes = Math.floor(nodeList.length/k);

  if(numOfTimes === 0) return nodeList;

  let tmp = new NodeList();
  for(let i = 0; i < k; i++)
  {
    tmp.addNodeToStart(nodeList.removeNodeFromBeg());
  }
  nodeList = reverseListByGroupK(nodeList, k, numOfTimes - 1);
  tmp.concat(nodeList);
  return tmp;
}
