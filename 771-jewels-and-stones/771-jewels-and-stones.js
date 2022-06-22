/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// Time: O(n*m) | n length of J; m length of S 
// Space: O(1)
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    // for(var i=0; i<jewels.length; i++) {
    //     for(var j=0; j<stones.length; j++) {
    //         if(jewels[i] === stones[j]) count++;
    //     }
    // }
    
    for(var j=0; j<stones.length; j++) {
        if(jewels.includes(stones[j])) count++;
    }
    
    return count;
};