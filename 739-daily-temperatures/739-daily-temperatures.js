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
    
    const len = temperatures.length;
    
    const stack = [];
    const ans = new Array(len).fill(0);
    for(let i = 0; i < len; i++) {
        if(i == 0) stack.push([temperatures[i], i]);
        else {
            while(stack.length && stack.at(-1)[0] < temperatures[i]) {
                const prevIdx = stack.pop()[1];
                ans[prevIdx] = i - prevIdx; 
            }
            stack.push([temperatures[i], i]);
        }
    }
    return ans;
};