/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum=0;
    for(let num of nums){
     elementSum += num;
    }
    let numstr = nums.map((num)=>num.toString().split('')).flat()
    let digitSum = 0;
    for(let i=0 ; i<numstr.length; i++){
        let num = Number(numstr[i]);
        digitSum+=num; 
    }
    return Math.abs(elementSum - digitSum)
};