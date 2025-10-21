/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let num=0;
    for(let opr of operations){
         if(opr.includes("+")){
            num++;
         }
          else {
           num--;
         }
         
    }
    return num
};