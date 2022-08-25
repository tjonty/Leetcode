/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // soln 3: Time O(n) Space O(n)
    var current_streak = 1, current_num;
    var longest_streak = 0;
    var nums_set = new Set(nums);

    for(var num of nums) {
        if(!nums_set.has(num-1)) {
            current_num = num;
            current_streak = 1
            while(nums_set.has(current_num+1)){
                current_streak++;
                current_num++;
            }
            longest_streak = Math.max(current_streak, longest_streak);
        }
    }

    return longest_streak;

    
    

};

//     Soln 2: Time O(nlogn) Space O(1)
//     if(nums.length == 0) return 0; 
    
//     var current_streak = 1;
//     var longest_streak = 1;

//     nums.sort((a, b) => a - b);

//     for(var i=1;i<nums.length;i++) {
//         if(nums[i] != nums[i-1]) {
//             if(nums[i-1] == nums[i]-1){
//                 current_streak++;
//             }
//             else {
//                 longest_streak = Math.max(current_streak, longest_streak);
//                 current_streak = 1;
//             }
//         }
//     }

//     return Math.max(current_streak, longest_streak);

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
