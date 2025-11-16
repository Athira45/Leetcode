/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freequency = {};
    let consonant = 0
    let vowel = 0
    for(let char of s){
        freequency[char] = (freequency[char] || 0) + 1;
    }

    for (let char in freequency) {
        if("aeiou".includes(char)){
            vowel = Math.max(vowel,freequency[char])
        }else{
            consonant = Math.max(consonant,freequency[char])
        }
    }

    return consonant + vowel
};