/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Time: O(n) || Space: O(n)
    var data = {};
    
    for(const num of nums) {
        if(!data[num])
            data[num] = 1;
        else
            data[num]++;
    }

    for(const num in data) {
        if(data[num] == 1)
            return num;
    }
};