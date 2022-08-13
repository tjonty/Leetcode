/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
//     Time: O(n^2) | Space: O(n)
//     let answers = [];
//     let count = 0, j = 0;
    
//     for(let i=0; i<temperatures.length; i++) {
//         count = 0;
//         for(let j=i; j<temperatures.length; j++) {
         
//             if(temperatures[j] > temperatures[i] ){
//                 break;
//             } else{
//                 count++;
//             }   
//             if(j==temperatures.length - 1)
//                 count=0;
//         }
//         answers.push(count);
//     }
//     return answers;
let res = new Array(temperatures.length).fill(0);
    let stack = [];
    
    for(let i=0; i<temperatures.length; i++) {
        const currentTemp = temperatures[i];
        while(stack.length > 0 && currentTemp > stack[stack.length-1][0]) {
            const[, idx] = stack.pop();
            res[idx] = i - idx;
        }
        stack.push([currentTemp, i]);
    }
    return res
};