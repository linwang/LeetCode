//input nums array of unique elements
//output all possible subsets
//restrictions: no duplicate subsets; in any order
//other: 1 <= nums.length <= 10
function getAllSubsets(nums)
{
  //treat nums as a directed graph [1,2,3] such that each node is connected
  // to all nodes after it. To find all possible paths
  //start at cur = [], add to subsets = [[]], then go to first node cur = [1],
  // add to subsets = [[][1]], keep builing path, until hitting last node,
  //subsets = [[][1][12][123][13]], then start from 2nd node, subsets += [2][23],
  //then start from 3rd node, subsets += [3]


  if(!nums) return [];
  let subsets = [], paths;
  for(let i = nums.length - 1; i >= 0; i--)
  {
    //build all paths from nums[i] from subsets of nums[i+1]
    paths = JSON.parse(JSON.stringify(subsets))
    if((!paths) || (paths.length === 0))
    {
      paths = [[nums[i]]];
    }
    else
    {
      paths.map(x => x.unshift(nums[i]));
      paths.push([nums[i]]);
    }
    console.log(`paths = ${paths}`)
    subsets.push(...paths);
    console.log(`subsets = ${subsets}`)
  }
  subsets.push([]);
  return subsets;
}
Array.prototype.toString = function()
{
  return `[${this.join(',')}]`;
}
console.log(getAllSubsets([1,2,3,4]))
