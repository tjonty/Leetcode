/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let data = {};
    for(var i=0; i<nums.length; i++) {
        
        if(data[target-nums[i]] != undefined) {
            return [i, data[target-nums[i]]];
        }
        
        data[nums[i]] = i;
    }
};