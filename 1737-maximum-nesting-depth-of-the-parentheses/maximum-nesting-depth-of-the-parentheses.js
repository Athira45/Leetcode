/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxcount = 0;
    count = 0;
    for(let i=0; i<s.length; i++){
      if(s[i]=="("){
        count++;
       if(maxcount<count){
        maxcount = count;
       }
      }
      if(s[i]==")"){
      count --;
     if(maxcount<count){
        maxcount = count;
       }
      }
    }
    
    return maxcount;
};