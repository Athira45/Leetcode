/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let elementSum = 0
let digitSum=0

for(let num of nums){
    let len = num.toString().length
    elementSum+=num;
    if(len>1){
      temp =num;
  while(temp){
 let digit = temp%10
 digitSum+=digit;
 temp = Math.floor(temp/10);
  } 
    }else{
      digitSum+=num  
    }
  
}
   return elementSum-digitSum
};