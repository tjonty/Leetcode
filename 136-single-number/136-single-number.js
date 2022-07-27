/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    if(nums.length == 1)
        return nums[0];
    
    nums.sort((a,b) => a-b);
    for(var i=0;i<nums.length;i++) {
        if(nums[i] !== nums[i+1])
            return nums[i];
        else 
            i++;
    }
};

// Soln: 1;
// Time: O(n) || Space: O(n)
//     var data = {};
    
//     for(const num of nums) {
//         if(!data[num])
//             data[num] = 1;
//         else
//             data[num]++;
//     }

//     for(const num in data) {
//         if(data[num] == 1)
//             return num;
//     }