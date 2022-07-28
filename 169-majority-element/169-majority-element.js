/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // soln: 2;
    // Time: O(n logn) || Space: O(1)
    nums.sort();
    return nums[Math.floor(nums.length/2)];
    
};

// soln: 1;
    // Time: O(n) || Space: O(n)
//     var data = {};
//     var division = Math.floor(nums.length/2);

//     for(const num of nums) {
//         if(!data[num])
//             data[num] = 1;
//         else 
//             data[num]++;

//         if(data[num] > division) 
//             return num;
//     }