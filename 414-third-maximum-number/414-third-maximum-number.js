/**
 * @param {number[]} nums
 * @return {number}
 */
// Time : O(n) | Space : O(n)
var thirdMax = function(nums) {
    nums = [...new Set(nums)];
    nums.sort((a, b) => a-b);
    if(nums.length < 3) return nums[nums.length-1];
    else return nums[nums.length-3];
};