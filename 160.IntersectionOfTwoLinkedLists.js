import {Node, toLinkedList} from "./LinkedList.js"
//input: headA and headB
//output: node where headA and headB intersect

//if I add each item to a stack from headA to headB, then when I pop them
// they should equal if they are intersected and not equal if they're not intersected
//cases:
// curA !== curB, return curA.next
//  (note if no intersection, curA.next is null)
//curA === curB, keep going with loop
//after loop and haven't returned, headA === headB, return headA
function getIntersectingNode(arrA, arrB) {
  let a = toLinkedList(arrA);
  let b = toLinkedList(arrB);

  let stackA = [], stackB = [];
  let curA = a, curB = b;

  while(curA != null) {
    stackA.push(curA);
    curA = curA.next;
  }

  while(curB != null) {
    stackB.push(curB);
    curB = curB.next;
  }

  const min_length = Math.min(stackA.length, stackB.length);
  for(let i = 0; i < min_length; i++) {
    curA = stackA.pop();
    curB = stackB.pop();
    if(curA.value !== curB.value) {
      return curA.next;
    }
  }
  return curA;
}

console.log(getIntersectingNode(null, [1]));
console.log(getIntersectingNode([1], null));
console.log(getIntersectingNode([], [1]));
console.log(getIntersectingNode([1,2,3], [4,5,6]));
console.log(getIntersectingNode([3], [4,5,6]));

console.log(getIntersectingNode([1], [1]));
console.log(getIntersectingNode([1,2,3], [3]));
console.log(getIntersectingNode([1,2,3], [1,2,3]));
console.log(getIntersectingNode([3], [1,2,3]));
