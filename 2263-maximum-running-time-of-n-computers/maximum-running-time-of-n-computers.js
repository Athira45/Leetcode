/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
 let left=0;
 let right = Math.floor(batteries.reduce((a,b)=>a+b,0)/n); //a possible minute for each n(computers)

function canRun(x){
    let total=0;
    for(let b of batteries){
        total+=Math.min(b,x)
    }
    return total>= n*x;
}

while(left<right){
    let mid = Math.floor((left+right+1)/2);
    if(canRun(mid)) left=mid;
    else right=mid-1;
}
return left;

    
};