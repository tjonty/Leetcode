/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {}
    for(num of nums) {
        if(hash[num] >= 1) return true;
        else hash[num] = 1;
    }
    return false
};