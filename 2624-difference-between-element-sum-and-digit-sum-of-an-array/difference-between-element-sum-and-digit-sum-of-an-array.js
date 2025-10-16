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
  while(num){
 let digit = num%10
 digitSum+=digit;
 num = Math.floor(num/10);
  } 
}

   return elementSum-digitSum
};