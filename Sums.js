const input = document.querySelector('#input');
const button = document.querySelector('#run');
const output = document.querySelector('#output');
button.onclick = function(){
  let nums = input.value.split(',').map(x=>parseInt(x));
  let indices = twoSum(nums);
  output.textContent = "Output: " + indices;
}
  /**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
  var twoSum = function(nums) {
    const target = nums.pop();
    let index = [0, 0];
    let desiredNum2 = 0;
    for(;index[0]<nums.length; index[0]++)
        {
            desiredNum2 = target - nums[index[0]];
          for(index[1] = index[0] + 1;index[1]<nums.length; index[1]++)
              {
                  if(desiredNum2 === nums[index[1]])
                      return index;
              }
        }
    index[0] = -1;
    index[1] = -1;
    return index;
  };
