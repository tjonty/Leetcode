/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var data = {};

    for(const num of nums) {
        if(!data[num])
            data[num] = 1;
        else 
            data[num]++;
    }

    let division = Math.floor(nums.length/2);
    for(var num in data) {
        if(data[num] > division) {
            return num;
        }
    }
};