/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     Time O(n) Space O(1)
// Sliding Approach - better than 1 for loop.
    var max = 0;
    var left = 0;
    var right = 1;
    while(right < prices.length) {
        if(prices[left] > prices[right]){
            left = right;
            right = left + 1;
        } else {
            max = Math.max(max, prices[right] - prices[left]);
            right++;
        }
    }
    return max;
};

// Accepted - O(n) Time
// var profit = 0;
// var minPrice = Infinity;
// for(var i=0;i<prices.length;i++) {
//     minPrice = Math.min(minPrice, prices[i]);
//     profit = Math.max(profit, prices[i] - minPrice);
// }
// return profit;

// Brute-Force failed - for larger array.
// var max_profit = 0;
// var profit;
// for(var i=0;i<prices.length-1;i++){
//     for(var j=i+1;j<prices.length;j++){
//         profit = prices[j]-prices[i]
//         if(profit > max_profit) max_profit = profit;
//     }
// }
// return max_profit;

// Sorting failed - because of days.
// prices.sort((a,b) => a-b);
// return prices[prices.length-1] - prices[0];