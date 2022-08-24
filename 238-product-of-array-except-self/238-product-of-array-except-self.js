/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Soln 4: Time O(n) Space O(1)
//     OPTIMAL 71% , HAVE 4 DIFFERENT SOLUTION

    var answers = []; // Store all the Postfix values in this array 
    var product = 1;

    for(var i=nums.length-1;i>=0;i--) {
        product *= nums[i];
        answers[i] = product; // Store all the postfix values
    }

    product = 1;
    for(var i=0;i<nums.length;i++) {
        product *= nums[i];
        nums[i] = product; // Store all the prefix values
    }

    for(var i=0;i<nums.length;i++) {
        if(i > 0 & i+1 < nums.length){
            answers[i] = answers[i+1] * nums[i-1];
        } else if(i == nums.length-1){
            answers[i] = nums[i-1];
        } else if(i == 0 && i+1 < nums.length) {
            answers[i] = answers[i+1];
        }
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


    // Soln 2: Time O(n^2) Space O(1)
    // VERY SLOW, 5%

    // var answers = [], j=0, product=1;

    // for(var i=0;i<nums.length;i++) {
    //     j=0;product = 1;
        
    //     while(j<nums.length){
    //         if(j!=i) {
    //             product *= nums[j];
    //         }
    //         j++
    //     }
        
    //     answers[i] = product;
    // }

    // return answers;

// Soln 3: Time O(n) Space O(n)
// 64% NICELY DONE    

//     var prefix = [], postfix = [], answers = [], product = 1; // O(n+n)

//     for(var i=0;i<nums.length;i++) { // O(n)
//         product *= nums[i];
//         prefix[i] = product;
//     }

//     product = 1;
//     for(var i=nums.length-1;i>=0;i--) { // O(n)
//         product *= nums[i];
//         postfix[i] = product;
//     }
    
//     for(var i=0;i<nums.length;i++) { // O(n)
//         if(i-1 < 0)
//             answers[i] = postfix[i+1];
//         else if(i+1 == nums.length)
//             answers[i] = prefix[i-1];
//         else 
//             answers[i] = prefix[i-1] * postfix[i+1];
//     }

//     return answers;