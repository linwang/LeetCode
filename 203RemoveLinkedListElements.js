import {Node, toLinkedList} from './LinkedList.js'

//input: head, val
//output: head, remove nodes where node.value === val
//cases:
//head.value === val, head = head.next
//cur.value === val, prev.next = cur.next
//cur.next == null, cur.value === val, prev.next = cur.next
//while(head.value === val), head = head.next
//prev = head, cur = prev.next
//while(cur != null), if (cur.value === val), prev.next = cur.next;
//if(cur.next != null) prev = cur, cur = cur.next
function remove(head, val) {
  head = toLinkedList(head);
  if(head == null || val == null) {
    return head;
  }
  let prev = new Node(null);
  prev.next = head;
  head = prev;
  while(prev.next != null) {
    if(prev.next.value === val) {
      prev.next = prev.next.next;
    }
    else {
      prev = prev.next;
    }
  }
  return head.next;
}

console.log(remove(null, 0));
console.log(remove([0], null));

console.log(remove([0], 0));
console.log(remove([0,1,0,1], 0));
console.log(remove([0,1,0,1,0], 0));
