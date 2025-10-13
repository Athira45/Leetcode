/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
   let temp = x;
    let rev = 0;
while(temp!==0){
   rem = temp%10;
   rev = rev*10+rem;
   temp = Math.floor(temp/10);
}
return rev === x;
};