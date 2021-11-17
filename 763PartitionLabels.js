//input string s
//output a list of integers representing the size of the partitions
//requirements for a partition:
//*The letters inside a partition only exist in this partition.
//*A partition does not contain letters that exist in other partitions

//for each letter, i'm only interested in the indices that mark its begining and
//ending inside the string.
//so "eccbbbbdec" => e[0,8] c[2,9] b[3,6] d[7,7] <=charLocations
//then I can check partitions by going through the charLocations
//e[0,8] partitions[[0,8]]
//c[2,9] partitions[[0,9]] can return since 0 = iBeg and 9 = iEnd of s

//cases:
//character's ending < partition's ending => do nothing
//char's end > partition's end, but char's beg < partition's end =>
//  update partition's ending
//char's end > partition's end, but char's beg > partition's end
// => finished witht the current partition, move onto the next

//needed data points: each letter's end position, each partition's beg
//and end position, letters need to be sorted by their beg position (evident in the
// string s).

//proposed algorithm:
//1. go through s and create a hash lookup of each letter's
//ending position <= endLookup
//2. go through s and build each partition of partitions like this
  //cur = 0; cur < s.length; cur++ and curPartition = null;
  //1. if(curPartition == null or empty) curPartition = [beg, end]
  //set new partition tobe beg = i
  // and end = hashLookup[s[cur]].end; continue;
  //2. if(cur > curPartition.end) partitions.push(curPartition.end - curPartition.beg + 1); curPartition = null; continue
  //3. if(hashLookup[s[cur]].end > curPartition.end) curPartition.end = hashLookup[s[cur]].end;
//3. return partitions
//O(n)

function getPartitionLabels(s)
{
  if(s == null || s.length === 0) return [];

  console.log(`getPartitionLabels(${s})`);
  let hashLookup = {};
  let letter;
  for(let i = 0; i < s.length; i++)
  {
      letter = s[i];
      hashLookup[letter] = i;
  }

  let partitions = [];
  let curPartition = null;
  for(let i = 0; i < s.length; i++)
  {
    letter = s[i];
    if(curPartition == null)
    {
      curPartition = {beg: i, end: hashLookup[letter]};
      continue;
    }

    if(i > curPartition.end)
    {
      partitions.push(curPartition.end - curPartition.beg + 1);
      curPartition = {beg:i, end: hashLookup[letter]};
      continue;
    }

    if(hashLookup[letter] > curPartition.end)
    {
      curPartition.end = hashLookup[letter];
    }
    if(i === s.length - 1)
    {
      partitions.push(curPartition.end - curPartition.beg + 1);
    }
  }

  return partitions;
}

console.log(getPartitionLabels('abcdefghijklmnop'));
console.log(getPartitionLabels(''));
console.log(getPartitionLabels(null));
console.log(getPartitionLabels('ababcbacadefegdehijhklij'));
console.log(getPartitionLabels('jababcbacadefegdehijhklij'));
