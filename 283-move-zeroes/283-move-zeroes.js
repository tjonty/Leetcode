/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) { 
    for(lastNonZero = 0, cur = 0; cur < nums.length; cur++) {
        if(nums[cur] != 0) {
            let temp = nums[cur];
            nums[cur] = nums[lastNonZero];
            nums[lastNonZero] = temp; 
            lastNonZero++;
        }
    }
};

//     soln 1: O(n) Time | O(n) Space
//     let arr = [];
//     let countZeroes = 0;
//     for(i=0;i<nums.length;i++) {
//         if(nums[i] == 0)
//             countZeroes++;
//     }
    
//     for(i=0;i<nums.length;i++) {
//         if(nums[i] != 0)
//             arr.push(nums[i]);
//     }  
    
//     while(countZeroes != 0) {
//         arr.push(0);   
//         countZeroes--;
//     }
    
//     for(i=0;i<nums.length;i++) {
//        nums[i] = arr[i];
//     }

//     soln 3: O(n) Time | O(1) Space
//     let lastNonZero = 0;
    
//     for(i=0;i<nums.length;i++) {
//         if(nums[i] != 0) {
//             nums[lastNonZero++] = nums[i];
//         }
//     }
    
//     for(i=lastNonZero;i<nums.length;i++) {
//         nums[i] = 0;
//     }