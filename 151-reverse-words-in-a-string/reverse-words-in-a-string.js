/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = "";
    let word = "";

    for(let i=s.length-1; i>=0; i--){
        if(s[i]!== " "){
            word=s[i]+word;
        }else if(word.length > 0){
            if(result.length > 0){
                result+=" ";
            }
            result+=word;
            word = "";
        }
    }
    if(word.length>0){
        if(result.length>0){
            result+=" ";
        }
        result+=word
    }
    return result;
};