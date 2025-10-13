/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans=[];
    for(let num of nums){
        ans.push(num)
    }
    ans = ans.concat(nums)
    return ans;
};