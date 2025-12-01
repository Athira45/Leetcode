/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxArea = 0;
    let maxDiag =0;
    for(let [L,W] of dimensions ){
         let diag = (L*L) + (W*W )
         let area = L*W;
         if( maxDiag<diag|| (diag === maxDiag && maxArea<area)){
            maxArea = area;
            maxDiag = diag
         }
    }
    return maxArea;
};