function buttonClick()
{
  let inputs = input.value.split(';');
  let values = inputs[0].split(',');
  let nFromEnd = parseInt(inputs[1]);
  let list = new SinglyLinkedList();
  for(let i = values.length - 1; i >= 0; i--)
  {
    list.addToFront(values[i]);
  }
  list.removeFromEnd(nFromEnd);
  output.textContent = list.toString();
}

class Node
{
  constructor(value, next)
  {
    this.value = value;
    this.next = next;
  }
}
class SinglyLinkedList
{
  constructor()
  {
    this.head = null;
    this.length = 0;
  }
  addToFront(value)
  {
    if(value === null) return;
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.head;
  }
  removeFromFront()
  {
    if(this.length === 0) return null;

    let node = this.head;
    this.head = node.next;
    node.next = null;
    this.length --;
    return node.value;
  }
  //Remove nth node from the back of a list
  //inputs: nth node from end
  //outputs: head of list after removal
  //constraints:
  //  1 <= list.length <= 30
  //  0 <= node.val <= 100
  //  1 <= n <= list.length
  // singly linked list
  removeFromEnd(nFromEnd)
  {
    //incremental approach
    //T: O(n); S: O(1)

    //nth node from back of list is the (list.length - n + 1)'s item from the front
    let index = this.length - nFromEnd;
    if((index >= this.length) || (index < 0)) return this.head;

    if(index === 0)
    {
      this.removeFromFront();
    }
    else
    {
      let befNode, node = this.head;

      //find node to remove
      for(let i = 0; i < index; i++)
      {
        befNode = node;
        node = node.next;
      }

      //remove node
      befNode.next = node.next;
      node.next = null;
      this.length--;
    }
    return this.head;
  }

  toString()
  {
    if(this.length === 0) return '';

    let curNode = this.head;
    let printOut = this.head.value;
    for(let i = 1; i < this.length; i ++)
    {
      curNode = curNode.next;
      printOut += ` , ${curNode.value}`;
    }
    return printOut;
  }
}
