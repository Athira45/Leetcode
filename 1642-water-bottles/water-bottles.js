/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let sumDrink = numBottles

 while(numBottles>=numExchange){
   
    if(numBottles%numExchange == 0){
      
        sumDrink+= Math.floor(numBottles/numExchange);
        numBottles = Math.floor(numBottles/numExchange);
       
    }else{
       
        let remainBottle = numBottles%numExchange;
        sumDrink+= Math.floor(numBottles/numExchange);
        numBottles = remainBottle + Math.floor(numBottles/numExchange);
    }
 }
    return sumDrink;
};