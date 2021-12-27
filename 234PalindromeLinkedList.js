import {toLinkedList, Node} from './LinkedList.js'
//input: head of a linked list
//output: bool, isPalindrome
//constraints: T = O(n) S = O(1)

//Palindrome reads the same front to back and back to front
//can fold the elements in half and they match

//linked list can only read front to back.
//don't know the linked list's length, so can't fold in half

//1->2->2->1, given head
//first traverse can count the number of elements?
//second traverse can reverse half the elements and two pointers? 1<-2->2->1
//ptr1 @ first 2 and ptr2 @second 2, ptr1 and ptr2 need to equal
//1<-2 2->1 Math.floor(4/2) = 2. [2] = 2nd 2. ptr1 = 2 - 1 and ptr2 = ptr1.next
//1<-2<-3 3->2->1 Math.floor(5/2) = 2. [2] = 3 ptr1 = ptr2 = 3
//third traverse compares the elements?

//Okay, reversing is the right path
//I like the slow and fast pointer idea. Fast moves two steps at a time

//slow moves 1 step and fast moves 2 step. As slow moves, it can reverse.
//Fast keeps moving until it sees it cannot take the next step. Slow keeps moving
//until fast stops
//cases:
//even 1->2->2->1, fast(2, 4 stop as 4 is null)slow(0,1), 1<-2, 2->1
//odd 1->2->3->2->1, fast(2,4,6 stop as 6 is null) slow(0,1,2) 1<-2<-3, 2->1

//how to reverse?
// 1->2->3... 1 slow, 2->3 slowNext, slowNext = slow.next, slow.next = null
//1 2->3 => 2->1 3, slow @ 1 slowNext @2, slowNextNext = slowNext.next,
//slowNext.next = slow, slow = slowNext, slowNext = slowNextNext

//headReversed @ 1, prev @ 2, cur = headNext.next @ 3, prev.next = head
//2->1 3, headReversed = headSecond, headSecond = cur

//2->1 3->4, ptr to 2 and ptr to 3 => 3->2->1, 4

//move head node from b to a:
//eg, input a = 2->1, b = 3->4->5
//output a = 3->2->1, b = 4->5
function moveHead(headA, headB) {
  let temp = headB.next;//temp @ 4
  headB.next = headA;//headB.next 3->2...
  headA = headB;//headReverse @ 3
  headB = temp;//headB @ 4
  return [headA, headB];
}

function isPalindrome(list) {
  let head = toLinkedList(list);
  if(head == null)
    return false;

  if(head.next == null)
    return true;

  //walk the list
  let slow = head, fast = head;
  while(fast != null) {
    slow = slow.next;
    if(fast.next == null || fast.next.next == null)
      fast = null;
    else
      fast = fast.next.next;
  }

  console.log(`slow: ${slow}`);

  //reverse the second half of the list
  let headReverse = null;
  while(slow != null) {
    [headReverse, slow] = moveHead(headReverse, slow);

  console.log(`headReverse: ${headReverse}`);
  console.log(`head: ${head}`);

  //check to see if reversed and unreversed are the same
  //ignore the extra bits in head
  while(headReverse != null) {
    if(headReverse.value !== head.value)
      return false;
    headReverse = headReverse.next;
    head = head.next;
  }
return true;
}

console.log(isPalindrome(null));
console.log(isPalindrome([1,2]));
console.log(isPalindrome([1,2,3]));
console.log(isPalindrome([1,2,3,1]));

console.log(isPalindrome([1]));
console.log(isPalindrome([1,2,1]));
console.log(isPalindrome([1,2,2,1]));
console.log(isPalindrome([1,2,3,2,1]));
console.log(isPalindrome([1,2,3,3,2,1]));
