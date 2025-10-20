/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let count = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2 == 0){
          if(nums[i]%3 == 0){
             count++;
             sum+=nums[i];
          }
        }
    }
    let avg = Math.floor(sum/count);
    return avg?avg: 0;
};