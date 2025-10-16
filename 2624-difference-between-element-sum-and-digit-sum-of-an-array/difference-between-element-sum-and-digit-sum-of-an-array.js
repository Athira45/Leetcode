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
  while(num){
 let digit = num%10
 digitSum+=digit;
 num = Math.floor(num/10);
  } 
    }else{
      digitSum+=num  
    }
  
}
   return elementSum-digitSum
};