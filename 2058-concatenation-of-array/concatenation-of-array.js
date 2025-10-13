/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [...nums];
   
    ans = ans.concat(nums)
    return ans;
};