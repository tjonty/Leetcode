/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
//     soln 1: O(n) Time | O(n) Space
    let arr = [];
    let countZeroes = 0;
    for(i=0;i<nums.length;i++) {
        if(nums[i] == 0)
            countZeroes++;
    }
    
    for(i=0;i<nums.length;i++) {
        if(nums[i] != 0)
            arr.push(nums[i]);
    }  
    
    while(countZeroes != 0) {
        arr.push(0);   
        countZeroes--;
    }
    
    for(i=0;i<nums.length;i++) {
       nums[i] = arr[i];
    }  
    
};