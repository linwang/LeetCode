export function toLinkedList(arr) {
  if(arr == null || arr.length === 0) {
    return null;
  }
  let head = new Node(arr[0]);
  for(let cur = head, i = 1; i < arr.length; i++, cur = cur.next) {
    cur.next = new Node(arr[i]);
  }
  return head;
}

export function Node(val, next) {
  this.value = val;
  this.next = next;
}

Node.prototype.toString = function() {
  let cur = this.next;
  let arr = [this.value];
  while(cur != null) {
    arr.push(cur.value);
    cur = cur.next;
  }
  return arr.join('');
};
