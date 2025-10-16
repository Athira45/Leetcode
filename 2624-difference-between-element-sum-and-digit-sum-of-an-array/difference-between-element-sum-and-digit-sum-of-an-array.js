/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let elementSum = 0
let digitSum=0
for(let num of nums){
  elementSum+=num;
  temp =num;
  while(temp){
 let digit = temp%10
 digitSum+=digit;
 temp = Math.floor(temp/10);
  } 
}

   return elementSum-digitSum
};