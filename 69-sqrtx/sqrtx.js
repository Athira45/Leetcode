/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let start = 0
    let end = x
    let ans;
    while (start <= end)
    {
        let mid = Math.floor((start + end) / 2)
        let midSquare = mid * mid
        if(midSquare === x) return mid
        else if(midSquare > x ) end = mid - 1
        else if(midSquare < x){
            start = mid + 1
            ans = mid
        }
    }
    return ans
};