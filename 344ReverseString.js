//input s, string
//output: reverse of s, string
//requirements:
//T O(n) S O(1)

//two pointers, beg and end
//swap beg and end until beg === end
//beg ++, end --

function reverse(s){
  if(s == null) {
    return s;
  }
  let arr = s.split('');
  let beg = 0, end = arr.length - 1;
  while(beg < end) {
    [arr[beg], arr[end]] = [arr[end], arr[beg]];
    beg++;
    end--;
  }

  return arr.join('');
}

console.log(reverse(null));
console.log(reverse(''));
console.log(reverse('a'));
console.log(reverse('ab'));
console.log(reverse('abc'));
