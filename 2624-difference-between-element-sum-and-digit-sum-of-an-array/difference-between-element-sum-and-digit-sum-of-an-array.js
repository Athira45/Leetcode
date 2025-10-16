/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0
    for(let num of nums){
     elementSum += num;
   } 
   let numStr = nums.join('').split('') 
   let digitSum = 0
   for(let str of numStr){
    let num = Number(str);
    digitSum+=num;
   }
   return Math.abs(elementSum-digitSum)
};