/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
//     Soln 2: Time O(nlogn) Space O(1)
    if(nums.length == 0) return 0; 
    
    var current_streak = 1;
    var longest_streak = 1;

    nums.sort((a, b) => a - b);

    for(var i=1;i<nums.length;i++) {
        if(nums[i] != nums[i-1]) {
            if(nums[i-1] == nums[i]-1){
                current_streak++;
            }
            else {
                longest_streak = Math.max(current_streak, longest_streak);
                current_streak = 1;
            }
        }
    }

    return Math.max(current_streak, longest_streak);
};

//     Soln 1: Time O(n^3) Space O(1)
//     Not worked - Time Limit Exceeded
//     var longest_streak = 0;
//     var track = 0;

//     for(var i=0;i<nums.length;i++) {
//         streak = 1;
//         track = nums[i];
//         while(nums.indexOf(track+1) != -1){
//             track += 1;
//             streak++;
//         }
//         longest_streak = Math.max(streak, longest_streak);
//     }

    // return longest_streak  
