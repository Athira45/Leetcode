/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
 let elementSum = 0
let digitSum=0

for(let i=0;i<nums.length;i++){
    elementSum+=nums[i];
    let num = nums[i];
    while(num>0){
     let digit = num%10;
     digitSum += digit;
     num = Math.floor(num/10);
    }
}
   return elementSum-digitSum
};