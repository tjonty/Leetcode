/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Soln 2: Time O(n^2) Space O(1)

    var answers = [], j=0, product=1;

    for(var i=0;i<nums.length;i++) {
        j=0;product = 1;
        
        while(j<nums.length){
            if(j!=i) {
                product *= nums[j];
            }
            j++
        }
        
        answers[i] = product;
    }

    return answers;
};

//     Soln 1 : With division operator Time O(n) Space O(1) 
//     WILL NOT WORK WITH ZEROS. 

//     var product = 1;

//     for(var num of nums) {
//         product *= num;
//     }

//     var answers = [];

//     for(var i=0; i< nums.length; i++) {
//         answers[i] = product/nums[i];
//     }

//     return answers;