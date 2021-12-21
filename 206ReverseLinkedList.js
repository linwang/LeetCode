import {toLinkedList, Node} from './LinkedList.js'
//input: head, linked list
//output: head, reverse of input

//push each item into a stack and pop them out

function reverse(list) {
  let head = toLinkedList(list);
  if(head == null) {
    return null;
  }

  let stack = new Array(0);
  let cur = head;
  while(cur != null){
    stack.push(cur);
    cur = cur.next;
  }
  head = stack[stack.length - 1];
  for(let i = stack.length - 1; i >= 0; i--) {
    stack[i].next = stack[i - 1];
  }
  return head;
}

console.log(reverse(null));
console.log(reverse([]));

console.log(reverse([1]).toString());
console.log(reverse([1,2,3,4,5]).toString());
