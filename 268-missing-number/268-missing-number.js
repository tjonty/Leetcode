/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // Soln 2: T O(n) S O(1)
    var idxSum = nums.length;
    for(var i=0;i<nums.length;i++){
        idxSum += (i-nums[i])
    }
    return idxSum;
//     soln 1: Time O(n) Space O(n) Not optimal
//     var data = {};
//     var max = -1;
//     var i = 0;

//     for( var n of nums){
//         max = Math.max(max, n);
//     }

//     while(i<=nums.length) {
//         data[i] = 0;
//         i++;
//     }

//     for(var i=0;i<nums.length;i++) {
//         data[nums[i]]++;
//     }

//     for(var i in data){
//         if(data[i] == 0){
//             return i;
//         }
//     }
};