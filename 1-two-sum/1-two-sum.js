/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//     Soln 1: Time O(n) Space O(n) Optimal
    let data = {};
    for(var i=0; i<nums.length; i++) {
        
        if(data[target-nums[i]] != undefined) {
            return [i, data[target-nums[i]]];
        }
        
        data[nums[i]] = i;
    }
};

// Soln 2: Time O(n^2) Space O(1) : Two for loops solution