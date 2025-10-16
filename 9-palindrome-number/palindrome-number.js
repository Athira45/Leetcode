/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xstring = x.toString();
    let rev = xstring.split('').reverse().join("")
    return xstring===rev
};