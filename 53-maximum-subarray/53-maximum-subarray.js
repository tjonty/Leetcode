/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n) | Space: O(1)
var maxSubArray = function(nums) {
    var maxSum = -Infinity, currentSum = 0;
    for(var num of nums) {
        if(currentSum < 0) currentSum = num;
        else currentSum += num
        
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum
};